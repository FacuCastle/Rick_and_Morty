import style from './nav.module.css'
import SearchBar from "../searchBar/SearchBar";
import {Link} from "react-router-dom";


const Nav =({onSearch})=>{

    return(
        <Nav className={style.nav}> 
            <img className={style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' width='20%' alt=''/>
            <SearchBar onSearch ={onSearch}/>

            <Link to="/home"> Home </Link> 
            <button> Home </button>
            <Link to="/about"> About 
            <button> Home </button> </Link> 
            <Link to='/favorites'>Favorites
            <button> Home </button></Link> 
        </Nav>
    )
}

export default Nav;