import { authHeader, config } from '../_helpers';

export const ratedService = {
    getRatedMovies,
};


function getRatedMovies(UserID) {
    const requestOptions = {
        method: 'GET',
        headers: {...{ 'Content-Type': 'application/json' }, ...authHeader()},
    };
    return fetch(`${config.apiUrl}/Rate/user_id?UserID=${UserID}`, requestOptions).then(handleResponse);

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