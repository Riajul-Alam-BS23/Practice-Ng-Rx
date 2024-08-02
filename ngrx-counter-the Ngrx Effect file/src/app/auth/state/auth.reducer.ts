import { createReducer, on } from '@ngrx/store';
// import { login, logout } from './auth.actions'; // assuming auth.actions file exists
import { initialState } from './auth.state'; // assuming auth.state file exists

const _authReducer=createReducer(initialState,
    on(login, (state, action) => {
        return {
            isLoggedIn: true,
            user: action.user
        };
    }),
    on(logout, (state) => {
        return initialState;
    })
)

export function AuthReducer(state,action){
    return _authReducer(state,action);
}