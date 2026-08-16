import rajasthanImg from "@/assets/rajasthan.jpg";
import punjabImg from "@/assets/punjab.jpg";
import biharImg from "@/assets/bihar.jpg";
import assamImg from "@/assets/assam.jpg";
import keralaImg from "@/assets/kerala.jpg";
import bengalImg from "@/assets/bengal.jpg";
import himachalImg from "@/assets/himachal.jpg";
import tamilnaduImg from "@/assets/tamilnadu.jpg";
import maharashtraImg from "@/assets/maharashtra.jpg";
import northeastImg from "@/assets/northeast.jpg";
import harvestMoonImg from "@/assets/harvest-moon.jpg";
import weaverImg from "@/assets/weaver.jpg";

export type Verification = "community" | "expert" | "review";

export type ContentType =
  | "Folk Tale"
  | "Folk Song"
  | "Oral History"
  | "Traditional Wisdom"
  | "Festival & Ritual"
  | "Language & Dialect";

export interface Story {
  id: string;
  archiveNo: string;
  title: string;
  subtitle: string;
  region: string;
  regionId: string;
  language: string;
  type: ContentType;
  image: string;
  summary: string;
  excerpt: string;
  duration: string;
  seconds: number;
  themes: string[];
  occasion: string;
  tradition: string;
  period: string;
  verification: Verification;
  contributor: string;
  match: number;
  transcript: { original: string; hi: string; en: string }[];
  aiSummary: string;
}

export interface Song {
  id: string;
  title: string;
  region: string;
  regionId: string;
  language: string;
  occasion: string;
  category: string;
  duration: string;
  seconds: number;
  image: string;
  contributor: string;
  verification: Verification;
}

export interface Region {
  id: string;
  name: string;
  image: string;
  tagline: string;
  blurb: string;
  stories: number;
  songs: number;
  languages: number;
  traditions: number;
  languageList: string[];
  festivals: string[];
  x: number;
  y: number;
}

export const regionImages: Record<string, string> = {
  rajasthan: rajasthanImg,
  punjab: punjabImg,
  bihar: biharImg,
  assam: assamImg,
  kerala: keralaImg,
  "west-bengal": bengalImg,
  "himachal-pradesh": himachalImg,
  "tamil-nadu": tamilnaduImg,
  maharashtra: maharashtraImg,
  "northeast-india": northeastImg,
};

