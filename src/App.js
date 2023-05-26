import "./App.css";
import EnrollmentScreen from "./components/enrollmentScreen";
import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import SecondNavbar from "./components/secondNavbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/refer",
        element: <EnrollmentScreen />,
    },
];

const router = createBrowserRouter(routes);

function App() {
    return (
        <>
            <Navbar></Navbar>
            <SecondNavbar />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
