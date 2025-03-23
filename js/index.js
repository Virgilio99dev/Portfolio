import { NavBarMenu } from "https://unpkg.com/npm-package-bir@1.1.2/npm-resource.js";

/* Constants */
const SELECTORS = {
  main: 'main',
  navLink: '.nav_link',
  iconNav: '#icon-nav',
  containerDivNav: '.container_div_nav',
  iconContact: '#icon-contact img',
  exitIcon: '#exit-icon',
  buttonSpanish: '.spanish',
  buttonEnglish: '.english',
  //menu
  home: 'home',
  about: 'about',
  projects: 'projects',
  resume: 'resume'
};

const SCRIPTS = {
  home: '../js/home.js',
  resume: '../js/resume.js',
  aboutMe: '../js/aboutMe.js',
  projects: '../js/projects.js'
};

const PAGES = {
  home: '../html/home.html',
  about: '../html/about.html',
  projects: '../html/projects.html',
  resume: '../html/resume.html'
};

/* Utility Functions */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);

// Initialize NavBarMenu
NavBarMenu(SELECTORS.iconNav, () => {
  $(SELECTORS.containerDivNav).classList.toggle('active');
  window.addEventListener("hashchange", () => {
    $(SELECTORS.containerDivNav).classList.remove('active');
  });
}, "35px", "35px", "#F0F8FF", "4px");

