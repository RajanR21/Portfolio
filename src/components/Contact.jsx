import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const Contact = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [massage , setMassage] = useState("");

    const submitHandler = (e)=> {
        e.preventDefault();
       // console.log(e);
        console.log(name , email , massage);
        toast.success("Massage Sent Successfuly")
    }

  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
            <h2>Contact Me</h2>
                <input type='text' value={name} placeholder='Your Name' required 
                    onChange={(e)=> {
                        setName(e.target.value)
                    }}
                />
                <input type='email' value={email} placeholder='Your Email' required
                 
                 onChange={(e)=> {
                        setEmail(e.target.value)
                    }}
                 />
                <input type='text' value={massage} placeholder='Your Massage' required 
                    onChange={(e)=> {
                        setMassage(e.target.value)
                    }}
                />
                <button type="submit">Send</button>
            </form>
        </section>
    </div>
  )
}

export default Contact