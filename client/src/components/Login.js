import { useState } from "react"

function Login({ onLogin }) {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState(null)

    function loginChange(e) {
        const { name, value } = e.target

        setLoginForm({ ...loginForm, [name]: value })
    }

    function onLoginSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(loginForm)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        onLogin(user)
                        setErrors(null)
                    })
                } else {
                    res.json().then(errors => setErrors(errors))
                }
            })
            setLoginForm({
                username: "",
                password: ""
            })
    }

    return (
        <div>
            Login:
            {errors ?
                <h4><strong>{errors.errors}</strong></h4>
                :
                null
            }
            <form onSubmit={onLoginSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={loginForm.username}
                    onChange={loginChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={loginChange}
                />
                <button className="button-56" role="button">Submit</button>
            </form>
        </div>
    )

}

export default Login