let typedInstance;

const SELECTORS = {
    textStart: '#text-start',
    parentName: '#parent-name p:first-child',
    occupation: '#occupation'
};

// function handleModelError(modelViewer) {
//     console.error('Failed to load 3D model:', modelViewer.src);
//     modelViewer.innerHTML = '<p>3D model failed to load. Please try again later.</p>';
//   }

function typingEffect() {
    const $ = document.querySelector.bind(document);

    // Remove extra whitespace and newlines from the translations
    const intro = i18next.t("intro").replace(/\s\s+/g, ' ').trim();
    const skills = i18next.t("skills").replace(/\s\s+/g, ' ').trim();

    const $text = intro + skills;

    const $element = $('#element');
    // if (!$element) return;
    $element.innerHTML = '';

    // Destroy the previous Typed instance if it exists
    if (typedInstance) {
        typedInstance.destroy();
    }

    typedInstance = new Typed($element, {
        strings: [$text],
        typeSpeed: 10,
        showCursor: false,
    });

    // Update static text content
    $(SELECTORS.textStart).textContent = i18next.t('textStart');
    $(SELECTORS.parentName).textContent = i18next.t('parentName');
    $(SELECTORS.occupation).textContent = i18next.t('occupation');
}

export function initHome() {
    // Run the initial typing effect
    typingEffect();

    // Dynamically add the <model-viewer> element
    const avatarContainer = document.getElementById('avatar');

    // Create the <model-viewer> element
    const modelViewer = document.createElement('model-viewer');
    modelViewer.setAttribute('disable-zoom', '');
    modelViewer.setAttribute('disable-tap', '');
    modelViewer.setAttribute('camera-controls', '');
    modelViewer.setAttribute('touch-action', 'pan-y');
    modelViewer.setAttribute('auto-rotate', '');
    modelViewer.setAttribute('scale', '0.2 0.2 0.2');
    modelViewer.setAttribute('shadow-intensity', '1');
    modelViewer.setAttribute('src', '/Portfolio/models/python.glb');
    modelViewer.setAttribute('alt', 'An animated 3D model of python');

    // Add the <model-viewer> to the container
    avatarContainer.appendChild(modelViewer);

    // Save a reference to the listener (here it's just typingEffect)
    const languageChangeListener = typingEffect;
    i18next.on('languageChanged', languageChangeListener);

    // Return the cleanup function
    return function cleanupHome() {
        i18next.off('languageChanged', languageChangeListener);
        if (typedInstance) {
            typedInstance.destroy();
        }
        console.log("Home page cleanup completed.");
    };
}