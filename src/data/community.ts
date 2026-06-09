// Curated community resources shown on the Community page. Edit freely.
export interface LinkItem {
  name: string;
  url: string;
  blurb: string;
}

export const FORUMS: LinkItem[] = [
  {
    name: 'Rennlist 944/951/968 Forums',
    url: 'https://rennlist.com/forums/944-turbo-and-turbo-s-forum/',
    blurb: 'The largest English-language Porsche forum — deep 944/951/968 technical archives.',
  },
  {
    name: 'Pelican Parts 944 Forum',
    url: 'https://forums.pelicanparts.com/porsche-944-turbo-944s-944-924s-forums/',
    blurb: 'Active community for Q&A, builds and parts, alongside Pelican’s DIY articles.',
  },
  {
    name: 'Porsche Transaxle Discord',
    url: 'https://discord.gg/qyCxuHBV',
    blurb: 'Real-time chat with 944/924/928/968 owners — diagnostics and live wrenching help.',
  },
  {
    name: 'Reddit — r/Porsche944',
    url: 'https://www.reddit.com/r/Porsche944/',
    blurb: 'Growing subreddit for photos, builds and quick questions.',
  },
];

export const REFERENCES: LinkItem[] = [
  {
    name: "Clark's Garage (clarks-garage.com)",
    url: 'https://www.clarks-garage.com',
    blurb: 'The gold standard of online 944 technical information. Content here is attributed CG.',
  },
  {
    name: '944 Factory Workshop Manuals (1982–1991)',
    url: 'https://www.clarks-garage.com/shop-manual/repair-procedure-index4.htm',
    blurb: 'Original Porsche workshop manuals — available as PDFs from the community.',
  },
  {
    name: 'Bentley Publishers — Porsche 944 Wiring',
    url: 'https://www.bentleypublishers.com/porsche/',
    blurb: 'Full-color factory wiring diagrams covering all 944 model years.',
  },
];
