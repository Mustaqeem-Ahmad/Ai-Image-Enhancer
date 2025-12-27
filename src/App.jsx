import React from 'react'
import Home from './components/Home'


const App = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800'>AI Image Enhancer </h1>
        <p className='text-xl text-gray-500'> Transform your images with the power of AI</p>
      </div>
      <Home/>
      <div className='mt-4 text-sm text-gray-400'>
         
          © 2025 AI Image Enhancer. All rights reserved.
        
        </div>    
    </div>
  )
}

export default App