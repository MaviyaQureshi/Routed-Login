import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import VendorUsername from './components/Vendor/VendorUsername';
import VendorPassword from './components/Vendor/VendorPassword';
import VendorRegister from './components/Vendor/VendorRegister';
import VendorProfile from './components/Vendor/VendorProfile';
import VendorRecovery from './components/Vendor/VendorRecovery';
import VendorReset from './components/Vendor/VendorReset';
import ClientUsername from './components/Client/ClientUsername';
import ClientPassword from './components/Client/ClientPassword';
import ClientRegister from './components/Client/ClientRegister';
import ClientProfile from './components/Client/ClientProfile';
import ClientRecovery from './components/Client/ClientRecovery';
import ClientReset from './components/Client/ClientReset';
import OrganizerUsername from './components/Organizer/OrganizerUsername';
import OrganizerPassword from './components/Organizer/OrganizerPassword';
import OrganizerRegister from './components/Organizer/OrganizerRegister';
import OrganizerProfile from './components/Organizer/OrganizerProfile';
import OrganizerRecovery from './components/Organizer/OrganizerRecovery';
import OrganizerReset from './components/Organizer/OrganizerReset';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login'


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/vendorusername',
    element: <VendorUsername></VendorUsername>
  },
  {
    path: '/vendorregister',
    element: <VendorRegister></VendorRegister>
  },
  {
    path: '/vendorpassword',
    element: <ProtectRoute><VendorPassword /></ProtectRoute>
  },
  {
    path: '/vendorprofile',
    element: <AuthorizeUser><VendorProfile /></AuthorizeUser>
  },
  {
    path: '/vendorrecovery',
    element: <VendorRecovery></VendorRecovery>
  },
  {
    path: '/vendorreset',
    element: <VendorReset></VendorReset>
  },
  {
    path: '/clientusername',
    element: <ClientUsername></ClientUsername>
  },
  {
    path: '/clientregister',
    element: <ClientRegister></ClientRegister>
  },
  {
    path: '/clientpassword',
    element: <ProtectRoute><ClientPassword /></ProtectRoute>
  },
  {
    path: '/clientprofile',
    element: <AuthorizeUser><ClientProfile /></AuthorizeUser>
  },
  {
    path: '/clientrecovery',
    element: <ClientRecovery></ClientRecovery>
  },
  {
    path: '/clientreset',
    element: <ClientReset></ClientReset>
  },
  {
    path: '/organizerusername',
    element: <OrganizerUsername></OrganizerUsername>
  },
  {
    path: '/organizerregister',
    element: <OrganizerRegister></OrganizerRegister>
  },
  {
    path: '/organizerpassword',
    element: <ProtectRoute><OrganizerPassword /></ProtectRoute>
  },
  {
    path: '/organizerprofile',
    element: <AuthorizeUser><OrganizerProfile /></AuthorizeUser>
  },
  {
    path: '/organizerrecovery',
    element: <OrganizerRecovery></OrganizerRecovery>
  },
  {
    path: '/organizerreset',
    element: <OrganizerReset></OrganizerReset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}