export const regions: Region[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    image: rajasthanImg,
    tagline: "Stories carried by desert winds, village courtyards and generations of storytellers.",
    blurb: "Desert ballads, puppetry traditions and harvest tales sung across Marwar and Mewar.",
    stories: 1248,
    songs: 386,
    languages: 17,
    traditions: 42,
    languageList: ["Marwari", "Mewari", "Dhundhari", "Hindi"],
    festivals: ["Teej", "Gangaur", "Harvest Fair"],
    x: 24,
    y: 34,
  },
  {
    id: "punjab",
    name: "Punjab",
    image: punjabImg,
    tagline: "Voices of the fields — harvest, longing and celebration.",
    blurb: "Boliyan, wedding songs and harvest traditions carried across the five rivers.",
    stories: 862,
    songs: 512,
    languages: 6,
    traditions: 31,
    languageList: ["Punjabi", "Malwai", "Puadhi"],
    festivals: ["Baisakhi", "Lohri", "Teeyan"],
    x: 27,
    y: 18,
  },
  {
    id: "bihar",
    name: "Bihar",
    image: biharImg,
    tagline: "Courtyard memory, painted walls and songs of the seasons.",
    blurb: "Bhojpuri and Maithili oral histories, ritual songs and grandmother tales.",
    stories: 974,
    songs: 421,
    languages: 9,
    traditions: 28,
    languageList: ["Bhojpuri", "Maithili", "Magahi", "Angika"],
    festivals: ["Chhath", "Sama-Chakeva"],
    x: 58,
    y: 40,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    image: bengalImg,
    tagline: "Scroll painters, river songs and village storytelling evenings.",
    blurb: "Patachitra narration, Baul wandering songs and delta folklore.",
    stories: 806,
    songs: 398,
    languages: 7,
    traditions: 26,
    languageList: ["Bengali", "Rajbanshi", "Sylheti"],
    festivals: ["Poush Mela", "Nabanna"],
    x: 67,
    y: 45,
  },
  {
    id: "assam",
    name: "Assam",
    image: assamImg,
    tagline: "The river remembers what the village forgets.",
    blurb: "Brahmaputra boat songs, weaving lore and Bihu harvest traditions.",
    stories: 542,
    songs: 268,
    languages: 12,
    traditions: 22,
    languageList: ["Assamese", "Bodo", "Mishing"],
    festivals: ["Bihu", "Ali-Ai-Ligang"],
    x: 78,
    y: 36,
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    image: himachalImg,
    tagline: "Stories told slowly, the way mountains keep time.",
    blurb: "Valley deities, pastoral songs and winter storytelling circles.",
    stories: 388,
    songs: 174,
    languages: 8,
    traditions: 19,
    languageList: ["Pahari", "Kangri", "Kinnauri"],
    festivals: ["Kullu Dussehra", "Losar"],
    x: 33,
    y: 13,
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    image: maharashtraImg,
    tagline: "Lamp-lit courtyards, grinding songs and village performance.",
    blurb: "Ovi grinding-stone songs, Powada narration and harvest wisdom.",
    stories: 731,
    songs: 344,
    languages: 6,
    traditions: 24,
    languageList: ["Marathi", "Ahirani", "Varhadi"],
    festivals: ["Bail Pola", "Gudi Padwa"],
    x: 33,
    y: 58,
  },
  {
    id: "kerala",
    name: "Kerala",
    image: keralaImg,
    tagline: "Backwater rhythm, ritual performance and remembered verse.",
    blurb: "Vadakkan ballads, boat-race songs and temple performance traditions.",
    stories: 496,
    songs: 231,
    languages: 5,
    traditions: 27,
    languageList: ["Malayalam", "Jeseri"],
    festivals: ["Onam", "Vishu"],
    x: 34,
    y: 84,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    image: tamilnaduImg,
    tagline: "Temple courtyards, lullabies and the long memory of verse.",
    blurb: "Villupattu bow-song narration, harvest festival songs and oral epics.",
    stories: 688,
    songs: 302,
    languages: 6,
    traditions: 29,
    languageList: ["Tamil", "Badaga", "Irula"],
    festivals: ["Pongal", "Aadi Perukku"],
    x: 42,
    y: 86,
  },
  {
    id: "northeast-india",
    name: "Northeast India",
    image: northeastImg,
    tagline: "Hill voices, weaving lore and languages held by few.",
    blurb: "Community narration, loom songs and endangered-language recordings.",
    stories: 412,
    songs: 198,
    languages: 34,
    traditions: 33,
    languageList: ["Khasi", "Ao", "Mizo", "Manipuri"],
    festivals: ["Hornbill", "Wangala"],
    x: 84,
    y: 30,
  },
];

export const regionById = (id: string) => regions.find((r) => r.id === id);

const tr = (o: string, hi: string, en: string) => ({ original: o, hi, en });

