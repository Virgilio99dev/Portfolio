import { styleAbout, styleHome, styleProjects, styleResume } from "./styles.js";

/* Variables */
const $ = document.querySelector.bind(document);
const $navlinks = document.querySelectorAll('.nav_link');
const log = console.log;

function fetchHome() {
    $('main').innerHTML = '';
        fetch('../html/home.html')
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
             $('main').append(content, script, script2, script3);
        })
        .catch(err => {
            let $err = document.createElement('h1').textContent = err;
            $('main').appendChild($err);
        });
}

function fetchPage(page) {
    $('main').innerHTML = '';
        fetch(page)
        .then(res => res.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            let content = doc.querySelector('html');
            $('main').appendChild(content);
        })
        .catch(err => {
            let $err = document.createElement('h1').textContent = err;
            $('main').appendChild($err);
        });
}

function loadPage(page) {
    switch(page) {
        case '../html/home.html':
            fetchHome();
            styleHome();
            break;
        case '../html/about.html':
            fetchPage(page);
            styleAbout();
            break;
        case '../html/projects.html':
            fetchPage(page);
            styleProjects();
            break;
        case '../html/resume.html':
            fetchPage(page);
            styleResume();
            break;
    }
}

/* Events */
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
    loadPage('../html/home.html');
});

$navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        $navlinks.forEach(navlink => {
            navlink.classList.remove('active');
        });
        navlink.classList.add('active');
    });
});