import Card from "../card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { order, filter } from "../../redux/actions";


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch()


const hanleOrder = (event)=>{
    dispatch(order(event.target.value))
}
const hanleFilter = (event)=>{
    dispatch(filter(event.target.value))
}



    return(
        <>
        <h2>My Favorites♥</h2>
        
        <div>
            <select onChange={hanleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Ascendente</option>
                </select>
        <select onChange={hanleFilter}>
            {
                ['Male', 'Female', 'Genderlles', 'unknown'].map((gender, index) => {
                    return (
                        <option 
                        key={index}
                        value = {gender}> {gender}</option>
                    )
                })

            }</select>

        </div>
            {
            myFavorites.length === 0 ?(
                <h3 className={style.tittle}></h3>
            ):
            (
                <Card characters = { myFavorites}/>
            )
           }
        <Card characters ={myFavorites}/>
        </>
    )
}
const mapStateToProps =(state)=>{
        return{
            myFavorites: state.myFavorites
        }
}
export default connect(mapStateToProps, null)(Favorites)