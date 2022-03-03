export const startRotation = () => {
    return (dispatch) => {
        dispatch({
            type: 'rotate',
            payload: true
        })
    }
}

export const stopRotation = () => {
    return (dispatch) => {
        dispatch({
            type: 'rotate',
            payload: false
        })
    }
}