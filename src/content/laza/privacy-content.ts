// Generated from volt-rider-app/features/legal/privacy-content.ts.
// Run npm run sync:legal; edit the app source instead of this copy.

import type { Language } from './types';
import { PRIVACY_EMAIL } from './legal-contact';
import { ACCOUNT_DELETION_COPY } from './account-deletion-content';

export const PRIVACY_COPY = {
  en: {
    title: 'Privacy Policy',
    introduction: `LionGreenSolutions operates LAZA. This policy explains the information used by the app and your choices. Privacy contact: ${PRIVACY_EMAIL}.`,
    updated: 'Effective date: 13 November 2026. Last updated: 14 November 2026.',
  },
  am: {
    title: 'የግላዊነት ፖሊሲ',
    introduction: `LAZA በLionGreenSolutions ይተዳደራል። ይህ ፖሊሲ መተግበሪያው የሚጠቀምበትን መረጃ እና ምርጫዎችዎን ያብራራል። የግላዊነት አድራሻ፦ ${PRIVACY_EMAIL}።`,
    updated: 'የሚፀናበት ቀን፦ 13 November 2026 (እ.ኤ.አ.)። የመጨረሻ ማሻሻያ፦ 14 November 2026 (እ.ኤ.አ.)።',
  },
} as const satisfies Record<Language, { title: string; introduction: string; updated: string }>;

