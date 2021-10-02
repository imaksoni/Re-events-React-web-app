import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, LISTEN_TO_EVENT_CHAT, UPDATE_EVENT } from "./eventConstants";
import {asyncActionError, asyncActionFinish, asyncActionStart} from '../../app/async/asyncReducer'
import { fetchSanpleData } from "../../app/api/mockApi";

export function loadEvents(){
    return async function(dispatch){
        dispatch(asyncActionStart())
        try{
            const events= await fetchSanpleData();
            dispatch({type: FETCH_EVENT, payload: events});
            dispatch(asyncActionFinish());
        }
        catch(error){
            dispatch(asyncActionError(error));
        }
    }
}

export function listenToEvents(events){
    return {
        type:FETCH_EVENT,
        payload: events
    }
}

export function createEvent(event){
    return{
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event){
    return{
        type: UPDATE_EVENT,
        payload: event
    }
}

export function deleteEvent(eventId){
    return{
        type: DELETE_EVENT,
        payload: eventId
    }
}

export function listenToEventChat(comments){
    return{
        type: LISTEN_TO_EVENT_CHAT,
        payload: comments
    }
}