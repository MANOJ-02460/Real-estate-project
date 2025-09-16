import React from 'react'

import { useState , useEffect } from 'react'




const Contact = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  useEffect(()=>{
     
    if(email){
        setMessage(`You are email is  ${email}`);
    }else{
        setMessage('');
    }

  },[email])

  const handleChange = (e)=>{

    setEmail(e.target.value );

  }
  const handleSubmit = (e)=>{

    e.preventDefault();

    if(email.includes("@")){
        alert(`Email submitted successfully: ${email}`)
        setEmail('');
    }else{
        alert('Please enter a valid email address')
    }
  };

  return (
    <div className='contact'>
        <h3>Get The Best Property</h3>
        <form className='contact-input' onSubmit={handleSubmit}>
            <input type='email' placeholder='example@gmail.com' value={email} onChange={handleChange}/>
            <button href='#' type=''>Continue</button>
        </form>
        <p style={{color: 'white'}}>{message}</p>
    </div>
  )
}

export default Contact