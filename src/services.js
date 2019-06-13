export function getCards() {
  return fetch('/classes').then(res => res.json());
}

export function postClass(data) {
  return fetchCard('POST', data);
}

export function patchCard(data, id) {
  return fetchCard('PATCH', data, id);
}

function fetchCard(method, data, id = '') {
  console.log('Data', data);

  return fetch('/class', {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(data) {
  try {
    return JSON.parse(localStorage.getItem(data));
  } catch (error) {
    console.log(error);
  }
}
