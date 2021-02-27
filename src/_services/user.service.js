import { authHeader, config } from '../_helpers';

export const userService = {
    login,
    logout,
    register
};


function login(login, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password })
    };

    return fetch(`${config.apiUrl}/User/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}
function register(name, surname, email, login, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, login, password })
    };

    return fetch(`${config.apiUrl}/User/register`, requestOptions)
        .then(handleResponse)
        .then(register => {
            return register;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            // const error = (data && data.message) || response.statusText;
            const error = data;
            return Promise.reject(error);
        }

        return data;
    });
}