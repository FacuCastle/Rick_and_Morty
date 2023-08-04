import Card from "../card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { order, filter } from "../../redux/actions";
import style from './favorite.module.css'
import { useState } from "react";

const Favorites = ({myFavorites}) => {
    const [aux, setAux ] = useState(false)
    const dispatch = useDispatch()


const handleOrder = (event)=>{
    dispatch(order(event.target.value))
    setAux(!aux)
}
const handleFilter = (event)=>{
    dispatch(filter(event.target.value))
}



    return (

        <>
        <h2>My Favorites♥</h2>
        
         <div>
        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
             <option value="Descendente">Descendente</option> {/* Corregir el valor aquí */}
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>/</div>
            
        <div className={style.card}>
            {
            myFavorites?.map((character)=>{
                return (
                    <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    species={character.species}
                    origin={character.origin}
                    status ={character.status}
                    image={character.image}
                       
                />
                )}
                )}
                 </div>
            
             {
                myFavorites.length === 0 ? (
                    <h3 className={style.title}>Empty favorites list! </h3>
                ) :
                (
                    <Card characters = { myFavorites }/>
                )} 
                </>
            )
            }
            
            const mapStateToProps = (state) => {
        return {
            myFavorites: state.myFavorites
        }}
    
   
        
   
    
    export default connect(mapStateToProps, null)(Favorites)
    