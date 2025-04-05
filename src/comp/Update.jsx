import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const handleUpdate = (e)=>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name,email};
  fetch(`http://localhost:3200/user/${data._id}`,{
    method : "PUT",
    headers: {
        "content-type" : "application/json"
    },
    body : JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  }

  return (
    <div>
      ok bigg boss {data.name}
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={data?.name} name="name"/><br />
        <input type="email" defaultValue={data?.email} name="email"/><br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
