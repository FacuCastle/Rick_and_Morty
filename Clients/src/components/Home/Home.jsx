import React from "react";
import imageUser from '../../assest/fondo pagina.jpg'
import style from "./Home.module.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }


    render() {
        return (
            <>
            <h1 className={style.home-container}> Bienvenido al home! </h1>
            
            <img src={imageUser} alt="imagen de los Usuarios" className={style.imgage}/>
            </>
        )
    }
}

export default Home