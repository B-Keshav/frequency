import { useState } from "react"

function CreateAccount({ onLogin }) {
    const [createForm, setCreateForm] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        bio: "",
        profile_pic: ""
    })
    const [errors, setErrors] = useState(null)

    function createChange(e) {
        const { name, value } = e.target

        setCreateForm({ ...createForm, [name]: value })
    }

    function createSubmit(e) {
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createForm)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        onLogin(data)
                        setErrors(null)
                    })
                }
                else {
                    res.json().then(errors => setErrors(errors))
                }
            })
    }

    let renderErrors
    if(errors){
        renderErrors = errors.errors.map(error => {
            return <li key={error}>{error}</li>
        })
    }

    return (
        <div>
            Create an Account:
            <form onSubmit={createSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={createForm.username}
                    onChange={createChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={createForm.password}
                    onChange={createChange}
                    />
                <input
                    type='password'
                    name='password_confirmation'
                    placeholder="Re-Enter Password"
                    value={createForm.password_confirmation}
                    onChange={createChange}
                    />
                <input
                    type='email'
                    name='email'
                    placeholder="Email"
                    value={createForm.email}
                    onChange={createChange}
                />
                <input
                    type='text'
                    name='bio'
                    placeholder="Bio"
                    value={createForm.bio}
                    onChange={createChange}
                />
                <input
                    type='text'
                    name='profile_pic'
                    placeholder="Profile Picture"
                    value={createForm.profile_pic}
                    onChange={createChange}
                />
                <input
                    type='submit'
                />
            {errors ?
                <ul>
                    {renderErrors}
                </ul>
                :
                null
            }
            </form>
        </div>
    )
}

export default CreateAccount