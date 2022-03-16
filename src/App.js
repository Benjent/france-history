import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom"

import Eras from './views/Eras'
import Home from './views/Home'
// import Map from './components/Map'
import Timeline from './components/Timeline'
import './App.scss'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="eras" element={<Eras />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <main>
                    <Eras className="App__eras" />
                    <Timeline />
                </main>
            </div>
        </Router>
    )
}

export default App;
