const reposURL = document.querySelector('.repos__title--js');
const reposList = document.querySelector('.repos__list--js');
const restUrl = 'https://api.github.com';
const user = 'rogreyroom';
const getRepos = `/users/${user}/repos`;
const fetchURL = `${restUrl}${getRepos}`;

fetch(fetchURL, {method: 'get'})
  .then(resp => {
    return resp.json();
  })
  .then(repos => {
    reposURL.innerHTML = fetchURL;
    for (const repo of repos) {
      let {name, html_url} = repo;
      let listItem = `
            <li class="repos__item">
                <a href="${html_url}" class="repos__link">
                ${name}
                </a>
            </li>`;
      reposList.insertAdjacentHTML('beforeend', listItem);
    }
  })
  .catch(err => {
    console.log(err);
  });
