import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(() => {})
        .catch(erro => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">Firebase auth</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
               { user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <> <span>{user.email}</span> <button onClick={handleLogout} className="btn btn-xs">Sign out</button> </>
                     : <Link to='/login'>Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Header;