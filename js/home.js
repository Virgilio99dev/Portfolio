function typingEffect() {
const $ = document.querySelector.bind(document),
     $text = `
     <section>
        <p>
            ¡Hola! <br>
            Soy Virgilio, un programador altamente motivado y con experiencia en tecnologías de desarrollo web y manejo de bases de datos. Estoy deseando unirme al equipo de desarrollo de software de la empresa.
        </p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>JavaScript, Node.js, PHP and Python</li>
            <li>Frameworks (Vue js, Tree js, Node js, React js)</li>
            <li>Gestión de base de datos (MySQL, MongoDB, Google Firebase)</li>
            <li>Control de versiones (Git, GitHub)</li>
            <li>Desarrollo de aplicaciones móviles (React Native)</li>
            <li>DevOps (Docker, Jenkins, Kubernetes)</li>
        </ul>
    </section>
     `;

if(typeof Typed !== 'undefined') {
    
$('#element').innerHTML = '';
const typed = new Typed('#element', {
    strings: [$text],
    typeSpeed: 10,
    showCursor: false,
  });
} else {
    $('#element').innerHTML = $text;
}
}

typingEffect();
