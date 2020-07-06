import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'


const saveToLocalStorage = userState => {
    try {
        const serialziedState = JSON.stringify(userState);
        localStorage.setItem('userState', serialziedState);
    } catch(e) {
        console.log(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('userState');
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch(e) {
        console.log(e)
        return undefined
    }
}

const userState = {
    isUserLogged: false,
    adminPermissions: false,
    userEmail: '' 
}

const userUpdate = (state = userState, action) => {
    switch (action.type) {
        case 'USER_LOGGED':
            return {
                ...state, isUserLogged: true
            }
        case 'USER_LOGGED_OUT':
            return {
                ...state, isUserLogged: false
            }
        case 'ADMIN_PERMISSIONS':
            return {
                ...state, adminPermissions: true
            }
        case 'USER_EMAIL':
            return {
                ...state, userEmail: action.email
            }
        default:
            return state
    }
}

const userEmail = item => ({type: 'USER_EMAIL', item})



const persistedState = loadFromLocalStorage();

const store = createStore(userUpdate, persistedState, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;