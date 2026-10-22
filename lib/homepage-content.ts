export const HOME_TITLE =
  "Norway IPTV: IPTV Nordic, IPTV Norge & Norsk IPTV Buy 77% Off";

export const HOME_DESCRIPTION =
  "Buy Norway IPTV. Explore norsk IPTV, IPTV Norge, Nordic channels, football, HD & 4K streaming. Compare IPTV abonnement, prices, compatible devices & players";

export const WHATSAPP_NUMBER = "447482794475";

export function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const benefits = [
  "Easy IPTV Subscription Activation",
  "Flexible IPTV Abonnement",
  "HD & 4K Streaming Options",
  "Live TV, Movies & Series",
  "Multi-Device Support",
] as const;

export const plans = [
  {
    name: "1 Month",
    features: [
      "30-Day Risk-Free Guarantee",
      "Anti-Freeze Technology",
      "24/7 Priority Support",
      "EPG & Catch-Up TV",
      "Daily Content Updates",
      "Multi-Device Support",
    ],
  },
  {
    name: "3 Months",
    features: [
      "30-Day Risk-Free Guarantee",
      "Multi-Device Support",
      "Anti-Freeze Technology",
      "Daily Content Updates",
      "EPG & Catch-Up TV",
      "Instant Account Activation",
    ],
  },
  {
    name: "6 Months",
    features: [
      "30-Day Risk-Free Guarantee",
      "Multi-Device Support",
      "Anti-Freeze Technology",
      "Instant Account Activation",
      "24/7 Priority Support",
      "Daily Content Updates",
    ],
  },
  {
    name: "12 Months",
    features: [
      "30-Day Risk-Free Guarantee",
      "24/7 Priority Support",
      "Instant Account Activation",
      "EPG & Catch-Up TV",
      "Anti-Freeze Technology",
      "Daily Content Updates",
    ],
  },
] as const;

export const devices = [
  {
    title: "Fire TV Stick / Fire TV",
    detail:
      "Amazon Fire TV Stick, Fire TV Stick 4K, Fire TV Stick 4K Max, Fire TV Cube",
  },
  {
    title: "Android Phones & Tablets",
    detail:
      "Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, OPPO and Huawei",
  },
  {
    title: "Android TV Boxes",
    detail:
      "NVIDIA Shield TV, Xiaomi TV Box, compatible H96 Max and X96 Mini models",
  },
  {
    title: "Samsung & LG Smart TVs",
    detail:
      "Samsung Tizen, LG webOS, Sony, Philips, Hisense and TCL Smart TVs, depending on model",
  },
  {
    title: "Apple Devices",
    detail: "iPhone, iPad, Apple TV and compatible iPod touch models",
  },
  {
    title: "Roku Devices",
    detail:
      "Roku Express, Roku Streaming Stick, Roku Ultra and Roku TV, subject to app or streaming compatibility",
  },
  {
    title: "Windows & macOS",
    detail: "Windows 10, Windows 11, Microsoft Surface, MacBook and iMac",
  },
  {
    title: "MAG & Formuler Devices",
    detail:
      "Supported MAG boxes, Formuler Z8, Formuler Z10 and compatible MyTVOnline devices",
  },
  {
    title: "Enigma2 Receivers",
    detail:
      "Dreambox, Vu+, Zgemma, Octagon and Gigablue receivers with compatible software",
  },
] as const;

