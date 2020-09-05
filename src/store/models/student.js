import {thunk, action, persist} from 'easy-peasy';
import {createPost} from '../../restApi';

export default persist({
    
 
    createPost: thunk((actions, payload) => {
        return createPost(payload).then((details) => {
            return actions.updateDetails(details);
        }); 
    }),
    
    updateDetails: action((state, payload) => {
        
        return {
            ...state,
            ...payload,
        };
    }),
});
