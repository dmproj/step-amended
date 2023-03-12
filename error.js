const json = '{"age":30}'

try {
  let user = JSON.parse(json)
  if (!user.user) {
    throw new Error("error !!!!")
  }
  console.log(user.name)
} catch (error) {
  console.log("ERRR: " + error)
}

//////////

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://**')
  .catch(alert); // Error: 404