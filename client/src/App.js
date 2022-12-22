import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './components/Landing';
import Feed from './components/Feed';
import { useState, useEffect } from 'react';
import Mixer from './components/Mixer';
import ProfilePage from './components/ProfilePage';
import OthersProfile from './components/OthersProfile';

function App() {
  const [user, setUser] = useState(null)

  let navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) {
          r.json().then(user => setUser(user))
        }
      })
  }, [])

  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setUser(null)
      }
    })
    navigate('/')
  }

  function onLogin(user) {
    setUser(user)
    navigate('/myprofile')
  }

  return (
    <div className="App">
      {user ?
        <>
          <button onClick={handleLogOut}>LogOut</button>
          <br />
          <Link to='/myprofile'>Profile</Link>
          <br />
          <Link to='/mixer'>Mixer</Link>
          <br />
          <Link to='/feed'>Feed</Link>
          <br />
        </>
        :
        null
      }
      <Link to='/'>Home</Link><br />
      <Routes>
        <Route path='/feed' element={<Feed user={user} />} />
        <Route path='/mixer' element={<Mixer />} />
        <Route path='/myprofile' element={<ProfilePage user={user} />} />
        <Route path='/profile/:id' element={<OthersProfile user={user}/>} />
        <Route path='/' element={<Landing onLogin={onLogin} user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
