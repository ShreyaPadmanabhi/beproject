// import React, { useCallback, useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { app} from './firebaseConfig';

// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


// const Login = () => {
//   const navigate = useNavigate();
//   const HandleClick = () => {
//     navigate("/")
//   };



//   let auth = getAuth();
//   //state
//   const [data, setData] = useState({});
//   const handleInput = (event) => {
//     let newInput = { [event.target.name]: event.target.value }
//     setData({ ...data, ...newInput });
//   }

//   const handleSubmit = (event) => {
//     signInWithEmailAndPassword(auth, data.email, data.password).then((response) => {
//       console.log(response.user);
//       console.log("Login successful");
//     })
//       .catch((err) => { alert(err.message) })
//   }

//   useEffect(()=>{
//     onAuthStateChanged(auth, (data)=>{
//       if(data) {
//         console.log(data.email+ " logged in")
//       }else{
//         console.log("Login to use this webpage");
//       }
//     })
//   })

//   return (
//     <div classname="Login">
//       <input name="email" type="email" placeholder="Enter email" onChange={(event) => handleInput(event)} />
//       <input name="password" type="password" placeholder="Enter password" onChange={(event) => handleInput(event)} />
//       <button onClick={event =>{
//         handleSubmit();
//         HandleClick(); }}>Log In</button>

//       <h4>OR</h4>
//       <Link to="/Register"><button>Register</button></Link>

//     </div>
//   );
// }

// export default Login;

// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { app } from './firebaseConfig';
// // import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [data, setData] = useState({});

// //   const HandleClick = () => {
// //         navigate("/")
// //       };
// //   const handleInput = (event) => {
// //     let newInput = { [event.target.name]: event.target.value };
// //     setData({ ...data, ...newInput });
// //   };

// //   const handleSubmit = () => {
// //     const auth = getAuth();

// //     signInWithEmailAndPassword(auth, data.email, data.password)
// //       .then(() => {
// //         console.log('Login successful');
// //         navigate('/Itinerary'); // Redirect to Itinerary after successful login
// //       })
// //       .catch((err) => {
// //         alert(err.message);
// //       });
// //   };

// //   return (
// //     <div classname="Login">
// //       <input name="email" type="email" placeholder="Enter email" onChange={(event) => handleInput(event)} />
// //       <input name="password" type="password" placeholder="Enter password" onChange={(event) => handleInput(event)} />
// //       <button onClick={event => {
// //         handleSubmit();
// //         HandleClick();
// //       }}>Log In</button>

// //       <h4>OR</h4>
// //       <Link to="/Register"><button>Register</button></Link>

// //     </div>
// //   );
// // };

// // export default Login;


// // import { useState, useEffect } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// // import { collection, doc, setDoc } from 'firebase/firestore';
// // import { database } from './firebaseConfig';

// // const Login = () => {
// //     const navigate = useNavigate();
// //     const [data, setData] = useState({});

// //     const handleInput = (event) => {
// //         let newInput = { [event.target.name]: event.target.value };
// //         setData({ ...data, ...newInput });
// //     }

// //     const auth = getAuth();

// //     const handleSubmit = () => {
// //         signInWithEmailAndPassword(auth, data.email, data.password)
// //             .then((userCredential) => {
// //                 const user = userCredential.user;
// //                 console.log('Login successful', user);

// //                 // Store user data in Firestore (assuming 'users' is the collection name)
// //                 const usersCollection = collection(database, 'users');
// //                 const userDoc = doc(usersCollection, user.uid);
// //                 setDoc(userDoc, { email: user.email })
// //                     .then(() => {
// //                         console.log('User data stored in Firestore');
// //                     })
// //                     .catch((error) => {
// //                         console.error('Error storing user data: ', error);
// //                     });
// //             })
// //             .catch((err) => {
// //                 alert(err.message);
// //             });
// //     }

// //     useEffect(() => {
// //         onAuthStateChanged(auth, (user) => {
// //             if (user) {
// //                 console.log(user.email + " logged in");
// //                 navigate("/");
// //             } else {
// //                 console.log("Login to use this webpage");
// //             }
// //         });
// //     }, [auth, navigate]);

