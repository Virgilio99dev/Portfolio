function typingEffect() {
const $ = document.querySelector.bind(document),
     $text = `
     <section>
        <p>
            Hey there!! <br>
            I am Virgilio, a highly motivated programmer with expertise in web development technologies and 3D modeling. I am eager to join the company's software development team.
        </p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>JavaScript, Node.js, PHP and Python</li>
            <li>Frameworks (Vue js, Tree js, Node js)</li>
            <li>Database Management (MySQL, MongoDB)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>DevOps</li>
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
