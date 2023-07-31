import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './components/CreateUser'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
