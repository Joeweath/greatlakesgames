import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/games`;

async function getGameList() {
  const res = await fetch(`${BASE_URL}/browse?dates=1969-09-01,2007-09-30`);
  return await res.json();
}

async function getGameDetails(id) {
  const res = await fetch(`${BASE_URL}/browse?id=${id}`);
  return await res.json();
}

async function getGame(id) {
  // console.log("find one game function");
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return await res.json();
}

export { getGameList, getGameDetails, getGame };
