import { Link } from "react-router-dom"
import CreateAccount from "./CreateAccount"
import Login from "./Login"

function Landing({onLogin, user}) {
    return (
        <div>
            {user?
        <h1>Welcome Back {user.username}</h1>
        :
        <h1>Hello</h1>
        }
            <Link to='/feed'>To Feed</Link> 
            <Login onLogin={onLogin}/>
            <CreateAccount onLogin={onLogin} />
        </div>
    )
}

export default Landing