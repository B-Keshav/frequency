function UserCard({aUser}){
    const {bio, profile_pic, username} = aUser

    return(
        <div>
            <img src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg" alt={username}/>
            <h1>{username}</h1>
            <h1>{bio}</h1>
        </div>
    )
}

export default UserCard