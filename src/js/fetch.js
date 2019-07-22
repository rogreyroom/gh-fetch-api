const url = 'https://api.github.com';
const user = 'rogreyroom';
const getRepos = `/users/${user}/repos`;

const fetchURL = `${url}${getRepos}`;
const myRepos = [];

console.log(fetchURL);

fetch(fetchURL, {method: 'get'})
  .then(resp => {
    return resp.json();
  })
  .then(repos => {
    for (const repo of repos) {
      let {name, html_url} = repo;
      myRepos.push({
        name,
        html_url,
      });
    }
  })
  .catch(err => {
    console.log(err);
  });