i18next.init({
  lng: getLanguageFromLocalStorage(), // Detect language from URL
  resources: {
    en: {
        translation: {
            // Home page translations
            intro: `
                    <section>
                        <p>
                            Hello! <br>
                            I am Virgilio, a highly motivated programmer with experience in web development technologies and database management.
                        </p>
                    </section>
                `,
                skills: `
                    <section>
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript, Node.js, PHP, and Python</li>
                            <li>Frameworks (Vue js, Tree js, Node js, React js)</li>
                            <li>Database management (MySQL, MongoDB, Google Firebase)</li>
                            <li>Version control (Git, GitHub)</li>
                            <li>Mobile app development (React Native)</li>
                        </ul>
                    </section>
                `,
                textStart: 'Programming is an art.',
                parentName: 'Virgilio Lopez',
                occupation: 'Full Stack Developer',
              // Home menu translations
              home: "Home",
              about: "About Me",
              projects: "Projects",
              resume: "Resume",
              // About page translations
              aboutHTML: `
                    <h1>About Me</h1>
                    <p>Hello! I am Virgilio López, a full stack developer. I am passionate about technology and programming, and I enjoy learning and exploring new tools and languages.</p>
                    <p>I consider myself a proactive person with great adaptability. I enjoy working in a team and sharing knowledge with my colleagues. I am also interested in music, cinema, and reading, which helps me maintain a balance between my personal and professional life.</p>
                    <p>I am always looking for new challenges that allow me to improve my skills and knowledge. I am motivated to overcome myself every day and contribute positively to the projects in which I participate.</p>
                `,
              // Projects page translations
              projectsTitle: "Projects",
              projectsIntro: "Here you will find some of the projects I have worked on. If you want more information about any of them, feel free to visit the corresponding website.",
              project1Title: "Blog - Technology Dissemination",
              project1Description: "This is a blog where I share my knowledge and experiences in the world of technology. Here you will find articles on various topics, from programming to cybersecurity.",
              project2Title: "Minerva - Task Manager",
              project2Description: "Minerva is a platform that helps organize tasks and thoughts, create appointments and dashboards to track progress and stay motivated.",
              preview: "Preview",
            // Resume page translations
             imgSrc: "../img/Blue and White Professional CV Resume.jpg",
             downloadButton: "Download"
        }
    },
    es: {
        translation: {
          // Home page translations
          intro: `
                    <section>
                        <p>
                            ¡Hola! <br>
                            Soy Virgilio, un programador altamente motivado y con experiencia en tecnologías de desarrollo web y manejo de bases de datos.
                        </p>
                    </section>
                `,
                skills: `
                    <section>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>JavaScript, Node.js, PHP y Python</li>
                            <li>Frameworks (Vue js, Tree js, Node js, React js)</li>
                            <li>Gestión de base de datos (MySQL, MongoDB, Google Firebase)</li>
                            <li>Control de versiones (Git, GitHub)</li>
                            <li>Desarrollo de aplicaciones móviles (React Native)</li>
                        </ul>
                    </section>
                `,
                textStart: 'La programación es un arte.',
                parentName: 'Virgilio Lopez',
                occupation: 'Desarrollador full stack',
              // Home menu translations
              home: "Inicio",
              about: "Acerca de mí",
              projects: "Proyectos",
              resume: "Currículum",
            // About page translations
            aboutHTML: `
                    <h1>Acerca de mí</h1>
                    <p>¡Hola! Soy Virgilio López, un desarrollador full stack. Me apasiona la tecnología y la programación, y disfruto aprendiendo y explorando nuevas herramientas y lenguajes.</p>
                    <p>Me considero una persona proactiva y con gran capacidad de adaptación. Disfruto trabajando en equipo y compartiendo conocimientos con mis colegas. Además, me interesan la música, el cine y la lectura, lo que me ayuda a mantener un equilibrio entre mi vida personal y profesional.</p>
                    <p>Siempre estoy en busca de nuevos retos que me permitan mejorar mis habilidades y conocimientos. Me motiva superarme cada día y contribuir de manera positiva en los proyectos en los que participo.</p>
                `,  
          // Projects page translations
            projectsTitle: "Proyectos",
            projectsIntro: "Aquí encontrarás algunos de los proyectos en los que he trabajado. Si deseas obtener más información sobre alguno de ellos, no dudes en visitar la página web correspondiente.",
            project1Title: "Blog - Divulgación de tecnología",
            project1Description: "Este es un blog donde comparto mis conocimientos y experiencias en el mundo de la tecnología. Aquí encontrarás artículos sobre diversos temas, desde programación hasta seguridad informática.",
            project2Title: "Minerva - Administrador de tareas",
            project2Description: "Minerva es una plataforma que ayuda a organizar tareas y pensamientos, crear citas y paneles para realizar un seguimiento del progreso y mantenerse motivado.",
            preview: "Vista previa",
          // Resume page translations
          imgSrc: "../img/Blue and White Professional CV Resume.png",
          downloadButton: "Descargar"
        }
    }
}
}).then(() => {
  console.log("i18next initialized with:", i18next.language);

    // Load the initial page content
    loadPage(window.location.hash);

    // Initialize the language menu
    initLenguageMenu();

  $$(SELECTORS.navLink).forEach(link => {
      if (link.getAttribute('href') === window.location.hash) {
        link.classList.add('active');
      }
    });

  const savedLanguage = i18next.language;

  // Check for a saved language and update button styles accordingly.
  if (savedLanguage === 'es') {
    $spanishButton.classList.add('activeTraductor');
    $englishButton.classList.remove('activeTraductor');
  } else if (savedLanguage === 'en') {
    $englishButton.classList.add('activeTraductor');
    $spanishButton.classList.remove('activeTraductor');
  }
  
});

// Global variable to store the cleanup function for the current page.
window.currentPageCleanup = null;

/* Functions */
function getLanguageFromLocalStorage() {
  return localStorage.getItem('lang') || 'en';
}

function initLenguageMenu() {
  // menu translations
  document.getElementById(SELECTORS.home).textContent = i18next.t('home');
  document.getElementById(SELECTORS.about).textContent = i18next.t('about');
  document.getElementById(SELECTORS.projects).textContent = i18next.t('projects');
  document.getElementById(SELECTORS.resume).textContent = i18next.t('resume');
}

