import { createContext, useState } from "react";
import run from "../config/nami";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("")

    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        },10*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false);
    }
    const onSent = async (prompt) => {
            setResultData("")
            setLoading(true)
            setShowResult(true)
            let response;
            if(prompt !== undefined) {
                response = await run(prompt)
                setRecentPrompt(prompt)
            }
            else {
                try {
                    setPrevPrompt(prev => [...prev,input])
                    setRecentPrompt(input)
                    response = await run(input)
                    console.log("Response:", response); // Log or handle the response here
                } catch (error) {
                    console.error("Error while sending prompt:", error);
                }
            }
            let responseArray =  response.split("**");
                    let newResponse = '';
                    for(let i = 0; i < responseArray.length; i++) {
                        if(i === 1 || i%2 !== 1) {
                            newResponse += responseArray[i];
                        }
                        else {
                            newResponse += "<b>"+responseArray[i]+"</b>";
                        }
                        // console.log({ i, currentSegment: responseArray[i], newResponse });
                    }
                    // setResultData(newResponse)
                    let newResponse2 = newResponse.split("*").join("<br/>","<br/>")
                    // setResultData(newResponse2)
                    let newResponseArray = newResponse2.split(" ");
                    for(let i = 0; i < newResponseArray.length; i++){
                        const nextWord = newResponseArray[i];
                        delayPara(i,nextWord+" ")
                    }
                    
                    setLoading(false)
                    setInput("")
        
    };

    // Use useEffect to call onSent only once on mount
    // useEffect(() => {
    //     onSent("What is React.js?");
    // }, []); // Empty dependency array ensures it runs only once

    const contextValue = {
        onSent, // Expose the onSent function to child components
        prevPrompt,
        setPrevPrompt,
        setInput,
        input,
        loading,
        setRecentPrompt,
        recentPrompt,
        showResult,
        resultData,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
