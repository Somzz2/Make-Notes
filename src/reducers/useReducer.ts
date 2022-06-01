import { useReducer } from "react"
import {v4 as uuid} from 'uuid';

export type NotesType = {
    id?: string;
    title: string;
    importance: string;
    text: string;
}

type ActionType = {
    type: string;
    payload: {
        id?: string
        title: string 
        importance: string;
        text: string;
    }
}

const initialState: NotesType[] = []

const reducer = (state: NotesType[], action: ActionType) => {
    switch(action.type) {
        case 'ADD':
            if(action.payload.title) {
            const newState = [...state]
            newState.push({
                id: uuid(),
                title: action.payload.title,
                importance: action.payload.importance,
                text: action.payload.text
            });
            return newState
        }
        break;
        case 'EDIT':
            let productexist = state.filter(i=> i.id === action.payload.id)
            if (productexist) {
                const newState = state.filter(i=> i.id !== action.payload.id)
                
                newState.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    importance: action.payload.importance,
                    text: action.payload.text
                });
                return newState
            }
        break;
        case 'DEL':
            if(action.payload.id) {
            let newState = [...state];
            newState = state.filter(i => i.id !== action.payload.id);
            return newState
            }      
        break;
    }
    return state;
}

export const useNotes = () => {
    return useReducer(reducer, initialState)
}
