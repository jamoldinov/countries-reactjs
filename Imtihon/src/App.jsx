import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout'
import Count from './pages/Count';
import Mode from './components/Mode';
import PageNotFound from './components/PageNotFound';
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route/>
        <Route index path='/' element ={<Mode/>} />
        <Route path="/country/:slug" element={<Count />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App