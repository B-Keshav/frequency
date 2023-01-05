import { Link } from "react-router-dom"
import SongCard from "./SongCard"

function UserCard({ aUser }) {
    const { id, profile_pic, username, songs } = aUser

    const renderSongs = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })

    return (
        <>
            <div className="profile_card">
                <img src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg" alt={profile_pic} />
                <h1>{username}</h1>
                <Link to={`/profile/${id}`}>View Profile</Link>
                <div>
                    {renderSongs.length === 0 ?
                        <>
                            <h4>{"No song to show yet :("}</h4>
                        </>
                        :
                        renderSongs[renderSongs.length - 1]

                    }
                </div>
            </div>
            <br />
        </>
    )
}

export default UserCard