export const stories: Story[] = [
  {
    id: "the-harvest-moon",
    archiveNo: "ARCHIVE 0248",
    title: "The Harvest Moon",
    subtitle: "A Marwari Folk Tale from Rajasthan",
    region: "Rajasthan",
    regionId: "rajasthan",
    language: "Marwari",
    type: "Folk Tale",
    image: harvestMoonImg,
    summary:
      "A village agrees to leave the first sheaf of every harvest under the open moon. When a drought year comes, the practice becomes a test of whether the community can still share what little it has.",
    excerpt:
      "They say the moon of the harvest month does not rise for the fields. It rises for the people who remember to thank them.",
    duration: "6:42",
    seconds: 402,
    themes: ["Harvest", "Family", "Community", "Nature"],
    occasion: "Harvest season",
    tradition: "Folk storytelling",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community storyteller",
    match: 94,
    aiSummary:
      "Demo AI summary: a harvest-season tale linking gratitude rituals with collective food-sharing during scarcity.",
    transcript: [
      tr(
        "Jad chand ugyo, gaam ro pehlo puḷo khet mein hi rehvedo.",
        "जब चाँद निकला, गाँव का पहला पूला खेत में ही छोड़ दिया गया।",
        "When the moon rose, the village left the first sheaf standing in the field.",
      ),
      tr(
        "Buḍhi maa kehti — jiko dhan baante, uko ghar kadi khali nahi hove.",
        "बूढ़ी माँ कहती — जो अनाज बाँटता है, उसका घर कभी खाली नहीं होता।",
        "The old mother would say — a house that shares its grain is never empty.",
      ),
      tr(
        "Us baras baarish nahi aayi. Khet suk gaya, par rasam nahi tuti.",
        "उस बरस बारिश नहीं आई। खेत सूख गए, पर रस्म नहीं टूटी।",
        "That year the rain did not come. The fields dried, but the practice was not broken.",
      ),
      tr(
        "Har ghar thodo thodo layo, ne ek dher ban gyo.",
        "हर घर थोड़ा-थोड़ा लाया, और एक ढेर बन गया।",
        "Each household brought a little, and together it became a heap.",
      ),
      tr(
        "Chand ne dekhyo, ne gaam bhukho nahi soyo.",
        "चाँद ने देखा, और गाँव भूखा नहीं सोया।",
        "The moon watched, and the village did not sleep hungry.",
      ),
    ],
  },
  {
    id: "song-of-the-golden-fields",
    archiveNo: "ARCHIVE 0311",
    title: "Song of the Golden Fields",
    subtitle: "A Punjabi harvest song",
    region: "Punjab",
    regionId: "punjab",
    language: "Punjabi",
    type: "Folk Song",
    image: punjabImg,
    summary:
      "A call-and-response harvest song in which reapers name the field, the rain and the hands that worked before them.",
    excerpt: "The wheat is not tall because of the rain alone. It is tall because someone stayed.",
    duration: "4:18",
    seconds: 258,
    themes: ["Harvest", "Labour", "Celebration"],
    occasion: "Baisakhi",
    tradition: "Work song",
    period: "Demo / unspecified",
    verification: "expert",
    contributor: "Community recording circle, Ludhiana (demo)",
    match: 91,
    aiSummary:
      "Demo AI summary: harvest work song with call-and-response structure, thematically parallel to Rajasthani harvest tales.",
    transcript: [
      tr(
        "Kanak pakk gayi, hun vaari saadi.",
        "गेहूँ पक गया, अब बारी हमारी।",
        "The wheat has ripened; now it is our turn.",
      ),
      tr(
        "Jinha boya, ohna nu yaad karo.",
        "जिन्होंने बोया, उन्हें याद करो।",
        "Remember those who sowed it.",
      ),
      tr("Dhol vajda, pind jaagda.", "ढोल बजता है, गाँव जागता है।", "The drum sounds, the village wakes."),
    ],
  },
  {
    id: "grandmothers-courtyard",
    archiveNo: "ARCHIVE 0166",
    title: "Grandmother's Courtyard",
    subtitle: "A Bhojpuri oral history from Bihar",
    region: "Bihar",
    regionId: "bihar",
    language: "Bhojpuri",
    type: "Oral History",
    image: biharImg,
    summary:
      "A recollection of the courtyard as a place where grain was cleaned, songs were taught and disputes were quietly settled.",
    excerpt: "The courtyard had no roof, so everything said there belonged to everyone.",
    duration: "9:05",
    seconds: 545,
    themes: ["Memory", "Family", "Community", "Harvest"],
    occasion: "Everyday life",
    tradition: "Household narration",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community storyteller",
    match: 88,
    aiSummary:
      "Demo AI summary: first-person recollection of courtyard life, connecting domestic labour with song transmission.",
    transcript: [
      tr(
        "Aangan mein dhaan pachhorat rahi, aur geet chalat rahi.",
        "आँगन में धान फटकते रहते, और गीत चलते रहते।",
        "In the courtyard the grain was winnowed, and the songs kept going.",
      ),
      tr(
        "Jaun geet aai na, uu bisra jaai.",
        "जो गीत नहीं आया, वह भुला दिया जाता।",
        "A song not learned was a song forgotten.",
      ),
    ],
  },
  {
    id: "the-river-remembers",
    archiveNo: "ARCHIVE 0402",
    title: "The River Remembers",
    subtitle: "An Assamese oral history",
    region: "Assam",
    regionId: "assam",
    language: "Assamese",
    type: "Oral History",
    image: assamImg,
    summary:
      "A boatman's account of a village that moved three times as the river changed course, and the songs that moved with it.",
    excerpt: "We did not lose the village. We only carried it upstream.",
    duration: "7:36",
    seconds: 456,
    themes: ["Nature", "Memory", "Migration"],
    occasion: "Everyday life",
    tradition: "River narration",
    period: "Demo / unspecified",
    verification: "review",
    contributor: "Anonymous community storyteller",
    match: 79,
    aiSummary:
      "Demo AI summary: displacement narrative tying riverine geography to the persistence of song repertoire.",
    transcript: [
      tr(
        "Noi-e gaon khon tini bar goja loi gol.",
        "नदी ने गाँव को तीन बार हटाया।",
        "The river moved the village three times.",
      ),
      tr("Kintu geet bur thakil.", "पर गीत बने रहे।", "But the songs remained."),
    ],
  },
  {
    id: "the-first-grain",
    archiveNo: "ARCHIVE 0523",
    title: "The First Grain",
    subtitle: "Traditional wisdom from Maharashtra",
    region: "Maharashtra",
    regionId: "maharashtra",
    language: "Marathi",
    type: "Traditional Wisdom",
    image: maharashtraImg,
    summary:
      "Grinding-stone verses that describe when to sow, when to wait, and how the first grain of the season is treated.",
    excerpt: "Give the first handful away, and the second will know the road home.",
    duration: "5:12",
    seconds: 312,
    themes: ["Harvest", "Nature", "Community"],
    occasion: "Sowing season",
    tradition: "Ovi grinding songs",
    period: "Demo / unspecified",
    verification: "expert",
    contributor: "Community recording circle (demo)",
    match: 86,
    aiSummary:
      "Demo AI summary: agricultural wisdom encoded in domestic work songs, overlapping with Rajasthan harvest ethics.",
    transcript: [
      tr(
        "Pahila ghaas dusryala dya.",
        "पहला कौर दूसरे को दो।",
        "Give the first mouthful to another.",
      ),
    ],
  },
  {
    id: "the-weaver-and-the-moon",
    archiveNo: "ARCHIVE 0016",
    title: "The Weaver and the Moon",
    subtitle: "A Marwari folk tale",
    region: "Rajasthan",
    regionId: "rajasthan",
    language: "Marwari",
    type: "Folk Tale",
    image: weaverImg,
    summary:
      "A fictional demo tale about a village weaver who believes every thread carries a memory, and who weaves one shawl for the whole village.",
    excerpt: "Every thread is somebody's evening. Pull one, and a whole night comes loose.",
    duration: "5:48",
    seconds: 348,
    themes: ["Hope", "Craft", "Community", "Memory"],
    occasion: "Winter nights",
    tradition: "Folk storytelling",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community storyteller",
    match: 73,
    aiSummary:
      "Demo AI summary: craft-centred parable about memory as material, recorded as a daily-heritage feature entry.",
    transcript: [
      tr(
        "Har taar mein ek raat bini hui hai.",
        "हर तार में एक रात बुनी हुई है।",
        "Every thread has a night woven into it.",
      ),
    ],
  },
  {
    id: "the-monsoon-messenger",
    archiveNo: "ARCHIVE 0619",
    title: "The Monsoon Messenger",
    subtitle: "A Bengali village tale",
    region: "West Bengal",
    regionId: "west-bengal",
    language: "Bengali",
    type: "Folk Tale",
    image: bengalImg,
    summary:
      "A scroll-painter's tale of a bird that arrives before the rains, told while unrolling a painted patachitra.",
    excerpt: "The bird does not bring the rain. It only tells the village to be ready.",
    duration: "8:20",
    seconds: 500,
    themes: ["Nature", "Monsoon", "Craft"],
    occasion: "Monsoon",
    tradition: "Scroll narration",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community storyteller",
    match: 68,
    aiSummary: "Demo AI summary: seasonal-omen narrative performed with painted scroll accompaniment.",
    transcript: [
      tr("Pakhi ase, brishti pore.", "पक्षी आता है, वर्षा होती है।", "The bird comes, the rain follows."),
    ],
  },
  {
    id: "medicine-of-the-hedgerow",
    archiveNo: "ARCHIVE 0704",
    title: "Medicine of the Hedgerow",
    subtitle: "Traditional plant knowledge from Himachal",
    region: "Himachal Pradesh",
    regionId: "himachal-pradesh",
    language: "Pahari",
    type: "Traditional Wisdom",
    image: himachalImg,
    summary:
      "A demo recording in which an elder names hedgerow plants used in household remedies, with clear notes that this is community memory, not medical advice.",
    excerpt: "The hedge is not a wall. It is the first shelf of the house.",
    duration: "11:04",
    seconds: 664,
    themes: ["Nature", "Craft", "Memory"],
    occasion: "Everyday life",
    tradition: "Household knowledge",
    period: "Demo / unspecified",
    verification: "review",
    contributor: "Anonymous community elder",
    match: 64,
    aiSummary:
      "Demo AI summary: plant-name inventory recorded as community knowledge. Not verified medical information.",
    transcript: [
      tr("Baad ka har paudha naam rakhda hai.", "बाड़ का हर पौधा नाम रखता है।", "Every plant in the hedge has a name."),
    ],
  },
  {
    id: "lullaby-of-the-backwaters",
    archiveNo: "ARCHIVE 0811",
    title: "Lullaby of the Backwaters",
    subtitle: "A Malayalam lullaby",
    region: "Kerala",
    regionId: "kerala",
    language: "Malayalam",
    type: "Folk Song",
    image: keralaImg,
    summary: "A sleep song timed to the rhythm of a boat pole, recorded in a demo session.",
    excerpt: "Sleep now; the water will keep counting for you.",
    duration: "3:44",
    seconds: 224,
    themes: ["Family", "Nature", "Memory"],
    occasion: "Everyday life",
    tradition: "Lullaby",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community singer",
    match: 61,
    aiSummary: "Demo AI summary: lullaby with boat-rhythm metre, part of the domestic song repertoire.",
    transcript: [tr("Urangu, urangu.", "सो जा, सो जा।", "Sleep now, sleep now.")],
  },
  {
    id: "pongal-morning",
    archiveNo: "ARCHIVE 0902",
    title: "Pongal Morning",
    subtitle: "A festival account from Tamil Nadu",
    region: "Tamil Nadu",
    regionId: "tamil-nadu",
    language: "Tamil",
    type: "Festival & Ritual",
    image: tamilnaduImg,
    summary:
      "A description of the harvest festival morning: the new pot, the boiling milk and the first shout of the household.",
    excerpt: "The pot must overflow. That is the whole instruction.",
    duration: "6:02",
    seconds: 362,
    themes: ["Harvest", "Community", "Family"],
    occasion: "Pongal",
    tradition: "Festival practice",
    period: "Demo / unspecified",
    verification: "expert",
    contributor: "Community recording circle (demo)",
    match: 83,
    aiSummary: "Demo AI summary: harvest-festival ritual account; semantically linked to other harvest entries.",
    transcript: [
      tr("Pongalo pongal.", "पोंगल उबल रहा है।", "Let it boil over — pongalo pongal."),
    ],
  },
  {
    id: "the-loom-speaks",
    archiveNo: "ARCHIVE 1007",
    title: "The Loom Speaks",
    subtitle: "A weaving song from Northeast India",
    region: "Northeast India",
    regionId: "northeast-india",
    language: "Khasi",
    type: "Language & Dialect",
    image: northeastImg,
    summary:
      "A weaving song recorded to document vocabulary that appears mainly at the loom and nowhere else.",
    excerpt: "Some words live only where the hands are busy.",
    duration: "4:55",
    seconds: 295,
    themes: ["Craft", "Memory", "Community"],
    occasion: "Everyday life",
    tradition: "Loom song",
    period: "Demo / unspecified",
    verification: "review",
    contributor: "Anonymous community weaver",
    match: 58,
    aiSummary: "Demo AI summary: lexical-documentation recording centred on craft vocabulary.",
    transcript: [tr("Ka thli ka ong.", "करघा बोलता है।", "The loom speaks.")],
  },
  {
    id: "teej-swing-song",
    archiveNo: "ARCHIVE 1123",
    title: "The Swing at Teej",
    subtitle: "A monsoon festival song from Rajasthan",
    region: "Rajasthan",
    regionId: "rajasthan",
    language: "Marwari",
    type: "Festival & Ritual",
    image: rajasthanImg,
    summary: "Swing songs sung by women during the monsoon festival, recorded as a demo archive entry.",
    excerpt: "Push the swing high enough and the rain will notice us.",
    duration: "5:30",
    seconds: 330,
    themes: ["Monsoon", "Celebration", "Community"],
    occasion: "Teej",
    tradition: "Festival song",
    period: "Demo / unspecified",
    verification: "community",
    contributor: "Anonymous community singers",
    match: 55,
    aiSummary: "Demo AI summary: monsoon festival song cycle associated with swings and seasonal welcome.",
    transcript: [tr("Hindolo jhulan lag gyo.", "हिंडोला झूलने लगा।", "The swing has begun to move.")],
  },
];

