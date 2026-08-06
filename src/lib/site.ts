/**
 * Single source of truth for the canonical origin.
 *
 * NOTE: www.studiofyrnys.com currently serves a different (Wix) site. Do not
 * point this at that domain until DNS actually resolves to this deployment —
 * canonicals aimed at a different site can deindex these pages. When the
 * domain is cut over, change this one line.
 */
export const SITE_URL = 'https://studio-fyrnys-website.vercel.app';

export const SITE_NAME = 'Studio Fyrnys';

/** Business details, kept in sync with the Impressum. */
export const BUSINESS = {
  legalName: 'Fyrnys GmbH',
  street: 'Heilbronner Straße 147',
  postalCode: '74211',
  city: 'Leingarten',
  country: 'DE',
  phone: '+49 7131 402667',
  email: 'info@fyrnys.de',
  studioCity: 'Frankfurt am Main',
} as const;
