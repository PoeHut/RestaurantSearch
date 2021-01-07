import axios  from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mKabMnFgjbW0L0DdYbj7x1FGPLLKIkxowJ5Xp5TFb_460eiMjKWvx_7302im-UWE__k6sz7uBcmUmz3eQEFpZq80wfscvSwvdc6pgyAJl2XtXgR_NgX5mV219s3RX3Yx'
    }
})