export const storyById = (id: string) => stories.find((s) => s.id === id);

export const songs: Song[] = [
  {
    id: "s1",
    title: "Song of the Golden Fields",
    region: "Punjab",
    regionId: "punjab",
    language: "Punjabi",
    occasion: "Baisakhi",
    category: "Popular Folk Songs",
    duration: "4:18",
    seconds: 258,
    image: punjabImg,
    contributor: "Community recording circle (demo)",
    verification: "expert",
  },
  {
    id: "s2",
    title: "Kesariya Baalam (Demo Recording)",
    region: "Rajasthan",
    regionId: "rajasthan",
    language: "Marwari",
    occasion: "Welcome song",
    category: "Popular Folk Songs",
    duration: "6:10",
    seconds: 370,
    image: rajasthanImg,
    contributor: "Anonymous community singer",
    verification: "community",
  },
  {
    id: "s3",
    title: "Bidaai — The Leaving Song",
    region: "Bihar",
    regionId: "bihar",
    language: "Bhojpuri",
    occasion: "Wedding",
    category: "Wedding Songs",
    duration: "5:02",
    seconds: 302,
    image: biharImg,
    contributor: "Anonymous community singers",
    verification: "community",
  },
  {
    id: "s4",
    title: "Suhag Geet of the Courtyard",
    region: "Punjab",
    regionId: "punjab",
    language: "Punjabi",
    occasion: "Wedding",
    category: "Wedding Songs",
    duration: "4:40",
    seconds: 280,
    image: punjabImg,
    contributor: "Community recording circle (demo)",
    verification: "review",
  },
  {
    id: "s5",
    title: "Bihu Morning",
    region: "Assam",
    regionId: "assam",
    language: "Assamese",
    occasion: "Bihu",
    category: "Festival Songs",
    duration: "3:58",
    seconds: 238,
    image: assamImg,
    contributor: "Anonymous community singers",
    verification: "expert",
  },
  {
    id: "s6",
    title: "Pongal Pot Song",
    region: "Tamil Nadu",
    regionId: "tamil-nadu",
    language: "Tamil",
    occasion: "Pongal",
    category: "Festival Songs",
    duration: "4:12",
    seconds: 252,
    image: tamilnaduImg,
    contributor: "Community recording circle (demo)",
    verification: "community",
  },
  {
    id: "s7",
    title: "Grinding Stone Ovi",
    region: "Maharashtra",
    regionId: "maharashtra",
    language: "Marathi",
    occasion: "Daily work",
    category: "Work Songs",
    duration: "7:22",
    seconds: 442,
    image: maharashtraImg,
    contributor: "Anonymous community singer",
    verification: "expert",
  },
  {
    id: "s8",
    title: "Boatman's Count",
    region: "West Bengal",
    regionId: "west-bengal",
    language: "Bengali",
    occasion: "River work",
    category: "Work Songs",
    duration: "5:36",
    seconds: 336,
    image: bengalImg,
    contributor: "Anonymous community singer",
    verification: "community",
  },
  {
    id: "s9",
    title: "Lullaby of the Backwaters",
    region: "Kerala",
    regionId: "kerala",
    language: "Malayalam",
    occasion: "Night",
    category: "Lullabies",
    duration: "3:44",
    seconds: 224,
    image: keralaImg,
    contributor: "Anonymous community singer",
    verification: "community",
  },
  {
    id: "s10",
    title: "Mountain Cradle Song",
    region: "Himachal Pradesh",
    regionId: "himachal-pradesh",
    language: "Pahari",
    occasion: "Night",
    category: "Lullabies",
    duration: "4:06",
    seconds: 246,
    image: himachalImg,
    contributor: "Anonymous community elder",
    verification: "review",
  },
  {
    id: "s11",
    title: "Loom Counting Song",
    region: "Northeast India",
    regionId: "northeast-india",
    language: "Khasi",
    occasion: "Weaving",
    category: "Regional Songs",
    duration: "4:55",
    seconds: 295,
    image: northeastImg,
    contributor: "Anonymous community weaver",
    verification: "review",
  },
  {
    id: "s12",
    title: "Teej Swing Song",
    region: "Rajasthan",
    regionId: "rajasthan",
    language: "Marwari",
    occasion: "Teej",
    category: "Regional Songs",
    duration: "5:30",
    seconds: 330,
    image: rajasthanImg,
    contributor: "Anonymous community singers",
    verification: "community",
  },
];

