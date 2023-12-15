import { Outlet,RouterProvider,createBrowserRouter } from 'react-router-dom';
import Login from "../src/components/Login"
import './App.css';
import Signin from './components/Signin';
const AppLayout = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Outlet/>
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"signIn",
        element:<Signin/>
      },
    ]
  }
])
const App = () => {
  return (
      <RouterProvider router ={appRouter}/>
  )
}
export default App;
