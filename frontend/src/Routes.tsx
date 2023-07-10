import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Json from './pages/Json'
import Base64 from './pages/Base64'
import Differences from './pages/Differences'
import Todo from './pages/Todo'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/base64" element={<Base64 />} />
            <Route path="/json" element={<Json />} />
            <Route path="/differences" element={<Differences />} />
            <Route path="/todo" element={<Todo />} />
        </Switch>
    )
}

export default Routes