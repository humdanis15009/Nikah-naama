import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tnc from "./components/Tnc";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Privacy from "./components/Privacy";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Verify from "./components/Verify";
import UserCardList from "./components/UserCardList";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Tnc",
      element: (
        <>
          <Navbar />
          <Tnc />
          <Bottom />
        </>
      ),
    },
    {
      path: "/AboutUs",
      element: (
        <>
          <Navbar />
          <AboutUs />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Faq",
      element: (
        <>
          <Navbar />
          <Faq />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Privacy",
      element: (
        <>
          <Navbar />
          <Privacy />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Form1",
      element: (
        <>
          <Navbar />
          <Form1 />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Form2",
      element: (
        <>
          <Navbar />
          <Form2 />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Form3",
      element: (
        <>
          <Navbar />
          <Form3 />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Verify",
      element: (
        <>
          <Navbar />
          <Verify />
          <Bottom />
        </>
      ),
    },
    {
      path: "/UserCardList",
      element: (
        <>
          <Navbar />
          <UserCardList />
          <Bottom />
        </>
      ),
    },
    {
      path: "/Form4",
      element: (
        <>
          <Navbar />
          <Form4 />
          <Bottom />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
