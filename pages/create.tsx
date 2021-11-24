import React,{useState} from 'react'
import {GetStaticProps} from 'next'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Image from '../components/image/image'
interface Props {

}

interface imageUrlType {
  id:number,
  imageUrl:string,
  file:any
}
interface comp {
  id:number,
  type:'image'|'paragraph'|'code',
  imageId?:number
}
//click to add component for blog
const Create = (props: Props) => {
    const [pics,setPics] = useState<Array<imageUrlType>>([])
    const [components,setComponents] = useState<Array<comp>>([])
    const [imageId,setImageId] = useState<Array<number>>([])
    const [uploaded,setUpload] = useState<Array<boolean>>([])
    const save=async()=>{
      console.log(pics)
      console.log(components)
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
    const createCodeArea = ():void =>{
      let thisId = components.length>0?components[components.length-1].id+1:0
      let newCode:comp = {id:thisId, type:'code'}
      setComponents([...components,newCode])
    }

    return (
        <div id='createContainer'>
          <div id='edit'>
            {components.map((item)=>{
                if(item.type==='image'){
                  return(
                  <div key={item.id as any}>
                  <Image id={item.imageId as number} callback={ImageCallback}/>
                  {uploaded[item.imageId as number]==true?<img src={pics[item.imageId as number].imageUrl} alt="upload" />:<div>none</div>}
                  </div>)
                }
                else if(item.type==='paragraph'){
                  return(<div key={item.id}> <input type="textarea" placeholder='Edit'/></div>)
                }
                else if(item.type==='code'){
                  return(<div key={item.id}> <input type="textarea" placeholder='Edit'/></div>)
                }
              })}
              
          </div>
            <div className='extend'>
                <button className='button dark' onClick={createImageArea}>Add image</button>
                <button className='button dark' onClick={createParagraphArea}>Add Paragraph</button>
                <button className='button dark' onClick={createCodeArea}>Add Code</button>
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
export const getStaticProps: GetStaticProps = async () => { 
    var returnedPosts = null;
    const response = await fetch('http://localhost:5000/posts').then(response => response.json()).then(
        data => {
          if(data.hasOwnProperty("items")){
            if(Array.isArray(data.items)){
                returnedPosts = data.items;
            }
          }
          else{
              console.log("fail")
          }
        }
      ).catch(error => console.log(error.message));
    return {
      props: {returnedPosts}
  };
}
export default Create