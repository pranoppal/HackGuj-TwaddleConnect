import {thunk, action, persist} from 'easy-peasy';
import {postInsertUserAPI} from '../../restApi';

export default persist({
    user: {},
 
    insertUser: thunk((actions, payload) => {
        return postInsertUserAPI(payload).then((details) => {
            return actions.updateDetails(details);
        });
    }),

    updateDetails: action((state, payload) => {
        return {
            ...state,
            user: payload.data,
        };
    }),
    
});
