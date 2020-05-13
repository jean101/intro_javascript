const imagen = document.querySelector("img.imagen_fondo");
console.log(imagen);
const nombre_usuario = document.querySelector("h2.nombre_usuario");
const usuario = document.querySelector("p.usuario");


let informacionUsuario =  `
{
    "login": "jean101",
    "id": 59874919,
    "node_id": "MDQ6VXNlcjU5ODc0OTE5",
    "avatar_url": "https://avatars1.githubusercontent.com/u/59874919?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jean101",
    "html_url": "https://github.com/jean101",
    "followers_url": "https://api.github.com/users/jean101/followers",
    "following_url": "https://api.github.com/users/jean101/following{/other_user}",
    "gists_url": "https://api.github.com/users/jean101/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jean101/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jean101/subscriptions",
    "organizations_url": "https://api.github.com/users/jean101/orgs",
    "repos_url": "https://api.github.com/users/jean101/repos",
    "events_url": "https://api.github.com/users/jean101/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jean101/received_events",
    "type": "User",
    "site_admin": false,
    "name": Jean carlos rodriguez,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2020-01-14T13:13:59Z",
    "updated_at": "2020-04-30T00:08:19Z"
  }
`;
let users = JSON.parse(informacionUsuario);

imagen.src = "https://avatars1.githubusercontent.com/u/598749"

nombre_usuario.textContent = informacionUsuario.name
