import { useState } from "react"
import { Link } from "react-router-dom"
import SongCard from "./SongCard"

function ProfilePage({ user }) {
    const [editClick, setEditClick] = useState(false)
    const [editForm, setEditForm] = useState({
        username: "",
        profile_pic: "",
        bio: ""
    })

    if (!user) return <img src="https://media2.giphy.com/media/KbTUp85em6hdmmgTfK/giphy.gif" alt="loading" />

    const { username, profile_pic, bio, songs } = user
    const renderSongs = songs.map(song => {
        return <SongCard key={song.title} song={song} />
    })

    function onEditClick() {
        setEditClick(!editClick)
    }

    return (
        <>
        <br />
            {editClick ?
                <div className="edit_form">
                    <br />
                    <button className="button-56" onClick={onEditClick}>Cancel</button>
                    <button className="button-56" >Save</button>
                    <br />
                    <form>
                        <input
                            placeholder={username}
                            type='text'
                            name='username'
                        />
                        <br />
                        <input
                            placeholder={profile_pic}
                            type='text'
                            name='profile_pic'
                        />
                        <br />
                        <input
                            placeholder={bio}
                            type='text'
                            name='bio'
                        />
                    </form>
                </div>
                :
                <div className="profile_card">
                    <button onClick={onEditClick}>✏️</button>
                    <h1>{username}</h1>
                    <br />
                    <img alt={profile_pic} src={profile_pic} />
                    <br />
                    <h4>Bio: </h4>
                    <p>{bio}</p>
                </div>
            }
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