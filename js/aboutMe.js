function initLenguage() {
    const $container = document.getElementById('about-text');
    $container.innerHTML = i18next.t('aboutHTML');
}

export function initAboutMe() {
    // Run the initial language change function
    initLenguage();

    // Save a reference to the listener (here it's just ChangeLanguage)
    const languageChangeListener = initLenguage;
    i18next.on('languageChanged', languageChangeListener);

    // Return the cleanup function
    return function cleanupAboutMe() {
        i18next.off('languageChanged', languageChangeListener);
        console.log("About Me page cleanup completed.");
    };
}