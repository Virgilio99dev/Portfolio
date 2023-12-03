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
        case '':
            fetchHome();
            styleHome();
            break;
        case '#/about':
            fetchPage('../html/about.html');
            styleAbout();
            break;
        case '#/projects':
            fetchPage('../html/projects.html');
            styleProjects();
            break;
        case '#/resume':
            fetchPage('../html/resume.html');
            styleResume();
            break;
    }
}

/* Events */
window.addEventListener('hashchange', (e) => {
    loadPage(window.location.hash);
    $navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === window.location.hash) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('click', (e) => {
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
    loadPage(window.location.hash);
    $navlinks.forEach(link => {
        if (link.getAttribute('href') === window.location.hash) {
            link.classList.add('active');
        }
    });
});