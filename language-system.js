
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
    language: "Language",
    welcome: "Welcome to RYZON!",
    tagline: "Your world. Your language. Your possibilities.",
    search: "🔍 Search RYZON...",
    mainServices: "Main Services",
    projectIdeas: "Project Ideas",
    projectMarket: "Project Market",
    scamAlert: "⚠️ SCAM ALERT: Never share OTP, UPI PIN or bank details. Verify before you pay. ⚠️"
  },

  ta: {
    home: "முகப்பு",
    jobs: "வேலைவாய்ப்புகள்",
    shopping: "ஷாப்பிங்",
    education: "கல்வி",
    ai: "AI உதவியாளர்",
    browser: "உலாவி",
    randomChat: "சீரற்ற அரட்டை",
    parcelSafety: "பார்சல் பாதுகாப்பு",
    localServices: "உள்ளூர் சேவைகள்",
    safetyHelp: "பாதுகாப்பு மற்றும் உதவி",
    premium: "பிரீமியம்",
    language: "மொழி",
    welcome: "RYZON-க்கு உங்களை வரவேற்கிறோம்!",
    tagline: "உங்கள் உலகம். உங்கள் மொழி. உங்கள் வாய்ப்புகள்.",
    search: "🔍 RYZON-ஐ தேடுங்கள்...",
    mainServices: "முக்கிய சேவைகள்",
    projectIdeas: "திட்ட யோசனைகள்",
    projectMarket: "திட்டச் சந்தை",
    scamAlert: "⚠️ மோசடி எச்சரிக்கை: OTP, UPI PIN அல்லது வங்கி விவரங்களை யாரிடமும் பகிர வேண்டாம். பணம் செலுத்தும் முன் சரிபார்க்கவும். ⚠️"
  }
};

function getRYZONLanguage() {
  return localStorage.getItem(RYZON_LANG_KEY) || "en";
}

function setRYZONLanguage(language) {
  if (!translations[language]) return;
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

  document.querySelectorAll("[data-ryzon-placeholder]").forEach(element => {
    const key = element.getAttribute("data-ryzon-placeholder");
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyRYZONLanguage);
window.addEventListener("storage", function(event) {
  if (event.key === RYZON_LANG_KEY) {
    applyRYZONLanguage();
  }
});
