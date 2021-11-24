import React, {useState} from 'react'

interface imageUrlType {
    imageUrl:string,
    file:any
}

interface Props{
    readonly id:number,
    callback:any
}

const Image = ({id,callback}:Props) => {
    const [pic,setPic] = useState<imageUrlType>({imageUrl:"",file:null})
    const uploadHandler = (files)=>{
        let reader = new FileReader();
        let inFile = files[0];
        reader.onloadend = () => {
            setPic({...pic,
                imageUrl:reader.result as string,
                file:inFile})
            callback(id,reader.result as string,inFile)
        };
        reader.readAsDataURL(inFile);
        
        
    }
    return (
        <div className='image_placeholder'>
            <input type="file" onChange={(e)=>{
                e.preventDefault()
                uploadHandler(e.target.files)
            }}/>
        </div>
    )
}
export default Image