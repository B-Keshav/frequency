import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Feed from './components/Feed';
import { useState, useEffect } from 'react';
import Mixer from './components/Mixer';

function App() {
  const [user, setUser] = useState(null)

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
  }

  function onLogin(user) {
    setUser(user)
  }

  return (
    <div className="App">
      <Router>
        {user ?
          <button onClick={handleLogOut}>LogOut</button>
          :
          null
        }
        <Link to='/'>HELLO</Link><br />
        <Link to='/mixer'>Mixer</Link>
        <Routes>
          <Route path='/feed' element={<Feed user={user}/>} />
          <Route path='/mixer' element={<Mixer />} />
          <Route path='/' element={<Landing onLogin={onLogin} user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
