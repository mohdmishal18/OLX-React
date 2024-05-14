import React, { Fragment,useContext,useState } from 'react';
import { ref , uploadBytes , getDownloadURL } from 'firebase/storage';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/FirebaseContext';
import { db , auth , storage } from '../../firebase/config';

const Create = () => {

  const {user} = useContext(AuthContext)

  const [name , setName] = useState('')
  const [category , setCategory] = useState('')
  const [price , setPrice] = useState('')
  const [image , setImage] = useState('')

  const handleSubmit = () =>
  {
    
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
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
