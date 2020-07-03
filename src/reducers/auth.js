// const authReducersDefaultState = {
//     uid: null,
//     firstName: null,
//     lastName: null,
//     email: null,
//     password: null
// };

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};