export const songCategories = [
  "Popular Folk Songs",
  "Regional Songs",
  "Festival Songs",
  "Wedding Songs",
  "Work Songs",
  "Lullabies",
];

export const categories = [
  {
    id: "folk-stories",
    type: "Folk Tale" as ContentType,
    name: "Folk Stories",
    desc: "Stories passed through generations.",
    count: 4128,
    image: harvestMoonImg,
  },
  {
    id: "folk-songs",
    type: "Folk Song" as ContentType,
    name: "Folk Songs",
    desc: "Songs of work, celebration, love and memory.",
    count: 3241,
    image: punjabImg,
  },
  {
    id: "oral-histories",
    type: "Oral History" as ContentType,
    name: "Oral Histories",
    desc: "First-hand memories and community experiences.",
    count: 1876,
    image: biharImg,
  },
  {
    id: "traditional-knowledge",
    type: "Traditional Wisdom" as ContentType,
    name: "Traditional Knowledge",
    desc: "Knowledge of nature, craft, agriculture and everyday life.",
    count: 1102,
    image: himachalImg,
  },
  {
    id: "festivals-rituals",
    type: "Festival & Ritual" as ContentType,
    name: "Festivals & Rituals",
    desc: "Living traditions surrounding celebrations and rituals.",
    count: 964,
    image: tamilnaduImg,
  },
  {
    id: "languages-dialects",
    type: "Language & Dialect" as ContentType,
    name: "Languages & Dialects",
    desc: "India's linguistic diversity and regional voices.",
    count: 218,
    image: northeastImg,
  },
];

