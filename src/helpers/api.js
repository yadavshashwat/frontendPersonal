import axios from 'axios';

// const baseurl = "http://localhost:8000/";
const baseurl = "http://careeranna.shashwatyadav.com/api/";
const imageUploadUrl = "http://careeranna.shashwatyadav.com/api/overall/upload_file/"


export function api(url, filters) {
    var bodyFormData = new FormData();
    console.log(filters)
    for (var i = 0; i < filters.length; i++) {
        bodyFormData.set(filters[i][0], filters[i][1]);
    }
    return axios({
        method: 'post',
        baseURL: {
            baseurl
        }.baseurl,
        url: url,
        data: bodyFormData,
        config: {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    }).then(response => response.data)
}

export function imageHandlerApi(formData) {

    return axios({
        method: 'post',
        url: imageUploadUrl,
        data: formData,
        config: {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    }).then(response => {
        return response.data
    })
}
