import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app, database} from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {collection, addDoc, getDocs, onSnapshot} from 'firebase/firestore';
import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const HandleClick = () =>{ 
        navigate("/")
    };

    
    let auth = getAuth();
    const user = auth.currentUser;

  //state
  const [data, setData] = useState({});
  const mycollection = collection(database, 'users');

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value }
    setData({ ...data, ...newInput });
  }

  // const handleSubmit = (event) => {
  //   createUserWithEmailAndPassword(auth, data.email, data.password).then((response) => {
  //     console.log(response.user);
  //   })
  //     .catch((err) => { alert(err.message) })
  // }
  
  const handleSubmit =()=>{
    createUserWithEmailAndPassword(auth, data.email, data.password).then((response) => {
      console.log(response.user);
    })
    addDoc(mycollection, {id: user.uid, email:data.email, password:data.password})
    .then((response)=>{
      alert("New user added successfully");
    })
    .catch((err)=>{alert(err.message)});
  }

  onSnapshot(mycollection, (data)=>{
    console.log(data.docs.map((item)=>{
      return item.data();
    }));
  })

  
  return (
//     <div classname="Login">
//       <input name="email" type="email" placeholder="Enter email" onChange={(event) => handleInput(event)} />
//       <input name="password" type="password" placeholder="Enter password" onChange={(event) => handleInput(event)} />
//       <button onClick={event =>{
//         handleSubmit();
//         HandleClick(); }}>Register</button>

//     </div>
//   );

// };
<div className="register">

<form className="signin-from">
  <div className="unique">
    <h1>REGISTER</h1>
    <div className="input-box">
      <input type="text" placeholder='Username' required/>
      <FaUser className="icon" />
    </div>
    <div className="input-box">
      <input type="password" placeholder='Password' required/>
      <FaLock className="icon" />
    </div>

    <div className="button-1">
      <button onClick={event =>{
        handleSubmit();
        HandleClick(); }}>Register</button>
    </div>

  </div>
  
  
</form>

</div>

);

};


export default Register;