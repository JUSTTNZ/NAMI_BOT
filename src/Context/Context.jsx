import { createContext, useEffect } from "react";
import run from "../config/nami";

export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        try {
            const response = await run(prompt);
            console.log("Response:", response); // Log or handle the response here
        } catch (error) {
            console.error("Error while sending prompt:", error);
        }
    };

    // Use useEffect to call onSent only once on mount
    useEffect(() => {
        onSent("What is React.js?");
    }, []); // Empty dependency array ensures it runs only once

    const contextValue = {
        onSent, // Expose the onSent function to child components
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
