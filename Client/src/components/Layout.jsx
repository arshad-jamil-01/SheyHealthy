// import React from 'react'

// const Layout = ({children}) => {
//   return (
    
//        <div className="main">

//     <div className="layout">

//         <div className="slidebar">
//             <h1>slidebar</h1>
//         </div>

//         <div className="content">
//             <div className="header">
//                 <h1>header</h1>
//             </div>

// <div className="body">
//     {children}
// </div>
//         </div>
//     </div>

//    </div>
//   )
// }

// export default Layout




//second
// import React from "react";
// import { FaHome, FaCalendarAlt, FaUserMd, FaUser, FaSignOutAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Layout = ({ children }) => {

// const menuIcon = [
//   {
//     name: "Home",
//     path: "/",
//     icon: <FaHome />
//   },
//   {
//     name: "Appointment",
//     path: "/appointment",
//     icon: <FaCalendarAlt />
//   },
//   {
//     name: "Apply Doctor",
//     path: "/applyDoctor",
//     icon: <FaUserMd />
//   },
//   {
//     name: "Profile",
//     path: "/profile",
//     icon: <FaUser />
//   },
//   {
//     name: "Logout",
//     path: "/logout",
//     icon: <FaSignOutAlt />
//   }
// ];


//   return (
//     <div className="main w-full h-screen bg-gray-100 p-3">

//       <div className="layout flex h-full ">

//         {/* Sidebar
//         <div className="slidebar hidden md:block w-64 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-gray-100 p-6 rounded">
//           <h1 className="text-xl font-semibold">slidebar</h1>
//         </div> */}

//           {/* Sidebar */}
//         <div className="hidden md:block w-64 bg-gray-900 text-white p-4 rounded">

//           <h1 className="text-4xl font-bold mb-6  text-left">SH</h1>

//           <div className="space-y-3">
//             {menuIcon.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className="flex items-center gap-3 p-3 rounded hover:bg-gray-700 transition"
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span className="text-sm font-medium">{item.name}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="content flex flex-col flex-1 px-2 ">

//           {/* Header */}
//           <div className="header h-16 bg-white shadow flex items-center  px-6 border-2 rounded ">
//             <h1 className="text-xl font-semibold">header</h1>
//           </div>

//           {/* Body */}
//           <div className="body flex-1 p-4 overflow-y-auto border-2 mt-1 ">
//             {children}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;




//third
import React, { useState } from "react";
import { FaHome, FaCalendarAlt, FaUserMd, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const menuIcon = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Appointment", path: "/appointment", icon: <FaCalendarAlt /> },
    { name: "Apply Doctor", path: "/applyDoctor", icon: <FaUserMd /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="main w-full h-screen bg-gray-100 p-3">
      <div className="layout flex h-full">
        
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white p-4 transition-transform transform
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 lg:translate-x-0 rounded z-50`}
        >
          {/* Close button for mobile/tablet */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h1 className="text-4xl font-bold">SH</h1>
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          {/* Logo for desktop */}
          <h1 className="text-4xl font-bold mb-6 hidden md:block">SH</h1>

          <div className="space-y-3">
            {menuIcon.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 p-3 rounded hover:bg-gray-700 transition"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-2 lg:ml-64">
          
          {/* Header */}
          <div className="header h-16 bg-white shadow flex  items-center justify-between px-6 border-2 rounded">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 "> <FaUser/> Profile</h1>

            {/* Menu button for mobile/tablet */}
            <button className="md:block lg:hidden" onClick={() => setSidebarOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="body flex-1 p-4 overflow-y-auto border-2 mt-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
