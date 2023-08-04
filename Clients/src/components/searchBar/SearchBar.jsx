import { useState } from "react";
import style from './SearchBar.module.css'
import imageLogo from '../../assest/logo1.jpg'
import { useLocation } from "react-router-dom";

export default function SearchBar(props) {
   const { onSearch } = props
   let [id, setId ]= useState("");
   const { pathname } = useLocation()
   

   const handlerEnter = (event) => {
      if(event.key === 'Enter') {
         onSearch(id)
         setId('')
      }
      }   
   

   const handleChange = (event) =>{
      setId(event.target.value)

   }
   return (
      <div className={style.container}>
      <img 
         src={imageLogo} 
         alt="logo rick and morty" 
         className={style.logo} 
      />
      {
         
         !pathname.includes('/detail') &&
         !pathname.includes('/about') &&
         !pathname.includes('/favorites') &&

         <div className={style.containerInput}>
                  <input 
                  type='text' 
                  placeholder="Search character..." 
                  className={style.input}
                  onChange= {handleChange}
                  value={id}
                  onKeyUp={handlerEnter}
                  />
                  <button onClick={()=> onSearch(id) } className={style.btn}>Add</button>
               </div>

      }
     
   </div>
);
}
 //className={style.btn}
//placeholder=" Search..." className={style.border}  