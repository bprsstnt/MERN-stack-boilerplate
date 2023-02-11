import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/userActions';
import { useNavigate } from 'react-router-dom';

const Auth = (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck() {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(authUser())
            .payload 
            .then(res => {
                console.debug(res);
                if(!res.isAuth) {
                    if(option) {
                        navigate("/login");
                    }
                } else {
                    if(adminRoute && !res.data.isAdmin) {
                        navigate("/");
                    } else {
                        if(!option) {
                            navigate("/");
                        }
                    }
                }
            })
        }, [dispatch, navigate])

        return <SpecificComponent />
    }

    return AuthenticationCheck;
}

export default Auth;