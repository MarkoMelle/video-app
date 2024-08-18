import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MovieProvider } from "./context/movie-context";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter basename="/video-app">
        <RouterProvider router={router} />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
