
const RYZON_LANG_KEY = "ryzonLanguage";
const RYZON_TEMP_LANG_KEY = "ryzonTemporaryEnglish";

const translations = {
  en: {
    home:"Home", jobs:"Jobs", shopping:"Shopping",
    education:"Education", ai:"AI Assistant",
    browser:"Browser", randomChat:"Random Chat",
    parcelSafety:"Parcel Safety", localServices:"Local Services",
    safetyHelp:"Safety & Help", premium:"Premium",
    language:"Language", welcome:"Welcome to RYZON!",
    tagline:"Your world. Your language. Your possibilities.",
    search:"🔍 Search RYZON...", mainServices:"Main Services",
    projectIdeas:"Project Ideas", projectMarket:"Project Market",
    scamAlert:"⚠️ SCAM ALERT: Never share OTP, UPI PIN or bank details. ⚠️",

    jobsTitle:"Jobs & Career",
    jobsDescription:"Find job opportunities and career resources",
    searchJobs:"Search Jobs",
    jobPlaceholder:"Enter job name or keyword",
    allCategories:"All Categories",
    governmentJobs:"Government Jobs",
    privateJobs:"Private Jobs",
    itJobs:"IT Jobs", bankingJobs:"Banking Jobs",
    searchButton:"Search",
    governmentDescription:"Explore official government recruitment notifications.",
    bankingDescription:"Check official banking recruitment websites.",
    privateDescription:"Search for private-sector and technology jobs.",
    jobSearch:"Job Search",
    jobSearchHelp:"Choose a category and enter a keyword to search.",
    searchingFor:"Searching for:",

    loginTitle:"Welcome to RYZON",
    loginDescription:"Login or create your account",
    login:"Login", signUp:"Sign Up",
    email:"Email", mobile:"Mobile",
    emailPlaceholder:"Enter your email",
    passwordPlaceholder:"Enter password",
    confirmPassword:"Confirm Password",
    rememberMe:"Remember Me",
    loginEmail:"Login with Email",
    createAccount:"Create Account",
    forgotPassword:"Forgot Password?",
    welcomeBack:"Welcome Back! Login to continue",
    createAccountTitle:"Create Your RYZON Account",
    noAccount:"Don't have an account?",
    alreadyAccount:"Already have an account?",
    mobileLogin:"Mobile OTP Login",
    mobileSignup:"Mobile Sign Up",
    phonePlaceholder:"Mobile Number",
    sendOtp:"Send OTP",
    resendOtp:"Resend OTP",
    verifyOtp:"Verify OTP",
    otpPlaceholder:"Enter 6-digit OTP",
    countryNote:"Select the flag to choose your country code.",
    phoneDescription:"Enter your mobile number to receive an OTP.",
    phoneSignupDescription:"Enter your mobile number and verify OTP to create an account.",
    googleLogin:"Continue with Google",
    show:"Show", hide:"Hide",
    or:"OR",
    verifyEmail:"I Have Verified My Email",
    verificationText:"Open your email and click the verification link.",
    successTitle:"Login Successful!",
    successWelcome:"Welcome to RYZON",
    lastLogin:"Last Login:",
    terms:"Terms & Conditions",
    privacy:"Privacy Policy",
    passwordNote:"Create a separate account using your email. Verify your email using the verification link.",
    otpExpires:"OTP expires in",
    otpExpired:"OTP Expired! Please request a new OTP.",
    resendIn:"Resend OTP in",
    connectingGoogle:"Connecting to Google...",
    pleaseWait:"Please wait...",

    invalidEmail:"Please enter a valid email address.",
    invalidPassword:"Please enter your password.",
    invalidPhone:"Please enter a valid mobile number.",
    enterOtp:"Please enter the 6-digit OTP.",
    enterEmail:"Enter your email to receive a password reset link.",
    passwordMismatch:"Passwords do not match.",
    weakPassword:"Password must contain at least 6 characters.",
    otpSent:"SMS OTP has been sent. Enter it within 60 seconds.",
    emailCreated:"Email account created. Please verify your email.",
    verificationSent:"Verification link has been sent to your email.",
    emailNotVerified:"Your email is not verified yet. Click the verification link.",
    resetSent:"Password reset link has been sent to your email.",
    enterOtpFirst:"Please request an OTP first.",
    expiredOtp:"OTP has expired. Please request a new OTP.",
    wrongOtp:"Incorrect OTP. Please try again.",
    mobileRequired:"Please enter your mobile number.",
    networkError:"Check your internet connection and try again.",
    unsupportedLanguage:"This language is not supported yet.",
    notificationNotice:"Notifications service will be connected during development.",
    profileNotice:"Profile service will be connected during development.",
    helpNotice:"Help Center service will be connected during development."
  },

  ta: {
    home:"முகப்பு", jobs:"வேலைவாய்ப்புகள்",
    shopping:"ஷாப்பிங்", education:"கல்வி",
    ai:"AI உதவியாளர்", browser:"உலாவி",
    randomChat:"சீரற்ற அரட்டை",
    parcelSafety:"பார்சல் பாதுகாப்பு",
    localServices:"உள்ளூர் சேவைகள்",
    safetyHelp:"பாதுகாப்பு மற்றும் உதவி",
    premium:"பிரீமியம்", language:"மொழி",
    welcome:"RYZON-க்கு உங்களை வரவேற்கிறோம்!",
    tagline:"உங்கள் உலகம். உங்கள் மொழி. உங்கள் வாய்ப்புகள்.",
    search:"🔍 RYZON-ஐ தேடுங்கள்...",
    mainServices:"முக்கிய சேவைகள்",
    projectIdeas:"திட்ட யோசனைகள்",
    projectMarket:"திட்டச் சந்தை",
    scamAlert:"⚠️ மோசடி எச்சரிக்கை: OTP, UPI PIN அல்லது வங்கி விவரங்களை யாரிடமும் பகிர வேண்டாம். ⚠️",

    jobsTitle:"வேலைவாய்ப்புகள் மற்றும் தொழில்",
    jobsDescription:"வேலை வாய்ப்புகள் மற்றும் தொழில் தகவல்களைக் கண்டறியுங்கள்",
    searchJobs:"வேலை தேடல்",
    jobPlaceholder:"வேலைப் பெயர் அல்லது முக்கியச் சொல்லை உள்ளிடுங்கள்",
    allCategories:"அனைத்து பிரிவுகள்",
    governmentJobs:"அரசு வேலைகள்",
    privateJobs:"தனியார் வேலைகள்",
    itJobs:"IT வேலைகள்", bankingJobs:"வங்கி வேலைகள்",
    searchButton:"தேடு",
    governmentDescription:"அரசு வேலைவாய்ப்பு அறிவிப்புகளைப் பாருங்கள்.",
    bankingDescription:"வங்கி வேலைவாய்ப்பு இணையதளங்களைப் பாருங்கள்.",
    privateDescription:"தனியார் மற்றும் தொழில்நுட்ப வேலைகளைத் தேடுங்கள்.",
    jobSearch:"வேலை தேடல்",
    jobSearchHelp:"பிரிவைத் தேர்ந்தெடுத்து முக்கியச் சொல்லை உள்ளிட்டு தேடுங்கள்.",
    searchingFor:"தேடுவது:",

    loginTitle:"RYZON-க்கு உங்களை வரவேற்கிறோம்",
    loginDescription:"உள்நுழையுங்கள் அல்லது கணக்கை உருவாக்குங்கள்",
    login:"உள்நுழைவு", signUp:"புதிய கணக்கு",
    email:"மின்னஞ்சல்", mobile:"மொபைல்",
    emailPlaceholder:"உங்கள் Email-ஐ உள்ளிடுங்கள்",
    passwordPlaceholder:"Password உள்ளிடுங்கள்",
    confirmPassword:"Password மீண்டும் உள்ளிடுங்கள்",
    rememberMe:"என்னை நினைவில் வைத்துக்கொள்",
    loginEmail:"Email மூலம் உள்நுழையுங்கள்",
    createAccount:"கணக்கை உருவாக்குங்கள்",
    forgotPassword:"Password மறந்துவிட்டதா?",
    welcomeBack:"மீண்டும் வரவேற்கிறோம்! தொடர உள்நுழையுங்கள்",
    createAccountTitle:"உங்கள் RYZON கணக்கை உருவாக்குங்கள்",
    noAccount:"கணக்கு இல்லையா?",
    alreadyAccount:"ஏற்கனவே கணக்கு உள்ளதா?",
    mobileLogin:"மொபைல் OTP உள்நுழைவு",
    mobileSignup:"மொபைல் புதிய கணக்கு",
    phonePlaceholder:"மொபைல் எண்",
    sendOtp:"OTP அனுப்புங்கள்",
    resendOtp:"OTP மீண்டும் அனுப்புங்கள்",
    verifyOtp:"OTP சரிபார்க்கவும்",
    otpPlaceholder:"6 இலக்க OTP உள்ளிடுங்கள்",
    countryNote:"Country Code தேர்வு செய்ய Flag-ஐ அழுத்துங்கள்.",
    phoneDescription:"OTP பெற உங்கள் மொபைல் எண்ணை உள்ளிடுங்கள்.",
    phoneSignupDescription:"மொபைல் எண்ணை உள்ளிட்டு OTP சரிபார்த்து கணக்கை உருவாக்குங்கள்.",
    googleLogin:"Google மூலம் தொடருங்கள்",
    show:"காட்டு", hide:"மறை",
    or:"அல்லது",
    verifyEmail:"Email சரிபார்த்துவிட்டேன்",
    verificationText:"உங்கள் Email-ஐத் திறந்து Verification Link-ஐ அழுத்துங்கள்.",
    successTitle:"உள்நுழைவு வெற்றிகரமாக முடிந்தது!",
    successWelcome:"RYZON-க்கு வரவேற்கிறோம்",
    lastLogin:"கடைசி உள்நுழைவு:",
    terms:"விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    privacy:"தனியுரிமைக் கொள்கை",
    passwordNote:"உங்கள் Email மூலம் தனியாக கணக்கை உருவாக்கலாம். Verification Link மூலம் Email-ஐ சரிபார்க்க வேண்டும்.",
    otpExpires:"OTP காலாவதியாகும் நேரம்:",
    otpExpired:"OTP காலாவதியாகிவிட்டது! புதிய OTP பெறுங்கள்.",
    resendIn:"மீண்டும் OTP அனுப்ப:",
    connectingGoogle:"Google உடன் இணைக்கப்படுகிறது...",
    pleaseWait:"தயவுசெய்து காத்திருக்கவும்...",

    invalidEmail:"சரியான Email முகவரியை உள்ளிடுங்கள்.",
    invalidPassword:"Password உள்ளிடுங்கள்.",
    invalidPhone:"சரியான மொபைல் எண்ணை உள்ளிடுங்கள்.",
    enterOtp:"6 இலக்க OTP உள்ளிடுங்கள்.",
    enterEmail:"Password Reset Link பெற Email உள்ளிடுங்கள்.",
    passwordMismatch:"இரண்டு Password-களும் ஒன்றாக இல்லை.",
    weakPassword:"Password குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்.",
    otpSent:"SMS OTP அனுப்பப்பட்டுள்ளது. 60 விநாடிகளுக்குள் உள்ளிடுங்கள்.",
    emailCreated:"Email கணக்கு உருவாக்கப்பட்டது. Email-ஐ சரிபார்க்கவும்.",
    verificationSent:"Verification Link உங்கள் Email-க்கு அனுப்பப்பட்டுள்ளது.",
    emailNotVerified:"Email இன்னும் சரிபார்க்கப்படவில்லை. Verification Link-ஐ அழுத்துங்கள்.",
    resetSent:"Password Reset Link உங்கள் Email-க்கு அனுப்பப்பட்டுள்ளது.",
    enterOtpFirst:"முதலில் OTP பெறுங்கள்.",
    expiredOtp:"OTP காலாவதியாகிவிட்டது. புதிய OTP பெறுங்கள்.",
    wrongOtp:"OTP தவறாக உள்ளது. மீண்டும் முயற்சிக்கவும்.",
    mobileRequired:"மொபைல் எண்ணை உள்ளிடுங்கள்.",
    networkError:"Internet Connection சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    unsupportedLanguage:"இந்த மொழி இன்னும் ஆதரிக்கப்படவில்லை.",
    notificationNotice:"அறிவிப்பு வசதி உருவாக்கப் பணியில் உள்ளது.",
    profileNotice:"சுயவிவர வசதி உருவாக்கப் பணியில் உள்ளது.",
    helpNotice:"உதவி மைய வசதி உருவாக்கப் பணியில் உள்ளது."
  }
};

