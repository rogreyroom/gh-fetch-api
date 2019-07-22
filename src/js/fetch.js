const reposURL = document.querySelector('.repos__title--js');
const reposList = document.querySelector('.repos__list--js');

const url = 'https://api.github.com';
const user = 'rogreyroom';
const getRepos = `/users/${user}/repos`;
const fetchURL = `${url}${getRepos}`;

console.log(fetchURL);

fetch(fetchURL, {method: 'get'})
  .then(resp => {
    return resp.json();
  })
  .then(repos => {
    const myRepos = [];
    for (const repo of repos) {
      let {name, html_url} = repo;
      myRepos.push({
        name,
        html_url,
      });
    }
    return myRepos;
  })
  .then(arr => {
    reposURL.innerHTML = fetchURL;
    arr.forEach(item => {
      let {name, url} = item;
      let listItem = `
            <li class="repos__item">
                <a href="${url}" class="repos__link">
                ${name}
                </a>
            </li>`;
      reposList.insertAdjacentHTML('beforeend', listItem);
    });
  })
  .catch(err => {
    console.log(err);
  });
