import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import ViewProperty from "../ViewProperty/ViewProperty";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Signup from "../Auth/SignUp/Signup";
import Login from "../Auth/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import UpdateProfile from "../Auth/UpdateProfile/UpdateProfile";
import CustomerExperiences from "../Components/CustomerExperiences/CustomerExperiences";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/viewProperty/:id",
                loader: ()=> fetch('/Data.json'),
                element: <PrivateRoute>
                    <ViewProperty></ViewProperty>
                    </PrivateRoute> ,
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/UpdateProfile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                    </PrivateRoute>
            },
            {
                path:"/CustomerExperiences",
                element: <PrivateRoute>
                    <CustomerExperiences></CustomerExperiences>
                    </PrivateRoute>
            },
        ]
      },
])

export default Router;