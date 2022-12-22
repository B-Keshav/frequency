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
                <img alt={profile_pic} src="https://media-exp1.licdn.com/dms/image/D5603AQFiHlAk9BZh4A/profile-displayphoto-shrink_200_200/0/1666631819223?e=1675296000&v=beta&t=oA4XxlqVqR-c4k2LTIKnjUuhvLgdpGsD8cuVscOEp4o" />
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