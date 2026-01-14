import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element : <HomeLayout/>,
        children: [
            {
                path: "",
                element: <h2>Coming</h2>
            }
        ]
    }
])

export default router;