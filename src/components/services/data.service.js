import Global from '../helpers/global';
export const dataService = {

    getAllPostList
};

function getAllPostList() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(Global.BASE_API_PATH + `posts`, requestOptions)
        .then((res) => res.json())
        .then(res => {
            return res;
        });
}
