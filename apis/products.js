import { buildUrl } from './utils';

export function fetchProducts() {
  const url = buildUrl(`/products`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
    mode: 'cors',
    cache: "no-cache",
    credentials: 'include',
  })
    .then((response) => {
      if (response.status === 200 || response.status === 304) {
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
export function fetchProduct(productId) {
  const url = buildUrl(`/products/${productId}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
    mode: 'cors',
    credentials: 'include',
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
export function createProduct(product) {
  const url = buildUrl('/product');
  return fetch(url, {
    method: 'POST',
    headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(product)
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
export function updateProduct(product) {
  const url = buildUrl(`/products/${product.id}`);
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(product)
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
export function deleteProduct(productId) {
  const url = buildUrl(`/products/${productId}`);
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
    mode: 'cors',
    credentials: 'include',
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
