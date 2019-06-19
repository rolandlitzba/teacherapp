export function getClass() {
  return fetch('/class').then(res => res.json());
}

export function postClass(data) {
  return fetchCard('POST', data);
}

export function deleteClass(id) {
  return fetch(`/class/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id
    })
  }).then(res => res.json());
}

export function updateStudent(classes) {
  const { classname, classId, students } = classes;
  return fetch(`/class/${classId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      classname,
      classId,
      students
    })
  }).then(res => res.json());
}

function fetchCard(method, data, id = '') {
  return fetch('/class' + id, {
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
