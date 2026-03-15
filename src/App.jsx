import { useEffect, useState } from 'react'
import './App.css'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import { setLocalStorage , getLocalStorage } from './utils/LocalStorage'



function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    if(!localStorage.getItem("employees")){
        setLocalStorage()
    }
    const loggedUser = localStorage.getItem("loggedInUser")
    if(loggedUser){
        setUser(JSON.parse(loggedUser))
  }

}, [])

  const loginHandler = (email, password) => {

    const {employees, admin} = getLocalStorage()
    const adminUser = admin.find((a) => a.email === email && a.password === password)
    if(adminUser){
        const loggedUser = { role:"admin", data:adminUser }
        setUser(loggedUser)
        localStorage.setItem("loggedInUser", JSON.stringify(loggedUser))
        return
    }
    const employeeUser = employees.find((e) => e.email === email && e.password === password)
    if(employeeUser){
        const loggedUser = { role:"employee", data:employeeUser }
        setUser(loggedUser)
        localStorage.setItem("loggedInUser", JSON.stringify(loggedUser))
        return
    }

    alert("Invalid credentials")
  }
  const logoutHandler = () => {
  localStorage.removeItem("loggedInUser")
  setUser(null)
  }




 return (
    <div className={(user?.role == "admin" || user?.role == "employee")? "h-screen w-screen" : 'h-screen w-screen flex justify-center items-center'}>

      {!user && <Login loginHandler={loginHandler}/>}

      {user?.role === "admin" && <AdminDashboard logoutHandler = {logoutHandler}/>}

      {user?.role === "employee" && <EmployeeDashboard logoutHandler = {logoutHandler}/>}

    </div>
  )
}

export default App
