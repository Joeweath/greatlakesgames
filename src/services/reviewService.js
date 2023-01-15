import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`;

function create(review) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(review),
  }).then(res => res.json());
}

function update(id, data) {
  console.log(id, data);
  const formData = { text: data };
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(formData),
  }).then(res => res.json());
}

function createComment(comment, id) {
  return fetch(`${BASE_URL}/${id}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(comment),
  }).then(res => res.json());
}

async function getComments(id) {
  const res = await fetch(`${BASE_URL}/${id}/comments`, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return await res.json();
}

function deleteOne(id) {
  console.log("deleteOne review Service function");
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  }).then(res => res.json);
}

export { create, createComment, getComments, update, deleteOne };
