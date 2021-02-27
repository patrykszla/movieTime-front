import { favouriteService } from '../_services';
import { router } from '../router/index';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const favourite = {
    namespaced: true,
    state: initialState,
    actions: {
        getFavouriteMovies({ dispatch, commit }) {
            return favouriteService.getFavouriteMovies(initialState.user.user.id)
                .then(
                    fav => {
                       return fav;
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