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
import Ques3 from './components/Ques3';
import Ques4 from './components/Ques4';
import Ques5 from './components/Ques5';
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
      {
        path:"start",
        element:<Start/>
      },
      {
        path:"/ques",
        element:<Ques/>,
        children:[
          {
            path:"/ques/ques1",
            element:<Ques1/>,
          },
          {
            path:"/ques/ques2",
            element:<Ques2/>,
          },
          {
            path:"/ques/ques3",
            element:<Ques3/>,
          },
          {
            path:"/ques/ques4",
            element:<Ques4/>,
          },
          {
            path:"/ques/ques5",
            element:<Ques5/>,
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
