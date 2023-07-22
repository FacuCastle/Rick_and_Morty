import { useState } from "react";
import style from './SearchBar.module.css'
import imageLogo from '../../assest/logo1.jpg'


export default function SearchBar({onSearch}) {
   const [id, setId ]= useState("");

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
   </div>
);
}
 //className={style.btn}
//placeholder=" Search..." className={style.border}  