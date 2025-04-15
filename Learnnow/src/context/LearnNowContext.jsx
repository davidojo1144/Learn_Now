import { createContext } from "react";

export const LearnNowContext = createContext()

const LearnNowContextProvider = (props)=> {









    const value = {
        
    }


    return (
        <LearnNowContext.Provider  value={value}>
            {props.children}
        </LearnNowContext.Provider>
    )



}

export default LearnNowContextProvider