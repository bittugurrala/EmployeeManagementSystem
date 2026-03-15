import { useState } from "react"

export default function Login({loginHandler}){

    // useStates for managing the Emails and Passwords
    const[email, setEmail] = useState("")    
    const[password, setPassword] = useState("")


    // Function to handle submit function
    const submitHandler = (e) => {
        e.preventDefault()          //To prevent the default referesh
        loginHandler(email, password)
        // console.log(email)
        // console.log(password)
        setEmail("")             //To reset the value of the email feild to None
        setPassword("")       //To reset the value of the password feild to None

    }


    return(
        <form onSubmit={submitHandler} className="flex flex-col gap-5 w-full max-w-md rounded-xl border-2 px-10 py-20 border-emerald-400">
            <h3 className="text-center text-2xl">Login</h3>
            <input onChange = {(e) => {setEmail(e.target.value)}} value = {email} type = "email" required placeholder="Enter your email" className="border-2 p-2 rounded-xl outline-none" ></input>
            <input  onChange = {(e) => {setPassword(e.target.value)}} value = {password} type = "password" required placeholder="Enter your password" className="border-2 p-2 rounded-xl outline-none" ></input>
            <button className="bg-emerald-400 rounded-xl p-2 w-full ">Login</button>
        </form>
    )
}

//Onchange take the changed values to the Email values and passwords and update them
//use onSubmit for handling the form submit