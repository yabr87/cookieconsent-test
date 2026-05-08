// ===== Потрібно для Webflow =====

function initCookieConsent() {
  CookieConsent.run(window.cookieConsentConfig);
}

function syncBannerLanguageWithDocument() {
  const documentLanguage = document.documentElement.lang || 'en';
  CookieConsent.setLanguage(documentLanguage);
}

function watchDocumentLanguage() {
  const observer = new MutationObserver(function (mutations) {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        syncBannerLanguageWithDocument();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang'],
  });
}

initCookieConsent();
watchDocumentLanguage();

// ===== Тільки для demo-сторінки =====

const languageSelect = document.getElementById('language-select');

function syncLanguageSelect() {
  if (!languageSelect) {
    return;
  }

  const documentLanguage = document.documentElement.lang || 'en';
  languageSelect.value = documentLanguage;
}

function openConsentBanner() {
  CookieConsent.show(true);
}

function openPreferencesModal() {
  CookieConsent.showPreferences();
}

function resetConsent() {
  CookieConsent.reset(true);
  window.location.reload();
}

function handleLanguageChange(event) {
  const nextLanguage = event.target.value;
  document.documentElement.lang = nextLanguage;
}

syncLanguageSelect();

document
  .getElementById('open-consent')
  .addEventListener('click', openConsentBanner);
document
  .getElementById('open-preferences')
  .addEventListener('click', openPreferencesModal);
document
  .getElementById('reset-consent')
  .addEventListener('click', resetConsent);

if (languageSelect) {
  languageSelect.addEventListener('change', handleLanguageChange);
}
