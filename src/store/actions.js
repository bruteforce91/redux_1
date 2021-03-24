import axios from "axios";

import { FETCH_ALL_HEROES_ERROR , FETCH_ALL_HEROES_REQUEST,FETCH_ALL_HEROES_SUCCESS} from './constants';

export const fetchAllHeroes=()=>{
    return async(dispatch)=>{
        dispatch({type: FETCH_ALL_HEROES_REQUEST})
        try{
            const {data:heroes}= await axios.get('http://localhost:3000/heroes')
            dispatch({type: FETCH_ALL_HEROES_SUCCESS,payload:heroes})
        }
        catch(e){
            dispatch({type: FETCH_ALL_HEROES_ERROR,payload:e.message})
        }
    }
}