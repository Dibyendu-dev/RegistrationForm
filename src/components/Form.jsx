import React, { useEffect, useState } from "react";

const Form = () => {

    const data = {name: "",email: "",password: ""}
    const [inputData ,setInputData] = useState(data)
    const [flag ,setFlag] = useState(false)
    useEffect(()=>{

    },[flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]: e.target.value})
        // console.log(inputData)
    }

    function handleSubmit(e){
        e.preventDefault()
         
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }

  return (

    <>
        <pre>{(flag)? <h2>Hello {inputData.name}, You've Registerd Succesfully</h2> : ""}</pre>
      <form onSubmit={handleSubmit} className="container">
        <div className="header">
            <h1>Registration-Form</h1>
        </div>
        <div className="container">
            <input type="text" placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}/>
            <input type="text" placeholder="Enter your email" name="email" value={inputData.email} onChange={handleData}/>
            <input type="text" placeholder="Enter your password" name="password" value={inputData.password} onChange={handleData}/>
            <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
