import { useEffect, useState } from "react"
import UserCard from "./UserCard"

function Feed({user}){
    const [allUsers, setAllUsers] = useState(null)

    useEffect(() => {
        fetch('/users')
        .then(res => {
            if(res.ok){
                res.json().then(data => setAllUsers(data))
            }
        })
    },[])
    
    if(!allUsers) return<img src="https://media2.giphy.com/media/KbTUp85em6hdmmgTfK/giphy.gif" alt="loading"/>

    let filterUsers
    if(user){
        filterUsers = allUsers.filter(aUser => {
            return user.username !== aUser.username
        })
    }else{
        filterUsers = allUsers
    }

    const renderUsers = filterUsers.map(aUser => {
        return <UserCard aUser={aUser} key={aUser.id}/>
    })

    return(
        <div className="feed">
            <h1>Feed</h1>
            {renderUsers}
        </div>
    )
}

export default Feed