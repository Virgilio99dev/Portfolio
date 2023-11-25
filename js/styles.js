const $ = document.querySelector.bind(document);

export function styleHome() {
    $('#dynamic-styles').innerHTML = `
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
    
    #text_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
    }
    
    #introduction_container {
        display: flex;
        justify-content: space-between; /* align horizontal */
        align-items: center; /* align vertical */
        height: 90vh;
        width: 60vw;
        padding-right: 3%;
        padding-left: 3%;
    }
    
    #introduction_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    
    #avatar {
        height: 30vh;
        width: 20vw;
    }
    
    #text-start {
        font-size: 3rem;
        text-align: center;
    }
    
    p {
        font-size: 1.5rem;
    }
    
    #occupation {
        border-bottom: 1px solid #4B9CD3;
    }
    
    #avatar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    model-viewer {
        height: 50vh;
        width: 50vh;
    }
    
    #container_element {
        display: flex;
        flex-direction: column;
        width: 40vw;
    }
        
    #element {
       text-align: center;
    }
    
    section {
        margin-bottom: 20px;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100vw;
        animation: transitionIn 1s ease-in-out;
    }
    
    @keyframes transitionIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        
    }
    
    #parent-name {
        text-align: center;
    }
    
    /************* Responsive ********************/
    @media screen and (max-width: 900px) {
        #container {
            display: flex;
            flex-direction: column;
            height: auto;
        }
    
        #introduction_container {
            display: flex;
            justify-content: center; /* align horizontal */
            align-items: center; /* align vertical */
            flex-direction: column;
            height: 70vh;
            width: 70vw;
        }
    

    #container_element {
        width: 100%;
    }
    
    #text_container {
        width: 85vw;
    }
    }
    `;
}

export function styleAbout() {
    $('#dynamic-styles').innerHTML = `
    #about-body {
        margin: 0;
        padding: 0;
        text-align: center;
        animation: transitionIn 1s ease-in-out;
    }
    
    #header_about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        width: 100vw;
    }
    
    
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        position: fixed;
        bottom: -100vh;
        width: 100vw;
        background-color: #ADD8E6;
        color: black;
        font-weight: bold;
        transition: all 0.50s ease-in-out;
    }
    
    /************************ Child Elements **********************************/
    h1, h2 {
        color: #76ABDF;
        width: 50vw;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    .active {
        bottom: 0;
    }
    
    p {
        max-width: 50vw;
        text-align: center;
    }
    
    #contact {
        color: #007FFF;
    }
    
    #icon-contact {
        position: fixed;
        bottom: 2vw;
        right: 5vw;
    }  
    
    #icon-contact img {
        height: 50px;
        width: 50px;
        cursor: pointer;
        animation: beat 3s infinite;
    }
    
    @keyframes beat {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes transitionIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        
    }
    
    #exit-icon {
        position: absolute;
        right: 2%;
        top: 3%;
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
    
    @media screen and (max-width: 1024px) {
        footer {
            padding: 5px;
        }
        p, ul {
            max-width: 90vw;
        }
    }`;
}

export function styleProjects() {
    $('#dynamic-styles').innerHTML = `
    #body-projects {
        margin: 0;
        padding: 0;
        
    }
    main {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100vw;
    }
    .container-projects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        place-items: center;
        grid-gap: 5rem;
        animation: transitionIn 1s ease-in-out;
        width: 90vw;
    }
    
    section {
        width: 200px;
        height: 200px;
    }
    
    section img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @keyframes transitionIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        
    }
    
    @media screen and (max-width: 600px) {
        .container-projects {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 5rem;
        }

        section {
            width: 150px;
            height: 150px;
        }
    }
    `;
}

export function styleResume() {
    $('#dynamic-styles').innerHTML = `
    #body-resume {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    
    #resume-container {
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        background-color: whitesmoke;
        animation: transitionIn 1s ease-in-out;
    }
    
    #header-resume {
        text-align: center;
        background-color: #002D62;
        font-family: 'Times New Roman', Times, serif;
    }
    
    #main-resume {
        padding: 50px;
        color: black;
    }
    
    section {
        margin-bottom: 10px;
    }
    
    /***************** containers **************************/
    .contact-info {
        margin-bottom: 20px;
    }
    
    .contact-info ul {
        list-style-type: none;
    }
    
    .project {
        margin-bottom: 15px;
    }
    
    .references {
        font-style: italic;
    }
    
    /*************** child elements ******************************/
    h1, h2 {
        font-family: 'Times New Roman', Times, serif;
        color: #7CB9E8;
    }
    
    h2 {
        border-bottom: 2px solid #333;
        padding-bottom: 5px;
    }
    
    
    ul {
        padding: 0;
    }
    
    li {
        margin-bottom: 5px;
    }
    
    #name {
        font-size: 2.5rem;
        color: white;
    }
    
    #developer {
        font-size: 1.50rem;
        color: white;
    }
    
    .icon {
        padding-right: 10px;
    }
    
    #date {
        display: flex;
        justify-content: space-between;
        color: gray;
        margin-top: -0.50em;
    }
    
    #date p {
        margin: 0;
    }
    
    h3 {
        margin-bottom: 0.83em;
    }
    
    @keyframes transitionIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        
    }
    
    @media screen and (max-width: 900px) {
        #resume-container {
            max-width: 90vw;
        }
        #main-resume {
            padding: 20px;
        }
    }`;
}