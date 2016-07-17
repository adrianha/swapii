import axios from 'axios';
import { SWAPI_BASE_URL } from '../constants/config';

class RequestHelper {
  static request(payload) {
    const instance = axios.create({
      baseURL: SWAPI_BASE_URL,
      timeout: 20000
    });

    // Append '/' on url if url not end with '/' and doesnt have query strings
    if (!(payload.url.endsWith('/')) && (payload.url.indexOf('?') === -1)) {
      payload.url = `${payload.url}/`;
    }

    // Replace http with https
    if (payload.url.search('https') === -1) {
      payload.url.replace('http', 'https');
    }

    return instance.request(payload);
  }
}

export default RequestHelper;
