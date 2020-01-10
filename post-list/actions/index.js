import _ from 'lodash';
import JSONPlaceholder from '../JSONPlaceholder';

//another way to fetch all data without multiple requests

export const fetchPostsandUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
   
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));


    // chain all instead of userIds
    //_.chain(getState().posts)
    //  .map('userId')
    //  .uniq()
    //  .forEach(id=> dispatch(fetchUser(id)))
    //  .value 
};


export const fetchPosts = () => async dispatch =>  {
    const response = await JSONPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data })
};


export const fetchUser = id => async dispatch => {
    const response = await JSONPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data })
};



// way to make only 1 request per user using _.memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await JSONPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data })
// });