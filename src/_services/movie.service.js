import { authHeader, config } from '../_helpers';

export const movieService = {
    getUserMovies,
    createMovie
};


function getUserMovies(UserID) {
    const requestOptions = {
        method: 'GET',
        headers: { ...{ 'Content-Type': 'application/json' }, ...authHeader() },
    };
    return fetch(`${config.apiUrl}/Movie?UserID=${UserID}`, requestOptions).then(handleResponse);

}
function createMovie(userID, Title,
    Description,
    Year,
    BigPhoto,
    MainPhoto,
    CreatorsEnd,
    GenresEnd) {
    let Cretors = CreatorsEnd;
    let Genres = GenresEnd;
    const requestOptions = {
        method: 'POST',
        headers: { ...{ 'Content-Type': 'application/json' }, ...{'Access-Control-Allow-Origin': "*"}, ...authHeader() },
        body: JSON.stringify({
            userID, Title,
            Description,
            Year,
            BigPhoto,
            MainPhoto,
            Cretors,
            Genres
        }),
    };

    return fetch(`${config.apiUrl}/Movie`, requestOptions)
        .then(handleResponse)
        .then(movie => {
            return movie;
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