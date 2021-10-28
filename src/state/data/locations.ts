const locationData = [
  {
    name: "Mombasa",
    subCounty: "Changamwe",
  },
  {
    name: "Mombasa",
    subCounty: "Jomvu",
  },
  {
    name: "Mombasa",
    subCounty: "Kisauni",
  },
  {
    name: "Mombasa",
    subCounty: "Likoni",
  },
  {
    name: "Mombasa",
    subCounty: "Mvita",
  },
  {
    name: "Mombasa",
    subCounty: "Nyali",
  },
  {
    name: "Kwale",
    subCounty: "Kinango",
  },
  {
    name: "Kwale",
    subCounty: "Lungalunga",
  },
  {
    name: "Kwale",
    subCounty: "Matuga",
  },
  {
    name: "Kwale",
    subCounty: "Msambweni",
  },
  {
    name: "Kwale",
    subCounty: "Samburu Kwale",
  },
  {
    name: "Kilifi",
    subCounty: "Chonyi",
  },
  {
    name: "Kilifi",
    subCounty: "Ganze",
  },
  {
    name: "Kilifi",
    subCounty: "Kaloleni",
  },
  {
    name: "Kilifi",
    subCounty: "Kauma",
  },
  {
    name: "Kilifi",
    subCounty: "Kilifi North",
  },
  {
    name: "Kilifi",
    subCounty: "Kilifi South",
  },
  {
    name: "Kilifi",
    subCounty: "Magarini",
  },
  {
    name: "Kilifi",
    subCounty: "Malindi",
  },
  {
    name: "Kilifi",
    subCounty: "Rabai",
  },
  {
    name: "Tana River",
    subCounty: "Tana North",
  },
  {
    name: "Tana River",
    subCounty: "Tana Delta",
  },
  {
    name: "Tana River",
    subCounty: "Tana River",
  },
  {
    name: "Lamu",
    subCounty: "Lamu East",
  },
  {
    name: "Lamu",
    subCounty: "Lamu West",
  },
  {
    name: "Taita Taveta",
    subCounty: "Mwatate",
  },
  {
    name: "Taita Taveta",
    subCounty: "Taita",
  },
  {
    name: "Taita Taveta",
    subCounty: "Taveta",
  },
  {
    name: "Taita Taveta",
    subCounty: "Voi",
  },
  {
    name: "Garissa",
    subCounty: "Balambala",
  },
  {
    name: "Garissa",
    subCounty: "Dadaab",
  },
  {
    name: "Garissa",
    subCounty: "Fafi",
  },
  {
    name: "Garissa",
    subCounty: "Garissa",
  },
  {
    name: "Garissa",
    subCounty: "Hulugho",
  },
  {
    name: "Garissa",
    subCounty: "Ijara",
  },
  {
    name: "Garissa",
    subCounty: "Lagdera",
  },
  {
    name: "Wajir",
    subCounty: "Buna",
  },
  {
    name: "Wajir",
    subCounty: "Eldas",
  },
  {
    name: "Wajir",
    subCounty: "Habaswein.",
  },
  {
    name: "Wajir",
    subCounty: "Tarbaj",
  },
  {
    name: "Wajir",
    subCounty: "Wajir East.",
  },
  {
    name: "Wajir",
    subCounty: "Wajir North",
  },
  {
    name: "Wajir",
    subCounty: "Wajir South",
  },
  {
    name: "Wajir",
    subCounty: "Wajir West",
  },
  {
    name: "Mandera",
    subCounty: "Mandera West.",
  },
  {
    name: "Mandera",
    subCounty: "Banisa",
  },
  {
    name: "Mandera",
    subCounty: "Kutulo",
  },
  {
    name: "Mandera",
    subCounty: "Lafey",
  },
  {
    name: "Mandera",
    subCounty: "Mandera Central",
  },
  {
    name: "Mandera",
    subCounty: "Mandera East",
  },
  {
    name: "Mandera",
    subCounty: "Mandera North",
  },
  {
    name: "Marsabit",
    subCounty: "Loiyangalani",
  },
  {
    name: "Marsabit",
    subCounty: "Marsabit Central.",
  },
  {
    name: "Marsabit",
    subCounty: "Marsabit North.",
  },
  {
    name: "Marsabit",
    subCounty: "Marsabit South.",
  },
  {
    name: "Marsabit",
    subCounty: "Moyale",
  },
  {
    name: "Marsabit",
    subCounty: "North Horr",
  },
  {
    name: "Marsabit",
    subCounty: "Sololo",
  },
  {
    name: "Isiolo",
    subCounty: "Garbatulla.",
  },
  {
    name: "Isiolo",
    subCounty: "Isiolo",
  },
  {
    name: "Isiolo",
    subCounty: "Merti",
  },
  {
    name: "Meru",
    subCounty: "Buuri East",
  },
  {
    name: "Meru",
    subCounty: "Buuri West.",
  },
  {
    name: "Meru",
    subCounty: "Igembe Central",
  },
  {
    name: "Meru",
    subCounty: "Igembe North",
  },
  {
    name: "Meru",
    subCounty: "Igembe South",
  },
  {
    name: "Meru",
    subCounty: "Imenti North.",
  },
  {
    name: "Meru",
    subCounty: "Imenti South.",
  },
  {
    name: "Meru",
    subCounty: "Meru Central",
  },
  {
    name: "Meru",
    subCounty: "Tigania Central",
  },
  {
    name: "Meru",
    subCounty: "Tigania East.",
  },
  {
    name: "Meru",
    subCounty: "Tigania West",
  },
  {
    name: "Meru",
    subCounty: "Meru National Park.",
  },
  {
    name: "Meru",
    subCounty: "Mt Kenya Forest",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Igambang'ombe",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Maara",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Meru South",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Tharaka North",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Tharaka South",
  },
  {
    name: "Tharaka Nithi",
    subCounty: "Mt Kenya Forest",
  },
  {
    name: "Embu",
    subCounty: "Embu East",
  },
  {
    name: "Embu",
    subCounty: "Embu North",
  },
  {
    name: "Embu",
    subCounty: "Embu West",
  },
  {
    name: "Embu",
    subCounty: "Mbeere South",
  },
  {
    name: "Embu",
    subCounty: "Mbeere North",
  },
  {
    name: "Embu",
    subCounty: "Mt Kenya Forest",
  },
  {
    name: "Kitui",
    subCounty: "Ikutha",
  },
  {
    name: "Kitui",
    subCounty: "Katulani",
  },
  {
    name: "Kitui",
    subCounty: "Kisasi",
  },
  {
    name: "Kitui",
    subCounty: "Kitui Central",
  },
  {
    name: "Kitui",
    subCounty: "Kitui West",
  },
  {
    name: "Kitui",
    subCounty: "Kyuso",
  },
  {
    name: "Kitui",
    subCounty: "Lower Yatta",
  },
  {
    name: "Kitui",
    subCounty: "Matinyani",
  },
  {
    name: "Kitui",
    subCounty: "Migwani",
  },
  {
    name: "Kitui",
    subCounty: "Mumoni",
  },
  {
    name: "Kitui",
    subCounty: "Mutitu",
  },
  {
    name: "Kitui",
    subCounty: "Mutitu North",
  },
  {
    name: "Kitui",
    subCounty: "Mutomo",
  },
  {
    name: "Kitui",
    subCounty: "Mwingi Central",
  },
  {
    name: "Kitui",
    subCounty: "Mwingi East",
  },
  {
    name: "Kitui",
    subCounty: "Nzambani",
  },
  {
    name: "Kitui",
    subCounty: "Thagicu",
  },
  {
    name: "Kitui",
    subCounty: "Tseikuru",
  },
  {
    name: "Machakos",
    subCounty: "Athi River",
  },
  {
    name: "Machakos",
    subCounty: "Kalama",
  },
  {
    name: "Machakos",
    subCounty: "Kangundo",
  },
  {
    name: "Machakos",
    subCounty: "Kathiani",
  },
  {
    name: "Machakos",
    subCounty: "Machakos",
  },
  {
    name: "Machakos",
    subCounty: "Masinga",
  },
  {
    name: "Machakos",
    subCounty: "Matungulu",
  },
  {
    name: "Machakos",
    subCounty: "Mwala",
  },
  {
    name: "Machakos",
    subCounty: "Yatta",
  },
  {
    name: "Makueni",
    subCounty: "Kathonzweni",
  },
  {
    name: "Makueni",
    subCounty: "Kibwezi",
  },
  {
    name: "Makueni",
    subCounty: "Kilungu",
  },
  {
    name: "Makueni",
    subCounty: "Makindu",
  },
  {
    name: "Makueni",
    subCounty: "Makueni",
  },
  {
    name: "Makueni",
    subCounty: "Mbooni East",
  },
  {
    name: "Makueni",
    subCounty: "Mbooni West",
  },
  {
    name: "Makueni",
    subCounty: "Mukaa",
  },
  {
    name: "Makueni",
    subCounty: "Nzaui",
  },
  {
    name: "Nyandarua",
    subCounty: "Kinangop",
  },
  {
    name: "Nyandarua",
    subCounty: "Nyandarua South",
  },
  {
    name: "Nyandarua",
    subCounty: "Mirangine",
  },
  {
    name: "Nyandarua",
    subCounty: "Kipipiri",
  },
  {
    name: "Nyandarua",
    subCounty: "Nyandarua Central",
  },
  {
    name: "Nyandarua",
    subCounty: "Nyandarua West",
  },
  {
    name: "Nyandarua",
    subCounty: "Nyandarua North",
  },
  {
    name: "Nyandarua",
    subCounty: "Aberdare National Park",
  },
  {
    name: "Nyeri",
    subCounty: "Tetu",
  },
  {
    name: "Nyeri",
    subCounty: "Kieni East",
  },
  {
    name: "Nyeri",
    subCounty: "Kieni West",
  },
  {
    name: "Nyeri",
    subCounty: "Mathira East",
  },
  {
    name: "Nyeri",
    subCounty: "Mathira West",
  },
  {
    name: "Nyeri",
    subCounty: "Nyeri South",
  },
  {
    name: "Nyeri",
    subCounty: "Mukurwe ini",
  },
  {
    name: "Nyeri",
    subCounty: "Nyeri Central",
  },
  {
    name: "Nyeri",
    subCounty: "Mt Kenya Forest",
  },
  {
    name: "Nyeri",
    subCounty: "Aberdare Forest",
  },
  {
    name: "Kirinyaga",
    subCounty: "Kirinyaga Central",
  },
  {
    name: "Kirinyaga",
    subCounty: "Kirinyaga East",
  },
  {
    name: "Kirinyaga",
    subCounty: "Kirinyaga West",
  },
  {
    name: "Kirinyaga",
    subCounty: "Mwea East",
  },
  {
    name: "Kirinyaga",
    subCounty: "Mwea West",
  },
  {
    name: "Kirinyaga",
    subCounty: "Mt Kenya Forest",
  },
  {
    name: "Murang'a",
    subCounty: "Murang'a East",
  },
  {
    name: "Murang'a",
    subCounty: "Kangema",
  },
  {
    name: "Murang'a",
    subCounty: "Mathioya",
  },
  {
    name: "Murang'a",
    subCounty: "Kahuro",
  },
  {
    name: "Murang'a",
    subCounty: "Murang'a South",
  },
  {
    name: "Murang'a",
    subCounty: "Gatanga",
  },
  {
    name: "Murang'a",
    subCounty: "Kigumo",
  },
  {
    name: "Murang'a",
    subCounty: "Kandara",
  },
  {
    name: "Murang'a",
    subCounty: "Aberdare Forest",
  },
  {
    name: "Kiambu",
    subCounty: "Gatundu North",
  },
  {
    name: "Kiambu",
    subCounty: "Gatundu South",
  },
  {
    name: "Kiambu",
    subCounty: "Githunguri",
  },
  {
    name: "Kiambu",
    subCounty: "Juja",
  },
  {
    name: "Kiambu",
    subCounty: "Kabete",
  },
  {
    name: "Kiambu",
    subCounty: "Kiambaa",
  },
  {
    name: "Kiambu",
    subCounty: "Kiambu",
  },
  {
    name: "Kiambu",
    subCounty: "Kikuyu",
  },
  {
    name: "Kiambu",
    subCounty: "Lari",
  },
  {
    name: "Kiambu",
    subCounty: "Limuru",
  },
  {
    name: "Kiambu",
    subCounty: "Ruiru",
  },
  {
    name: "Kiambu",
    subCounty: "Thika East",
  },
  {
    name: "Kiambu",
    subCounty: "Thika West",
  },
  {
    name: "Turkana",
    subCounty: "Kibish",
  },
  {
    name: "Turkana",
    subCounty: "Loima",
  },
  {
    name: "Turkana",
    subCounty: "Turkana Central",
  },
  {
    name: "Turkana",
    subCounty: "Turkana East",
  },
  {
    name: "Turkana",
    subCounty: "Turkana North",
  },
  {
    name: "Turkana",
    subCounty: "Turkana South",
  },
  {
    name: "Turkana",
    subCounty: "Turkana West",
  },
  {
    name: "West Pokot",
    subCounty: "Kipkomo",
  },
  {
    name: "West Pokot",
    subCounty: "Pokot Central",
  },
  {
    name: "West Pokot",
    subCounty: "Pokot North",
  },
  {
    name: "West Pokot",
    subCounty: "Pokot South",
  },
  {
    name: "West Pokot",
    subCounty: "West Pokot",
  },
  {
    name: "Samburu",
    subCounty: "Samburu Central",
  },
  {
    name: "Samburu",
    subCounty: "Samburu East",
  },
  {
    name: "Samburu",
    subCounty: "Samburu North",
  },
  {
    name: "Trans Nzoia",
    subCounty: "Trans Nzoia West",
  },
  {
    name: "Trans Nzoia",
    subCounty: "Trans Nzoia East",
  },
  {
    name: "Trans Nzoia",
    subCounty: "Kwanza",
  },
  {
    name: "Trans Nzoia",
    subCounty: "Endebess",
  },
  {
    name: "Trans Nzoia",
    subCounty: "Kiminini",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Ainabkoi",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Kapseret",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Kesses",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Moiben",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Soy",
  },
  {
    name: "Uasin Gishu",
    subCounty: "Turbo",
  },
  {
    name: "Elgeyo Marakwet",
    subCounty: "Keiyo North",
  },
  {
    name: "Elgeyo Marakwet",
    subCounty: "Keiyo South",
  },
  {
    name: "Elgeyo Marakwet",
    subCounty: "Marakwet East",
  },
  {
    name: "Elgeyo Marakwet",
    subCounty: "Marakwet West",
  },
  {
    name: "Nandi",
    subCounty: "Chesumei",
  },
  {
    name: "Nandi",
    subCounty: "Nandi Central",
  },
  {
    name: "Nandi",
    subCounty: "Nandi East",
  },
  {
    name: "Nandi",
    subCounty: "Nandi North",
  },
  {
    name: "Nandi",
    subCounty: "Nandi South",
  },
  {
    name: "Nandi",
    subCounty: "Tinderet",
  },
  {
    name: "Baringo",
    subCounty: "Baringo Central",
  },
  {
    name: "Baringo",
    subCounty: "Baringo North",
  },
  {
    name: "Baringo",
    subCounty: "East Pokot",
  },
  {
    name: "Baringo",
    subCounty: "Koibatek",
  },
  {
    name: "Baringo",
    subCounty: "Marigat",
  },
  {
    name: "Baringo",
    subCounty: "Mogotio",
  },
  {
    name: "Baringo",
    subCounty: "Tiaty East",
  },
  {
    name: "Laikipia",
    subCounty: "Laikipia Central",
  },
  {
    name: "Laikipia",
    subCounty: "Laikipia East",
  },
  {
    name: "Laikipia",
    subCounty: "Laikipia North",
  },
  {
    name: "Laikipia",
    subCounty: "Laikipia West",
  },
  {
    name: "Laikipia",
    subCounty: "Nyahururu",
  },
  {
    name: "Nakuru",
    subCounty: "Gilgil",
  },
  {
    name: "Nakuru",
    subCounty: "Kuresoi North",
  },
  {
    name: "Nakuru",
    subCounty: "Kuresoi South",
  },
  {
    name: "Nakuru",
    subCounty: "Molo",
  },
  {
    name: "Nakuru",
    subCounty: "Naivasha",
  },
  {
    name: "Nakuru",
    subCounty: "Nakuru East",
  },
  {
    name: "Nakuru",
    subCounty: "Nakuru North",
  },
  {
    name: "Nakuru",
    subCounty: "Nakuru West",
  },
  {
    name: "Nakuru",
    subCounty: "Njoro",
  },
  {
    name: "Nakuru",
    subCounty: "Rongai",
  },
  {
    name: "Nakuru",
    subCounty: "Subukia",
  },
  {
    name: "Narok",
    subCounty: "Narok East",
  },
  {
    name: "Narok",
    subCounty: "Narok North",
  },
  {
    name: "Narok",
    subCounty: "Narok South",
  },
  {
    name: "Narok",
    subCounty: "Narok West",
  },
  {
    name: "Narok",
    subCounty: "Trans Mara East",
  },
  {
    name: "Narok",
    subCounty: "Trans Mara West",
  },
  {
    name: "Narok",
    subCounty: "Mau Forest",
  },
  {
    name: "Kajiado",
    subCounty: "Isinya",
  },
  {
    name: "Kajiado",
    subCounty: "Kajiado Central",
  },
  {
    name: "Kajiado",
    subCounty: "Kajiado North",
  },
  {
    name: "Kajiado",
    subCounty: "Kajiado West",
  },
  {
    name: "Kajiado",
    subCounty: "Loitokitok",
  },
  {
    name: "Kajiado",
    subCounty: "Mashuuru",
  },
  {
    name: "Kericho",
    subCounty: "Belgut",
  },
  {
    name: "Kericho",
    subCounty: "Bureti",
  },
  {
    name: "Kericho",
    subCounty: "Kericho East",
  },
  {
    name: "Kericho",
    subCounty: "Kipkelion",
  },
  {
    name: "Kericho",
    subCounty: "Londiani",
  },
  {
    name: "Kericho",
    subCounty: "Soin Sigowet",
  },
  {
    name: "Bomet",
    subCounty: "Bomet East",
  },
  {
    name: "Bomet",
    subCounty: "Chepalungu",
  },
  {
    name: "Bomet",
    subCounty: "Konoin",
  },
  {
    name: "Bomet",
    subCounty: "Sotik",
  },
  {
    name: "Bomet",
    subCounty: "Bomet Central",
  },
  {
    name: "Kakamega",
    subCounty: "Butere",
  },
  {
    name: "Kakamega",
    subCounty: "Kakamega Central",
  },
  {
    name: "Kakamega",
    subCounty: "Kakamega East",
  },
  {
    name: "Kakamega",
    subCounty: "Kakamega North",
  },
  {
    name: "Kakamega",
    subCounty: "Kakamega South",
  },
  {
    name: "Kakamega",
    subCounty: "Khwisero",
  },
  {
    name: "Kakamega",
    subCounty: "Likuyani",
  },
  {
    name: "Kakamega",
    subCounty: "Lugari",
  },
  {
    name: "Kakamega",
    subCounty: "Matete",
  },
  {
    name: "Kakamega",
    subCounty: "Matungu",
  },
  {
    name: "Kakamega",
    subCounty: "Mumias East",
  },
  {
    name: "Kakamega",
    subCounty: "Mumias West",
  },
  {
    name: "Kakamega",
    subCounty: "Navakholo",
  },
  {
    name: "Vihiga",
    subCounty: "Emuhaya",
  },
  {
    name: "Vihiga",
    subCounty: "Vihiga",
  },
  {
    name: "Vihiga",
    subCounty: "Sabatia",
  },
  {
    name: "Vihiga",
    subCounty: "Luanda",
  },
  {
    name: "Vihiga",
    subCounty: "Hamisi",
  },
  {
    name: "Vihiga",
    subCounty: "Kakamega Forest",
  },
  {
    name: "Bungoma",
    subCounty: "Bumula",
  },
  {
    name: "Bungoma",
    subCounty: "Bungoma Central",
  },
  {
    name: "Bungoma",
    subCounty: "Bungoma East",
  },
  {
    name: "Bungoma",
    subCounty: "Bungoma North",
  },
  {
    name: "Bungoma",
    subCounty: "Bungoma South",
  },
  {
    name: "Bungoma",
    subCounty: "Cheptais",
  },
  {
    name: "Bungoma",
    subCounty: "Kimilili Bungoma",
  },
  {
    name: "Bungoma",
    subCounty: "Mt Elgon",
  },
  {
    name: "Bungoma",
    subCounty: "Bungoma West",
  },
  {
    name: "Bungoma",
    subCounty: "Tongaren",
  },
  {
    name: "Bungoma",
    subCounty: "Webuye West",
  },
  {
    name: "Bungoma",
    subCounty: "Mt Elgon Forest",
  },
  {
    name: "Busia",
    subCounty: "Bunyala",
  },
  {
    name: "Busia",
    subCounty: "Busia",
  },
  {
    name: "Busia",
    subCounty: "Butula",
  },
  {
    name: "Busia",
    subCounty: "Nambale",
  },
  {
    name: "Busia",
    subCounty: "Samia",
  },
  {
    name: "Busia",
    subCounty: "Teso North",
  },
  {
    name: "Busia",
    subCounty: "Teso South",
  },
  {
    name: "Siaya",
    subCounty: "Siaya",
  },
  {
    name: "Siaya",
    subCounty: "Gem",
  },
  {
    name: "Siaya",
    subCounty: "Ugenya",
  },
  {
    name: "Siaya",
    subCounty: "Ugunja",
  },
  {
    name: "Siaya",
    subCounty: "Bondo",
  },
  {
    name: "Siaya",
    subCounty: "Rarieda",
  },
  {
    name: "Kisumu",
    subCounty: "Kisumu East",
  },
  {
    name: "Kisumu",
    subCounty: "Kisumu Central",
  },
  {
    name: "Kisumu",
    subCounty: "Kisumu West",
  },
  {
    name: "Kisumu",
    subCounty: "Seme",
  },
  {
    name: "Kisumu",
    subCounty: "Muhoroni",
  },
  {
    name: "Kisumu",
    subCounty: "Nyando",
  },
  {
    name: "Kisumu",
    subCounty: "Nyakach",
  },
  {
    name: "Homa Bay",
    subCounty: "Homa Bay",
  },
  {
    name: "Homa Bay",
    subCounty: "Ndhiwa",
  },
  {
    name: "Homa Bay",
    subCounty: "Rachuonyo North",
  },
  {
    name: "Homa Bay",
    subCounty: "Rachuonyo East",
  },
  {
    name: "Homa Bay",
    subCounty: "Rachuonyo South",
  },
  {
    name: "Homa Bay",
    subCounty: "Rangwe",
  },
  {
    name: "Homa Bay",
    subCounty: "Suba North",
  },
  {
    name: "Homa Bay",
    subCounty: "Suba South",
  },
  {
    name: "Migori",
    subCounty: "Awendo",
  },
  {
    name: "Migori",
    subCounty: "Kuria East",
  },
  {
    name: "Migori",
    subCounty: "Kuria West",
  },
  {
    name: "Migori",
    subCounty: "Nyatike",
  },
  {
    name: "Migori",
    subCounty: "Rongo",
  },
  {
    name: "Migori",
    subCounty: "Suna East",
  },
  {
    name: "Migori",
    subCounty: "Suna West",
  },
  {
    name: "Migori",
    subCounty: "Uriri",
  },
  {
    name: "Kisii",
    subCounty: "Etago",
  },
  {
    name: "Kisii",
    subCounty: "Gucha",
  },
  {
    name: "Kisii",
    subCounty: "Gucha South",
  },
  {
    name: "Kisii",
    subCounty: "Kenyenya",
  },
  {
    name: "Kisii",
    subCounty: "Kisii Central",
  },
  {
    name: "Kisii",
    subCounty: "Kisii South",
  },
  {
    name: "Kisii",
    subCounty: "Kitutu Central",
  },
  {
    name: "Kisii",
    subCounty: "Marani",
  },
  {
    name: "Kisii",
    subCounty: "Masaba South",
  },
  {
    name: "Kisii",
    subCounty: "Nyamache",
  },
  {
    name: "Kisii",
    subCounty: "Sameta",
  },
  {
    name: "Nyamira",
    subCounty: "Borabu",
  },
  {
    name: "Nyamira",
    subCounty: "Manga",
  },
  {
    name: "Nyamira",
    subCounty: "Masaba North",
  },
  {
    name: "Nyamira",
    subCounty: "Nyamira North",
  },
  {
    name: "Nyamira",
    subCounty: "Nyamira South",
  },
  {
    name: "Nairobi",
    subCounty: "Dagoretti",
  },
  {
    name: "Nairobi",
    subCounty: "Embakasi",
  },
  {
    name: "Nairobi",
    subCounty: "Kamukunji",
  },
  {
    name: "Nairobi",
    subCounty: "Kasarani",
  },
  {
    name: "Nairobi",
    subCounty: "Kibra",
  },
  {
    name: "Nairobi",
    subCounty: "Lang'ata",
  },
  {
    name: "Nairobi",
    subCounty: "Makadara",
  },
  {
    name: "Nairobi",
    subCounty: "Mathare",
  },
  {
    name: "Nairobi",
    subCounty: "Njiru",
  },
  {
    name: "Nairobi",
    subCounty: "Starehe",
  },
  {
    name: "Nairobi",
    subCounty: "Westlands",
  },
];

export default locationData;

export const getCountNames = () =>
  locationData.map((data: any) => data.name).filter(getUnique);

export const getSubcouties = (county: string) =>
  locationData
    .filter((item: any) => item.name === county)
    .map((location: any) => location.subCounty);

const getUnique = (value: any, index: any, self: any) =>
  self.indexOf(value) === index;
