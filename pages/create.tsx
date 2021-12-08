import React,{useState} from 'react'
import {GetStaticProps} from 'next'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Image from '../components/image/image'
import style from '../styles/create.module.css'
interface Props {

}

interface imageUrlType {
  id:number,
  imageUrl:string,
  file:any
}
interface comp {
  id:number,
  type:'image'|'paragraph',
  imageId?:number,
  imgUrl?:string
  content?:string
}
//click to add component for blog
const Create = (props: Props) => {
    const [pics,setPics] = useState<Array<imageUrlType>>([])
    const [components,setComponents] = useState<Array<comp>>([])
    const [imageId,setImageId] = useState<Array<number>>([])
    const [uploaded,setUpload] = useState<Array<boolean>>([])
    const axios = require('axios').default;
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    const save= async ()=>{

      var newComponents:comp[] = []
      for(let i = 0; i < pics.length; i++){ 
        for(let j = 0; i < components.length; i++){
          if(pics[i].id === components[j].imageId){
            const form = new FormData()
            console.log(pics[i].file)
            form.append("upload_preset","wenj7b34")
            form.append("tags", "browser_upload")
            form.append("file",pics[i].file)
            const response = await axios.post("https://api.cloudinary.com/v1_1/duubnxp15/image/upload",form,config).then(response=>{         
            newComponents.push({...components[j],imgUrl:response.data.secure_url})
            console.log(newComponents)
          })
          
          }
          else {
            console.log("out")
            newComponents.push(components[j])
          }
        }
      }
      setComponents(newComponents)
      const response = await axios.post(`http://localhost:5000/archives`,components).then(response=>{
        console.log(response.data)
      })
    }
    const handleChange = (id,e)=>{
      components[id].content = e.target.value
    }
    const ImageCallback = (id:number,imageUrl:string,file:any) =>{
      setPics([...pics,{id,imageUrl,file}])
      let newArr = [...uploaded]
      newArr[id] = true
      setUpload(newArr)
    }
    
    const createImageArea = ():void => {
      let currentComponentId = components.length>0?components[components.length-1].id+1:0
      let currentImageId = imageId.length>0?imageId[imageId.length-1]+1:0
      let newImage:comp = {id:currentComponentId, type:'image',imageId:currentImageId}
      setComponents([...components,newImage])
      setImageId([...imageId,currentImageId])
      setUpload([...uploaded,false])
    }
    const createParagraphArea = ():void =>{
      let thisId = components.length>0?components[components.length-1].id+1:0
      let newPara:comp = {id:thisId, type:'paragraph'}
      setComponents([...components,newPara])
    }

    return (
        <div className={style.createContainer}>
          <div className={style.prompt}>
            <p>Add content</p>
          </div>
          <div className={style.edit}>
            {components.map((item)=>{
                if(item.type==='image'){
                  return(
                  <div key={item.id as any}>
                  <Image id={item.imageId as number} callback={ImageCallback}/>
                  {uploaded[item.imageId as number]==true?<img src={pics[item.imageId as number].imageUrl} alt="upload" />:<></>}
                  </div>)
                }
                else if(item.type==='paragraph'){
                  return(<div key={item.id}> <input type="textarea" placeholder='Edit' onChange={(e)=> handleChange(item.id,e)}/></div>)
                }
              })}
          </div>
            <div className={style.add}>
                <button className={style.button} onClick={createImageArea}>Add image</button>
                <button className={style.button} onClick={createParagraphArea}>Add Paragraph</button>
            </div>
            <div ><button id='save' onClick={save}>SAVE</button></div>
        </div>
    )
}

Create.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default Create