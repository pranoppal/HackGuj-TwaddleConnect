import {thunk, action, persist} from 'easy-peasy';
import {createPost as createPostAPI,getPosts as getPostsAPI, clapPost as clapPostsAPI, delClap as delClapAPI} from '../../restApi';

export default persist({
    posts: {},

    delClap: thunk((actions, payload) => {
        return delClapAPI(payload).then((details) => {
            // return actions.updatePosts(details);
        });
    }),

    clapPost:thunk((actions, payload) => {
        return clapPostsAPI(payload).then((details) => {
            // return actions.updatePosts(details);
        });
    }),

    getPosts: thunk((actions, payload) => {
        return getPostsAPI(payload).then((details) => {
            return actions.updatePosts(details);
        });
    }),

    createPost: thunk((actions, payload) => {
        return createPostAPI(payload).then((details) => {
            return actions.updatePosts(details);
        }); 
    }),
  
    updatePosts: action((state, payload) => {
        return {
            ...state,
            posts: payload.posts,
        };
    }),
});
