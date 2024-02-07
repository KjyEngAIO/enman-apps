import { environment, development, testing } from 'src/environments/environments';

export class baseUrl {
  _apiUrl() {
    return development.apiURL;
  }
}
