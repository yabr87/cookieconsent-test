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
            de: {
                consentModal: {
                    title: "Willkommen. Dürfen wir Cookies verwenden?",
                    description: "Wir nutzen notwendige Cookies, damit diese Demo zuverlässig funktioniert, und optionale Analyse-Cookies, um zu verstehen, wie Besucher mit der Seite interagieren. Du kannst alles akzeptieren, alles ablehnen oder deine Auswahl im Detail anpassen.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"#privacy\">Datenschutz</a><a href=\"#terms\">Nutzungsbedingungen</a>"
                },
                preferencesModal: {
                    title: "Einstellungen zum Datenschutz",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Fenster schließen",
                    serviceCounterLabel: "Dienst|Dienste",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "In diesem Bereich kannst du steuern, welche Kategorien von Cookies auf deinem Gerät gespeichert werden dürfen. Notwendige Cookies sind immer aktiv, damit grundlegende Funktionen zuverlässig laufen."
                        },
                        {
                            title: "Unbedingt erforderliche Cookies <span class=\"pm__badge\">Immer aktiv</span>",
                            description: "Diese Cookies sind für Kernfunktionen wie Sicherheit, gespeicherte Einwilligungen und die korrekte Anzeige des Cookie-Banners notwendig. Ohne sie kann die Demo nicht wie vorgesehen arbeiten.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analyse-Cookies",
                            description: "Mit diesen Cookies lässt sich messen, welche Bereiche der Seite genutzt werden. In dieser Demo dient die Kategorie als Beispiel für eine optionale Zustimmung.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Wenn du Fragen zur Verwendung von Cookies oder zu deiner Auswahl hast, kannst du uns jederzeit über die <a class=\"cc__link\" href=\"#contact\">Kontaktseite</a> erreichen."
                        }
                    ]
                }
            },
            en: {
                consentModal: {
                    title: "Welcome. May we use cookies?",
                    description: "We use necessary cookies to keep this demo working properly and optional analytics cookies to understand how visitors interact with the page. You can accept everything, reject optional cookies, or fine-tune your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#privacy\">Privacy Policy</a><a href=\"#terms\">Terms and Conditions</a>"
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
                            description: "These cookies support essential behavior like security, consent storage, and the correct rendering of the cookie banner. The demo depends on them to function as expected.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics cookies",
                            description: "These cookies can be used to measure engagement and understand which areas of the page are most useful. In this demo, the category is included as a simple optional consent example.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "If you have any questions about how cookies are used or how your preferences are handled, please visit the <a class=\"cc__link\" href=\"#contact\">contact page</a>."
                        }
                    ]
                }
            }
        }
    }
};
