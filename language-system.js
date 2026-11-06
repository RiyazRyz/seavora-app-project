
const RYZON_LANG_KEY = "ryzonLanguage";
const RYZON_TEMP_LANG_KEY = "ryzonTemporaryEnglish";

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
    scamAlert: "⚠️ SCAM ALERT: Never share OTP, UPI PIN or bank details. Verify before you pay. ⚠️",
    jobsTitle: "Jobs & Career",
    jobsDescription: "Find job opportunities and career resources",
    searchJobs: "Search Jobs",
    jobPlaceholder: "Enter job name or keyword",
    allCategories: "All Categories",
    governmentJobs: "Government Jobs",
    privateJobs: "Private Jobs",
    itJobs: "IT Jobs",
    bankingJobs: "Banking Jobs",
    searchButton: "Search",
    governmentDescription: "Explore official government recruitment notifications.",
    bankingDescription: "Check official banking recruitment websites.",
    privateDescription: "Search for private-sector and technology jobs.",
    jobSearch: "Job Search",
    jobSearchHelp: "Choose a category and enter a keyword to search.",
    searchingFor: "Searching for:"
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
    scamAlert: "⚠️ மோசடி எச்சரிக்கை: OTP, UPI PIN அல்லது வங்கி விவரங்களை யாரிடமும் பகிர வேண்டாம். பணம் செலுத்தும் முன் சரிபார்க்கவும். ⚠️",
    jobsTitle: "வேலைவாய்ப்புகள் மற்றும் தொழில்",
    jobsDescription: "வேலை வாய்ப்புகள் மற்றும் தொழில் தகவல்களைக் கண்டறியுங்கள்",
    searchJobs: "வேலை தேடல்",
    jobPlaceholder: "வேலைப் பெயர் அல்லது முக்கியச் சொல்லை உள்ளிடுங்கள்",
    allCategories: "அனைத்து பிரிவுகள்",
    governmentJobs: "அரசு வேலைகள்",
    privateJobs: "தனியார் வேலைகள்",
    itJobs: "IT வேலைகள்",
    bankingJobs: "வங்கி வேலைகள்",
    searchButton: "தேடு",
    governmentDescription: "அரசு வேலைவாய்ப்பு அறிவிப்புகளைப் பாருங்கள்.",
    bankingDescription: "வங்கி வேலைவாய்ப்பு இணையதளங்களைப் பாருங்கள்.",
    privateDescription: "தனியார் மற்றும் தொழில்நுட்ப வேலைகளைத் தேடுங்கள்.",
    jobSearch: "வேலை தேடல்",
    jobSearchHelp: "பிரிவைத் தேர்ந்தெடுத்து முக்கியச் சொல்லை உள்ளிட்டு தேடுங்கள்.",
    searchingFor: "தேடுவது:"
  }
};

// Get saved primary language
function getRYZONPrimaryLanguage() {
  const saved = localStorage.getItem(RYZON_LANG_KEY);
  return translations[saved] ? saved : "en";
}

// Get currently active language
function getRYZONLanguage() {
  const primary = getRYZONPrimaryLanguage();
  const temporary = localStorage.getItem(RYZON_TEMP_LANG_KEY);

  if (temporary === "true") {
    return primary === "ta" ? "en" : "ta";
  }

  return primary;
}

// Save preferred language
function setRYZONLanguage(language) {
  if (!translations[language]) {
    alert("This language is not supported yet.");
    return;
  }

  localStorage.setItem(RYZON_LANG_KEY, language);
  localStorage.removeItem(RYZON_TEMP_LANG_KEY);

  applyRYZONLanguage();
}

// Toggle between Tamil and English
function toggleRYZONLanguage() {
  const primary = getRYZONPrimaryLanguage();
  const temporary = localStorage.getItem(RYZON_TEMP_LANG_KEY);

  if (temporary === "true") {
    localStorage.removeItem(RYZON_TEMP_LANG_KEY);
  } else {
    localStorage.setItem(RYZON_TEMP_LANG_KEY, "true");
  }

  applyRYZONLanguage();
}

// Apply translations
function applyRYZONLanguage() {
  const language = getRYZONLanguage();
  const dictionary = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-ryzon-text]").forEach(element => {
    const key = element.getAttribute("data-ryzon-text");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-ryzon-placeholder]").forEach(element => {
    const key = element.getAttribute("data-ryzon-placeholder");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.placeholder = dictionary[key];
    }
  });

  // Show the opposite language on the toggle button
  document.querySelectorAll("[data-ryzon-language-toggle]").forEach(button => {
    button.textContent =
      getRYZONLanguage() === "ta" ? "🌐 English" : "🌐 தமிழ்";
  });
}

// Apply language when page loads
document.addEventListener("DOMContentLoaded", applyRYZONLanguage);

// Update language across tabs
window.addEventListener("storage", function(event) {
  if (
    event.key === RYZON_LANG_KEY ||
    event.key === RYZON_TEMP_LANG_KEY
  ) {
    applyRYZONLanguage();
  }
});
