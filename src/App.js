import './App.css';
import axios from 'axios';

import Nav from './components/Nav/nav';
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/about/About';
import Detail from './components/Detail/Details';
import Form from './components/form/form';
import { Navigate } from 'react-router-dom';
import Cards from './components/cards/Cards';

// const URL_BASE = "";
// const API_KEY = "";

function App () {
   const [ characters, setCharacters ] = useState([])
 
   const [ access, setAccess ] = useState(false)
 
   const username = 'facucastle4@gmail.com'
   const password = 'facucastle'
 
   const location = useLocation()
   const navigate = useNavigate()
 
   const login = (userData) => {
     if(userData.username === username && userData.password === password  ) {
       setAccess(true)
       navigate('/home')
     }
   }
 
   useEffect(()=> {
     !access && Navigate('/')
   }, [access])
 
 
   function onSearch(id) {
     axios(`https://rickandmortyapi.com/api/character/${id}`)
       .then(({ data }) => {
           const characterFind = characters.find((char) => char.id === Number(id))
           console.log('metodo find',characterFind);
 
           if(characterFind) {
             console.log('entre al if, ya esta en la lista', characterFind);
             alert('Already in the list!')
           }
           
           else if(data.id !== undefined) {
             setCharacters((character) => [...character, data]);
           }
         })
 
         .catch((error)=> {
           console.log('soy el catch', error);
           alert('Intenta con otro ID')
         })
}
function onClose(id) {
  setCharacters(
    characters.filter((character) => {
      return character.id !== Number(id)
    })
  )
 }
   
   return (
      <div className='App'> 
            {
            location.pathname !== '/' &&  
            <Nav onSearch={onSearch}/>   
             }
               

        <Routes>
        <Route path='/' element= { <form login= {login} /> }/>
         <Route path='/' element={Form}/>
         <Route path='/home' element={<Cards characters={characters}
          onClose={onClose} />}/>
         <Route path='/about'element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>

        </Routes>
         
        
      </div>
   )};


export default App;
