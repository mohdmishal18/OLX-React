import React, { Fragment,useContext,useState } from 'react';
import { ref , uploadBytes , getDownloadURL } from 'firebase/storage';
import toast, { Toaster } from "react-hot-toast";
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/FirebaseContext';
import { db , auth , storage } from '../../firebase/config';
import { collection , addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { checkValidation } from "../../validations/productValidation";

const Create = () => {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [name , setName] = useState('')
  const [category , setCategory] = useState('')
  const [price , setPrice] = useState('')
  const [image , setImage] = useState('')

  const handleSubmit = async () =>
  {
    const messageValid = checkValidation(name, category, price);
    if (messageValid !== null) {
      toast.error(messageValid);
      return; // Stop execution if validation fails
    }
  
    if (!image) {
      toast.error("Please select an image before submitting");
      return; // Stop execution if image is not selected
    }

    try
    {
      const storageRef = ref(storage, `images/${image.name}`);
      const snapShot = await uploadBytes(storageRef , image)
      const imageUrl = await getDownloadURL(snapShot.ref)

      const userCollection = collection(db , 'products')
      const date = new Date()
      const Product = await addDoc(userCollection , 
        {
          name : name ,
          category : category,
          price : price,
          image : imageUrl,
          userId : user.uid,
          createdAt : date.toDateString()
        }
      )

      setName("");
      setPrice("");
      setImage(null);
      setCategory("");

      navigate("/")

    }
    catch(error)
    {
      console.log(error.message)
    }

  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        <Toaster />
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input type="file" onChange={(e) => 
              {
                setImage(e.target.files[0])
              }
            } />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
       
      </card>
    </Fragment>
  );
};

export default Create;
