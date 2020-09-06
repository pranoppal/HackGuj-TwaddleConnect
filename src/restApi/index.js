import axios from 'axios';

const baseUrl = 'http://twaddle-connect-api.herokuapp.com/';
export const getClubsAPI = async (payload) => {
    const res = await axios.get(url + 'clubs');
    return res.data;
};

export async function getEventsAPI() {
    const res = await axios.get('url' + 'events');
    return res.data;
}

export async function postInsertUserAPI(payload) {
    const user = payload;
    let url;
    if(user.userType === 'teacher'){
        url =
        baseUrl +
        'api/educator_register?uuid=' +
        user.uuid +
        '&first_name=' +
        user.firstName +
        '&last_name=' +
        user.lastName +
        '&email_id=' +
        user.email +
        '&dp=' +
        user.photo +
        '&organisation_name=kendriya vidyalaya&classes=[2,3,4]';
    }
    else if(user.userType === 'student'){
        url =
        baseUrl +
        'api/student_register?uuid=' +
        user.uuid +
        '&first_name=' +
        user.firstName +
        '&last_name=' +
        user.lastName +
        '&email_id=' +
        user.email +
        '&dp=' +
        user.photo +
        '&organisation_name=kendriya vidyalaya&standard=7';
    }
    console.log('url',url)
    const res = await axios.post(url, {timeout: 1000});
    return res.data;
}

export async function createPost(payload){
    const url = baseUrl + 'api/create_post?created_by=student&student_id='
    + payload.userId + '&content_text=' + payload.contentText + 
    '&classification=resource/article&tags=[art, drawing, sketching]&privacy_scope=[school, students]';
    console.log('url',url);
    const res = await axios.post(url, {timeout: 1000});
    return res.data;
}

export async function getPosts(payload){
    const url = baseUrl + 'api/posts?by=student&student_id=adfads56f456fa';
    const res = await axios.get(url, {timeout: 1000});
    return res.data;
}