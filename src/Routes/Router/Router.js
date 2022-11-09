import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Review from "../../Pages/Review/Review";
import Service from "../../Pages/Services/Service";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Team from "../../Pages/Team/Team";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/service',
                element:<Service></Service>,
            },

            {
                path:'/team',
                element:<Team></Team>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)
                
            },
            
        ]
    },
])




export default router;