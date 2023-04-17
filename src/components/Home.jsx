import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>This is home { user && <li>{user.displayName}</li>}</h2>
        </div>
    );
};

export default Home;