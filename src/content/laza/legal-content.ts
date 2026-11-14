// Generated from volt-rider-app/features/legal/legal-content.ts.
// Run npm run sync:legal; edit the app source instead of this copy.

import type { Language } from './types';

// The original supplied draft remains in docs/legal/loza-terms-privacy-draft.md.
// Device permissions stay separate from acceptance of these terms.
const AMHARIC_COPY = {
  brand: 'LAZA',
  title: 'ውሎች እና ግላዊነት',
  company: 'LionGreenSolutions',
  introduction: 'LAZAን ከመጠቀምዎ በፊት እነዚህን አጭር ውሎች ያንብቡ።',
  acceptance: 'በመስማማት ውሎቹን ይቀበላሉ፣ የመረጃ አጠቃቀሙንም መረዳትዎን ያረጋግጣሉ። የስልክ ፈቃዶች ለየብቻ ይጠየቃሉ።',
  accept: 'ተስማምቻለሁ',
  back: 'ተመለስ',
  support: 'እገዛ እና የመረጃ ጥያቄ',
  supportError: 'እገዛው አልተከፈተም። እባክዎ እንደገና ይሞክሩ።',
} as const;

const AMHARIC_SECTIONS = [
  {
    icon: 'person-outline',
    title: 'መለያዎ እና ኃላፊነትዎ',
    body: 'LAZA ለልጆች አይደለም፤ ቢያንስ 18 ዓመት መሆን አለብዎት። ተሽከርካሪ ለማሽከርከር በአገርዎ የሚፈለገውን ሕጋዊ ዕድሜና ፈቃድ ማሟላት አለብዎት። ትክክለኛ መረጃ ይስጡ፣ የመግቢያ መረጃዎን ይጠብቁ። ፈቃድ ያለዎትን ተሽከርካሪ ብቻ ያገናኙ። ሕገወጥ አጠቃቀም መለያዎን ሊያሳግድ ይችላል።',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'ደህንነቶ ቅድሚያ ይኑረው',
    body: 'እያሽከረከሩ ስልክ አይጠቀሙ። የባትሪና የርቀት ግምቶች ዋስትና አይደሉም። የአምራቹን መመሪያ ይከተሉ። አገልግሎቱ ሊቋረጥ ይችላል፤ ሕጋዊ መብቶችዎ ይጠበቃሉ።',
  },
  {
    icon: 'location-outline',
    title: 'የምንጠቀምበት መረጃ',
    body: 'የመለያ፣ የተሽከርካሪና የባትሪ መረጃን ለአገልግሎቱ እንጠቀማለን። በፈቃድዎ፣ ባትሪው ሲገናኝ ወይም የግል ጉዞ ሲጀምሩ ማያ ገጹ ቢዘጋም አካባቢና ርቀት ይመዘገባሉ።',
  },
  {
    icon: 'lock-closed-outline',
    title: 'መረጃዎ እንዴት ይያዛል?',
    body: 'መረጃ እንደ አስፈላጊነቱ ለማከማቻ፣ ለካርታና ለማሳወቂያ አገልግሎቶች ይጋራል። የተፈቀደላቸው ሠራተኞች ለእገዛና ለአስተዳደር ሊያዩት ይችላሉ። በሕግ ሲጠየቁም ሊገለጽ ይችላል።',
  },
  {
    icon: 'options-outline',
    title: 'ምርጫዎችዎ እና እገዛ',
    body: 'የግል ጉዞን በLAZA ያቁሙ። ራስ-ሰር የተሽከርካሪ ክትትልን ከመነሻ ገጽ በተለየ ሁኔታ ያጥፉ። የተሽከርካሪ ክትትል ባትሪው ከተቋረጠ ከ45 ሰከንድ በኋላ ይቆማል። የአካባቢ ፈቃድን በስልክ ቅንብሮች ይቀይሩ። ለመረጃ ማስተካከያና ለመለያ ስረዛ እገዛ ይጠይቁ፤ በሕግ የሚፈለግ መረጃ ሊቀመጥ ይችላል። የውል ለውጦችን እናሳውቃለን።',
  },
] as const;

export const LEGAL_COPY = {
  am: AMHARIC_COPY,
  en: {
    brand: 'LAZA',
    title: 'Terms & Privacy',
    company: 'LionGreenSolutions',
    introduction: 'Please read these short terms before using LAZA.',
    acceptance: 'By agreeing, you accept these terms and acknowledge how your data is used. Device permissions are requested separately.',
    accept: 'I agree',
    back: 'Back',
    support: 'Support & data requests',
    supportError: 'Could not open support. Please try again.',
  },
} as const satisfies Record<Language, Record<keyof typeof AMHARIC_COPY, string>>;

export const LEGAL_SECTIONS = {
  am: AMHARIC_SECTIONS,
  en: [
    {
      icon: 'person-outline',
      title: 'Your account & responsibilities',
      body: 'LAZA is not for children. You must be at least 18 years old. To drive, you must also meet the legal driving age and hold any licence required in your country. Provide accurate information and protect your sign-in details. Only connect vehicles you are authorized to use. Unlawful use may result in account suspension.',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Put safety first',
      body: 'Do not use your phone while driving. Battery and range estimates are not guarantees. Follow the manufacturer’s instructions. Service may be interrupted; your legal rights remain protected.',
    },
    {
      icon: 'location-outline',
      title: 'Information we use',
      body: 'We use account, vehicle and battery data to provide the service. With your permission, location and distance are recorded while your vehicle battery is connected or during a personal trip you start, including in the background.',
    },
    {
      icon: 'lock-closed-outline',
      title: 'How your information is handled',
      body: 'Data is shared as needed for storage, maps and notifications. Authorized staff may access it for support and administration. It may also be disclosed when required by law.',
    },
    {
      icon: 'options-outline',
      title: 'Your choices & support',
      body: 'End personal trips in LAZA. Turn automatic Vehicle tracking off separately from Home. It also stops 45 seconds after the battery disconnects. Change location permissions in phone settings. Contact support to correct data or delete your account; legally required records may be retained. We will notify you of changes to these terms.',
    },
  ],
} as const satisfies Record<Language, readonly {
  icon: (typeof AMHARIC_SECTIONS)[number]['icon'];
  title: string;
  body: string;
}[]>;
