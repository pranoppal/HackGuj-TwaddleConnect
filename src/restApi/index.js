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
    const user = payload.user;
    let url;
    if (user.userType === 'teacher') {
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
            '&organisation_name=gujarat public school&classes=' +
            payload.classes;
    }
    // educator_register?uuid=adsfadfe53adf6da&first_name=Fahad&last_name=Karim&
    // email_id=handsome.fahad@gmail.com&dp=some_link&organisation_name=gujarat public school
    // &standard=VII&interests_list=[art,chess]
    else if (user.userType === 'student') {
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
            '&organisation_name=gujarat public school&standard=' +
            payload.standard +
            '&interests_list=[' +
            payload.interests_list +
            ']';
    }
    console.log('url', url);
    const res = await axios.post(url, {timeout: 1000});
    return res.data;
}

export async function createPost(payload) {
    const url =
        baseUrl +
        'api/create_post?created_by=student&student_id=' +
        payload.userId +
        '&content_text=' +
        payload.contentText +
        '&classification=resource/article&tags=[art, drawing, sketching]&privacy_scope=[school, students]';
    console.log('url', url);
    const res = await axios.post(url, {timeout: 1000});
    return res.data;
}

export async function getPosts(payload) {
    
    const url = baseUrl + 'api/posts?by='+ payload.postBy +'&student_id=' + payload.userId;
    console.log('url', url);
    const res = await axios.get(url, {timeout: 1000});
    return res.data;
}

export async function getInterests() {
    const url = baseUrl + 'api/interests';
    const res = await axios.get(url, {timeout: 1000});
    return res.data;
}

export async function getUser(payload) {
    let url;
    if (payload.userType === 'student')
        url = baseUrl + 'api/student/' + payload.userId;
    else if (payload.userType === 'teacher')
        url = baseUrl + 'api/educator/' + payload.userId;
    else
        url = baseUrl + 'api/student/' + payload.userId;
    console.log('url',url);
    const res = await axios.get(url, {timeout: 1000});
    return res.data;
}

export async function clapPost(payload){
    const url = baseUrl + 'api/clap_for_post?pid=' + payload.pid + '&by='+ payload.userType + '&student_id=' + payload.userId;
    const res = await axios.post(url, {timeout: 1000});
    return res.data;
}


export async function delClap(payload){
    const url = baseUrl + 'api/clap_for_post?pid=' + payload.pid + '&by='+ payload.userType + '&student_id=' + payload.userId;
    const res = await axios.delete(url, {timeout: 1000});
    return res.data;
}