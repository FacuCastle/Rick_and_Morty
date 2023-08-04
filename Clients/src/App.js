import './App.css';
import axios from 'axios';
import Nav from './components/Nav/nav';
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/about/About';
import Detail from './components/Detail/Details';
import Form from './components/form/form';
import Cards from './components/cards/Cards';
import Favorite from './components/Favorites/favorite';

// const URL_BASE = "";
// const API_KEY = "";

function App () {
   const [ characters, setCharacters ] = useState([])
 
   const [ access, setAccess ] = useState(false)
 
  //  const email = 'facucastle4@gmail.com'
  //  const password = 'facu2022'
 
   const location = useLocation()
   const navigate = useNavigate()
 
   async function login(userData) {
    try {
      const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const query = `?email=${email}&password=${password}`
    const { data } = await axios(URL + query )
    const {access} =data;   
    setAccess(data);
       access && navigate('/home');

    } catch (error) {
      return {error: error.message}
    }
    }
   useEffect(()=> {
     !access && navigate('/')
   }, [access])
 
 
  
   async function onSearch(id) {
    try {
      const endpoint = 'http://localhost:3001/rickandmorty/character/' + id
      const { data } =  await axios(endpoint)

      
      const characterFind = characters.find((char) => char.id === Number(id))

          if(characterFind) {
            alert('Already in the list!')
          }
          
          else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
          }
        
    } 
    catch (error) {
      console.log('soy el catch', error.message);
      alert('Intenta con otro ID')
    }
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
        <Route path='/' element={<Form login={login} />} />
         <Route path='/home' element={
         
            <Cards characters={characters}
              onClose={onClose} />}/>
         
         <Route path='/about'element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorite/> }/>
        

        </Routes>
         
        
      </div>
   )};


export default App;
