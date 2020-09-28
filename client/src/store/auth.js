import Cookies from 'js-cookie';

const SIGN_UP = "auth/SIGNUP";
const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER'


export const newUser = (user) => {
    return {
        type: SIGN_UP,
        user
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}


export const login = (username, password) => {
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ username, password })
        });
        res.data = await res.json(); // will contain user info { user: {id, username, ...}}
        if(res.ok){
            dispatch(setUser(res.data.user));
        }
        return res;
    }
};

export const signup = (username, email, password, password2) => {
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({username, email, password, password2}),
        });
        res.data = await res.json()
       
        dispatch(newUser(res.data.user));
        
        return res
    }
}

export const logout = () => {
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session', {
            method: "DELETE",
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
        })
        dispatch(removeUser());
        res.data = await res.json();
        return res;
    }
}

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER || SIGN_UP:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}