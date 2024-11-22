import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavUser from "../Components/NavUser";
import LandingPage from "../Layout/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage></LandingPage>,
    // children:[{
    //   path:'',
    //   element
    // }]
  },
]);
export default router