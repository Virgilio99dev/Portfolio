const $ = document.querySelector.bind(document);

if(typeof Typed !== 'undefined') {
$('#element').innerHTML = '';
const typed = new Typed('#element', {
    strings: [`
    <section>
        <p>
            Hey there!! <br>
            I am Virgilio, a highly motivated programmer with expertise in web development technologies and 3D modeling. I am eager to join the company's software development team.
        </p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>HTML, Css, JavaScript,PHP and Python</li>
            <li>Database Management (MySQL, MongoDB)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>3D Modeling</li>
        </ul>
    </section>`],
    typeSpeed: 10,
    showCursor: false,
  });
}