export const installGuides = [
  {
    title: "IPTV on Amazon Fire TV Stick",
    intro:
      "Amazon Fire TV Stick is a popular option for adding streaming applications to a television.",
    how: "How to install or Set Up IPTV on Firestick:",
    steps: [
      "Connect your Fire TV Stick to your television and internet network.",
      "Open the Amazon Appstore and search for a compatible IPTV player, such as IPTV Smarters Pro or TiviMate, if available for your device.",
      "Select the official app listing and choose Download or Get.",
      "Open the application and enter your valid subscription details using the supported login method.",
      "Follow the provider's instructions to load your authorised channels and programme guide.",
    ],
    cta: "Download a Compatible Fire TV Player",
  },
  {
    title: "IPTV on Samsung and LG Smart TVs",
    intro:
      "Samsung and LG televisions use different operating systems, so the available IPTV applications may differ.",
    how: "How to install IPTV on a Smart TV:",
    steps: [
      "Connect your Samsung or LG TV to the internet.",
      "Open the TV's official app store.",
      "Search for a compatible player, such as IBO Player, IPTV Smarters Player or Smart IPTV, where available.",
      "Install the application and open it.",
      "Follow the player's instructions to connect your authorised IPTV subscription or playlist.",
    ],
    note: "Some apps may require a separate licence or activation payment. Check the app's terms before purchasing.",
    cta: "Find Your Smart TV IPTV Player",
  },
  {
    title: "IPTV on Android TV and Google TV",
    intro:
      "Android TV and Google TV devices often support a wider selection of IPTV players than other television platforms.",
    how: "How to download IPTV on Android TV:",
    steps: [
      "Open the Google Play Store on your Android TV or Google TV device.",
      "Search for a compatible application, such as TiviMate, IPTV Smarters Pro, Televizo, or XCIPTV.",
      "Select the appropriate official app and install it.",
      "Launch the application and choose its supported login or playlist option.",
      "Enter your valid subscription details and follow the on-screen setup instructions.",
    ],
    note: "The available applications and features depend on your device and region.",
    cta: "Download an Android TV IPTV Player",
  },
  {
    title: "IPTV on Android Phones and Tablets",
    intro:
      "You can use a compatible IPTV player on supported Android smartphones and tablets, including Samsung Galaxy, Google Pixel, OnePlus, and Xiaomi devices.",
    how: "How to download or set up IPTV on Android:",
    steps: [
      "Open the Google Play Store.",
      "Search for IPTV Smarters Pro, Televizo, or another compatible player.",
      "Download the official application.",
      "Open the app and follow its instructions to configure your subscription or authorised M3U playlist.",
      "Test playback using your internet connection.",
    ],
    note: "Avoid downloading APK files from unfamiliar websites. Use the official app store or the developer's verified download source.",
    cta: "Download an Android IPTV Player",
  },
  {
    title: "IPTV on Apple TV, iPhone and iPad",
    intro:
      "Apple devices require players compatible with iOS, iPadOS or tvOS, depending on the device.",
    how: "How to install IPTV on Apple devices:",
    steps: [
      "Open the App Store on your iPhone, iPad or Apple TV.",
      "Search for a compatible player, such as IPTVX, UHF, iPlayTV or another available option.",
      "Check the app's device compatibility and install it.",
      "Open the player and follow the instructions for adding your authorised subscription or playlist.",
      "Confirm that the content loads correctly.",
    ],
    note: "An app available on iPhone may not be available on Apple TV, so check the exact platform before downloading.",
    cta: "Find an Apple-Compatible IPTV Player",
  },
  {
    title: "IPTV on Windows 10, Windows 11 and macOS",
    intro:
      "A computer can be a convenient option if you prefer watching television on a desktop or laptop.",
    how: "How to set up or install IPTV on a computer:",
    steps: [
      "Visit the official website or app store for a compatible player.",
      "Download VLC Media Player, Kodi, or another supported IPTV application.",
      "Install the application using the developer's instructions.",
      "Configure a supported stream, authorised M3U playlist or compatible IPTV connection.",
      "Test the stream and adjust playback settings if necessary.",
    ],
    note: "VLC is useful for compatible media streams, while Kodi can support a more configurable television interface through appropriate add-ons.",
    cta: "Download a Compatible IPTV Player for PC or Mac",
  },
  {
    title: "IPTV on MAG and Formuler Boxes",
    intro:
      "MAG and Formuler devices may use built-in portal software or dedicated applications rather than the same installation process used on a smartphone.",
    how: "How to configure your device:",
    steps: [
      "Connect the box to your television and internet network.",
      "Open the built-in portal or compatible player.",
      "Follow the device manufacturer's instructions to configure the authorised service connection.",
      "Enter the required portal or account information provided by your legitimate service provider.",
      "Restart or refresh the application if necessary, then test playback.",
    ],
    note: "The exact procedure varies by model. Formuler devices may use a compatible version of MyTVOnline, while MAG devices typically follow their supported portal configuration process.",
    cta: "View MAG & Formuler Setup Instructions",
  },
  {
    title: "IPTV on Enigma2 Receivers",
    intro:
      "Enigma2 receivers, including compatible Dreambox, Vu+, and Zgemma models, can support IPTV through suitable software and configuration.",
    how: "How to set up IPTV on Enigma2:",
    steps: [
      "Confirm that your receiver's firmware supports the required IPTV functionality.",
      "Consult the receiver's official documentation or trusted software repository.",
      "Install a compatible player or configure an authorised playlist using the supported method.",
      "Enter the required connection details and programme-guide settings.",
      "Test the configuration and restart the relevant software if needed.",
    ],
    note: "Setup methods differ by receiver, firmware, and plugin. Avoid unfamiliar scripts or configuration files from untrusted sources.",
    cta: "Read the Enigma2 IPTV Setup Guide",
  },
  {
    title: "IPTV on Roku and Chromecast",
    intro:
      "Roku and Chromecast have different installation methods, so it is important to identify which device you own.",
    steps: [],
    blocks: [
      {
        label: "Roku:",
        text: "Check the official Roku Channel Store for a compatible application. Third-party IPTV player availability is limited on some Roku models. If no compatible player is available, check whether your authorised provider offers another supported viewing method.",
      },
      {
        label: "Chromecast with Google TV:",
        text: "Open the Google Play Store and install a compatible IPTV player if available. Older Chromecast models generally rely on casting from a supported phone, tablet, or computer instead of installing apps directly on the device.",
      },
    ],
    cta: "Check Roku & Chromecast Compatibility",
  },
] as const;

