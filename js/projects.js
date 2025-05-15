function initLanguage() {
    // Update the page's elements with the corresponding translation keys
    document.getElementById('projects-title').textContent = i18next.t('projectsTitle');
    document.getElementById('projects-intro').textContent = i18next.t('projectsIntro');
    document.getElementById('project1-title').textContent = i18next.t('project1Title');
    document.getElementById('project1-description').textContent = i18next.t('project1Description');
    document.getElementById('project2-title').textContent = i18next.t('project2Title');
    document.getElementById('project2-description').textContent = i18next.t('project2Description');
    document.getElementById('project3-title').textContent = i18next.t('project3Title');
    document.getElementById('project3-description').textContent = i18next.t('project3Description');
    document.querySelectorAll('.preview p').forEach(el => {
        el.textContent = i18next.t('preview');
    });
}

export function initProjects() {
    // Immediately update translations when the module loads
    initLanguage();

    // Register a listener to update translations when the language changes
    const languageChangeListener = initLanguage;
    i18next.on('languageChanged', languageChangeListener);

    // Return a cleanup function to remove the listener when the page is unloaded
    return function cleanupProjects() {
        i18next.off('languageChanged', languageChangeListener);
        console.log("Projects page cleanup completed.");
    };
}

