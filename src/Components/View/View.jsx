import React from 'react';
import { useEffect , useState , useContext } from 'react';
import { collection, getDocs,query,where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './View.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';
function View() {

  const [userDetails , setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const navigate = useNavigate()
  useEffect(() =>
  {
    if(postDetails== null){
      navigate('/')
    }
    const {userId} = postDetails
    const filter = query(collection(db,'users'),where('id','==',userId))
    getDocs(filter).then((snapshot)=>{
      snapshot.forEach((doc)=>{
        setUserDetails(doc.data())
      })
    })
  },[postDetails,db])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.image}
          alt="image"
        />
      </div>
      {
        userDetails && <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
      }
    </div>
  );
}
export default View;
