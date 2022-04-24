import axios from "axios";

// Create an instance using the config defaults provided by the library
const instance = axios.create();

// request url
// probably just going to use the nextjs api, but that might change at some point
instance.defaults.baseURL = process.env.NEXT_PUBLIC_API;

// START HEADERS

// post
instance.defaults.headers.post['Content-Type'] = 'application/json';

// put
instance.defaults.headers.put['Content-Type'] = 'application/json';

// END HEADERS


export default instance;