// fetchContent now returns a Promise that resolves when the content is loaded.
async function fetchContent(url) {
  // Call cleanup of previous page if exists.
  if (window.currentPageCleanup && typeof window.currentPageCleanup === 'function') {
    window.currentPageCleanup();
    window.currentPageCleanup = null;
  }

  $(SELECTORS.main).innerHTML = '';
  showLoadingAnimation(); // Show loading animation
  try {
    const res = await fetch(url);
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // Assuming the page content is wrapped in <html> or another container.
    const content = doc.querySelector('html') || doc.body;
    $(SELECTORS.main).appendChild(content);
  } catch (err) {
    const $err = document.createElement('h1');
    $err.textContent = `Error loading content: ${err}`;
    $(SELECTORS.main).appendChild($err);
  } finally {
    hideLoadingAnimation(); // Hide loading animation
  }
}

// loadPage dynamically loads the HTML and its corresponding JS module.
function loadPage(page) {
  switch (page) {
    case '':
      fetchContent(PAGES.home).then(() => {
        // Dynamically import home.js and call initHome.
        import(SCRIPTS.home)
          .then(module => {
            if (module.initHome) {
              window.currentPageCleanup = module.initHome();
            }
          })
          .catch(err => console.error("Failed to load home module:", err));
      });
      break;
    case '#/about':
      fetchContent(PAGES.about).then(() => {
        import(SCRIPTS.aboutMe)
          .then(module => {
            if (module.initAboutMe) {
              window.currentPageCleanup = module.initAboutMe();
            }
          })
          .catch(err => console.error("Failed to load aboutMe module:", err));
      });
      break;
    case '#/projects':
      fetchContent(PAGES.projects).then(() => {
        import(SCRIPTS.projects)
          .then(module => {
            if (module.initProjects) {
              window.currentPageCleanup = module.initProjects();
            }
          })
          .catch(err => console.error("Failed to load projects module:", err));
      });
      break;
    case '#/resume':
      fetchContent(PAGES.resume).then(() => {
        import(SCRIPTS.resume)
          .then(module => {
            if (module.initResume) {
              window.currentPageCleanup = module.initResume();
            }
          })
          .catch(err => console.error("Failed to load resume module:", err));
      });
      break;
    default:
      fetchContent(PAGES.home).then(() => {
        import(SCRIPTS.home)
          .then(module => {
            if (module.initHome) {
              window.currentPageCleanup = module.initHome();
            }
          })
          .catch(err => console.error("Failed to load home module:", err));
      });
      break;
  }
}

/* Other Functions */
function checkHeaderCover() {
  const header = document.getElementById('header-main-top');
  const mainContainer = document.getElementById('main-p-container');
  const headerRect = header.getBoundingClientRect();
  const mainContainerRect = mainContainer.getBoundingClientRect();

  if (headerRect.bottom > mainContainerRect.top) {
    header.classList.add('blurEffect');
  } else {
    header.classList.remove('blurEffect');
  }
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
  initLenguageMenu();
  localStorage.setItem('lang', lang);
}

// Loading animation functions
function showLoadingAnimation() {
  document.querySelector('.progress').classList.add('show');
}

function hideLoadingAnimation() {
  document.querySelector('.progress').classList.remove('show');
}

/* Event Listeners */
window.addEventListener('hashchange', () => {
  loadPage(window.location.hash);
  $$(SELECTORS.navLink).forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === window.location.hash) {
      link.classList.add('active');
    }
  });
});

const $spanishButton = $(SELECTORS.buttonSpanish);
const $englishButton = $(SELECTORS.buttonEnglish);

$spanishButton.addEventListener('click', function () {
  this.classList.add('activeTraductor');
  $englishButton.classList.remove('activeTraductor');
  changeLanguage('es');
});

$englishButton.addEventListener('click', function () {
  this.classList.add('activeTraductor');
  $spanishButton.classList.remove('activeTraductor');
  changeLanguage('en');
});

document.getElementById('content').addEventListener('scroll', checkHeaderCover);