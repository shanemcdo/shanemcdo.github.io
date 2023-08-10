const age = document.querySelector('#age-value');
const public_repos = document.querySelector('#public-repos-value');
const github_age = document.querySelector('#github-age-value');

setInterval(()=>{
    let birth = new Date(2002, 2, 1);
    let now =  Date.now();
    age.innerHTML = ((now - birth) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(9);
}, 50);

fetch('https://api.github.com/users/shanemcdo').then(res=>res.json()).then(res=>{
    let creation_date = new Date(res.created_at);
    public_repos.innerHTML = res.public_repos;
    setInterval(()=>{
        github_age.innerHTML = ((Date.now() - creation_date) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(9);
    }, 50);
});
