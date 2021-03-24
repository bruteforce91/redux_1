import { FETCH_ALL_HEROES_REQUEST,FETCH_ALL_HEROES_SUCCESS,FETCH_ALL_HEROES_ERROR} from "./constants"


const defaultState={
    heroes:[],
    error:null,
    loading:false
}

export default (state = defaultState,action)=>{
    switch(action.type){
        case FETCH_ALL_HEROES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_ALL_HEROES_SUCCESS:
            return{
                ...state,
                loading:false,
                heroes:action.payload
            }
        case FETCH_ALL_HEROES_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    }

}