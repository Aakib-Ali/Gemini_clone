
import {
     GoogleGenerativeAI,
     HarmCategory,
     HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME= "gemini-1.0-pro";
const API_KEY = 'AIzaSyCHzlJZOrGjtDU1jiK7bQCoAhByhFox00c';

     async function runChat(prompt){
     const genAI= new GoogleGenerativeAI(API_KEY)
     const model = genAI.getGenerativeModel({model:MODEL_NAME});
     const generationConfig = {
          temperature: 1,
          topK: 1,
          topP: 0,
          maxOutputTokens:  8192,
     }
     const safetySettings =[
          {
               "category": "HARM_CATEGORY_HARASSMENT",
               "threshold": "BLOCK_MEDIUM_AND_ABOVE"
             },
             {
               "category": "HARM_CATEGORY_HATE_SPEECH",
               "threshold": "BLOCK_MEDIUM_AND_ABOVE"
             },
             {
               "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
               "threshold": "BLOCK_MEDIUM_AND_ABOVE"
             },
             {
               "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
               "threshold": "BLOCK_MEDIUM_AND_ABOVE"
             },
     ];
     const chat = model.startChat({
          generationConfig,
          safetySettings,
          history:[
          ],
     });
     const result = await chat.sendMessage(prompt);
     const response = result.response;
     return response.text(); 
}
export default runChat;