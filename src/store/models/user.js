import {thunk, action, persist} from 'easy-peasy';
import {postInsertUserAPI,getInterests as getInterestsAPI,getUser as getUserAPI} from '../../restApi';

export default persist({
    user: {},
    interests : [],
 
    getUser: thunk((actions, payload) => {
        
        return getUserAPI(payload).then((details) => {
            console.log('payload', details)
            return actions.updateDetails(details);
        });
    }),

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
    
    getInterests: thunk((actions, payload) => {
        return getInterestsAPI(payload).then((details) => {
            return actions.updateInterest(details);
        });
    }),

    
    updateInterest: action((state, payload) => {
        return {
            ...state,
            interests: payload.data,
        };
    }),
    
});
