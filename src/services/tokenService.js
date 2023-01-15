import { Buffer } from 'buffer'

function setToken(token) {
  localStorage.setItem('token', token)
  // console.log("SET TOKEN", token);
}

function getToken() {
  let token = localStorage.getItem('token')
  // console.log("TOKEN", token);
  if (token) {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64'))
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  // console.log("TOKEN", token);
  return token
    ? JSON.parse(Buffer.from(token.split('.')[1], 'base64')).user
    : null
}

function removeToken() {
  localStorage.removeItem('token')
  // console.log("remove token");
}

export { setToken, getToken, getUserFromToken, removeToken }
