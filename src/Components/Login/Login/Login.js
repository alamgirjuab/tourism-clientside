import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // setUsers(result.user);
            })
        //.finally(()=>setIsLoading(false));
    }
    return (
        <div className="container mb-5">
            <h2 className="text-primary my-5">Please Login</h2>
            <div className="my-5">----------------------------------------------</div>
            <button onClick={handleGoogleLogin} className="btn btn-warning px-5 py-3 fw-bold">Google Sign In</button>
        </div>
    );
};

export default Login;