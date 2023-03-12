import React from 'react'
import { useState } from 'react';


// https://api.sampleapis.com/wines/reds

export default function index() {
const [username,usernameSubmitted] = useState();
const [password, passwordSubmitted] = useState();
  const onClickHandler = async()=>{
   const res = await fetch('/api/registerUser',{
      method:'POST',body:{username:username,password:password}
    }).then(async(result)=>{
      return await result.json();
    }).catch((error)=>{
      console.log(error);
    })
    alert(res.status);
  }

  

  const updatename = (event)=>{
    usernameSubmitted(event.target.value);
  }
  const updatepassword = (event)=>{
    passwordSubmitted(event.target.value);
  }

  return (

    <div className='flex flex-col place-items-center'>
        <input className='w-1/2 p-2'placeholder='Enter username' onChange={updatename}></input>
        <input type='password'className='w-1/2 p-2'placeholder = 'Enter password'onChange={updatepassword}></input>
        <button onClick={onClickHandler}type='submit' className='bg-lime-400 p-2 '>Button</button>
    </div>
  )
}
