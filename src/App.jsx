import './App.css'
import AdminDashboard from './components/Dashboards/AdminDashboard'
// import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import Header from './others/Header'

function App() {

  return (
    <div className='h-screen w-screen'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <Header/>
      <AdminDashboard/>
    </div>
  )
}

export default App
