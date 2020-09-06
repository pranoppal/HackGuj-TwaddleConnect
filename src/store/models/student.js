import {thunk, action, persist} from 'easy-peasy';
import {createPost as createPostAPI,getPosts as getPostsAPI} from '../../restApi';

export default persist({
    posts: {},

    getPosts: thunk((actions, payload) => {
        // posts:{};
        return getPostsAPI(payload).then((details) => {
            console.log("data response", details)
            // details.posts = details.posts.slice(1, -1);
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
