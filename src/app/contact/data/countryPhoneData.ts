export interface CountryPhoneData {
  country: string;
  code: string;
  flag: string;
  minLength: number;
  maxLength: number;
  regex: string;
}

export const countryPhoneData: CountryPhoneData[] = [
  {
    country: "Afghanistan",
    code: "+93",
    flag: "🇦🇫",
    minLength: 9,
    maxLength: 9,
    regex: "^7\\d{8}$"
  },
  {
    country: "Albania",
    code: "+355",
    flag: "🇦🇱",
    minLength: 9,
    maxLength: 9,
    regex: "^6\\d{8}$"
  },
  {
    country: "Algeria",
    code: "+213",
    flag: "🇩🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^[567]\\d{8}$"
  },
  {
    country: "Andorra",
    code: "+376",
    flag: "🇦🇩",
    minLength: 6,
    maxLength: 6,
    regex: "^[346]\\d{5}$"
  },
  {
    country: "Angola",
    code: "+244",
    flag: "🇦🇴",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Argentina",
    code: "+54",
    flag: "🇦🇷",
    minLength: 10,
    maxLength: 10,
    regex: "^9\\d{9}$"
  },
  {
    country: "Armenia",
    code: "+374",
    flag: "🇦🇲",
    minLength: 8,
    maxLength: 8,
    regex: "^[479]\\d{7}$"
  },
  {
    country: "Australia",
    code: "+61",
    flag: "🇦🇺",
    minLength: 9,
    maxLength: 9,
    regex: "^4\\d{8}$"
  },
  {
    country: "Austria",
    code: "+43",
    flag: "🇦🇹",
    minLength: 10,
    maxLength: 10,
    regex: "^6\\d{9}$"
  },
  {
    country: "Azerbaijan",
    code: "+994",
    flag: "🇦🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^[45]\\d{8}$"
  },
  {
    country: "Bahrain",
    code: "+973",
    flag: "🇧🇭",
    minLength: 8,
    maxLength: 8,
    regex: "^[369]\\d{7}$"
  },
  {
    country: "Bangladesh",
    code: "+880",
    flag: "🇧🇩",
    minLength: 10,
    maxLength: 10,
    regex: "^1[3-9]\\d{8}$"
  },
  {
    country: "Belarus",
    code: "+375",
    flag: "🇧🇾",
    minLength: 9,
    maxLength: 9,
    regex: "^[2-4]\\d{8}$"
  },
  {
    country: "Belgium",
    code: "+32",
    flag: "🇧🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^4\\d{8}$"
  },
  {
    country: "Belize",
    code: "+501",
    flag: "🇧🇿",
    minLength: 7,
    maxLength: 7,
    regex: "^[6]\\d{6}$"
  },
  {
    country: "Benin",
    code: "+229",
    flag: "🇧🇯",
    minLength: 8,
    maxLength: 8,
    regex: "^[569]\\d{7}$"
  },
  {
    country: "Bhutan",
    code: "+975",
    flag: "🇧🇹",
    minLength: 8,
    maxLength: 8,
    regex: "^[17]\\d{7}$"
  },
  {
    country: "Bolivia",
    code: "+591",
    flag: "🇧🇴",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Bosnia & Herzegovina",
    code: "+387",
    flag: "🇧🇦",
    minLength: 8,
    maxLength: 8,
    regex: "^6\\d{7}$"
  },
  {
    country: "Botswana",
    code: "+267",
    flag: "🇧🇼",
    minLength: 7,
    maxLength: 8,
    regex: "^7\\d{6,7}$"
  },
  {
    country: "Brazil",
    code: "+55",
    flag: "🇧🇷",
    minLength: 10,
    maxLength: 11,
    regex: "^([1-9]{2})9\\d{8}$"
  },
  {
    country: "Brunei",
    code: "+673",
    flag: "🇧🇳",
    minLength: 7,
    maxLength: 7,
    regex: "^[78]\\d{6}$"
  },
  {
    country: "Bulgaria",
    code: "+359",
    flag: "🇧🇬",
    minLength: 9,
    maxLength: 9,
    regex: "^8\\d{8}$"
  },
  {
    country: "Burkina Faso",
    code: "+226",
    flag: "🇧🇫",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Burundi",
    code: "+257",
    flag: "🇧🇮",
    minLength: 8,
    maxLength: 8,
    regex: "^[679]\\d{7}$"
  },
  {
    country: "Cambodia",
    code: "+855",
    flag: "🇰🇭",
    minLength: 8,
    maxLength: 9,
    regex: "^[1-9]\\d{7,8}$"
  },
  {
    country: "Cameroon",
    code: "+237",
    flag: "🇨🇲",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "Canada",
    code: "+1 CA",
    flag: "🇨🇦",
    minLength: 10,
    maxLength: 10,
    regex: "^[2-9]\\d{2}[2-9]\\d{6}$"
  },
  {
    country: "Cape Verde",
    code: "+238",
    flag: "🇨🇻",
    minLength: 7,
    maxLength: 7,
    regex: "^[59]\\d{6}$"
  },
  {
    country: "Central African Rep.",
    code: "+236",
    flag: "🇨🇫",
    minLength: 8,
    maxLength: 8,
    regex: "^7\\d{7}$"
  },
  {
    country: "Chad",
    code: "+235",
    flag: "🇹🇩",
    minLength: 8,
    maxLength: 8,
    regex: "^[679]\\d{7}$"
  },
  {
    country: "Chile",
    code: "+56",
    flag: "🇨🇱",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "China",
    code: "+86",
    flag: "🇨🇳",
    minLength: 11,
    maxLength: 11,
    regex: "^1[3-9]\\d{9}$"
  },
  {
    country: "Colombia",
    code: "+57",
    flag: "🇨🇴",
    minLength: 10,
    maxLength: 10,
    regex: "^3\\d{9}$"
  },
  {
    country: "Comoros",
    code: "+269",
    flag: "🇰🇲",
    minLength: 7,
    maxLength: 7,
    regex: "^[34]\\d{6}$"
  },
  {
    country: "Congo (Brazzaville)",
    code: "+242",
    flag: "🇨🇬",
    minLength: 9,
    maxLength: 9,
    regex: "^0[567]\\d{7}$"
  },
  {
    country: "Congo (Kinshasa)",
    code: "+243",
    flag: "🇨🇩",
    minLength: 9,
    maxLength: 9,
    regex: "^[89]\\d{8}$"
  },
  {
    country: "Costa Rica",
    code: "+506",
    flag: "🇨🇷",
    minLength: 8,
    maxLength: 8,
    regex: "^[678]\\d{7}$"
  },
  {
    country: "Croatia",
    code: "+385",
    flag: "🇭🇷",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Cuba",
    code: "+53",
    flag: "🇨🇺",
    minLength: 8,
    maxLength: 8,
    regex: "^5\\d{7}$"
  },
  {
    country: "Cyprus",
    code: "+357",
    flag: "🇨🇾",
    minLength: 8,
    maxLength: 8,
    regex: "^9\\d{7}$"
  },
  {
    country: "Czech Republic",
    code: "+420",
    flag: "🇨🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "Denmark",
    code: "+45",
    flag: "🇩🇰",
    minLength: 8,
    maxLength: 8,
    regex: "^[2-9]\\d{7}$"
  },
  {
    country: "Djibouti",
    code: "+253",
    flag: "🇩🇯",
    minLength: 8,
    maxLength: 8,
    regex: "^77\\d{6}$"
  },
  {
    country: "Dominican Republic",
    code: "+1-809",
    flag: "🇩🇴",
    minLength: 10,
    maxLength: 10,
    regex: "^[2-9]\\d{2}[2-9]\\d{6}$"
  },
  {
    country: "Ecuador",
    code: "+593",
    flag: "🇪🇨",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Egypt",
    code: "+20",
    flag: "🇪🇬",
    minLength: 10,
    maxLength: 10,
    regex: "^1[0125]\\d{8}$"
  },
  {
    country: "El Salvador",
    code: "+503",
    flag: "🇸🇻",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Estonia",
    code: "+372",
    flag: "🇪🇪",
    minLength: 7,
    maxLength: 8,
    regex: "^5\\d{6,7}$"
  },
  {
    country: "Eswatini",
    code: "+268",
    flag: "🇸🇿",
    minLength: 8,
    maxLength: 8,
    regex: "^7\\d{7}$"
  },
  {
    country: "Ethiopia",
    code: "+251",
    flag: "🇪🇹",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Fiji",
    code: "+679",
    flag: "🇫🇯",
    minLength: 7,
    maxLength: 7,
    regex: "^[789]\\d{6}$"
  },
  {
    country: "Finland",
    code: "+358",
    flag: "🇫🇮",
    minLength: 9,
    maxLength: 9,
    regex: "^4\\d{8}$"
  },
  {
    country: "France",
    code: "+33",
    flag: "🇫🇷",
    minLength: 9,
    maxLength: 9,
    regex: "^6\\d{8}$"
  },
  {
    country: "Gabon",
    code: "+241",
    flag: "🇬🇦",
    minLength: 8,
    maxLength: 8,
    regex: "^0[567]\\d{6}$"
  },
  {
    country: "Gambia",
    code: "+220",
    flag: "🇬🇲",
    minLength: 7,
    maxLength: 7,
    regex: "^[2-9]\\d{6}$"
  },
  {
    country: "Georgia",
    code: "+995",
    flag: "🇬🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^5\\d{8}$"
  },
  {
    country: "Germany",
    code: "+49",
    flag: "🇩🇪",
    minLength: 10,
    maxLength: 11,
    regex: "^1[5-7]\\d{8,9}$"
  },
  {
    country: "Ghana",
    code: "+233",
    flag: "🇬🇭",
    minLength: 9,
    maxLength: 9,
    regex: "^[25]\\d{8}$"
  },
  {
    country: "Greece",
    code: "+30",
    flag: "🇬🇷",
    minLength: 10,
    maxLength: 10,
    regex: "^69\\d{8}$"
  },
  {
    country: "Guatemala",
    code: "+502",
    flag: "🇬🇹",
    minLength: 8,
    maxLength: 8,
    regex: "^[45]\\d{7}$"
  },
  {
    country: "Guinea",
    code: "+224",
    flag: "🇬🇳",
    minLength: 9,
    maxLength: 9,
    regex: "^6\\d{8}$"
  },
  {
    country: "Haiti",
    code: "+509",
    flag: "🇭🇹",
    minLength: 8,
    maxLength: 8,
    regex: "^[34]\\d{7}$"
  },
  {
    country: "Honduras",
    code: "+504",
    flag: "🇭🇳",
    minLength: 8,
    maxLength: 8,
    regex: "^[89]\\d{7}$"
  },
  {
    country: "Hong Kong",
    code: "+852",
    flag: "🇭🇰",
    minLength: 8,
    maxLength: 8,
    regex: "^[5-9]\\d{7}$"
  },
  {
    country: "Hungary",
    code: "+36",
    flag: "🇭🇺",
    minLength: 9,
    maxLength: 9,
    regex: "^[23]0\\d{7}$"
  },
  {
    country: "Iceland",
    code: "+354",
    flag: "🇮🇸",
    minLength: 7,
    maxLength: 7,
    regex: "^[6-8]\\d{6}$"
  },
  {
    country: "India",
    code: "+91",
    flag: "🇮🇳",
    minLength: 10,
    maxLength: 10,
    regex: "^[6-9]\\d{9}$"
  },
  {
    country: "Indonesia",
    code: "+62",
    flag: "🇮🇩",
    minLength: 10,
    maxLength: 12,
    regex: "^8[1-9]\\d{7,10}$"
  },
  {
    country: "Iran",
    code: "+98",
    flag: "🇮🇷",
    minLength: 10,
    maxLength: 10,
    regex: "^9\\d{9}$"
  },
  {
    country: "Iraq",
    code: "+964",
    flag: "🇮🇶",
    minLength: 10,
    maxLength: 10,
    regex: "^7[5-9]\\d{8}$"
  },
  {
    country: "Ireland",
    code: "+353",
    flag: "🇮🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^8[356]\\d{7}$"
  },
  {
    country: "Israel",
    code: "+972",
    flag: "🇮🇱",
    minLength: 9,
    maxLength: 9,
    regex: "^5[0-9]\\d{7}$"
  },
  {
    country: "Italy",
    code: "+39",
    flag: "🇮🇹",
    minLength: 9,
    maxLength: 10,
    regex: "^3\\d{8,9}$"
  },
  {
    country: "Ivory Coast",
    code: "+225",
    flag: "🇨🇮",
    minLength: 8,
    maxLength: 8,
    regex: "^[0-7]\\d{7}$"
  },
  {
    country: "Jamaica",
    code: "+1-876",
    flag: "🇯🇲",
    minLength: 10,
    maxLength: 10,
    regex: "^[2-9]\\d{2}[2-9]\\d{6}$"
  },
  {
    country: "Japan",
    code: "+81",
    flag: "🇯🇵",
    minLength: 10,
    maxLength: 10,
    regex: "^90\\d{8}$"
  },
  {
    country: "Jordan",
    code: "+962",
    flag: "🇯🇴",
    minLength: 9,
    maxLength: 9,
    regex: "^7[789]\\d{7}$"
  },
  {
    country: "Kazakhstan",
    code: "+7 KZ",
    flag: "🇰🇿",
    minLength: 10,
    maxLength: 10,
    regex: "^7[0-7]\\d{8}$"
  },
  {
    country: "Kenya",
    code: "+254",
    flag: "🇰🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^7\\d{8}$"
  },
  {
    country: "Kuwait",
    code: "+965",
    flag: "🇰🇼",
    minLength: 8,
    maxLength: 8,
    regex: "^[569]\\d{7}$"
  },
  {
    country: "Kyrgyzstan",
    code: "+996",
    flag: "🇰🇬",
    minLength: 9,
    maxLength: 9,
    regex: "^[57]\\d{8}$"
  },
  {
    country: "Laos",
    code: "+856",
    flag: "🇱🇦",
    minLength: 8,
    maxLength: 9,
    regex: "^20\\d{6,7}$"
  },
  {
    country: "Latvia",
    code: "+371",
    flag: "🇱🇻",
    minLength: 8,
    maxLength: 8,
    regex: "^2\\d{7}$"
  },
  {
    country: "Lebanon",
    code: "+961",
    flag: "🇱🇧",
    minLength: 8,
    maxLength: 8,
    regex: "^[37]\\d{7}$"
  },
  {
    country: "Lesotho",
    code: "+266",
    flag: "🇱🇸",
    minLength: 8,
    maxLength: 8,
    regex: "^[56]\\d{7}$"
  },
  {
    country: "Liberia",
    code: "+231",
    flag: "🇱🇷",
    minLength: 8,
    maxLength: 8,
    regex: "^[45-9]\\d{7}$"
  },
  {
    country: "Libya",
    code: "+218",
    flag: "🇱🇾",
    minLength: 9,
    maxLength: 9,
    regex: "^9[1-6]\\d{7}$"
  },
  {
    country: "Lithuania",
    code: "+370",
    flag: "🇱🇹",
    minLength: 8,
    maxLength: 8,
    regex: "^6\\d{7}$"
  },
  {
    country: "Luxembourg",
    code: "+352",
    flag: "🇱🇺",
    minLength: 9,
    maxLength: 9,
    regex: "^6\\d{8}$"
  },
  {
    country: "Macau",
    code: "+853",
    flag: "🇲🇴",
    minLength: 8,
    maxLength: 8,
    regex: "^6\\d{7}$"
  },
  {
    country: "Madagascar",
    code: "+261",
    flag: "🇲🇬",
    minLength: 9,
    maxLength: 9,
    regex: "^3[234]\\d{7}$"
  },
  {
    country: "Malawi",
    code: "+265",
    flag: "🇲🇼",
    minLength: 9,
    maxLength: 9,
    regex: "^[89]\\d{8}$"
  },
  {
    country: "Malaysia",
    code: "+60",
    flag: "🇲🇾",
    minLength: 9,
    maxLength: 10,
    regex: "^1[0-9]\\d{7,8}$"
  },
  {
    country: "Maldives",
    code: "+960",
    flag: "🇲🇻",
    minLength: 7,
    maxLength: 7,
    regex: "^[79]\\d{6}$"
  },
  {
    country: "Mali",
    code: "+223",
    flag: "🇲🇱",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Malta",
    code: "+356",
    flag: "🇲🇹",
    minLength: 8,
    maxLength: 8,
    regex: "^[79]\\d{7}$"
  },
  {
    country: "Mauritania",
    code: "+222",
    flag: "🇲🇷",
    minLength: 8,
    maxLength: 8,
    regex: "^[234]\\d{7}$"
  },
  {
    country: "Mauritius",
    code: "+230",
    flag: "🇲🇺",
    minLength: 8,
    maxLength: 8,
    regex: "^5\\d{7}$"
  },
  {
    country: "Mexico",
    code: "+52",
    flag: "🇲🇽",
    minLength: 10,
    maxLength: 10,
    regex: "^1\\d{9}$"
  },
  {
    country: "Moldova",
    code: "+373",
    flag: "🇲🇩",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Monaco",
    code: "+377",
    flag: "🇲🇨",
    minLength: 8,
    maxLength: 8,
    regex: "^6\\d{7}$"
  },
  {
    country: "Mongolia",
    code: "+976",
    flag: "🇲🇳",
    minLength: 8,
    maxLength: 8,
    regex: "^[589]\\d{7}$"
  },
  {
    country: "Montenegro",
    code: "+382",
    flag: "🇲🇪",
    minLength: 8,
    maxLength: 8,
    regex: "^6\\d{7}$"
  },
  {
    country: "Morocco",
    code: "+212",
    flag: "🇲🇦",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "Mozambique",
    code: "+258",
    flag: "🇲🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^8[2-7]\\d{7}$"
  },
  {
    country: "Myanmar (Burma)",
    code: "+95",
    flag: "🇲🇲",
    minLength: 9,
    maxLength: 9,
    regex: "^9[5-9]\\d{7}$"
  },
  {
    country: "Namibia",
    code: "+264",
    flag: "🇳🇦",
    minLength: 9,
    maxLength: 9,
    regex: "^8[1-5]\\d{7}$"
  },
  {
    country: "Nepal",
    code: "+977",
    flag: "🇳🇵",
    minLength: 10,
    maxLength: 10,
    regex: "^9[78]\\d{8}$"
  },
  {
    country: "Netherlands",
    code: "+31",
    flag: "🇳🇱",
    minLength: 9,
    maxLength: 9,
    regex: "^6\\d{8}$"
  },
  {
    country: "New Zealand",
    code: "+64",
    flag: "🇳🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^2[0-9]\\d{7}$"
  },
  {
    country: "Nicaragua",
    code: "+505",
    flag: "🇳🇮",
    minLength: 8,
    maxLength: 8,
    regex: "^[578]\\d{7}$"
  },
  {
    country: "Niger",
    code: "+227",
    flag: "🇳🇪",
    minLength: 8,
    maxLength: 8,
    regex: "^9\\d{7}$"
  },
  {
    country: "Nigeria",
    code: "+234",
    flag: "🇳🇬",
    minLength: 10,
    maxLength: 10,
    regex: "^[789]\\d{9}$"
  },
  {
    country: "North Macedonia",
    code: "+389",
    flag: "🇲🇰",
    minLength: 8,
    maxLength: 8,
    regex: "^7\\d{7}$"
  },
  {
    country: "Norway",
    code: "+47",
    flag: "🇳🇴",
    minLength: 8,
    maxLength: 8,
    regex: "^[49]\\d{7}$"
  },
  {
    country: "Oman",
    code: "+968",
    flag: "🇴🇲",
    minLength: 8,
    maxLength: 8,
    regex: "^9[1-9]\\d{6}$"
  },
  {
    country: "Pakistan",
    code: "+92",
    flag: "🇵🇰",
    minLength: 10,
    maxLength: 10,
    regex: "^3\\d{9}$"
  },
  {
    country: "Panama",
    code: "+507",
    flag: "🇵🇦",
    minLength: 8,
    maxLength: 8,
    regex: "^[67]\\d{7}$"
  },
  {
    country: "Papua New Guinea",
    code: "+675",
    flag: "🇵🇬",
    minLength: 7,
    maxLength: 7,
    regex: "^[78]\\d{6}$"
  },
  {
    country: "Paraguay",
    code: "+595",
    flag: "🇵🇾",
    minLength: 9,
    maxLength: 9,
    regex: "^9[6-9]\\d{7}$"
  },
  {
    country: "Peru",
    code: "+51",
    flag: "🇵🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Philippines",
    code: "+63",
    flag: "🇵🇭",
    minLength: 10,
    maxLength: 10,
    regex: "^9\\d{9}$"
  },
  {
    country: "Poland",
    code: "+48",
    flag: "🇵🇱",
    minLength: 9,
    maxLength: 9,
    regex: "^[4-8]\\d{8}$"
  },
  {
    country: "Portugal",
    code: "+351",
    flag: "🇵🇹",
    minLength: 9,
    maxLength: 9,
    regex: "^9[1236]\\d{7}$"
  },
  {
    country: "Qatar",
    code: "+974",
    flag: "🇶🇦",
    minLength: 8,
    maxLength: 8,
    regex: "^[357]\\d{7}$"
  },
  {
    country: "Romania",
    code: "+40",
    flag: "🇷🇴",
    minLength: 9,
    maxLength: 9,
    regex: "^7[2-8]\\d{7}$"
  },
  {
    country: "Russia",
    code: "+7 RU",
    flag: "🇷🇺",
    minLength: 10,
    maxLength: 10,
    regex: "^9\\d{9}$"
  },
  {
    country: "Rwanda",
    code: "+250",
    flag: "🇷🇼",
    minLength: 9,
    maxLength: 9,
    regex: "^7[238]\\d{7}$"
  },
  {
    country: "Saudi Arabia",
    code: "+966",
    flag: "🇸🇦",
    minLength: 9,
    maxLength: 9,
    regex: "^5\\d{8}$"
  },
  {
    country: "Senegal",
    code: "+221",
    flag: "🇸🇳",
    minLength: 9,
    maxLength: 9,
    regex: "^7[067]\\d{7}$"
  },
  {
    country: "Serbia",
    code: "+381",
    flag: "🇷🇸",
    minLength: 8,
    maxLength: 9,
    regex: "^6[0-9]\\d{6,7}$"
  },
  {
    country: "Seychelles",
    code: "+248",
    flag: "🇸🇨",
    minLength: 7,
    maxLength: 7,
    regex: "^2[578]\\d{5}$"
  },
  {
    country: "Singapore",
    code: "+65",
    flag: "🇸🇬",
    minLength: 8,
    maxLength: 8,
    regex: "^[89]\\d{7}$"
  },
  {
    country: "Slovakia",
    code: "+421",
    flag: "🇸🇰",
    minLength: 9,
    maxLength: 9,
    regex: "^9[0-5]\\d{7}$"
  },
  {
    country: "Slovenia",
    code: "+386",
    flag: "🇸🇮",
    minLength: 8,
    maxLength: 8,
    regex: "^[34569]\\d{7}$"
  },
  {
    country: "Somalia",
    code: "+252",
    flag: "🇸🇴",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "South Africa",
    code: "+27",
    flag: "🇿🇦",
    minLength: 9,
    maxLength: 9,
    regex: "^[6-8]\\d{8}$"
  },
  {
    country: "South Korea",
    code: "+82",
    flag: "🇰🇷",
    minLength: 10,
    maxLength: 10,
    regex: "^1[0-9]\\d{8}$"
  },
  {
    country: "Spain",
    code: "+34",
    flag: "🇪🇸",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "Sri Lanka",
    code: "+94",
    flag: "🇱🇰",
    minLength: 9,
    maxLength: 9,
    regex: "^7[012578]\\d{7}$"
  },
  {
    country: "Sudan",
    code: "+249",
    flag: "🇸🇩",
    minLength: 9,
    maxLength: 9,
    regex: "^[19]\\d{8}$"
  },
  {
    country: "Sweden",
    code: "+46",
    flag: "🇸🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^7[02369]\\d{7}$"
  },
  {
    country: "Switzerland",
    code: "+41",
    flag: "🇨🇭",
    minLength: 9,
    maxLength: 9,
    regex: "^7[5-9]\\d{7}$"
  },
  {
    country: "Syria",
    code: "+963",
    flag: "🇸🇾",
    minLength: 9,
    maxLength: 9,
    regex: "^9[3-6]\\d{7}$"
  },
  {
    country: "Taiwan",
    code: "+886",
    flag: "🇹🇼",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Tajikistan",
    code: "+992",
    flag: "🇹🇯",
    minLength: 9,
    maxLength: 9,
    regex: "^[59]\\d{8}$"
  },
  {
    country: "Tanzania",
    code: "+255",
    flag: "🇹🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^[67]\\d{8}$"
  },
  {
    country: "Thailand",
    code: "+66",
    flag: "🇹🇭",
    minLength: 9,
    maxLength: 9,
    regex: "^[689]\\d{8}$"
  },
  {
    country: "Togo",
    code: "+228",
    flag: "🇹🇬",
    minLength: 8,
    maxLength: 8,
    regex: "^9\\d{7}$"
  },
  {
    country: "Trinidad & Tobago",
    code: "+1-868",
    flag: "🇹🇹",
    minLength: 10,
    maxLength: 10,
    regex: "^[2-9]\\d{2}[2-9]\\d{6}$"
  },
  {
    country: "Tunisia",
    code: "+216",
    flag: "🇹🇳",
    minLength: 8,
    maxLength: 8,
    regex: "^[2-5]\\d{7}$"
  },
  {
    country: "Turkey",
    code: "+90",
    flag: "🇹🇷",
    minLength: 10,
    maxLength: 10,
    regex: "^5[0-9]\\d{8}$"
  },
  {
    country: "Turkmenistan",
    code: "+993",
    flag: "🇹🇲",
    minLength: 8,
    maxLength: 8,
    regex: "^6[1-5]\\d{6}$"
  },
  {
    country: "Uganda",
    code: "+256",
    flag: "🇺🇬",
    minLength: 9,
    maxLength: 9,
    regex: "^7[0-9]\\d{7}$"
  },
  {
    country: "Ukraine",
    code: "+380",
    flag: "🇺🇦",
    minLength: 9,
    maxLength: 9,
    regex: "^[3-9]\\d{8}$"
  },
  {
    country: "United Arab Emirates",
    code: "+971",
    flag: "🇦🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^5\\d{8}$"
  },
  {
    country: "United Kingdom",
    code: "+44",
    flag: "🇬🇧",
    minLength: 10,
    maxLength: 10,
    regex: "^7\\d{9}$"
  },
  {
    country: "United States",
    code: "+1 US",
    flag: "🇺🇸",
    minLength: 10,
    maxLength: 10,
    regex: "^[2-9]\\d{2}[2-9]\\d{6}$"
  },
  {
    country: "Uruguay",
    code: "+598",
    flag: "🇺🇾",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Uzbekistan",
    code: "+998",
    flag: "🇺🇿",
    minLength: 9,
    maxLength: 9,
    regex: "^[679]\\d{8}$"
  },
  {
    country: "Venezuela",
    code: "+58",
    flag: "🇻🇪",
    minLength: 10,
    maxLength: 10,
    regex: "^4\\d{9}$"
  },
  {
    country: "Vietnam",
    code: "+84",
    flag: "🇻🇳",
    minLength: 9,
    maxLength: 10,
    regex: "^[39]\\d{8,9}$"
  },
  {
    country: "Yemen",
    code: "+967",
    flag: "🇾🇪",
    minLength: 9,
    maxLength: 9,
    regex: "^7[01378]\\d{7}$"
  },
  {
    country: "Zambia",
    code: "+260",
    flag: "🇿🇲",
    minLength: 9,
    maxLength: 9,
    regex: "^9\\d{8}$"
  },
  {
    country: "Zimbabwe",
    code: "+263",
    flag: "🇿🇼",
    minLength: 9,
    maxLength: 9,
    regex: "^7[17]\\d{7}$"
  }
];