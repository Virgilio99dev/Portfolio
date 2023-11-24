const $ = document.querySelector.bind(document);
const $navlinks = document.querySelectorAll('.nav_link');

function showLoader() {
    $('.progress').classList.add('show');
}

function hideLoader() {
    $('.progress').classList.remove('show');
}

function loadPage(page) {
    if(page == 'home.html') {
        showLoader();
        fetch(`../html/${page}`)
        .then(res => res.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            let content = doc.querySelector('html');
            var script = document.createElement('script'),
                script2 = document.createElement('script'),
                script3 = document.createElement('script');
            script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
            script.type = 'module';
            script2.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
            script3.src = '../js/home.js';
             $('main').innerHTML = '';
             $('main').append(content, script, script2, script3);
             hideLoader();
        })
        .catch(err => {
            let $err = document.createElement('h1').textContent = err;
            $('main').appendChild($err);
        });
    } else {
        showLoader();
        fetch(`../html/${page}`)
        .then(res => res.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            let content = doc.querySelector('html');
            $('main').innerHTML = '';
            $('main').appendChild(content);
            hideLoader();
        })
        .catch(err => {
            let $err = document.createElement('h1').textContent = err;
            $('main').appendChild($err);
        });
    
    }
} // loadPage

document.addEventListener('click', (e) => {
    if (e.target.matches('header a')) {
        e.preventDefault();
        loadPage(e.target.attributes.href.value);
    }
    if (e.target.matches('#icon-contact img')) {
        $('footer').classList.add('active');
    }
    if (e.target.matches('#exit-icon')) {
        $('footer').classList.remove('active');
    }
    if (e.target.matches('#icon-nav img')) {
      $('.container_div_nav').classList.toggle('active');
      $('#icon-nav-x').classList.toggle('active');
      $('#icon-nav-menu').classList.toggle('active');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html');
});

$navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        $navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlink.classList.add('active');
    });
});