export const languages = [
  "Marwari",
  "Punjabi",
  "Bhojpuri",
  "Assamese",
  "Bengali",
  "Marathi",
  "Malayalam",
  "Tamil",
  "Pahari",
  "Khasi",
];

export const contentTypes: ContentType[] = [
  "Folk Tale",
  "Folk Song",
  "Oral History",
  "Traditional Wisdom",
  "Festival & Ritual",
  "Language & Dialect",
];

export const themes = [
  "Harvest",
  "Family",
  "Community",
  "Nature",
  "Craft",
  "Memory",
  "Monsoon",
  "Celebration",
  "Labour",
  "Hope",
  "Migration",
];

export const occasions = [
  "Harvest season",
  "Baisakhi",
  "Teej",
  "Pongal",
  "Wedding",
  "Everyday life",
  "Monsoon",
  "Sowing season",
  "Winter nights",
];

export const traditions = [
  "Folk storytelling",
  "Work song",
  "Household narration",
  "Scroll narration",
  "Festival song",
  "Loom song",
  "Lullaby",
  "Ovi grinding songs",
  "River narration",
  "Household knowledge",
  "Festival practice",
];

export const searchSuggestions = [
  "Harvest traditions in Rajasthan",
  "Wedding songs from Punjab",
  "Stories about monsoon",
  "Traditional knowledge about medicinal plants",
  "Women's oral histories",
  "Folk songs about separation",
];

