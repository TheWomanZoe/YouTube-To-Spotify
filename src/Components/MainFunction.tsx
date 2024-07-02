import './MainFunction.css'
import {useState} from "react";

function MainFunction() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(!loggedIn);
    }

    return (
        <div id = "main-function">
            {!loggedIn &&
                <div id = "not-logged-in">
                    <p>You're not currently logged in</p>
                    <button onClick = {handleLogin} id = "login-button">Log in to Spotify</button>
                </div>
            }
            {loggedIn &&
                <div id = "logged-in">

                </div>
            }
        </div>
    )
}

export default MainFunction;