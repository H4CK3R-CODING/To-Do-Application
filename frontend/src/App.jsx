import './App.css'
// import Team from './components/Team'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewPage from './pages/ViewPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/view",
      element: <ViewPage/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
      {/* <Team/> */}
    </>
  )
}

export default App
