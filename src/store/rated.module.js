import { ratedService } from '../_services';
import { router } from '../router/index';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const rated = {
    namespaced: true,
    state: initialState,
    actions: {
        getRatedMovies({ dispatch, commit }) {

            return ratedService.getRatedMovies(initialState.user.user.id)
                .then(
                    rated => {
                       return rated;
                    },
                    error => {
                        // window.location.reload(true);
                    }
                );
        },
      
      
    },
    mutations: {
     
    }
}