function getRYZONPrimaryLanguage() {
  const saved = localStorage.getItem(RYZON_LANG_KEY);
  return saved || "en";
}

function getRYZONLanguage() {
  const primary = getRYZONPrimaryLanguage();
  const temporary = localStorage.getItem(RYZON_TEMP_LANG_KEY);

  if (temporary === "true") return "en";

  return translations[primary] ? primary : "en";
}

function setRYZONLanguage(language) {
  if (!translations[language]) {
    alert(translations[getRYZONLanguage()].unsupportedLanguage);
    return;
  }

  localStorage.setItem(RYZON_LANG_KEY, language);
  localStorage.removeItem(RYZON_TEMP_LANG_KEY);
  applyRYZONLanguage();
}

function toggleRYZONLanguage() {
  const primary = getRYZONPrimaryLanguage();

  if (primary === "en") {
    return;
  }

  const temporary = localStorage.getItem(RYZON_TEMP_LANG_KEY);

  if (temporary === "true") {
    localStorage.removeItem(RYZON_TEMP_LANG_KEY);
  } else {
    localStorage.setItem(RYZON_TEMP_LANG_KEY, "true");
  }

  applyRYZONLanguage();
}

function getRYZONText(key) {
  const language = getRYZONLanguage();
  const dictionary = translations[language] || translations.en;
  return dictionary[key] || translations.en[key] || key;
}

function applyRYZONLanguage() {
  const language = getRYZONLanguage();
  const dictionary = translations[language] || translations.en;

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

  document.querySelectorAll("[data-ryzon-language-toggle]").forEach(button => {
    const primary = getRYZONPrimaryLanguage();
    button.textContent =
      localStorage.getItem(RYZON_TEMP_LANG_KEY) === "true"
        ? "🌐 " + (translations[primary] ? translations[primary].language === "மொழி" ? "தமிழ்" : primary : primary)
        : "🌐 English";
  });
}

document.addEventListener("DOMContentLoaded", applyRYZONLanguage);

window.addEventListener("storage", function(event) {
  if (
    event.key === RYZON_LANG_KEY ||
    event.key === RYZON_TEMP_LANG_KEY
  ) {
    applyRYZONLanguage();
  }
});
