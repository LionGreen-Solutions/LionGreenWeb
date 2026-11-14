// Generated from volt-rider-app/features/legal/legal-contact.ts.
// Run npm run sync:legal; edit the app source instead of this copy.

// Verify the cPanel forwarder reaches the support inbox before publishing.
export const PRIVACY_EMAIL = 'support@liongreensolution.com';

// Website publication must be verified before releasing the app with these links.
export const LEGAL_URLS = {
  privacy: 'https://www.liongreensolution.com/laza-privacy-policy',
  terms: 'https://www.liongreensolution.com/laza-terms',
  'delete-account': 'https://www.liongreensolution.com/laza-delete-account',
} as const;

export function privacyEmailUrl(subject: string, body?: string) {
  return `mailto:${PRIVACY_EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}
