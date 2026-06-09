// Community-suggested shops, specialists and parts vendors for the Porsche 944.
//
// These are STARTER listings of widely-recognized names in the 944 world — they
// are community suggestions, NOT paid placements or formal endorsements. Always
// do your own research before sending parts or money. Add local service shops
// (with region) via pull request — see /community.

export type ShopType = 'Parts' | 'Performance' | 'Service' | 'Restoration';

export interface Shop {
  name: string;
  type: ShopType[];
  /** Coarse location — country / "Mail-order" to avoid stale specifics. */
  location: string;
  url: string;
  blurb: string;
}

export const SHOPS: Shop[] = [
  {
    name: 'Pelican Parts',
    type: ['Parts'],
    location: 'USA · Mail-order',
    url: 'https://www.pelicanparts.com/Porsche/944/Porsche-944-Parts.htm',
    blurb: 'Huge OEM & aftermarket catalog plus a deep library of free 944 DIY tech articles.',
  },
  {
    name: 'Paragon Products',
    type: ['Parts'],
    location: 'USA · Mail-order',
    url: 'https://www.paragon-products.com/',
    blurb: 'Long-running Porsche parts specialist popular with the 944 transaxle community.',
  },
  {
    name: '944online',
    type: ['Parts'],
    location: 'USA · Mail-order',
    url: 'https://www.944online.com/',
    blurb: 'Dedicated 944/924/928/968 parts supplier — new, used and hard-to-find pieces.',
  },
  {
    name: 'Lindsey Racing',
    type: ['Performance', 'Parts'],
    location: 'Oklahoma, USA',
    url: 'https://www.lindseyracing.com/',
    blurb: 'Well-known 944/951 turbo performance specialist — big brakes, tuning and upgrades.',
  },
  {
    name: 'FCP Euro',
    type: ['Parts'],
    location: 'Connecticut, USA · Mail-order',
    url: 'https://www.fcpeuro.com/Porsche-parts/944/',
    blurb: 'European parts retailer known for its lifetime replacement guarantee on wear items.',
  },
  {
    name: 'Sierra Madre Collection',
    type: ['Parts', 'Restoration'],
    location: 'California, USA · Mail-order',
    url: 'https://www.sierramadre.com/',
    blurb: 'OEM and restoration-grade Porsche parts, strong on early/air-cooled and transaxle cars.',
  },
  {
    name: 'Rennline',
    type: ['Parts'],
    location: 'Vermont, USA',
    url: 'https://www.rennline.com/',
    blurb: 'US manufacturer of Porsche accessories, interior and track-day hardware.',
  },
  {
    name: 'Design 911',
    type: ['Parts'],
    location: 'United Kingdom · Mail-order',
    url: 'https://www.design911.com/',
    blurb: 'Major UK/EU Porsche parts supplier covering the full 944 range.',
  },
];