// Retention matches docs/telemetry-retention.md and the October 2026 migrations.
// Release acceptance must confirm these schedules remain deployed and healthy.
export const PRIVACY_SECTIONS = {
  en: [
    {
      icon: 'person-outline',
      title: 'Account and vehicle information',
      body: 'We use your full name, phone number, city or area, account identifier and sign-in information to create and secure your account. Email is used for accounts that sign in or recover access by email. We record the terms version accepted during customer onboarding. Vehicle identifiers, ownership records, purchase and warranty information let us link your vehicle and provide vehicle services.',
    },
    {
      icon: 'location-outline',
      title: 'Location, trips and battery readings',
      body: 'With location permission, LAZA uses precise location for maps, route planning and trip distance. During a personal trip you start, it records location points, times, distance and available battery readings, including when the screen is locked or another app is open. You can pause or end that trip from Home. For a linked registered vehicle, location and distance collection can start automatically after you enable vehicle tracking and its battery BMS connects. With foreground permission it runs while the app is visible; background permission allows it to continue when the app is not in use. Ending a manual trip does not stop this vehicle collection; you can turn it off with Vehicle tracking on Home. It also stops after a 45-second BMS disconnection or when location access is revoked. Battery identifiers and readings such as charge level, voltage, current, temperature and faults support battery history, warnings and range estimates. Collected records may be saved on your phone while offline and uploaded when connectivity returns.',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Camera, images and notifications',
      body: 'Camera access lets you scan a battery QR code. Administrators can select product images to upload to the spare-parts catalogue; these images are visible to catalogue users. You can choose an optional profile photo, stored with your account until you replace or remove it or delete the account. Battery warnings and charging-alarm notifications are generated on your device. Charging alarms are enabled by you and can be cancelled or dismissed. Bluetooth access connects to compatible batteries. These permissions are requested separately from accepting the terms. You can change permissions in your phone settings; features that depend on them may stop working.',
    },
    {
      icon: 'lock-closed-outline',
      title: 'Storage and administrator access',
      body: 'Supabase provides account authentication, database storage and uploaded-image storage. Authorized LionGreenSolutions administrators can access customer, vehicle, location, trip and battery records for support and vehicle administration. Network requests use HTTPS. Access controls restrict cloud records by account and administrator role. Your phone also stores sign-in sessions, preferences and cached or pending trip and battery data. Protect access to your phone; no storage or transmission method is completely secure.',
    },
    {
      icon: 'location-outline',
      title: 'Maps and other external services',
      body: 'Map and satellite views request tiles from OpenStreetMap and Esri. Place searches use Nominatim and Komoot Photon; Photon receives your search and current coordinates to suggest nearby results. Route calculations send origin and destination coordinates to the OSRM routing service. Choosing external navigation sends those coordinates to Google Maps. Map pages also load Leaflet resources from unpkg. These services receive network information such as your IP address and the requested map area or search. Opening our Telegram support link or social links takes you to those providers, which handle information under their own policies. Support receives the information you choose to send.',
    },
    {
      icon: 'lock-closed-outline',
      title: 'International processing',
      body: 'Our primary Supabase project data is hosted in Ireland (AWS eu-west-1). The map, search, routing and support providers listed above may process requests in other countries. Data may therefore be processed outside your country. We use HTTPS for network transmission and account permissions and administrator roles to restrict access. Contact our privacy support email for information about provider arrangements and applicable safeguards.',
    },
    {
      icon: 'lock-closed-outline',
      title: 'How long information stays',
      body: 'Raw GPS points, battery measurements and scan/connection history are retained for 7 days; range-analysis windows for 30 days; daily distance for 90 calendar days; and completed trip summaries for 90 days, or longer while referenced by retained records. Active trips remain available. Server upload receipts and intermediate snapshots are retained for 24 hours. Latest battery and vehicle status remain until replaced or the account/vehicle is deleted. Accounts, profiles and linked app vehicle records remain until account deletion and are outside routine history expiry. Support removes separate vehicle purchase/ownership records, support emails and tickets within 7 days (one week) after account deletion, and explains why any records are kept during that week. Profile photos remain until replaced, removed or the account is deleted. Cleanup runs regularly and may lag during outages or backlogs. Pending uploads remain on your phone until sent; confirmed local queue history is eligible for cleanup after 24 hours, while other caches may remain. Signing out or uninstalling does not delete cloud data. Clearing app storage removes local data, including unsent records.',
    },
    {
      icon: 'options-outline',
      title: 'Correction, deletion and privacy questions',
      body: `You can edit your name and phone number in Profile. To request account deletion, associated-data deletion, correction or information about your data, open Profile > Delete account to submit an account-deletion request, or use the public deletion page or support email. A submitted request requires support processing and is not immediate deletion. For other data requests, contact support and explain what you need. We may need to verify that the account belongs to you. ${ACCOUNT_DELETION_COPY.en.completion} Never send your password or sign-in codes. Limited records may need to be retained where required by law; ask support about any applicable retention before deletion. Removing the app or signing out alone is not an account-deletion request.`,
    },
    {
      icon: 'options-outline',
      title: 'Policy updates',
      body: 'We will update this policy when our data practices change. The date above identifies this version. Device permissions and any separate consent required for new data uses are handled separately from acceptance of the terms.',
    },
  ],
  am: [
    {
      icon: 'lock-closed-outline',
      title: 'ከአገር ውጭ የመረጃ አያያዝ',
      body: 'የSupabase ፕሮጀክታችን ዋና መረጃ በአየርላንድ (AWS eu-west-1) ይቀመጣል። የካርታ፣ የፍለጋ፣ የመንገድና የእገዛ አቅራቢዎች ጥያቄዎችን በሌሎች አገሮች ሊያስተናግዱ ይችላሉ። ስለዚህ መረጃዎ ከአገርዎ ውጭ ሊያዝ ይችላል። ለመረጃ ልውውጥ HTTPS እንጠቀማለን፣ መዳረሻንም በመለያ ፈቃዶችና በአስተዳዳሪ ሚናዎች እንገድባለን። ስለአቅራቢዎች ዝግጅቶችና የጥበቃ እርምጃዎች በግላዊነት እገዛ ኢሜይል ያነጋግሩን።',
    },
    {
      icon: 'person-outline',
      title: 'የመለያ እና የተሽከርካሪ መረጃ',
      body: 'መለያዎን ለመፍጠርና ለመጠበቅ ሙሉ ስምዎን፣ ስልክ ቁጥርዎን፣ ከተማዎን ወይም አካባቢዎን፣ የመለያ መለያ ቁጥርን እና የመግቢያ መረጃን እንጠቀማለን። በኢሜይል ለሚገቡ ወይም መለያቸውን ለሚያስመልሱ ተጠቃሚዎች ኢሜይል እንጠቀማለን። በደንበኛ ምዝገባ ጊዜ የተቀበሉትን የውል ስሪት እንመዘግባለን። የተሽከርካሪ መለያ፣ የባለቤትነት፣ የግዢና የዋስትና መረጃ ተሽከርካሪዎን ለማገናኘትና አገልግሎት ለመስጠት ይጠቅማሉ።',
    },
    {
      icon: 'location-outline',
      title: 'አካባቢ፣ ጉዞ እና የባትሪ መረጃ',
      body: 'የአካባቢ ፈቃድ ሲሰጡ፣ LAZA ለካርታ፣ ለመንገድ እቅድና ለጉዞ ርቀት ትክክለኛ አካባቢዎን ይጠቀማል። እርስዎ በጀመሩት የግል ጉዞ ጊዜ የአካባቢ ነጥቦች፣ ጊዜ፣ ርቀትና የሚገኝ የባትሪ መረጃ ይመዘገባሉ፤ ይህም ማያ ገጹ ሲቆለፍ ወይም ሌላ መተግበሪያ ሲከፈት ይቀጥላል። የግል ጉዞውን ከመነሻ ገጽ ለጊዜው ማቆም ወይም ማጠናቀቅ ይችላሉ። ለተገናኘ የተመዘገበ ተሽከርካሪ፣ የተሽከርካሪ ክትትልን ካነቁና የባትሪ BMS ከተገናኘ በኋላ የአካባቢና የርቀት ስብስብ በራሱ ሊጀምር ይችላል። የፊት አካባቢ ፈቃድ መተግበሪያው ሲታይ ያስኬደዋል፤ የጀርባ ፈቃድ ደግሞ መተግበሪያውን በማይጠቀሙበት ጊዜ እንዲቀጥል ያስችላል። በእጅ የጀመሩትን ጉዞ ማጠናቀቅ ይህን አያቆምም፤ ከመነሻ ገጽ የተሽከርካሪ ክትትልን ማጥፋት ይችላሉ። BMS ለ45 ሰከንድ ሲቋረጥ ወይም የአካባቢ ፈቃድ ሲነሳ ይቆማል። የባትሪ መለያ፣ የኃይል መጠን፣ ቮልቴጅ፣ ፍሰት፣ ሙቀትና ብልሽቶች ለታሪክ፣ ለማስጠንቀቂያና ለርቀት ግምት ይጠቅማሉ። በይነመረብ በሌለበት ጊዜ መረጃ በስልኩ ተቀምጦ ግንኙነት ሲመለስ ሊላክ ይችላል።',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'ካሜራ፣ ምስሎች እና ማሳወቂያዎች',
      body: 'የካሜራ ፈቃድ የባትሪ QR ኮድን ለማንበብ ያስችላል። አስተዳዳሪዎች የምርት ምስሎችን መርጠው ወደ መለዋወጫ ዝርዝር ሊጭኑ ይችላሉ፤ ምስሎቹ ለዝርዝሩ ተጠቃሚዎች ይታያሉ። አማራጭ የመገለጫ ፎቶ መምረጥ ይችላሉ፤ እስኪተካ፣ እስኪወገድ ወይም መለያው እስኪሰረዝ ድረስ ይቀመጣል። የባትሪ ማስጠንቀቂያና የኃይል መሙያ ደወል በስልኩ ይፈጠራሉ። ደወሉን እርስዎ ያነቁታል፣ መሰረዝ ወይም ማቆም ይችላሉ። የብሉቱዝ ፈቃድ ተስማሚ ባትሪዎችን ለማገናኘት ይጠቅማል። እነዚህ ፈቃዶች ውሉን ከመቀበል ለይተው ይጠየቃሉ። በስልክዎ ቅንብሮች ሊቀይሯቸው ይችላሉ፤ ፈቃዶቹን የሚፈልጉ አገልግሎቶች ሊቆሙ ይችላሉ።',
    },
    {
      icon: 'lock-closed-outline',
      title: 'ማከማቻ እና የአስተዳዳሪ መዳረሻ',
      body: 'Supabase የመለያ ማረጋገጫ፣ የመረጃ ቋትና የተጫኑ ምስሎች ማከማቻ ይሰጣል። ፈቃድ ያላቸው የLionGreenSolutions አስተዳዳሪዎች ለእገዛና ለተሽከርካሪ አስተዳደር የደንበኛ፣ የተሽከርካሪ፣ የአካባቢ፣ የጉዞና የባትሪ መረጃን ሊያዩ ይችላሉ። የአውታረ መረብ ጥያቄዎች HTTPS ይጠቀማሉ። የመዳረሻ ቁጥጥሮች የደመና መረጃን በመለያና በአስተዳዳሪ ሚና ይገድባሉ። ስልክዎም የመግቢያ ክፍለ ጊዜ፣ ምርጫዎችና የተቀመጠ ወይም ለመላክ የሚጠብቅ የጉዞና የባትሪ መረጃ ያስቀምጣል። ስልክዎን ይጠብቁ፤ ማንኛውም የማከማቻ ወይም የማስተላለፊያ ዘዴ ሙሉ በሙሉ አስተማማኝ አይደለም።',
    },
    {
      icon: 'location-outline',
      title: 'ካርታዎች እና ሌሎች ውጫዊ አገልግሎቶች',
      body: 'ካርታና የሳተላይት እይታዎች ከOpenStreetMap እና Esri ምስሎችን ይጠይቃሉ። የቦታ ፍለጋ Nominatim እና Komoot Photon ይጠቀማል፤ Photon ቅርብ ያሉ ውጤቶችን ለመጠቆም ፍለጋዎንና ያሉበትን መጋጠሚያዎች ይቀበላል። የመንገድ ስሌት የመነሻና የመድረሻ መጋጠሚያዎችን ወደ OSRM ይልካል። ውጫዊ አቅጣጫ ሲመርጡ እነዚህ መጋጠሚያዎች ወደ Google Maps ይላካሉ። የካርታ ገጾች ከunpkg የLeaflet ፋይሎችንም ያወርዳሉ። እነዚህ አገልግሎቶች እንደ IP አድራሻ፣ የተጠየቀ የካርታ አካባቢ ወይም ፍለጋ ያለ መረጃ ይቀበላሉ። የTelegram እገዛ ወይም የማኅበራዊ ሚዲያ አገናኞችን ሲከፍቱ መረጃን በራሳቸው ፖሊሲ ወደሚያስተናግዱ አቅራቢዎች ይሄዳሉ። እገዛ ለመላክ የመረጡትን መረጃ ይቀበላል።',
    },
    {
      icon: 'lock-closed-outline',
      title: 'መረጃ የሚቆይበት ጊዜ',
      body: 'ጥሬ GPS ነጥቦች፣ የባትሪ መለኪያዎችና የቅኝት/ግንኙነት ታሪክ ለ7 ቀናት፣ የርቀት ትንተና መረጃ ለ30 ቀናት፣ የዕለት ርቀት ለ90 የቀን መቁጠሪያ ቀናት ይቀመጣሉ። የተጠናቀቁ ጉዞዎች ማጠቃለያ ለ90 ቀናት፣ ወይም ከሌሎች የተቀመጡ መዝገቦች ጋር ተያይዘው እስካሉ ድረስ ይቆያሉ። ንቁ ጉዞዎች ይቀመጣሉ። የአገልጋይ የጭነት ደረሰኞችና ጊዜያዊ የጉዞ ቅጂዎች ለ24 ሰዓት ይቆያሉ። የመጨረሻው የባትሪና የተሽከርካሪ ሁኔታ እስኪተካ ወይም መለያው/ተሽከርካሪው እስኪሰረዝ ድረስ ይቀመጣል። መለያዎች፣ መገለጫዎችና የተያያዙ የመተግበሪያ ተሽከርካሪ መዝገቦች መለያው እስኪሰረዝ ይቆያሉ፤ በመደበኛ የታሪክ ጊዜ ገደብ አይሰረዙም። እገዛ የተለዩ የተሽከርካሪ ግዢና ባለቤትነት መዝገቦችን፣ የእገዛ ኢሜይሎችንና ጥያቄዎችን መለያው ከተሰረዘ በኋላ በ7 ቀናት (በአንድ ሳምንት) ውስጥ ያስወግዳል፤ በዚያ ሳምንት የሚቀመጡበትንም ምክንያት ያብራራል። የመገለጫ ፎቶ እስኪተካ፣ እስኪወገድ ወይም መለያው እስኪሰረዝ ይቆያል። ጽዳት በመደበኛነት ይካሄዳል፤ በብልሽት ወይም በተከማቸ ስራ ሊዘገይ ይችላል። ያልተላከ መረጃ እስኪላክ በስልኩ ይቆያል፤ የተረጋገጠ የሰልፍ ታሪክ ከ24 ሰዓት በኋላ ሊጸዳ ይችላል። ከመለያ መውጣት ወይም መተግበሪያውን ማራገፍ የደመና መረጃን አይሰርዝም። ማከማቻ ማጽዳት ያልተላከ መረጃን ጨምሮ የአካባቢ መረጃን ያስወግዳል።',
    },
    {
      icon: 'options-outline',
      title: 'ማስተካከያ፣ ስረዛ እና የግላዊነት ጥያቄዎች',
      body: `ስምዎንና ስልክ ቁጥርዎን ከመገለጫ ማስተካከል ይችላሉ። የመለያ ስረዛ፣ ተያያዥ የመረጃ ስረዛ፣ ማስተካከያ ወይም ስለ መረጃዎ ማብራሪያ ለመጠየቅ ከታች ያለውን እገዛ እና የመረጃ ጥያቄ ይጠቀሙ። ምን መጠየቅ እንደሚፈልጉ ይግለጹ። ከመገለጫ > መለያ ሰርዝ ጥያቄ ማቅረብ፣ ወይም የሕዝብ ስረዛ ገጽን ወይም ኢሜይልን መጠቀም ይችላሉ። የደረሰ ጥያቄ እገዛ እስኪያስኬደው ይጠብቃል፤ ወዲያውኑ ስረዛ አይደለም። መለያው የእርስዎ መሆኑን ማረጋገጥ ሊያስፈልገን ይችላል። ${ACCOUNT_DELETION_COPY.am.completion} የይለፍ ቃልዎን ወይም የመግቢያ ኮዶችን አይላኩ። በሕግ የሚፈለጉ ውስን መዝገቦች ሊቀመጡ ይችላሉ፤ ከስረዛ በፊት ስለሚመለከትዎ የማቆያ ጊዜ እገዛ ይጠይቁ። መተግበሪያውን ማራገፍ ወይም ከመለያ መውጣት ብቻ የመለያ ስረዛ ጥያቄ አይደለም።`,
    },
    {
      icon: 'options-outline',
      title: 'የፖሊሲ ለውጦች',
      body: 'የመረጃ አጠቃቀማችን ሲለወጥ ይህን ፖሊሲ እናዘምናለን። ከላይ ያለው ቀን ይህን ስሪት ያመለክታል። የስልክ ፈቃዶችና ለአዲስ የመረጃ አጠቃቀም የሚያስፈልግ የተለየ ስምምነት ውሉን ከመቀበል ለይተው ይጠየቃሉ።',
    },
  ],
} as const satisfies Record<Language, readonly {
  icon: 'person-outline' | 'location-outline' | 'shield-checkmark-outline' | 'lock-closed-outline' | 'options-outline';
  title: string;
  body: string;
}[]>;
