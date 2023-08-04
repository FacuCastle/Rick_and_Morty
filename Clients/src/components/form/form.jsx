import { useState } from "react"
import { validate } from "./validation"
import style from './from.module.css'
const Form = ({login}) => {
    const [ userData, setUserData ] = useState({
        username: '',
        password: ''
    })

    const [ errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (evento)=> {
        evento.preventDefault()
        login(userData)
    }
    const handleInputChange = (evento) => {
        const { name, value } = evento.target;
      
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value
        }));
      
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validate({ ...userData, [name]: value })[name]
        }));
      };

    return(
        <div>
            <form onSubmit={handleSubmit} 
            className={style.container}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="username" 
                        value={userData.username}
                        name="username"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                       errors.username ? (
                        <span>{errors.username}</span>
                       ) :
                       ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={userData.password}
                        name="password"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                        errors.password ? (
                            <span>{errors.password}</span>
                        ) :
                        ''
                    }
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
        
    )
}


export default Form