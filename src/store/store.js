import { createStore } from "redux";

export const SET_FAVS = 'SET_FAVS';

const reducers = (state = '', action) => {
    switch (action.type) {

        case SET_FAVS:
            return {
                ...state,
                favs: action.favs,
            }

        default:
            return state;
    }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

