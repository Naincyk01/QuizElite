import { Outlet,RouterProvider,createBrowserRouter } from 'react-router-dom';
import Login from "../src/components/Login"
import './App.css';
import Signin from './components/Signin';
import { Provider } from 'react-redux';
import Store from './utils/Store';

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
      {
        path:"signIn",
        element:<Signin/>
      },
    ]
  }
])
const App = () => {
  return (
    <Provider store={Store}>
      <RouterProvider router ={appRouter}/>

    </Provider>
  
  )
}
export default App;
