import React, { useState , useContext } from 'react';
import { collection , addDoc } from 'firebase/firestore';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate , Link } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import { db ,auth  } from '../../firebase/config';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate()
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [password, setPassword] = useState('')

  const {app} = useContext(FirebaseContext)


  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    try {
      if (username.trim() == "") {
        toast.error("Not valid username");
      } else if (phone.length !== 10) {
        toast.error("Phone number should be 10 numbers");
      }
      else
      {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await updateProfile(user, { displayName: username });
        
        const userCollection = collection(db, 'users');
        await addDoc(userCollection, {
          id: user.uid,
          userName: username,
          phone: phone,
        });
    
      navigate("/login");
      }
      
    } catch (error) {
      toast.error(" Password should be at least 6 characters ");
      console.log(error);

    }
  }

  return (
    <div>
      <div className="signupParentDiv">
      <Toaster />
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link className='login_link' to='/login'>Login</Link>
      </div>
      
    </div>
  );
}
