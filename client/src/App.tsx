
import './App.css'
import {useRoutes} from "react-router-dom"  
import HomePage from './pages/HomePage.tsx'
import UserPage from './layouts/UserPage.tsx'
import AuthPage from './pages/AuthPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'

function App() {
  const routes = useRoutes([
    {
      path:"/",
      element:<UserPage />,
      children:[
        {
          index:true,
          element:<HomePage />,
         
        },
        {
          path:"/login",
          element:<AuthPage/>
        },
        {
          path:"/register",
          element:<RegisterPage/>, 
        }
      ]
    }
])


  return <div className='p-0'>
    {routes}
  </div>

}

export default App
