import { Link } from "react-router-dom"
import SongCard from "./SongCard"

function ProfilePage({ user }) {

    if (!user) return <h1>Loading...</h1>

    const { username, profile_pic, bio, songs } = user
    const renderSongs = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })


    return (
        <>
            <div>
                <h1>{username}</h1>
                <button>Edit</button>
                <br />
                <img alt={profile_pic} src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg" />
                <button>Edit</button>
                <br />
                <h4>{bio}</h4>
                <button>Edit</button>
                <br />
            </div>
            <div>
                {renderSongs.length === 0 ?
                    <>
                        <h4>{"You dont have any songs yet :("}</h4>
                        <Link to='/mixer'>Wanna Make Some?</Link>
                    </>
                    :
                    renderSongs

                }
            </div>
        </>
    )
}

export default ProfilePage