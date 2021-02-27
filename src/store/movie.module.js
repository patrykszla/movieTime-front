import { movieService } from '../_services';
import { router } from '../router/index';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const movie = {
    namespaced: true,
    state: initialState,
    actions: {
        getUserMovies({ dispatch, commit }) {

            return movieService.getUserMovies(initialState.user.user.id)
                .then(
                    movies => {
                        return movies;
                    },
                    error => {
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        createMovie({ dispatch, commit }, { Title,
            Description,
            Year,
            BigPhoto,
            MainPhoto,
            CreatorsEnd,
            GenresEnd }) {
            return movieService.createMovie(initialState.user.user.id, Title,
                Description,
                Year,
                BigPhoto,
                MainPhoto,
                CreatorsEnd,
                GenresEnd).then(resp => {
                //    router.push("YourAccount");
                },
                    error => {

                        dispatch('alert/error', error.message, { root: true });
                        return error.data;
                    })
        }

    },
    mutations: {

    }
}