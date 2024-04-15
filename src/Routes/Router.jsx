import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import ViewProperty from "../ViewProperty/ViewProperty";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


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
                element: <ViewProperty></ViewProperty>,
                loader: ()=> fetch('/Data.json')
            }
        ]
      },
])

export default Router;