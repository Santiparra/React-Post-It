import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Posts, { loader as postsLoader } from "./routes/Posts"
import AddPost, {action as newPostAction} from './routes/AddPost'
import RootLayout from './routes/RootLayout'
import PostDetails, { loader as postsDetailsLoader } from './routes/PostDetails'

const router = createBrowserRouter([
  { path: "/", 
    element: <RootLayout />, 
    children: [
      { path: "/", 
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/add-post", element: <AddPost />, action: newPostAction },
          { path: "/:postId", element: <PostDetails />, loader: postsDetailsLoader },
        ],
      },      
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
