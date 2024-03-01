
import './App.css'
import GithubState from "./context/github/GithubState.jsx";
import AlertState from "./context/alert/AlertState.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Alert from "./components/layout/alert.jsx";
import Home from "./components/pages/home.jsx";
import User from "./components/users/user.jsx";
import NotFound from "./components/pages/notFound.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/user/:username",
      element: <User />
    }
  ]);

  return (
    <GithubState>
        <AlertState>
            <div className="App">
                <div className="container">
                    <RouterProvider router={router}>
                        <Alert />
                    </RouterProvider>
                </div>
            </div>
        </AlertState>
    </GithubState>
  )
}

export default App
