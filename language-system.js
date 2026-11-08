
const RYZON_LANG_KEY = "ryzonLanguage";
const RYZON_TEMP_LANG_KEY = "ryzonTemporaryEnglish";

const languageNames = {
  en: "English",
  ta: "தமிழ்",
  hi: "हिन्दी",
  te: "తెలుగు",
  ml: "മലയാളം",
  kn: "ಕನ್ನಡ",
  bn: "বাংলা",
  mr: "मराठी",
  gu: "ગુજરાતી",
  pa: "ਪੰਜਾਬੀ",
  ur: "اردو",
  or: "ଓଡ଼ିଆ",
  as: "অসমীয়া",
  ne: "नेपाली",
  si: "සිංහල",
  ar: "العربية",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
  zh: "简体中文",
  ja: "日本語",
  ko: "한국어"
};

// English and Tamil: your original translations are preserved.
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
    show:"Show", hide:"Hide", or:"OR",
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
    show:"காட்டு", hide:"மறை", or:"அல்லது",
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

// Additional language translations for common app controls.
// Any key not listed here safely falls back to English.
const commonTranslations = {
  hi: {
    home:"होम", jobs:"नौकरियां", shopping:"खरीदारी", education:"शिक्षा",
    ai:"AI सहायक", browser:"ब्राउज़र", randomChat:"रैंडम चैट",
    premium:"प्रीमियम", language:"भाषा", login:"लॉगिन",
    signUp:"साइन अप", email:"ईमेल", mobile:"मोबाइल",
    sendOtp:"OTP भेजें", verifyOtp:"OTP सत्यापित करें",
    searchButton:"खोजें", rememberMe:"मुझे याद रखें",
    createAccount:"खाता बनाएं", forgotPassword:"पासवर्ड भूल गए?",
    pleaseWait:"कृपया प्रतीक्षा करें"
  },
  te: {
    home:"హోమ్", jobs:"ఉద్యోగాలు", shopping:"షాపింగ్", education:"విద్య",
    ai:"AI సహాయకుడు", browser:"బ్రౌజర్", randomChat:"రాండమ్ చాట్",
    premium:"ప్రీమియం", language:"భాష", login:"లాగిన్",
    signUp:"సైన్ అప్", email:"ఈమెయిల్", mobile:"మొబైల్",
    sendOtp:"OTP పంపండి", verifyOtp:"OTP ధృవీకరించండి",
    searchButton:"వెతకండి", rememberMe:"నన్ను గుర్తుంచుకోండి",
    createAccount:"ఖాతా సృష్టించండి", forgotPassword:"పాస్‌వర్డ్ మర్చిపోయారా?",
    pleaseWait:"దయచేసి వేచి ఉండండి"
  },
  ml: {
    home:"ഹോം", jobs:"ജോലികൾ", shopping:"ഷോപ്പിംഗ്", education:"വിദ്യാഭ്യാസം",
    ai:"AI സഹായി", browser:"ബ്രൗസർ", randomChat:"റാൻഡം ചാറ്റ്",
    premium:"പ്രീമിയം", language:"ഭാഷ", login:"ലോഗിൻ",
    signUp:"സൈൻ അപ്പ്", email:"ഇമെയിൽ", mobile:"മൊബൈൽ",
    sendOtp:"OTP അയയ്ക്കുക", verifyOtp:"OTP സ്ഥിരീകരിക്കുക",
    searchButton:"തിരയുക", rememberMe:"എന്നെ ഓർമ്മിക്കുക",
    createAccount:"അക്കൗണ്ട് സൃഷ്ടിക്കുക", forgotPassword:"പാസ്‌വേഡ് മറന്നോ?",
    pleaseWait:"ദയവായി കാത്തിരിക്കുക"
  },
  kn: {
    home:"ಮುಖಪುಟ", jobs:"ಉದ್ಯೋಗಗಳು", shopping:"ಶಾಪಿಂಗ್", education:"ಶಿಕ್ಷಣ",
    ai:"AI ಸಹಾಯಕ", browser:"ಬ್ರೌಸರ್", randomChat:"ರ್ಯಾಂಡಮ್ ಚಾಟ್",
    premium:"ಪ್ರೀಮಿಯಂ", language:"ಭಾಷೆ", login:"ಲಾಗಿನ್",
    signUp:"ಸೈನ್ ಅಪ್", email:"ಇಮೇಲ್", mobile:"ಮೊಬೈಲ್",
    sendOtp:"OTP ಕಳುಹಿಸಿ", verifyOtp:"OTP ಪರಿಶೀಲಿಸಿ",
    searchButton:"ಹುಡುಕಿ", rememberMe:"ನನ್ನನ್ನು ನೆನಪಿಡಿ",
    createAccount:"ಖಾತೆ ರಚಿಸಿ", forgotPassword:"ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
    pleaseWait:"ದಯವಿಟ್ಟು ಕಾಯಿರಿ"
  },
  bn: {
    home:"হোম", jobs:"চাকরি", shopping:"কেনাকাটা", education:"শিক্ষা",
    ai:"AI সহকারী", browser:"ব্রাউজার", randomChat:"র‍্যান্ডম চ্যাট",
    premium:"প্রিমিয়াম", language:"ভাষা", login:"লগইন",
    signUp:"সাইন আপ", email:"ইমেইল", mobile:"মোবাইল",
    sendOtp:"OTP পাঠান", verifyOtp:"OTP যাচাই করুন",
    searchButton:"খুঁজুন", rememberMe:"আমাকে মনে রাখুন",
    createAccount:"অ্যাকাউন্ট তৈরি করুন", forgotPassword:"পাসওয়ার্ড ভুলে গেছেন?",
    pleaseWait:"অনুগ্রহ করে অপেক্ষা করুন"
  },
  mr: {
    home:"मुख्यपृष्ठ", jobs:"नोकऱ्या", shopping:"खरेदी", education:"शिक्षण",
    ai:"AI सहाय्यक", browser:"ब्राउझर", randomChat:"रँडम चॅट",
    premium:"प्रीमियम", language:"भाषा", login:"लॉगिन",
    signUp:"साइन अप", email:"ईमेल", mobile:"मोबाइल",
    sendOtp:"OTP पाठवा", verifyOtp:"OTP सत्यापित करा",
    searchButton:"शोधा", rememberMe:"माझी आठवण ठेवा",
    createAccount:"खाते तयार करा", forgotPassword:"पासवर्ड विसरलात?",
    pleaseWait:"कृपया प्रतीक्षा करा"
  },
  gu: {
    home:"હોમ", jobs:"નોકરીઓ", shopping:"ખરીદી", education:"શિક્ષણ",
    ai:"AI સહાયક", browser:"બ્રાઉઝર", randomChat:"રેન્ડમ ચેટ",
    premium:"પ્રીમિયમ", language:"ભાષા", login:"લૉગિન",
    signUp:"સાઇન અપ", email:"ઇમેઇલ", mobile:"મોબાઇલ",
    sendOtp:"OTP મોકલો", verifyOtp:"OTP ચકાસો",
    searchButton:"શોધો", rememberMe:"મને યાદ રાખો",
    createAccount:"ખાતું બનાવો", forgotPassword:"પાસવર્ડ ભૂલી ગયા?",
    pleaseWait:"કૃપા કરીને રાહ જુઓ"
  },
  pa: {
    home:"ਮੁੱਖ ਪੰਨਾ", jobs:"ਨੌਕਰੀਆਂ", shopping:"ਖਰੀਦਦਾਰੀ", education:"ਸਿੱਖਿਆ",
    ai:"AI ਸਹਾਇਕ", browser:"ਬ੍ਰਾਊਜ਼ਰ", randomChat:"ਰੈਂਡਮ ਚੈਟ",
    premium:"ਪ੍ਰੀਮੀਅਮ", language:"ਭਾਸ਼ਾ", login:"ਲੌਗਇਨ",
    signUp:"ਸਾਈਨ ਅੱਪ", email:"ਈਮੇਲ", mobile:"ਮੋਬਾਈਲ",
    sendOtp:"OTP ਭੇਜੋ", verifyOtp:"OTP ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    searchButton:"ਖੋਜੋ", rememberMe:"ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ",
    createAccount:"ਖਾਤਾ ਬਣਾਓ", forgotPassword:"ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
    pleaseWait:"ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ"
  },
  ur: {
    home:"ہوم", jobs:"ملازمتیں", shopping:"خریداری", education:"تعلیم",
    ai:"AI معاون", browser:"براؤزر", randomChat:"رینڈم چیٹ",
    premium:"پریمیم", language:"زبان", login:"لاگ ان",
    signUp:"سائن اپ", email:"ای میل", mobile:"موبائل",
    sendOtp:"OTP بھیجیں", verifyOtp:"OTP کی تصدیق کریں",
    searchButton:"تلاش کریں", rememberMe:"مجھے یاد رکھیں",
    createAccount:"اکاؤنٹ بنائیں", forgotPassword:"پاس ورڈ بھول گئے؟",
    pleaseWait:"براہ کرم انتظار کریں"
  },
  or: {
    home:"ମୁଖ୍ୟ ପୃଷ୍ଠା", jobs:"ଚାକିରି", shopping:"କିଣାକିଣି", education:"ଶିକ୍ଷା",
    ai:"AI ସହାୟକ", browser:"ବ୍ରାଉଜର", randomChat:"ରାଣ୍ଡମ୍ ଚାଟ୍",
    premium:"ପ୍ରିମିୟମ୍", language:"ଭାଷା", login:"ଲଗଇନ୍",
    signUp:"ସାଇନ୍ ଅପ୍", email:"ଇମେଲ୍", mobile:"ମୋବାଇଲ୍",
    sendOtp:"OTP ପଠାନ୍ତୁ", verifyOtp:"OTP ଯାଞ୍ଚ କରନ୍ତୁ",
    searchButton:"ଖୋଜନ୍ତୁ", rememberMe:"ମୋତେ ମନେ ରଖନ୍ତୁ",
    createAccount:"ଖାତା ତିଆରି କରନ୍ତୁ", forgotPassword:"ପାସୱାର୍ଡ ଭୁଲିଗଲେ?",
    pleaseWait:"ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ"
  },
  as: {
    home:"মুখ্য পৃষ্ঠা", jobs:"চাকৰি", shopping:"ক্ৰয়", education:"শিক্ষা",
    ai:"AI সহায়ক", browser:"ব্ৰাউজাৰ", randomChat:"ৰেণ্ডম চেট",
    premium:"প্ৰিমিয়াম", language:"ভাষা", login:"লগইন",
    signUp:"চাইন আপ", email:"ইমেইল", mobile:"ম’বাইল",
    sendOtp:"OTP পঠিয়াওক", verifyOtp:"OTP পৰীক্ষা কৰক",
    searchButton:"বিচাৰক", rememberMe:"মোক মনত ৰাখক",
    createAccount:"একাউণ্ট সৃষ্টি কৰক", forgotPassword:"পাছৱৰ্ড পাহৰিলে?",
    pleaseWait:"অনুগ্ৰহ কৰি অপেক্ষা কৰক"
  },
  ne: {
    home:"गृहपृष्ठ", jobs:"रोजगारी", shopping:"किनमेल", education:"शिक्षा",
    ai:"AI सहायक", browser:"ब्राउजर", randomChat:"र्‍यान्डम च्याट",
    premium:"प्रिमियम", language:"भाषा", login:"लगइन",
    signUp:"साइन अप", email:"इमेल", mobile:"मोबाइल",
    sendOtp:"OTP पठाउनुहोस्", verifyOtp:"OTP प्रमाणित गर्नुहोस्",
    searchButton:"खोज्नुहोस्", rememberMe:"मलाई सम्झनुहोस्",
    createAccount:"खाता बनाउनुहोस्", forgotPassword:"पासवर्ड बिर्सनुभयो?",
    pleaseWait:"कृपया पर्खनुहोस्"
  },
  si: {
    home:"මුල් පිටුව", jobs:"රැකියා", shopping:"සාප්පු සවාරි", education:"අධ්‍යාපනය",
    ai:"AI සහායක", browser:"බ්‍රවුසරය", randomChat:"අහඹු කතාබහ",
    premium:"ප්‍රිමියම්", language:"භාෂාව", login:"පිවිසෙන්න",
    signUp:"ලියාපදිංචි වන්න", email:"විද්‍යුත් තැපෑල", mobile:"ජංගම දුරකථනය",
    sendOtp:"OTP යවන්න", verifyOtp:"OTP තහවුරු කරන්න",
    searchButton:"සොයන්න", rememberMe:"මාව මතක තබා ගන්න",
    createAccount:"ගිණුම සාදන්න", forgotPassword:"මුරපදය අමතකද?",
    pleaseWait:"කරුණාකර රැඳී සිටින්න"
  },
  ar: {
    home:"الرئيسية", jobs:"الوظائف", shopping:"التسوق", education:"التعليم",
    ai:"مساعد الذكاء الاصطناعي", browser:"المتصفح", randomChat:"دردشة عشوائية",
    premium:"مميز", language:"اللغة", login:"تسجيل الدخول",
    signUp:"إنشاء حساب", email:"البريد الإلكتروني", mobile:"الهاتف",
    sendOtp:"إرسال OTP", verifyOtp:"تحقق من OTP",
    searchButton:"بحث", rememberMe:"تذكرني",
    createAccount:"إنشاء حساب", forgotPassword:"هل نسيت كلمة المرور؟",
    pleaseWait:"يرجى الانتظار"
  },
  fr: {
    home:"Accueil", jobs:"Emplois", shopping:"Achats", education:"Éducation",
    ai:"Assistant IA", browser:"Navigateur", randomChat:"Discussion aléatoire",
    premium:"Premium", language:"Langue", login:"Connexion",
    signUp:"S’inscrire", email:"E-mail", mobile:"Mobile",
    sendOtp:"Envoyer OTP", verifyOtp:"Vérifier OTP",
    searchButton:"Rechercher", rememberMe:"Se souvenir de moi",
    createAccount:"Créer un compte", forgotPassword:"Mot de passe oublié ?",
    pleaseWait:"Veuillez patienter"
  },
  de: {
    home:"Startseite", jobs:"Jobs", shopping:"Einkaufen", education:"Bildung",
    ai:"KI-Assistent", browser:"Browser", randomChat:"Zufälliger Chat",
    premium:"Premium", language:"Sprache", login:"Anmelden",
    signUp:"Registrieren", email:"E-Mail", mobile:"Mobiltelefon",
    sendOtp:"OTP senden", verifyOtp:"OTP bestätigen",
    searchButton:"Suchen", rememberMe:"Angemeldet bleiben",
    createAccount:"Konto erstellen", forgotPassword:"Passwort vergessen?",
    pleaseWait:"Bitte warten"
  },
  es: {
    home:"Inicio", jobs:"Empleos", shopping:"Compras", education:"Educación",
    ai:"Asistente de IA", browser:"Navegador", randomChat:"Chat aleatorio",
    premium:"Premium", language:"Idioma", login:"Iniciar sesión",
    signUp:"Registrarse", email:"Correo electrónico", mobile:"Móvil",
    sendOtp:"Enviar OTP", verifyOtp:"Verificar OTP",
    searchButton:"Buscar", rememberMe:"Recordarme",
    createAccount:"Crear cuenta", forgotPassword:"¿Olvidaste tu contraseña?",
    pleaseWait:"Por favor espera"
  },
  pt: {
    home:"Início", jobs:"Empregos", shopping:"Compras", education:"Educação",
    ai:"Assistente de IA", browser:"Navegador", randomChat:"Chat aleatório",
    premium:"Premium", language:"Idioma", login:"Entrar",
    signUp:"Cadastrar", email:"E-mail", mobile:"Celular",
    sendOtp:"Enviar OTP", verifyOtp:"Verificar OTP",
    searchButton:"Pesquisar", rememberMe:"Lembrar de mim",
    createAccount:"Criar conta", forgotPassword:"Esqueceu a senha?",
    pleaseWait:"Por favor, aguarde"
  },
  zh: {
    home:"首页", jobs:"工作", shopping:"购物", education:"教育",
    ai:"AI 助手", browser:"浏览器", randomChat:"随机聊天",
    premium:"高级版", language:"语言", login:"登录",
    signUp:"注册", email:"电子邮件", mobile:"手机",
    sendOtp:"发送 OTP", verifyOtp:"验证 OTP",
    searchButton:"搜索", rememberMe:"记住我",
    createAccount:"创建账户", forgotPassword:"忘记密码？",
    pleaseWait:"请稍候"
  },
  ja: {
    home:"ホーム", jobs:"仕事", shopping:"ショッピング", education:"教育",
    ai:"AIアシスタント", browser:"ブラウザー", randomChat:"ランダムチャット",
    premium:"プレミアム", language:"言語", login:"ログイン",
    signUp:"新規登録", email:"メール", mobile:"携帯電話",
    sendOtp:"OTPを送信", verifyOtp:"OTPを確認",
    searchButton:"検索", rememberMe:"ログイン状態を保持",
    createAccount:"アカウントを作成", forgotPassword:"パスワードをお忘れですか？",
    pleaseWait:"お待ちください"
  },
  ko: {
    home:"홈", jobs:"일자리", shopping:"쇼핑", education:"교육",
    ai:"AI 도우미", browser:"브라우저", randomChat:"랜덤 채팅",
    premium:"프리미엄", language:"언어", login:"로그인",
    signUp:"가입하기", email:"이메일", mobile:"휴대전화",
    sendOtp:"OTP 보내기", verifyOtp:"OTP 확인",
    searchButton:"검색", rememberMe:"로그인 유지",
    createAccount:"계정 만들기", forgotPassword:"비밀번호를 잊으셨나요?",
    pleaseWait:"잠시 기다려 주세요"
  }
};

// Add the common translations to the main language dictionaries.
Object.keys(commonTranslations).forEach(language => {
  translations[language] = commonTranslations[language];
});

function getRYZONPrimaryLanguage() {
  const saved = localStorage.getItem(RYZON_LANG_KEY);
  return translations[saved] ? saved : "en";
}

function getRYZONLanguage() {
  const primary = getRYZONPrimaryLanguage();
  const temporary = localStorage.getItem(RYZON_TEMP_LANG_KEY);

  if (temporary === "true") return "en";
  return primary;
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

  if (primary === "en") return;

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
    element.textContent =
      dictionary[key] || translations.en[key] || key;
  });

  document.querySelectorAll("[data-ryzon-placeholder]").forEach(element => {
    const key = element.getAttribute("data-ryzon-placeholder");
    element.placeholder =
      dictionary[key] || translations.en[key] || key;
  });

  document.querySelectorAll("[data-ryzon-language-toggle]").forEach(button => {
    const primary = getRYZONPrimaryLanguage();
    const isTemporaryEnglish =
      localStorage.getItem(RYZON_TEMP_LANG_KEY) === "true";

    button.textContent = isTemporaryEnglish
      ? "🌐 " + (languageNames[primary] || "Language")
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
