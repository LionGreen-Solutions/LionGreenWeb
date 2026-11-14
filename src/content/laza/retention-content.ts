// Generated from volt-rider-app/features/legal/retention-content.ts.
// Run npm run sync:legal; edit the app source instead of this copy.

import type { Language } from './types';

// These windows match the deployed telemetry-retention design in docs/telemetry-retention.md.
// Account/support exceptions must be confirmed by the operator, not invented here.
export const RETENTION_COPY = {
  en: {
    title: 'Data retention', data: 'Data', duration: 'Retention',
    rows: [
      ['Raw GPS, battery measurements, scans and connections', '7 days'],
      ['Range-analysis windows', '30 days'],
      ['Daily distance', '90 calendar days'],
      ['Completed trips', '90 days, or longer while referenced by retained records; active trips are preserved'],
      ['Server upload receipts and intermediate snapshots', '24 hours'],
      ['Latest battery and vehicle status', 'Until replaced or the account/vehicle is deleted'],
      ['Profile photos', 'Until replaced, removed or the account is deleted'],
      ['Accounts, profiles, vehicle registrations and support records', 'Outside telemetry expiry; contact support about applicable retention and deletion'],
      ['Offline uploads on the phone', 'Until uploaded; confirmed queue history is eligible for cleanup after 24 hours'],
    ],
  },
  am: {
    title: 'የመረጃ ማቆያ ጊዜ', data: 'መረጃ', duration: 'ማቆያ ጊዜ',
    rows: [
      ['የGPS፣ የባትሪ፣ የፍተሻና የግንኙነት መረጃ', '7 ቀናት'],
      ['የርቀት ትንተና መረጃ', '30 ቀናት'],
      ['ዕለታዊ ርቀት', '90 ቀናት'],
      ['የተጠናቀቁ ጉዞዎች', '90 ቀናት፤ ሌሎች የተቀመጡ መዝገቦች ሲያመለክቷቸው ከዚያ በላይ። ንቁ ጉዞዎች ይቀመጣሉ'],
      ['የአገልጋይ ስቀላ ደረሰኞችና ጊዜያዊ መረጃ', '24 ሰዓታት'],
      ['የቅርብ ባትሪና ተሽከርካሪ ሁኔታ', 'እስኪተካ ወይም መለያው/ተሽከርካሪው እስኪሰረዝ'],
      ['የመገለጫ ፎቶ', 'እስኪተካ፣ እስኪወገድ ወይም መለያው እስኪሰረዝ'],
      ['መለያ፣ መገለጫ፣ የተሽከርካሪ ምዝገባና የእገዛ መዝገቦች', 'በቴሌሜትሪ ማብቂያ አይሰረዙም፤ ስለማቆያና ስረዛ እገዛን ያነጋግሩ'],
      ['በስልኩ ያሉ ያልተላኩ መዝገቦች', 'እስኪላኩ፤ የተረጋገጠ ስቀላ ታሪክ ከ24 ሰዓት በኋላ ሊጸዳ ይችላል'],
    ],
  },
} as const satisfies Record<Language, {
  title: string; data: string; duration: string; rows: readonly (readonly [string, string])[];
}>;
