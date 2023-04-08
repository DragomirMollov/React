export const adsReducer = (state, action) => {
    switch (action.type) {
        case 'ADS_FETCH':
            // return Object.assign({}, action.payload);
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                            userName: action.userName,
                        }
                    }
                ],
            }
        default:
            return state;
    }
};