export const dailyHeritage = {
  day: 16,
  date: "16 AUGUST 2026",
  kicker: "Today's Folklore",
  storyId: "the-weaver-and-the-moon",
  title: "The Weaver and the Moon",
  meta: "Rajasthan · Marwari",
  description:
    "A fictional demo tale about a village weaver who believes every thread carries a memory.",
  wisdom:
    "Some stories are not written in books. They are carried from one generation to another.",
  wisdomMeta: "Rajasthan · Marwari · Traditional Wisdom",
  glance: {
    origin: "Rajasthan",
    language: "Marwari",
    era: "Demo / unspecified",
    characters: "Weaver, village elder",
    themes: ["Hope", "Craft", "Community"],
    significance:
      "Demonstrates how oral storytelling can preserve values and collective memory.",
    summary:
      "A weaver refuses to sell the shawl he has worked on all winter, saying each thread holds an evening of the village. When the elder asks him to explain, he names the nights one by one. The village keeps the shawl in the meeting room. This is clearly labelled demo content created for prototype purposes.",
  },
};

export interface GraphNode {
  id: string;
  label: string;
  kind: "center" | "region" | "language" | "theme" | "type" | "tradition" | "item";
  x: number;
  y: number;
  size: number;
  detail: string;
  href?: string;
  cta?: string;
}

