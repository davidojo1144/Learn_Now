import { createContext } from "react";

export const LearnNowContext = createContext()

const LearnNowContextProvider = (props)=> {



    const studentTrained = "1000+"
    const courses = "100+"
    const professionalTrainers = "50+"
    const email = "Learnnow@gmail.com"
    const phone = "+234 802 546 ****"








    const value = {
        studentTrained,
        courses,
        professionalTrainers,
        email,
        phone
        
    }


    return (
        <LearnNowContext.Provider  value={value}>
            {props.children}
        </LearnNowContext.Provider>
    )



}

export default LearnNowContextProvider