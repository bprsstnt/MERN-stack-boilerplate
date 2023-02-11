import axios from 'axios';

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data);

    return {
        type: 'user/login',
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data);

    return {
        type: 'user/register',
        payload: request
    }
}

export function authUser() {
    const request = axios.get('/api/users/auth')
    .then(response => response.data);

    return {
        type: 'user/auth',
        payload: request
    }
}