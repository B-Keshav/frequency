import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SongCard from "./SongCard"

function OthersProfile({ user }) {
    const [userProfile, setUsersProfile] = useState(null)

    let { id } = useParams()

    useEffect(() => {
        fetch(`/user/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => setUsersProfile(data))
                } else {
                    res.json().then(data => console.log(data, "who knows what went wrong"))
                }
            })
    }, [id])

    if (!userProfile) return <h1>Loading...</h1>

    const { username, bio, profile_pic, songs } = userProfile

    const renderSongs = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })

    return (
        <>
            <Link to='/feed'>Feed</Link>
            <div>
                <h1>{username}</h1>
                <img src="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg" alt={profile_pic} />
                <h4>{bio}</h4>
            </div>
            <div>
                {renderSongs.length === 0 ?
                    <>
                        <h4>{"They dont have any songs yet :("}</h4>
                    </>
                    :
                    renderSongs

                }
            </div>
        </>
    )

}

export default OthersProfile