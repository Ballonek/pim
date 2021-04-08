import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import cs from './cs.json';
import en from './en.json';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Menu1: 'About us',
        Menu2: 'Representative works',
        Menu3: 'Partners',
        Menu4: 'Contacts',
        AboutTop: en.AboutTop,
        About: en.About,
        ServicesHeading: en.Services.heading,
        Service1Front: en.Services.service1.front,
        Service1Back: en.Services.service1.back,
        Service2Front: en.Services.service2.front,
        Service2Back: en.Services.service2.back,
        Service3Front: en.Services.service3.front,
        Service3Back: en.Services.service3.back,
        Service4Front: en.Services.service4.front,
        Service4Back: en.Services.service4.back,
        Service5Front: en.Services.service5.front,
        Service5Back: en.Services.service5.back,
        Service6Front: en.Services.service6.front,
        Service6Back: en.Services.service6.back,
        ServiceButton: 'Contact us',
        WorksHeading: en.Works.heading,
        Work1Item1: en.Works.work1[1],
        Work1Item2: en.Works.work1[2],
        Work2Item1: en.Works.work2[1],
        Work2Item2: en.Works.work2[2],
        Work2Item3: en.Works.work2[3],
        Work2Item4: en.Works.work2[4],
        Work3Item1: en.Works.work3[1],
        Work4Item1: en.Works.work4[1],
        Work4Item2: en.Works.work4[2],
        WorkButton: 'Other references',
        PartnersHeading: 'Partners',
        ContactHeading: 'Contacts',
        Contact1: 'Basic informations',
        Contact2: 'Orders',
        Contact3: 'Invoicing',
        Contact4Info: 'executive director<br />orders and work planning',
        Contact5Info: 'orders, invoicing<br /> and work planning',
        FooterL: en.FooterL,
        FooterR: en.FooterR,
        Back: 'Back home',
      },
    },
    cs: {
      translations: {
        Menu1: 'O nás',
        Menu2: 'Naše práce',
        Menu3: 'Partneři',
        Menu4: 'Kontakt',
        AboutTop: cs.AboutTop,
        About: cs.About,
        ServicesHeading: cs.Services.heading,
        Service1Front: cs.Services.service1.front,
        Service1Back: cs.Services.service1.back,
        Service2Front: cs.Services.service2.front,
        Service2Back: cs.Services.service2.back,
        Service3Front: cs.Services.service3.front,
        Service3Back: cs.Services.service3.back,
        Service4Front: cs.Services.service4.front,
        Service4Back: cs.Services.service4.back,
        Service5Front: cs.Services.service5.front,
        Service5Back: cs.Services.service5.back,
        Service6Front: cs.Services.service6.front,
        Service6Back: cs.Services.service6.back,
        ServiceButton: 'Kontaktujte nás',
        WorksHeading: cs.Works.heading,
        Work1Item1: cs.Works.work1[1],
        Work1Item2: cs.Works.work1[2],
        Work2Item1: cs.Works.work2[1],
        Work2Item2: cs.Works.work2[2],
        Work2Item3: cs.Works.work2[3],
        Work2Item4: cs.Works.work2[4],
        Work3Item1: cs.Works.work3[1],
        Work4Item1: cs.Works.work4[1],
        Work4Item2: cs.Works.work4[2],
        Work5Item1: cs.Works.work5[1],
        Work5Item2: cs.Works.work5[2],
        Work5Item3: cs.Works.work5[3],
        WorkButton: 'Další reference',
        PartnersHeading: 'Partneři',
        ContactHeading: 'Kontakt',
        Contact1: 'Obecný kontakt',
        Contact2: 'Objednávky',
        Contact3: 'Fakturace',
        Contact4Info: 'jednatel společnosti<br />objednávky a plánování',
        Contact5Info: 'objednávky, fakturace<br /> a plánování',
        FooterL: cs.FooterL,
        FooterR: cs.FooterR,
        Back: 'Zpět domů',
      },
    },
  },
  fallbackLng: 'cs',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
