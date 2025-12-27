import axios from "axios";

const API_KEY = "wxducjh5omkicwbt4";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;


export const enhancedImageAPI = async (file) => {
  try {
      const taskId = await uploadeImage(file)
      console.log("Image uploaded successfully! Task ID:",taskId)

    const enhancedImageData = await PollEnhancedImage(taskId);
    console.log("Enhanced Image data", enhancedImageData);
      return enhancedImageData
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadeImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task Id not found");
  }

  return data.data.task_id;
};

const PollEnhancedImage= async (taskId, retries = 0)=>{
   const result = await fetchEnhancedImage(taskId)
   
   if(result.state === 4){
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`)

    if(retries >= MAXIMUM_RETRIES){
        throw new Error("Max retries reached. Please try again later.")
    }

    // wait 2 sec
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return PollEnhancedImage(taskId, retries + 1)
   }

   console.log("Enhanced Image URL:", result)
   return result
}

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        
        "X-API-KEY": API_KEY,
      },
    }
  );

  if(!data?.data){
    throw new Error('Failed to fetch enhanced image! Image not found.')
  }

  return data.data

};



// usey thoda der tak rokne k liye beacause image processing k pehle api call horahi status 4 araha