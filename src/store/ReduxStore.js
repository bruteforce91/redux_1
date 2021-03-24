import {createStore, applyMiddleware,compose} from "redux"
import thunk from 'redux-thunk'
import HeroReducer from "./HeroReducer"


const defaultStore={
    heroes:[],
    error:null,
    loading:false
}

//createStore vuole come parametri: reducer, store, middleware(nel caso di chiamate async)
export const store=createStore(HeroReducer,defaultStore,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))