/*
 * HomePage Employees
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

var employees =
[
  {
    id: 1,
    name: "Herb Flamank",
    email: "hflamank0@mit.edu",
    role: "Software Consultant",
    thumbnail: "https://robohash.org/autitaquepariatur.png?size=200x200&set=set1",
    description: "Cross-platform background Graphic Interface"
  },
  {
    id: 2,
    name: "Dix Kenforth",
    email: "dkenforth1@elpais.com",
    role: "Desktop Support Technician",
    thumbnail: "https://robohash.org/corporisseddebitis.jpg?size=200x200&set=set1",
    description: "Decentralized contextually-based interface"
  },
  {
    id: 3,
    name: "Roma Marrison",
    email: "rmarrison2@unc.edu",
    role: "Human Resources Assistant II",
    thumbnail: "https://robohash.org/modisintet.png?size=200x200&set=set1",
    description: "Cross-group empowering superstructure"
  },
  {
    id: 4,
    name: "Eben Hardway",
    email: "ehardway3@paypal.com",
    role: "Assistant Media Planner",
    thumbnail: "https://robohash.org/repellenduspossimuspraesentium.png?size=200x200&set=set1",
    description: "Profound actuating intranet"
  },
  {
    id: 5,
    name: "Kurtis Swanborough",
    email: "kswanborough4@comcast.net",
    role: "Marketing Manager",
    thumbnail: "https://robohash.org/optioautaut.jpg?size=200x200&set=set1",
    description: "Implemented content-based framework"
  },
  {
    id: 6,
    name: "Matti Orts",
    email: "morts5@time.com",
    role: "Clinical Specialist",
    thumbnail: "https://robohash.org/quosliberoqui.bmp?size=200x200&set=set1",
    description: "Expanded coherent encoding"
  },
  {
    id: 7,
    name: "Findlay Snoxill",
    email: "fsnoxill6@meetup.com",
    role: "Tax Accountant",
    thumbnail: "https://robohash.org/delenitieanon.png?size=200x200&set=set1",
    description: "Universal holistic forecast"
  },
  {
    id: 8,
    name: "Malvin Menicomb",
    email: "mmenicomb7@miitbeian.gov.cn",
    role: "Director of Sales",
    thumbnail: "https://robohash.org/voluptaspariaturipsam.bmp?size=200x200&set=set1",
    description: "Programmable eco-centric core"
  },
  {
    id: 9,
    name: "Wildon Sorel",
    email: "wsorel8@posterous.com",
    role: "Office Assistant IV",
    thumbnail: "https://robohash.org/exercitationemrecusandaeautem.bmp?size=200x200&set=set1",
    description: "Team-oriented mobile contingency"
  },
  {
    id: 10,
    name: "Elihu Busain",
    email: "ebusain9@timesonline.co.uk",
    role: "Staff Accountant II",
    thumbnail: "https://robohash.org/etdoloremquevelit.bmp?size=200x200&set=set1",
    description: "Secured tertiary open architecture"
  },
  {
    id: 11,
    name: "Brier Lehmann",
    email: "blehmanna@eventbrite.com",
    role: "Geological Engineer",
    thumbnail: "https://robohash.org/reruminlaboriosam.bmp?size=200x200&set=set1",
    description: "Multi-tiered upward-trending secured line"
  },
  {
    id: 12,
    name: "Alasteir Gaffney",
    email: "agaffneyb@google.co.jp",
    role: "General Manager",
    thumbnail: "https://robohash.org/accusantiumcorporisdoloribus.jpg?size=200x200&set=set1",
    description: "Pre-emptive client-server access"
  },
  {
    id: 13,
    name: "Gideon Sarjent",
    email: "gsarjentc@jimdo.com",
    role: "Director of Sales",
    thumbnail: "https://robohash.org/etvoluptaset.bmp?size=200x200&set=set1",
    description: "Front-line zero defect support"
  },
  {
    id: 14,
    name: "Fredra Lohan",
    email: "flohand@google.nl",
    role: "Sales Associate",
    thumbnail: "https://robohash.org/vitaequiaaut.bmp?size=200x200&set=set1",
    description: "Ameliorated intermediate approach"
  },
  {
    id: 15,
    name: "Flss Hollington",
    email: "fhollingtone@ed.gov",
    role: "Occupational Therapist",
    thumbnail: "https://robohash.org/quiaquodvoluptates.bmp?size=200x200&set=set1",
    description: "Automated heuristic challenge"
  },
  {
    id: 16,
    name: "Junette Drain",
    email: "jdrainf@redcross.org",
    role: "General Manager",
    thumbnail: "https://robohash.org/iuredoloremqueut.png?size=200x200&set=set1",
    description: "Switchable 6th generation moderator"
  },
  {
    id: 17,
    name: "Lona Klessmann",
    email: "lklessmanng@cbsnews.com",
    role: "Marketing Manager",
    thumbnail: "https://robohash.org/eosoccaecatised.jpg?size=200x200&set=set1",
    description: "Multi-tiered methodical circuit"
  },
  {
    id: 18,
    name: "Ezequiel Ulrik",
    email: "eulrikh@phoca.cz",
    role: "Social Worker",
    thumbnail: "https://robohash.org/commodidoloribuseos.jpg?size=200x200&set=set1",
    description: "Mandatory value-added middleware"
  },
  {
    id: 19,
    name: "Dianemarie Janaway",
    email: "djanawayi@wiley.com",
    role: "Engineer IV",
    thumbnail: "https://robohash.org/omnisconsequaturut.bmp?size=200x200&set=set1",
    description: "Persistent reciprocal budgetary management"
  },
  {
    id: 20,
    name: "Rozalie Brinson",
    email: "rbrinsonj@webs.com",
    role: "Chief Design Engineer",
    thumbnail: "https://robohash.org/etrerumiure.bmp?size=200x200&set=set1",
    description: "Versatile systemic product"
  },
  {
    id: 21,
    name: "Margareta Snap",
    email: "msnapk@livejournal.com",
    role: "Librarian",
    thumbnail: "https://robohash.org/doloremqueofficiaet.png?size=200x200&set=set1",
    description: "Integrated mobile knowledge user"
  },
  {
    id: 22,
    name: "Tessy Doneld",
    email: "tdoneldl@dmoz.org",
    role: "Desktop Support Technician",
    thumbnail: "https://robohash.org/repudiandaequodrepellat.jpg?size=200x200&set=set1",
    description: "Future-proofed interactive customer loyalty"
  },
  {
    id: 23,
    name: "Nikolas Bruhn",
    email: "nbruhnm@gmpg.org",
    role: "Tax Accountant",
    thumbnail: "https://robohash.org/facereaddeleniti.bmp?size=200x200&set=set1",
    description: "Synergized non-volatile portal"
  },
  {
    id: 24,
    name: "Florri Klaus",
    email: "fklausn@topsy.com",
    role: "Structural Engineer",
    thumbnail: "https://robohash.org/similiquequiaeum.bmp?size=200x200&set=set1",
    description: "Robust content-based customer loyalty"
  },
  {
    id: 25,
    name: "Hagen Deware",
    email: "hdewareo@goo.gl",
    role: "Assistant Media Planner",
    thumbnail: "https://robohash.org/voluptatumsintquisquam.jpg?size=200x200&set=set1",
    description: "Switchable multimedia matrix"
  },
  {
    id: 26,
    name: "Geraldine Weeden",
    email: "gweedenp@zimbio.com",
    role: "Office Assistant I",
    thumbnail: "https://robohash.org/voluptatibusasperioreseaque.png?size=200x200&set=set1",
    description: "Reverse-engineered local access"
  },
  {
    id: 27,
    name: "Georgine Gamon",
    email: "ggamonq@a8.net",
    role: "Administrative Assistant IV",
    thumbnail: "https://robohash.org/recusandaequinon.png?size=200x200&set=set1",
    description: "Grass-roots tertiary access"
  },
  {
    id: 28,
    name: "Broderick Saben",
    email: "bsabenr@cisco.com",
    role: "Financial Advisor",
    thumbnail: "https://robohash.org/aliasquaeminima.bmp?size=200x200&set=set1",
    description: "Expanded motivating process improvement"
  },
  {
    id: 29,
    name: "Tate Learned",
    email: "tlearneds@twitpic.com",
    role: "Geologist III",
    thumbnail: "https://robohash.org/quibusdamporrovel.jpg?size=200x200&set=set1",
    description: "Function-based full-range moderator"
  },
  {
    id: 30,
    name: "Mercy Nobles",
    email: "mnoblest@php.net",
    role: "VP Marketing",
    thumbnail: "https://robohash.org/laboreauteum.bmp?size=200x200&set=set1",
    description: "Object-based dedicated firmware"
  },
  {
    id: 31,
    name: "Deanne Ronisch",
    email: "dronischu@cnet.com",
    role: "Dental Hygienist",
    thumbnail: "https://robohash.org/consequunturestvoluptas.jpg?size=200x200&set=set1",
    description: "Exclusive intermediate task-force"
  },
  {
    id: 32,
    name: "Angil Grubbe",
    email: "agrubbev@hud.gov",
    role: "Clinical Specialist",
    thumbnail: "https://robohash.org/quiutincidunt.bmp?size=200x200&set=set1",
    description: "User-friendly executive access"
  },
  {
    id: 33,
    name: "Minne M'Chirrie",
    email: "mmchirriew@google.ru",
    role: "Actuary",
    thumbnail: "https://robohash.org/blanditiisnullabeatae.png?size=200x200&set=set1",
    description: "Organized zero administration help-desk"
  },
  {
    id: 34,
    name: "Alain Durtnall",
    email: "adurtnallx@github.io",
    role: "Social Worker",
    thumbnail: "https://robohash.org/sithicporro.bmp?size=200x200&set=set1",
    description: "Digitized asynchronous pricing structure"
  },
  {
    id: 35,
    name: "Desi Winckles",
    email: "dwincklesy@cisco.com",
    role: "VP Quality Control",
    thumbnail: "https://robohash.org/nisifugiatnatus.jpg?size=200x200&set=set1",
    description: "Quality-focused uniform open system"
  },
  {
    id: 36,
    name: "Rochell Alker",
    email: "ralkerz@t-online.de",
    role: "Analyst Programmer",
    thumbnail: "https://robohash.org/doloresfugitdolorum.bmp?size=200x200&set=set1",
    description: "Open-source asynchronous artificial intelligence"
  }
];

export default employees;
