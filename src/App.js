import { Outlet,RouterProvider,createBrowserRouter } from 'react-router-dom';
import Login from "../src/components/Login"
import './App.css';
import Signin from './components/Signin';
import Start from './components/Start';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import Ques from './components/Ques';
import Ques1 from './components/Ques1';
import Ques2 from './components/Ques2';
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
      {
        path:"start",
        element:<Start/>
      },
      {
        path:"ques",
        element:<Ques/>,
        children:[
          {
            path:"/ques",
            element:<Ques1/>,
          },
          {
            path:"/ques/ques2",
            element:<Ques2/>,
          }
        ]
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
