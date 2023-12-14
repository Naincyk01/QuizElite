import { Outlet,RouterProvider,createBrowserRouter } from 'react-router-dom';
import Login from "../src/components/Login"
import './App.css';
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
        path:"/",
        element:<Login/>
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
