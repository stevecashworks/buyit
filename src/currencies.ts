const currencies_and_symbols:{[key:string]:string} = {
  AED: "د.إ", // UAE Dirham
  AFN: "؋", // Afghan Afghani
  ALL: "L", // Albanian Lek
  AMD: "֏", // Armenian Dram
  ANG: "ƒ", // Netherlands Antillean Guilder
  AOA: "Kz", // Angolan Kwanza
  ARS: "$", // Argentine Peso
  AUD: "$", // Australian Dollar
  AWG: "ƒ", // Aruban Florin
  AZN: "₼", // Azerbaijani Manat
  BAM: "KM", // Bosnia and Herzegovina Convertible Mark
  BBD: "$", // Barbadian Dollar
  BDT: "৳", // Bangladeshi Taka
  BGN: "лв", // Bulgarian Lev
  BHD: ".د.ب", // Bahraini Dinar
  BIF: "FBu", // Burundian Franc
  BMD: "$", // Bermudian Dollar
  BND: "$", // Brunei Dollar
  BOB: "Bs.", // Bolivian Boliviano
  BRL: "R$", // Brazilian Real
  BSD: "$", // Bahamian Dollar
  BTN: "Nu.", // Bhutanese Ngultrum
  BWP: "P", // Botswana Pula
  BYN: "Br", // Belarusian Ruble
  BZD: "$", // Belize Dollar
  CAD: "$", // Canadian Dollar
  CDF: "FC", // Congolese Franc
  CHF: "CHF", // Swiss Franc
  CLP: "$", // Chilean Peso
  CNY: "¥", // Chinese Yuan
  COP: "$", // Colombian Peso
  CRC: "₡", // Costa Rican Colón
  CUC: "$", // Cuban Convertible Peso
  CUP: "$", // Cuban Peso
  CVE: "$", // Cape Verdean Escudo
  CZK: "Kč", // Czech Koruna
  DJF: "Fdj", // Djiboutian Franc
  DKK: "kr", // Danish Krone
  DOP: "RD$", // Dominican Peso
  DZD: "د.ج", // Algerian Dinar
  EGP: "£", // Egyptian Pound
  ERN: "Nfk", // Eritrean Nakfa
  ETB: "Br", // Ethiopian Birr
  EUR: "€", // Euro
  FJD: "$", // Fijian Dollar
  FKP: "£", // Falkland Islands Pound
  FOK: "kr", // Faroese Króna
  GBP: "£", // British Pound
  GEL: "₾", // Georgian Lari
  GGP: "£", // Guernsey Pound
  GHS: "₵", // Ghanaian Cedi
  GIP: "£", // Gibraltar Pound
  GMD: "D", // Gambian Dalasi
  GNF: "FG", // Guinean Franc
  GTQ: "Q", // Guatemalan Quetzal
  GYD: "$", // Guyanese Dollar
  HKD: "$", // Hong Kong Dollar
  HNL: "L", // Honduran Lempira
  HRK: "kn", // Croatian Kuna
  HTG: "G", // Haitian Gourde
  HUF: "Ft", // Hungarian Forint
  IDR: "Rp", // Indonesian Rupiah
  ILS: "₪", // Israeli New Shekel
  IMP: "£", // Isle of Man Pound
  INR: "₹", // Indian Rupee
  IQD: "ع.د", // Iraqi Dinar
  IRR: "﷼", // Iranian Rial
  ISK: "kr", // Icelandic Króna
  JEP: "£", // Jersey Pound
  JMD: "$", // Jamaican Dollar
  JOD: "د.ا", // Jordanian Dinar
  JPY: "¥", // Japanese Yen
  KES: "KSh", // Kenyan Shilling
  KGS: "сом", // Kyrgyzstani Som
  KHR: "៛", // Cambodian Riel
  KID: "$", // Kiribati Dollar
  KMF: "CF", // Comorian Franc
  KRW: "₩", // South Korean Won
  KWD: "د.ك", // Kuwaiti Dinar
  KYD: "$", // Cayman Islands Dollar
  KZT: "₸", // Kazakhstani Tenge
  LAK: "₭", // Lao Kip
  LBP: "ل.ل", // Lebanese Pound
  LKR: "Rs", // Sri Lankan Rupee
  LRD: "$", // Liberian Dollar
  LSL: "L", // Lesotho Loti
  LYD: "ل.د", // Libyan Dinar
  MAD: "د.م.", // Moroccan Dirham
  MDL: "L", // Moldovan Leu
  MGA: "Ar", // Malagasy Ariary
  MKD: "ден", // Macedonian Denar
  MMK: "K", // Myanmar Kyat
  MNT: "₮", // Mongolian Tugrik
  MOP: "MOP$", // Macanese Pataca
  MRU: "UM", // Mauritanian Ouguiya
  MUR: "₨", // Mauritian Rupee
  MVR: "Rf", // Maldivian Rufiyaa
  MWK: "MK", // Malawian Kwacha
  MXN: "$", // Mexican Peso
  MYR: "RM", // Malaysian Ringgit
  MZN: "MT", // Mozambican Metical
  NAD: "$", // Namibian Dollar
  NGN: "₦", // Nigerian Naira
  NIO: "C$", // Nicaraguan Córdoba
  NOK: "kr", // Norwegian Krone
  NPR: "₨", // Nepalese Rupee
  NZD: "$", // New Zealand Dollar
  OMR: "ر.ع.", // Omani Rial
  PAB: "B/.", // Panamanian Balboa
  PEN: "S/.", // Peruvian Sol
  PGK: "K", // Papua New Guinean Kina
  PHP: "₱", // Philippine Peso
  PKR: "₨", // Pakistani Rupee
  PLN: "zł", // Polish Zloty
  PYG: "₲", // Paraguayan Guarani
  QAR: "ر.ق", // Qatari Riyal
  RON: "lei", // Romanian Leu
  RSD: "дин", // Serbian Dinar
  RUB: "₽", // Russian Ruble
  RWF: "RF", // Rwandan Franc
  SAR: "﷼", // Saudi Riyal
  SBD: "$", // Solomon Islands Dollar
  SCR: "₨", // Seychellois Rupee
  SDG: "£", // Sudanese Pound
  SEK: "kr", // Swedish Krona
  SGD: "$", // Singapore Dollar
  SHP: "£", // Saint Helena Pound
  SLL: "Le", // Sierra Leonean Leone
  SOS: "S", // Somali Shilling
  SRD: "$", // Surinamese Dollar
  SSP: "£", // South Sudanese Pound
  STN: "Db", // São Tomé and Príncipe Dobra
  SYP: "£", // Syrian Pound
  SZL: "L", // Swazi Lilangeni
  THB: "฿", // Thai Baht
  TJS: "ЅМ", // Tajikistani Somoni
  TMT: "m", // Turkmenistan Manat
  TND: "د.ت", // Tunisian Dinar
  TOP: "T$", // Tongan Pa'anga
  TRY: "₺", // Turkish Lira
  TTD: "$", // Trinidad and Tobago Dollar
  TVD: "$", // Tuvalu Dollar
  TWD: "NT$", // New Taiwan Dollar
  TZS: "Sh", // Tanzanian Shilling
  UAH: "₴", // Ukrainian Hryvnia
  UGX: "USh", // Ugandan Shilling
  USD: "$", // United States Dollar
  UYU: "$", // Uruguayan Peso
  UZS: "лв", // Uzbekistani So'm
  VES: "Bs", // Venezuelan Bolívar Soberano
  VND: "₫", // Vietnamese Dong
  VUV: "Vt", // Vanuatu Vatu
  WST: "T", // Samoan Tala
  XAF: "FCFA", // CFA Franc BEAC
  XCD: "$", // East Caribbean Dollar
  XDR: "SDR", // Special Drawing Rights
  XOF: "CFA", // CFA Franc BCEAO
  XPF: "₣", // CFP Franc
  YER: "﷼", // Yemeni Rial
  ZAR: "R", // South African Rand
  ZMW: "ZK", // Zambian Kwacha
  ZWL: "$", // Zimbabwean Dollar
};

export default currencies_and_symbols