// //     return (
// //         <div className="Login">
// //             <input name="email" type="email" placeholder="Enter email" onChange={handleInput} />
// //             <input name="password" type="password" placeholder="Enter password" onChange={handleInput} />
// //             <button onClick={handleSubmit}>Log In</button>
// //             <h4>OR</h4>
// //             <Link to="/Register"><button>Register</button></Link>
// //         </div>
// //     );
// // }

// // export default Login;

import React, { useCallback, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { app} from './firebaseConfig';
import { FaUser, FaLock } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



const Login = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/")
  };



  let auth = getAuth();
  //state
  const [data, setData] = useState({});
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value }
    setData({ ...data, ...newInput });
  }

  const handleSubmit = (event) => {
    signInWithEmailAndPassword(auth, data.email, data.password).then((response) => {
      console.log(response.user);
      console.log("Login successful");
    })
      .catch((err) => { alert(err.message) })
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (data)=>{
      if(data) {
        console.log(data.email+ " logged in")
      }else{
        console.log("Login to use this webpage");
      }
    })
  })

  return (
    
    
    <div className="mainx">
    <div className="loginpg">
      <form action="">
        <div className="unique">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className="icon" />
          </div>

          <div className="button-1">
            <button onClick={event => {
              handleSubmit();
              HandleClick();
            } }>Login</button>
          </div>

          <h4> _________________OR_________________ </h4>

          <div className="button-2">
            <Link to="/Register"><button type="submit">Register</button></Link>
          </div>

        </div>
      </form>
    </div>
    </div>

    
  );
}

export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { app } from './firebaseConfig';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({});

//   const HandleClick = () => {
//         navigate("/")
//       };
//   const handleInput = (event) => {
//     let newInput = { [event.target.name]: event.target.value };
//     setData({ ...data, ...newInput });
//   };

//   const handleSubmit = () => {
//     const auth = getAuth();

//     signInWithEmailAndPassword(auth, data.email, data.password)
//       .then(() => {
//         console.log('Login successful');
//         navigate('/Itinerary'); // Redirect to Itinerary after successful login
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   return (
//     <div classname="Login">
//       <input name="email" type="email" placeholder="Enter email" onChange={(event) => handleInput(event)} />
//       <input name="password" type="password" placeholder="Enter password" onChange={(event) => handleInput(event)} />
//       <button onClick={event => {
//         handleSubmit();
//         HandleClick();
//       }}>Log In</button>

//       <h4>OR</h4>
//       <Link to="/Register"><button>Register</button></Link>

//     </div>
//   );
// };

// export default Login;


// import { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import { collection, doc, setDoc } from 'firebase/firestore';
// import { database } from './firebaseConfig';

// const Login = () => {
//     const navigate = useNavigate();
//     const [data, setData] = useState({});

//     const handleInput = (event) => {
//         let newInput = { [event.target.name]: event.target.value };
//         setData({ ...data, ...newInput });
//     }

//     const auth = getAuth();

//     const handleSubmit = () => {
//         signInWithEmailAndPassword(auth, data.email, data.password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log('Login successful', user);

//                 // Store user data in Firestore (assuming 'users' is the collection name)
//                 const usersCollection = collection(database, 'users');
//                 const userDoc = doc(usersCollection, user.uid);
//                 setDoc(userDoc, { email: user.email })
//                     .then(() => {
//                         console.log('User data stored in Firestore');
//                     })
//                     .catch((error) => {
//                         console.error('Error storing user data: ', error);
//                     });
//             })
//             .catch((err) => {
//                 alert(err.message);
//             });
//     }

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log(user.email + " logged in");
//                 navigate("/");
//             } else {
//                 console.log("Login to use this webpage");
//             }
//         });
//     }, [auth, navigate]);

//     return (
//         <div className="Login">
//             <input name="email" type="email" placeholder="Enter email" onChange={handleInput} />
//             <input name="password" type="password" placeholder="Enter password" onChange={handleInput} />
//             <button onClick={handleSubmit}>Log In</button>
//             <h4>OR</h4>
//             <Link to="/Register"><button>Register</button></Link>
//         </div>
//     );
// }

// export default Login;
