# CookieConsent для Webflow

Швидкий приклад інтеграції CookieConsent у Webflow без зайвих налаштувань.

Посилання:
- GitHub: [https://github.com/orestbida/cookieconsent](https://github.com/orestbida/cookieconsent)
- Playground: [https://playground.cookieconsent.orestbida.com](https://playground.cookieconsent.orestbida.com)
- Сайт: [https://cookieconsent.orestbida.com](https://cookieconsent.orestbida.com)


## 1. Вставити у `Head Code`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css">

<style>
:root {
    color-scheme: light;

    /* Базові кольори модалки */
    --cc-bg: #fffaf5;
    --cc-primary-color: #4a3427;
    --cc-secondary-color: #7a5c49;

    /* Кольори основної кнопки */
    --cc-btn-primary-bg: #c67b49;
    --cc-btn-primary-color: #fffaf5;
    --cc-btn-primary-hover-bg: #a96335;
    --cc-btn-primary-hover-color: #ffffff;

    /* Кольори другорядної кнопки */
    --cc-btn-secondary-bg: #f4e7dc;
    --cc-btn-secondary-color: #5f4434;
    --cc-btn-secondary-hover-bg: #ecd8c7;
    --cc-btn-secondary-hover-color: #3b281d;

    /* Кольори секцій у вікні налаштувань */
    --cc-cookie-category-block-bg: #f8ede3;
    --cc-cookie-category-block-border: #efdece;
    --cc-cookie-category-block-hover-bg: #f3e2d3;
    --cc-cookie-category-block-hover-border: #e7cfba;
    --cc-cookie-category-expanded-block-hover-bg: #f8ede3;
    --cc-cookie-category-expanded-block-bg: #fdf6ef;

    /* Колір фону позаду модалки */
    --cc-overlay-bg: rgba(78, 52, 39, 0.42) !important;

    /* Кольори перемикачів */
    --cc-toggle-readonly-bg: #d8c0ad;
    --cc-toggle-on-knob-bg: #fffaf5;
    --cc-toggle-off-bg: #b99476;
    --cc-toggle-readonly-knob-bg: #fffaf5;

    /* Розділювачі та footer */
    --cc-separator-border-color: #eadbcf;
    --cc-footer-border-color: #eadbcf;
    --cc-footer-bg: #fdf6ef;

    /* Звичайні заокруглення */
    --cc-btn-border-radius: 0.75rem;
    --cc-modal-border-radius: 0.75rem;
    --cc-pm-toggle-border-radius: 999px;
}

</style>
```

## 2. Вставити перед `</body>`

```html
<script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js"></script>

<script>
window.cookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "document",
        translations: {
            en: {
                consentModal: {
                    title: "Welcome. May we use cookies?",
                    description: "We use necessary cookies to keep this website working properly and optional analytics cookies to understand how visitors interact with the page. You can accept everything, reject optional cookies, or fine-tune your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/privacy\">Privacy Policy</a><a href=\"/terms\">Terms and Conditions</a>"
                },
                preferencesModal: {
                    title: "Privacy Preference Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close dialog",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "How cookies are used",
                            description: "Here you can control which categories of cookies may be stored on your device. Necessary cookies stay enabled because they support core functionality such as storing consent choices and keeping the banner stable."
                        },
                        {
                            title: "Strictly necessary cookies <span class=\"pm__badge\">Always enabled</span>",
                            description: "These cookies support essential behavior like security, consent storage, and the correct rendering of the cookie banner.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics cookies",
                            description: "These cookies can be used to measure engagement and understand which areas of the page are most useful.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "If you have any questions about how cookies are used, please visit the <a class=\"cc__link\" href=\"/contact\">contact page</a>."
                        }
                    ]
                }
            }
        }
    }
};
CookieConsent.run(window.cookieConsentConfig);
</script>
```

## Як це працює

- у прикладі вище банер запускається просто через `CookieConsent.run(window.cookieConsentConfig)`
- цього достатньо для базового конфіга на одну мову
- якщо у вас одна мова, додатковий код для відслідковування `lang` не потрібен

## Що зазвичай треба змінити

- посилання у `footer`: `/privacy` і `/terms`
- тексти банера в `translations.en`
- кольори у блоці `:root`
- позицію банера: `position: "bottom left"`

## Якщо потрібна друга мова

Додайте ще один блок у `translations`, наприклад `de`, `uk` або іншу мову.

Якщо Webflow Localization змінює `<html lang>` без перезавантаження сторінки, можна додати окремий скрипт для автоматичного відслідковування мови документа:

```html
<script>
function syncBannerLanguageWithDocument() {
    const documentLanguage = document.documentElement.lang || "en";
    CookieConsent.setLanguage(documentLanguage);
}

function watchDocumentLanguage() {
    const observer = new MutationObserver(function (mutations) {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "lang") {
                syncBannerLanguageWithDocument();
            }
        }
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"]
    });
}

watchDocumentLanguage();
</script>
```


### Альтернатива finsweet cookie consent легасі
- Для клдонування
https://webflow.com/made-in-webflow/website/free-clone-gdpr-cookie-consent-banner
- Документація 
https://finsweet.com/attributes/v1/cookie-consent
