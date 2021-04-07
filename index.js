const API_TOKEN = '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';
const age = document.querySelector('#age-value');
const private_repos = document.querySelector('#private-repos-value');
const public_repos = document.querySelector('#public-repos-value');
setInterval(()=>{
    let birth = new Date(2002, 2, 1);
    let now =  Date.now();
    age.innerHTML = ((now - birth) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(9);
}, 50);

fetch('https://api.github.com/user', {
    headers: {
        Authorization: 'Basic ' + btoa('kermitpurple:' + API_TOKEN),
    }
}).then(res=>res.json()).then(res=>{
    console.log(res);
    private_repos.innerHTML = res.owned_private_repos;
    public_repos.innerHTML = res.public_repos;
});
