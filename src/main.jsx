import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import Error from './components/Error';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      
      {
        path: "/browse",
        element: <BrowseBooks></BrowseBooks>,
      },
      {
        path: "/genres/:genres",
        element: <BrowseBooks></BrowseBooks>,
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/add-book",
        element: <AddBook></AddBook>,
      },
    ],  
      errorElement: <Error></Error>,
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
);
