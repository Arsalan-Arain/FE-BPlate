const reducer = (state = true, action) => {
    if(action.type === 'rotate') {
        return action.payload;
    }
    else {
        return state; 
    }
}

export default reducer;