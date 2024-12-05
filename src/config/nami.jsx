
import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCpgZmZdnveCayqFeQttYqEEwrFc9aQwnE";
  console.log(apiKey);
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    if(!prompt) {
        throw new Error("Prompt is required to generate a response.")
    }
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
    
    try {
        const result = await chatSession.sendMessage(prompt);
        const response = result.response
        console.log(result.response.text());
        return response.text();
    } catch (error) {
        console.log("error",error);
        
    }
    
  }
  
  export default run;