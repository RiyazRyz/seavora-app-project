
const RYZON_LANG_KEY = "ryzonLanguage";

const translations = {
  en: {
    home: "Home",
    jobs: "Jobs",
    shopping: "Shopping",
    education: "Education",
    ai: "AI Assistant",
    browser: "Browser",
    randomChat: "Random Chat",
    parcelSafety: "Parcel Safety",
    localServices: "Local Services",
    safetyHelp: "Safety & Help",
    premium: "Premium",
    language: "Language"
  },
  ta: {
    home: "முகப்பு",
    jobs: "வேலைவாய்ப்புகள்",
    shopping: "வணிகம்",
    education: "கல்வி",
    ai: "செயற்கை நுண்ணறிவு உதவியாளர்",
    browser: "உலாவி",
    randomChat: "சீரற்ற அரட்டை",
    parcelSafety: "பார்சல் பாதுகாப்பு",
    localServices: "உள்ளூர் சேவைகள்",
    safetyHelp: "பாதுகாப்பு மற்றும் உதவி",
    premium: "பிரீமியம்",
    language: "மொழி"
  }
};

function getRYZONLanguage() {
  return localStorage.getItem(RYZON_LANG_KEY) || "en";
}

function setRYZONLanguage(language) {
  localStorage.setItem(RYZON_LANG_KEY, language);
  applyRYZONLanguage();
}

function applyRYZONLanguage() {
  const language = getRYZONLanguage();
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-ryzon-text]").forEach(element => {
    const key = element.getAttribute("data-ryzon-text");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyRYZONLanguage);
