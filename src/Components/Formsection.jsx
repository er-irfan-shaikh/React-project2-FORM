import React, { useState } from "react";
import service from "../assets/service.svg";
import "./Formsection.css";

const Formsection = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    text: "",
  });

 


 
  function submitform(e){
    e.preventDefault()
  console.log(formData);
    
  }
  function handler(e) {
    const { value, name } = e.target;
    formData[name]=value
    setFormData((pre)=>{
     return {...pre}
    })
  }

  return (
    <div className="form" onSubmit={(e)=>{
      submitform(e)
    }}>
      <div className="left">
        <div className="contacts">
          <div className="fluid">
            <button className="but">VIA SUPPORT CHAT</button>
            <button className="but">VIA CALL</button>
          </div>

          <div className="mail">
            <button>VIA EMAIL FORM</button>
          </div>
        </div>
        <form className="fromfield">
          <fieldset>
            <legend>Name</legend>{" "}
            <input
              type="text"
              value={formData.name}
              name="Name"
              onChange={(e) => handler(e)}
            />
          </fieldset>

          <fieldset>
            <legend>E-mail</legend>{" "}
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={(e) => handler(e)}
            />
          </fieldset>
          <fieldset>
            <legend>Text</legend>
            <textarea
              
              id=""
              value={formData.text}
              name="text"
              onChange={(e) => handler(e)}
            ></textarea>
          </fieldset>

          <button>Submit</button>
        </form>
      </div>
      <div className="right">
        <img src={service} alt="" />
      </div>
    </div>
  );
};

export default Formsection;
