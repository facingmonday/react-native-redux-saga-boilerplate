import { buildUrl, getAuthToken } from './utils';

export const fetchMe = async (token) => {
  const url = buildUrl('/users/me');
  const body = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if(token) {
    body.authorization = token;
  }
  return fetch(url, {
    method: 'GET',
    headers: new Headers(body),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 401) {
        const e = new Error();
        e.code = 401;
        throw e;
      }
      return {};
    })
    ;
}
export function loginUser(credentials) {
  const url = buildUrl('/auth/local');
  console.log('url', url);
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 401) {
        const e = new Error();
        e.code = 401;
        throw e;
      }
      return {};
    })
    .catch((e) => console.log(e))
    ;
}