export const knowledgeGraph: { nodes: GraphNode[]; edges: [string, string][] } = {
  nodes: [
    {
      id: "center",
      label: "The Harvest Moon",
      kind: "center",
      x: 50,
      y: 50,
      size: 30,
      detail: "A Marwari folk tale from Rajasthan, recorded as demo archive entry 0248.",
      href: "/stories/the-harvest-moon",
      cta: "Open story",
    },
    {
      id: "rajasthan",
      label: "Rajasthan",
      kind: "region",
      x: 20,
      y: 24,
      size: 20,
      detail: "Explore 1,248 archived items from the desert regions.",
      href: "/regions/rajasthan",
      cta: "Explore Rajasthan",
    },
    {
      id: "marwari",
      label: "Marwari",
      kind: "language",
      x: 16,
      y: 62,
      size: 16,
      detail: "One of 17 documented languages and dialects in the Rajasthan archive.",
      href: "/explore?q=Marwari",
      cta: "Browse Marwari recordings",
    },
    {
      id: "harvest",
      label: "Harvest",
      kind: "theme",
      x: 50,
      y: 16,
      size: 22,
      detail: "A theme that recurs across at least six regional archives.",
      href: "/explore?q=harvest%20traditions",
      cta: "Explore harvest traditions",
    },
    {
      id: "folktale",
      label: "Folk Tale",
      kind: "type",
      x: 78,
      y: 22,
      size: 17,
      detail: "4,128 archived folk tales across the collection.",
      href: "/stories",
      cta: "Browse folk tales",
    },
    {
      id: "festival",
      label: "Harvest Festival",
      kind: "tradition",
      x: 84,
      y: 55,
      size: 16,
      detail: "Ritual practices tied to the first grain of the season.",
      href: "/explore?q=harvest%20festival",
      cta: "Explore festivals",
    },
    {
      id: "song",
      label: "Related Folk Song",
      kind: "item",
      x: 62,
      y: 82,
      size: 15,
      detail: "Song of the Golden Fields — Punjab · Punjabi.",
      href: "/stories/song-of-the-golden-fields",
      cta: "Open recording",
    },
    {
      id: "punjab",
      label: "Punjab Tradition",
      kind: "region",
      x: 34,
      y: 84,
      size: 19,
      detail: "Explore 126 archived items connected through harvest traditions.",
      href: "/regions/punjab",
      cta: "Explore Punjab",
    },
    {
      id: "bihar",
      label: "Bihar Tradition",
      kind: "region",
      x: 86,
      y: 84,
      size: 17,
      detail: "Explore 94 archived items connected through harvest memory.",
      href: "/regions/bihar",
      cta: "Explore Bihar",
    },
    {
      id: "maharashtra",
      label: "Maharashtra Tradition",
      kind: "region",
      x: 8,
      y: 88,
      size: 16,
      detail: "Explore 71 archived items connected through sowing and first-grain wisdom.",
      href: "/regions/maharashtra",
      cta: "Explore Maharashtra",
    },
  ],
  edges: [
    ["center", "rajasthan"],
    ["center", "marwari"],
    ["center", "harvest"],
    ["center", "folktale"],
    ["center", "festival"],
    ["center", "song"],
    ["harvest", "punjab"],
    ["harvest", "bihar"],
    ["harvest", "maharashtra"],
    ["song", "punjab"],
    ["festival", "bihar"],
  ],
};
