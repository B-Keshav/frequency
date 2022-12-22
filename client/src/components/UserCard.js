import { Link } from "react-router-dom"

function UserCard({ aUser }) {
    const { id, profile_pic, username, songs } = aUser

    const renderSongs = songs.map(song => {
        return (
            <div>
                Temp
            </div>
        )
    })

    return (
        <div>
            <img src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg" alt={profile_pic} />
            <h1>{username}</h1>
            <Link to={`/profile/${id}`}>View Profile</Link>
            <div>
                {renderSongs.length === 0 ?
                    <>
                        <h4>This will only show the most recent song</h4>
                        <h4>{"No song to show yet :("}</h4>
                    </>
                    :
                    renderSongs

                }
            </div>
        </div>
    )
}

export default UserCard