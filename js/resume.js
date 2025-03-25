const button = document.querySelector("button");

const OpenPDF = (url) => {
  window.open(url, "_blank");
};

button.addEventListener("click", () => {
  const pdfUrl = "/Portfolio/Assets/Blue and White Professional CV Resume.pdf"; // Replace with your PDF URL
  const pdfSpanishUrl = "/Portfolio/Assets/Blue and White Professional CV Resume version español.pdf";
  const currentLanguage = i18next.language;
  OpenPDF(currentLanguage === 'es' ? pdfSpanishUrl : pdfUrl);
});

function initLanguage() {
  document.getElementById('resume-img').src = i18next.t('imgSrc');
  document.getElementById('download-button').textContent = i18next.t('downloadButton');
}

export function initResume() {
  initLanguage();
  const languageChangeListener = initLanguage;
  i18next.on('languageChanged', languageChangeListener);
  return function cleanupResume() {
      i18next.off('languageChanged', languageChangeListener);
      console.log("Resume page cleanup completed.");
  };
}