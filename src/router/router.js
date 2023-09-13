import Blogs from "../component/Blogs/Blogs";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";
import Default from "../layout/Default/Default";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : '/',
        element : <Default></Default>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;