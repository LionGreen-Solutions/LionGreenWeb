// Generated from volt-rider-app/features/legal/account-deletion-content.ts.
// Run npm run sync:legal; edit the app source instead of this copy.

import type { Language } from './types';
import { PRIVACY_EMAIL } from './legal-contact';

const COMPLETION = {
  en: 'Support will complete deletion of your account and associated app data within 7 days after verifying that the account belongs to you, and will confirm when deletion is complete.',
  am: 'እገዛ መለያው የእርስዎ መሆኑን ካረጋገጠ በኋላ በ7 ቀናት ውስጥ የመለያዎንና የተያያዘ የመተግበሪያ መረጃዎን ስረዛ ያጠናቅቃል፤ ስረዛው ሲጠናቀቅም ያረጋግጥልዎታል።',
} as const satisfies Record<Language, string>;

export const ACCOUNT_DELETION_COPY = {
  en: {
    title: 'Delete account',
    introduction: `Request deletion of your LAZA account and associated data from LionGreenSolutions at ${PRIVACY_EMAIL}.`,
    action: 'Prepare deletion request email',
    emailBody: 'Hello LionGreenSolutions,\n\nI request deletion of my LAZA account and associated personal data.\n\nRegistered name:\nRegistered phone number:\n\nPlease explain any records that must be retained and confirm when deletion is complete.\n',
    notice: 'This opens an email draft. Send it from your email app to submit the request. Opening this page or the draft does not delete your account. If no email app opens, email the address shown below from any device.',
    scopeTitle: 'What to request',
    scope: 'Request deletion of your account, profile and profile photo, linked app vehicle records, trip/location history and battery telemetry. Tell support if you want only specific data deleted instead of closing the account. Never include your password or sign-in codes.',
    retentionTitle: 'What is deleted and what may remain',
    retention: 'When support completes account deletion, it removes your sign-in account, profile, profile photo and associated app vehicle, trip, location and battery records. The usual 7-, 30- and 90-day history limits are routine cleanup periods, not waiting periods after account deletion. Separate vehicle purchase/ownership records, support emails and support tickets require separate review; deleting the app account does not automatically remove them. Support removes these separate records within 7 days (one week) after your account is deleted. If any are kept during that week, support will identify them, explain why they are needed and give you their deletion date. Backup copies require separate handling. Data already stored on your phone can be removed by clearing app storage or uninstalling LAZA.',
    processTitle: 'What happens next',
    completion: COMPLETION.en,
    process: `In LAZA, you can submit a request from Profile > Delete account when signed in, or send the email request from any device. Support handles received requests and may ask you to verify account ownership. A request receipt confirms submission, not completed deletion. ${COMPLETION.en} Records that must be kept for a legal obligation should be explained, including the reason and retention period. Signing out or uninstalling does not remove cloud records.`,
  },
  am: {
    title: 'መለያ ሰርዝ',
    introduction: `የLAZA መለያዎንና ተያያዥ መረጃዎን ለማስሰረዝ LionGreenSolutionsን በ${PRIVACY_EMAIL} ያግኙ።`,
    action: 'የስረዛ ጥያቄ ኢሜይል አዘጋጅ',
    emailBody: 'ሰላም LionGreenSolutions፣\n\nየLAZA መለያዬና ተያያዥ የግል መረጃዬ እንዲሰረዝ እጠይቃለሁ።\n\nየተመዘገበ ስም፦\nየተመዘገበ ስልክ ቁጥር፦\n\nሊቀመጡ የሚገቡ መዝገቦችን ያብራሩልኝ፤ ስረዛው ሲጠናቀቅም ያረጋግጡልኝ።\n',
    notice: 'ይህ የኢሜይል ረቂቅ ይከፍታል። ጥያቄውን ለማቅረብ ከኢሜይል መተግበሪያዎ ይላኩት። ይህን ገጽ ወይም ረቂቁን መክፈት መለያዎን አይሰርዝም። የኢሜይል መተግበሪያ ካልተከፈተ፣ ከማንኛውም መሣሪያ ከታች ወዳለው አድራሻ ኢሜይል ይላኩ።',
    scopeTitle: 'ምን መጠየቅ ይችላሉ?',
    scope: 'መለያዎ፣ መገለጫዎና የመገለጫ ፎቶዎ፣ በመተግበሪያው የተገናኙ የተሽከርካሪ መዝገቦች፣ የጉዞና የአካባቢ ታሪክ እና የባትሪ መረጃ እንዲሰረዙ ይጠይቁ። መለያውን ሳይዘጉ የተወሰነ መረጃ ብቻ እንዲሰረዝ ከፈለጉ ለእገዛ ይግለጹ። የይለፍ ቃልዎን ወይም የመግቢያ ኮዶችን አያካትቱ።',
    retentionTitle: 'ምን ይሰረዛል፣ ምንስ ሊቀር ይችላል?',
    retention: 'እገዛ የመለያ ስረዛውን ሲያጠናቅቅ፣ የመግቢያ መለያዎን፣ መገለጫዎን፣ የመገለጫ ፎቶዎን እና በመተግበሪያው ከመለያዎ ጋር የተያያዙ የተሽከርካሪ፣ የጉዞ፣ የአካባቢና የባትሪ መዝገቦችን ያስወግዳል። የ7፣ 30 እና 90 ቀናት የታሪክ ማቆያ ገደቦች ለመደበኛ ማጽዳት ናቸው፤ መለያ ከተሰረዘ በኋላ የሚጠበቁ ጊዜያት አይደሉም። የተለዩ የተሽከርካሪ ግዢና ባለቤትነት መዝገቦች፣ የእገዛ ኢሜይሎችና ጥያቄዎች በተለየ መገምገም ያስፈልጋቸዋል፤ የመተግበሪያውን መለያ መሰረዝ በራሱ አያስወግዳቸውም። እገዛ እነዚህን የተለዩ መዝገቦች መለያዎ ከተሰረዘ በኋላ በ7 ቀናት (በአንድ ሳምንት) ውስጥ ያስወግዳል። በዚህ ሳምንት ውስጥ የሚቀመጡ መዝገቦች ካሉ፣ እገዛ ምን እንደሆኑ፣ ለምን እንደሚያስፈልጉ እና የስረዛ ቀናቸውን ይገልጽልዎታል። የመጠባበቂያ ቅጂዎች በተለየ መስተናገድ አለባቸው። በስልክዎ ያለውን መረጃ የመተግበሪያውን ማከማቻ በማጽዳት ወይም LAZAን በማራገፍ ማስወገድ ይችላሉ።',
    processTitle: 'ቀጥሎ ምን ይሆናል?',
    completion: COMPLETION.am,
    process: `መለያ ሲገቡ በLAZA ከመገለጫ > መለያ ሰርዝ ጥያቄ ማቅረብ፣ ወይም ከማንኛውም መሣሪያ ኢሜይል መላክ ይችላሉ። ደረሰኝ ጥያቄው መድረሱን እንጂ ስረዛ መጠናቀቁን አያረጋግጥም። እገዛ ጥያቄውን ያስተናግዳል፤ የመለያ ባለቤትነትዎን እንዲያረጋግጡም ሊጠይቅ ይችላል። ${COMPLETION.am} በሕግ ግዴታ ሊቀመጡ የሚገቡ መዝገቦች ካሉ፣ ምክንያቱና የማቆያ ጊዜው ሊብራሩ ይገባል። ከመለያ መውጣት ወይም መተግበሪያውን ማራገፍ የደመና መረጃን አያስወግድም።`,
  },
} as const satisfies Record<Language, {
  title: string; introduction: string; action: string; emailBody: string;
  notice: string; scopeTitle: string; scope: string; retentionTitle: string; retention: string; processTitle: string; completion: string; process: string;
}>;
