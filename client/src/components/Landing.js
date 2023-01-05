import { Link } from "react-router-dom"
import CreateAccount from "./CreateAccount"
import Login from "./Login"
import { useState } from "react"

function Landing({ onLogin, user }) {
    const [createClick, setCreateClick] = useState(false)

    function onCreateClick() {
        setCreateClick(!createClick)
    }

    return (
        <div>
            {user ?
                <div className="welcome_message">
                    <h1>Welcome Back</h1>
                    <h1>{user.username}</h1>
                </div>
                :
                <h1>Hello</h1>
            }
            {user ?
                null
                :
                <>
                    <div className="feed_message">
                        <h1>Would you Just Like to Browse</h1>
                    </div>
                    <button className="button-56"><Link to='/feed'>To Feed</Link></button>
                    <br />
                    <br />
                </>
            }
            {user ?
                null
                :
                <>
                    {createClick ?
                        <div className="create_account">
                            <button className="button-56" onClick={onCreateClick}>Login</button>
                            <br />
                            <CreateAccount onLogin={onLogin} />
                        </div>
                        :
                        <div className="login_form">
                            <button className="button-56" onClick={onCreateClick}>Create Account</button>
                            <br />
                            <Login onLogin={onLogin} />
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Landing