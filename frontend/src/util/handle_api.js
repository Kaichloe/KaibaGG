// api call search via game handle

export const searchByHandle = (handle) => {
  return $.ajax({
    method: "GET",
    url: `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${handle}`
  })
}