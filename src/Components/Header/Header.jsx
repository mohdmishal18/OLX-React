import React  from 'react';
import { useContext } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/FirebaseContext';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate , Link } from 'react-router-dom';

function Header() {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () =>
  {
    try
    {
      signOut(auth).then(() => {
        navigate('/login')
      }).catch((error) => {
        console.log(error)
      });
    }
    catch(error)
    {
      console.log("error when log out " + error.message)
    }
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : <Link className='login_link' to='/login'>Login</Link>}</span>
          <hr />
        </div>

          {user && <span className='logout_link' onClick={handleLogout}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
