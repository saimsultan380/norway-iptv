export type DeviceSetup = {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  steps: string[];
  note?: string;
};

export const deviceSetups: DeviceSetup[] = [
  {
    id: "amazon-firestick",
    label: "Amazon Firestick",
    eyebrow: "AMAZON FIRESTICK",
    heading: "How to Set Up IPTV on Amazon Firestick?",
    steps: [
      "Connect your Fire TV Stick to your television and internet network.",
      "Open the Amazon Appstore and search for a compatible IPTV player, such as IPTV Smarters Pro or TiviMate, if available for your device.",
      "Select the official app listing and choose Download or Get.",
      "Open the application and enter your valid subscription details using the supported login method.",
      "Follow the provider's instructions to load your authorised channels and programme guide.",
    ],
  },
  {
    id: "samsung-smart-tv",
    label: "Samsung Smart TV",
    eyebrow: "SAMSUNG SMART TV",
    heading: "How to Set Up IPTV on Samsung Smart TV?",
    steps: [
      "Connect your Samsung TV to the internet.",
      "Open the TV's official app store.",
      "Search for a compatible player, such as IBO Player, IPTV Smarters Player or Smart IPTV, where available.",
      "Install the application and open it.",
      "Follow the player's instructions to connect your authorised IPTV subscription or playlist.",
    ],
    note: "Some apps may require a separate licence or activation payment. Check the app's terms before purchasing.",
  },
  {
    id: "lg-smart-tv",
    label: "LG Smart TV",
    eyebrow: "LG SMART TV",
    heading: "How to Set Up IPTV on LG Smart TV?",
    steps: [
      "Connect your LG TV to the internet.",
      "Open the LG Content Store.",
      "Search for a compatible player, such as IBO Player, IPTV Smarters Player or Smart IPTV, where available.",
      "Install the application and open it.",
      "Follow the player's instructions to connect your authorised IPTV subscription or playlist.",
    ],
    note: "Some apps may require a separate licence or activation payment. Check the app's terms before purchasing.",
  },
  {
    id: "android-tv",
    label: "Android TV",
    eyebrow: "ANDROID TV",
    heading: "How to Set Up IPTV on Android TV?",
    steps: [
      "Open the Google Play Store on your Android TV device.",
      "Search for a compatible application, such as TiviMate, IPTV Smarters Pro, Televizo, or XCIPTV.",
      "Select the appropriate official app and install it.",
      "Launch the application and choose its supported login or playlist option.",
      "Enter your valid subscription details and follow the on-screen setup instructions.",
    ],
    note: "The available applications and features depend on your device and region.",
  },
  {
    id: "android-phones",
    label: "Android Phones & Tablets",
    eyebrow: "ANDROID PHONES & TABLETS",
    heading: "How to Set Up IPTV on Android Phones & Tablets?",
    steps: [
      "Open the Google Play Store.",
      "Search for IPTV Smarters Pro, Televizo, or another compatible player.",
      "Download the official application.",
      "Open the app and follow its instructions to configure your subscription or authorised M3U playlist.",
      "Test playback using your internet connection.",
    ],
    note: "Avoid downloading APK files from unfamiliar websites. Use the official app store or the developer's verified download source.",
  },
  {
    id: "iphone-ipad",
    label: "iPhone & iPad",
    eyebrow: "IPHONE & IPAD",
    heading: "How to Set Up IPTV on iPhone & iPad?",
    steps: [
      "Open the App Store on your iPhone or iPad.",
      "Search for a compatible player, such as IPTVX, UHF, iPlayTV or another available option.",
      "Check the app's device compatibility and install it.",
      "Open the player and follow the instructions for adding your authorised subscription or playlist.",
      "Confirm that the content loads correctly.",
    ],
  },
  {
    id: "windows-mac",
    label: "Windows PC & Mac",
    eyebrow: "WINDOWS PC & MAC",
    heading: "How to Set Up IPTV on Windows PC & Mac?",
    steps: [
      "Visit the official website or app store for a compatible player.",
      "Download VLC Media Player, Kodi, or another supported IPTV application.",
      "Install the application using the developer's instructions.",
      "Configure a supported stream, authorised M3U playlist or compatible IPTV connection.",
      "Test the stream and adjust playback settings if necessary.",
    ],
    note: "VLC is useful for compatible media streams, while Kodi can support a more configurable television interface through appropriate add-ons.",
  },
  {
    id: "apple-tv",
    label: "Apple TV",
    eyebrow: "APPLE TV",
    heading: "How to Set Up IPTV on Apple TV?",
    steps: [
      "Open the App Store on your Apple TV.",
      "Search for a compatible player, such as IPTVX, UHF, iPlayTV or another available option.",
      "Check the app's tvOS compatibility and install it.",
      "Open the player and follow the instructions for adding your authorised subscription or playlist.",
      "Confirm that the content loads correctly.",
    ],
    note: "An app available on iPhone may not be available on Apple TV, so check the exact platform before downloading.",
  },
  {
    id: "chromecast",
    label: "Chromecast",
    eyebrow: "CHROMECAST",
    heading: "How to Set Up IPTV on Chromecast?",
    steps: [
      "Identify whether you own Chromecast with Google TV or an older Chromecast model.",
      "For Chromecast with Google TV, open the Google Play Store and install a compatible IPTV player if available.",
      "Launch the player and enter your authorised subscription or playlist details.",
      "Older Chromecast models generally rely on casting from a supported phone, tablet, or computer instead of installing apps directly.",
      "Test playback and confirm the stream performs reliably on your television.",
    ],
  },
  {
    id: "roku",
    label: "Roku",
    eyebrow: "ROKU",
    heading: "How to Set Up IPTV on Roku?",
    steps: [
      "Open the official Roku Channel Store on your Roku device.",
      "Search for a compatible IPTV application.",
      "Install the app if one is available for your model.",
      "Open the player and follow the supported login or playlist instructions.",
      "If no compatible player is available, check whether your authorised provider offers another supported viewing method.",
    ],
    note: "Third-party IPTV player availability is limited on some Roku models.",
  },
  {
    id: "google-tv",
    label: "Google TV",
    eyebrow: "GOOGLE TV",
    heading: "How to Set Up IPTV on Google TV?",
    steps: [
      "Open the Google Play Store on your Google TV device.",
      "Search for a compatible application, such as TiviMate, IPTV Smarters Pro, Televizo, or XCIPTV.",
      "Select the appropriate official app and install it.",
      "Launch the application and choose its supported login or playlist option.",
      "Enter your valid subscription details and follow the on-screen setup instructions.",
    ],
  },
  {
    id: "tv-boxes",
    label: "TV Boxes",
    eyebrow: "TV BOXES",
    heading: "How to Set Up IPTV on MAG, Formuler & TV Boxes?",
    steps: [
      "Connect the box to your television and internet network.",
      "Open the built-in portal or compatible player.",
      "Follow the device manufacturer's instructions to configure the authorised service connection.",
      "Enter the required portal or account information provided by your legitimate service provider.",
      "Restart or refresh the application if necessary, then test playback.",
    ],
    note: "Formuler devices may use a compatible version of MyTVOnline, while MAG devices typically follow their supported portal configuration process. Enigma2 receivers such as Dreambox, Vu+ and Zgemma can also support IPTV through suitable software.",
  },
];
