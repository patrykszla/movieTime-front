import { userService } from '../_services';
import { router } from '../router/index';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { Login, Password }) {
            commit('loginRequest', { Login });

            userService.login(Login, Password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/youraccount');
                    },
                    error => {
                        commit('loginFailure', error.message);
                        dispatch('alert/error', error.message, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        },
        register({dispatch, commit}, {Name, Surname, Email, Login, Password}){
          return userService.register(Name, Surname, Email, Login, Password).then(
                register =>{
                    router.push("Registration");
                },
                error => {
                  
                    dispatch('alert/error', error.message, { root: true });
                    return error.data;
                }
            )
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}