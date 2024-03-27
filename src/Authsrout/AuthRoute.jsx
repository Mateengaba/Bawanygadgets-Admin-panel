import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
    const userEmail = localStorage.getItem("email");
    const uid = localStorage.getItem("uid");

    return (
        <div>
            {userEmail !== "Bawanygadgets.umair@gmail.com" && !uid ? (
                <Outlet />
            ) : (
                <Navigate to={"/body"} />
            )}
        </div>
    );
}

export default AuthRoute;




// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// const AuthRoute = () => {
//     const userEmail = localStorage.getItem("email");

//     return (
//         !localStorage.getItem("uid") ? (
//             <Outlet />
//         ) : (
//             <Navigate to={"/body"} />
//         )
//     )
// }

// export default AuthRoute