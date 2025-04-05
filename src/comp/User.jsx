import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const LoadedUser = useLoaderData();
  const [user,setUser] = useState(LoadedUser);
  const handleClick  = (id) =>{
   fetch(`http://localhost:3200/user/${id}`,{
    method : 'DELETE'
    }
   )
   .then(res=>res.json())
   .then(data=> {console.log(data)
    if(data.deletedCount>0){
        alert("Deleted successfully")
        const remaining = user.filter(user => user._id !== id)
        setUser(remaining);
    }
   })
  }
  return (
    <div>
        
      {user.map((info) => (
        <p key={info._id}>
          {info.name} : {info.email}
          <Link to={`/user/${info._id}`}><button>Update</button></Link>
           <button onClick={() => handleClick(info._id)}>X</button>
        </p> 
      ))}
    </div>
  );
};

export default User;
