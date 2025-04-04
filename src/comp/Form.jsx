import React from "react";

const Form = () => {
    const handleForm = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user ={name,email}
        console.log(user);
        fetch("http://localhost:3200/user",
           { method: "post",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
           }
        )
        .then(res=>res.json())
        .then(data=> {
          console.log(data)
          if(data.insertedId){
            alert("success!!");
            form.reset();
          }
        })
    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name"/>
        <br />
        <input type="email" name="email"/>
        <br />
        <input type="submit" value="add user"/>
      </form>
    </div>
  );
};

export default Form;
