const age = document.querySelector('#age-value');
const public_repos = document.querySelector('#public-repos-value');
const github_age = document.querySelector('#github-age-value');
const link_search = document.querySelector('#link-search');
const site_links = document.querySelectorAll('.site-link');

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

link_search.addEventListener('keyup', ()=>{
    if(link_search.value === ''){
        for (const link of site_links) {
            link.style.display = '';
        }
    }else{
        for (const link of site_links) {
            link.style.display = link.textContent.toLowerCase().includes(link_search.value.toLowerCase()) ? '' : 'none';
        }
    }
});