export const whyConsider = [
  {
    title: "Norwegian and Nordic Television",
    text: "If you want Norwegian programming, news, or entertainment from Scandinavia, review the actual channel list. Search terms such as norge IPTV, Norwegian IPTV, IPTV Norway, and IPTV Scandinavia can help you discover relevant services, but they do not guarantee that a particular provider carries specific channels.",
  },
  {
    title: "Football and Live Sports",
    text: "Football fans often search for IPTV fotball or IPTV Premier League. Before subscribing, verify the availability of the matches you want to watch and whether the service holds the necessary broadcasting rights in Norway.",
  },
  {
    title: "HD and 4K Streaming",
    text: "Image quality depends on the source stream, your device, the application, and your internet connection. A service advertising IPTV 4K does not necessarily deliver every channel in native 4K resolution.",
  },
  {
    title: "Flexible Device Support",
    text: "A compatible player can make it possible to watch on a television, streaming stick, mobile device, or computer. However, each application has its own platform requirements and supported playlist formats.",
  },
  {
    title: "Clear Subscription Terms",
    text: "Compare the full subscription cost, renewal policy, supported connections, and refund conditions. A transparent IPTV abonnement should clearly explain what you are paying for.",
  },
] as const;

export const comparisonRows = [
  ["Channel selection", "Verify the actual Norwegian and Nordic channels included."],
  ["Sports coverage", "Confirm the relevant leagues, events, and broadcasting rights."],
  ["Picture quality", "Check the supported SD, HD, Full HD, and 4K formats."],
  ["Streaming stability", "Look for transparent service information and test performance where possible."],
  ["Device compatibility", "Confirm support for your TV, streaming device, or computer."],
  ["Subscription price", "Compare the full cost, billing period, and additional fees."],
  ["Customer support", "Check contact details, troubleshooting assistance, and response arrangements."],
  ["Legitimacy", "Verify the provider's identity and rights to distribute the content."],
] as const;

export const priceChecks = [
  "Monthly cost: Understand the regular payment and what it includes.",
  "Subscription duration: Compare monthly and longer-term plans.",
  "Renewal conditions: Check whether your subscription renews automatically.",
  "Simultaneous connections: Confirm how many screens can stream at the same time.",
  "Included features: Verify access to live TV, on-demand content, and programme guides.",
  "Refund policy: Read the conditions before committing to a longer plan.",
] as const;

export const footballChecks = [
  "Which competitions and matches are available.",
  "Whether the provider has the necessary broadcasting rights in Norway.",
  "Whether the relevant matches are included in your subscription.",
  "Which devices support the streams.",
  "Whether the advertised resolution applies to the sports channels you want.",
] as const;

export const nordicQuestions = [
  "Are the Norwegian channels you want included?",
  "Does the service offer relevant Swedish or Danish programming?",
  "Are subtitles and audio-language options available?",
  "Can you use the service on your preferred devices?",
  "Are the content and distribution rights properly licensed?",
] as const;

export const playerRows = [
  ["Samsung Smart TV", "IPTV Smarters Player, IBO Player, Smart IPTV, SS IPTV"],
  ["LG Smart TV", "IPTV Smarters Player, IBO Player, Smart IPTV, Flix IPTV"],
  ["Android TV and Google TV", "TiviMate, IPTV Smarters Pro, Televizo, XCIPTV, OTT Navigator"],
  ["Amazon Fire TV Stick", "TiviMate, IPTV Smarters Pro, compatible Fire TV players"],
  ["Android phones and tablets", "IPTV Smarters Pro, Televizo, GSE Smart IPTV"],
  ["Apple TV", "IPTVX, UHF, iPlayTV, compatible Smarters Player versions"],
  ["iPhone and iPad", "Smarters Player Lite, GSE Smart IPTV, IPTVX, compatible iOS players"],
  ["Windows PC", "VLC media player, Kodi, compatible Windows IPTV players"],
  ["macOS", "VLC media player, Kodi, compatible macOS IPTV players"],
  ["MAG devices", "Supported built-in portal software"],
  ["Formuler devices", "Compatible MyTVOnline versions"],
] as const;

