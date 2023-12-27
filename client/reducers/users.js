export const usersReducer = (states = [],action)=> {
    switch(action.type){
        case 'FETCH_USER':
            return action.payload;
        case 'UPDATE_CURRENT_USER':
            return states.map((state)=> state.id === action.payload.id ? action.payload : state)
            default:
            return states;
    }
}