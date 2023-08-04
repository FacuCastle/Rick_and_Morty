import style from './nav.module.css';
import SearchBar from "../searchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const { onSearch , setAccess} =props;

  const{ pathname} = useLocation()

  const hanleLogOut = ()=>{
    setAccess(false)
  };


  return (
    <div className={style.nav}>
      <img className={style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' width='20%' alt='' />
     
    {
      pathname.includes("/home") &&
       <SearchBar onSearch={onSearch} />
    }
      <Link to="/home" className={style.Link}>Home</Link>
      <Link to="/about" className={style.Link}>About</Link>
      <Link to='/favorites' className={style.Link}>Favorites</Link>
    </div>
  );
};

export default Nav;






