import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhancedImageApi'

const Home = () => {

const [uploadImage, setUploadImage] = useState(null)
const [enhanced, setEnhanced] = useState(null)
const [loading, setLoading] = useState(false)

const uploadImageHandler = async (file) => { 

  setUploadImage(URL.createObjectURL(file))
  setLoading(true)

  try {

    const enhancedURL = await enhancedImageAPI(file)
    setEnhanced(enhancedURL.image)
    setLoading(false)
    
  } catch (error) {
    console.log(error)
    alert("Something went wrong")
  }
  
  // call the api to enhance the image

    
}

  return (
    <>
        <ImageUpload uploadImageHandler={uploadImageHandler} />
        <ImagePreview loading={loading} enhanced={enhanced} uploadImage={uploadImage} />
    </>
  )
}

export default Home