export const setupSteps = [
  {
    title: "Step 1: Choose your service",
    text: "Review the content, subscription conditions, price, and distribution rights.",
  },
  {
    title: "Step 2: Select your device",
    text: "Check whether you plan to use a Smart TV, Fire TV Stick, Android TV box, Apple TV, phone, tablet, or computer.",
  },
  {
    title: "Step 3: Install a compatible player",
    text: "Use an official app store or the developer's verified installation instructions.",
  },
  {
    title: "Step 4: Configure access",
    text: "Follow the provider's documented process using the supported login or playlist format.",
  },
  {
    title: "Step 5: Test playback",
    text: "Confirm that the content loads correctly, the programme guide works if provided, and the stream performs reliably.",
  },
] as const;

export const resellerItems = [
  {
    title: "Reseller Account Management",
    text: "Manage customer accounts and subscriptions through the available reseller tools.",
  },
  {
    title: "Account Activation",
    text: "Understand account setup, activation procedures and subscription management.",
  },
  {
    title: "Wholesale Pricing",
    text: "Review reseller rates, minimum orders, payment terms and subscription expiry policies.",
  },
  {
    title: "Technical Support",
    text: "Check available support channels, setup guidance and troubleshooting resources.",
  },
  {
    title: "Customer Data & Legal Responsibilities",
    text: "Protect customer information and distribute only content you are authorised to provide.",
  },
  {
    title: "Customer Service & Retention",
    text: "Help customers understand their subscriptions, compatible devices and renewal terms.",
  },
] as const;

export const faqs = [
  {
    question: "What is the best IPTV service in Norway?",
    answer:
      "The beste IPTV service depends on channel selection, streaming quality, device compatibility, price and customer support. Compare available features and choose a provider with the necessary content distribution rights.",
  },
  {
    question: "Is IPTV legal in Norway?",
    answer:
      "IPTV technology is legal, but services must have the necessary rights to distribute copyrighted content. Always verify a provider's legitimacy before purchasing an IPTV abonnement.",
  },
  {
    question: "How much does IPTV cost in Norway?",
    answer:
      "IPTV pris depends on the subscription duration, included features and provider. Compare monthly and longer-term plans, renewal terms and any additional fees before subscribing.",
  },
  {
    question: "Why is my IPTV buffering?",
    answer:
      "Buffering can result from weak Wi-Fi, network congestion, an outdated app or streaming-service issues. Restart your router, update your IPTV player and try a wired connection if possible.",
  },
  {
    question: "Can I watch Premier League and football with IPTV in Norway?",
    answer:
      "Some services offer sports streaming, but Premier League availability depends on broadcasting rights and subscription terms. Verify which matches are legally available in Norway before subscribing.",
  },
  {
    question: "Which devices support IPTV?",
    answer:
      "Compatible devices may include Samsung and LG Smart TVs, Amazon Fire TV Stick, Android TV, Apple TV, iPhone, Android phones, Windows PCs and Mac computers. App availability varies by model.",
  },
  {
    question: "How do I install IPTV on my device?",
    answer:
      "Download a compatible IPTV player from an official source, then follow your provider's instructions to configure your subscription. Visit our installation guide for device-specific setup instructions.",
  },
  {
    question: "What is the difference between IPTV and cable TV?",
    answer:
      "IPTV delivers television over the internet, while traditional cable TV uses a cable television network. IPTV can offer flexible device options, depending on the service and compatible applications.",
  },
  {
    question: "Can I watch Norwegian and Nordic channels with IPTV?",
    answer:
      "Some services offer Norwegian and Nordic channels. Check the actual channel list, language options and regional availability before choosing a norsk IPTV or Nordic IPTV subscription.",
  },
  {
    question: "Does IPTV support HD and 4K?",
    answer:
      "Yes, compatible IPTV services can support HD and 4K streaming. Actual picture quality depends on the source content, device, application and internet connection.",
  },
  {
    question: "Which IPTV player should I use?",
    answer:
      "Popular options include TiviMate, IPTV Smarters Pro, VLC and Kodi, depending on your device. Check compatibility and remember that a player does not automatically include channels or a subscription.",
  },
  {
    question: "Can I try IPTV before purchasing?",
    answer:
      "A free trial may be available if offered by the provider. Confirm the trial duration, included features and terms before signing up.",
  },
  {
    question: "How quickly is an IPTV subscription activated?",
    answer:
      "Activation depends on the provider's process and payment confirmation. Check the stated activation terms and follow the setup instructions once your account details are available.",
  },
  {
    question: "What should I do if my IPTV subscription stops working?",
    answer:
      "Check your internet connection, subscription status and login details first. Restart your device and IPTV player. If the issue continues, contact your provider's support team.",
  },
] as const;
