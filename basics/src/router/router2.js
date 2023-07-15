import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from '../pages'
import UserLayout from '../layout/user-layout'
import { Apples, Bananas1, Orange, ReactRouterDom, RouterParams } from '../components'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/fruits" element={<UserLayout />}>
                <Route index element={<Apples />} />
                <Route path="apples" element={<Apples />} />
                <Route path="bananas1" element={<Bananas1 />} />
                <Route path="orange" element={<Orange />} />
            </Route>

            <Route path="/router-params">
                <Route index element={<ReactRouterDom />} />
                <Route path=":userId" element={<RouterParams />} />
            </Route>
        </>
    )
//     [
//     {
//         path: '/',
//         element: <HomePage />,
//     },
//     {
//         path: '/fruits',
//         element: <UserLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Apples />,
//             },
//             {
//                 path: 'apples',
//                 element: <Apples />,
//             },
//             {
//                 path: 'bananas1',
//                 element: <Bananas1 />,
//             },
//             {
//                 path: 'orange',
//                 element: <Orange />,
//             }
//         ]
//     }
// ]
)

const AppRouter2 = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter2