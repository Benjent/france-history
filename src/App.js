import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom"

import Dive from './views/Dive'
import Eras from './views/Eras'
import Home from './views/Home'
// import Map from './components/Map'
import Timeline from './components/Timeline'
import './App.scss'

// TODO pour chaque conflit/guerre, regarder les traités (déclencheurs et fins de guerre) et les ajouter aux events + regarder la liste des batailles
// TODO explorer la colonisation/décolonisation (annexations)

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="dive" element={<Dive />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <main>
                    {/* <Eras className="App__eras" />
                    <Timeline /> */}
                    <Dive />
                </main>
            </div>
        </Router>
    )
}

export default App;
