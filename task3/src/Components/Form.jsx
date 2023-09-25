import React,{ useState } from "react"


function Form(){
    //functions or code to be implemented for this component
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(`name: ${name}`); 
       console.log(`email:${email}`);
       console.log(`message: ${message}`);
    }

   
    return (
        <>
        <div  className="form">
            <header>
                <h1>REGISTRATION FORM</h1>
            </header>
            <form onSubmit={handleSubmit} className="formArea">
                <input type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)} />
                <input type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)} />
                <textarea type="text" placeholder="Enter text" onChange={(e)=> setMessage(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Form