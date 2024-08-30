import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Landing = lazy(() => import('./Pages/Landing'))
const Auth = lazy(() => import('./Pages/Auth'))
const Dashboard = lazy(() => import('./Pages/Dashboard'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    ),
  },
  {
    path: '/auth',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
