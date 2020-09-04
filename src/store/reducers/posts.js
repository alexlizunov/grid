const initialState = [];

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return action.payload;
        default:
            return state
    }
}

export default postsReducer