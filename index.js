// create an express app
const express = require("express")
const app = express()
const path = require('path');

let students = [
  {
    "name": "Aomori Hahoko",
    "number": "1",
    "player": false,
    "active": true
  },
  {
    "name": "Sumi Fukushima",
    "number": "2",
    "player": false,
    "active": true
  },
  {
    "name": "Emi Hokkaido",
    "number": "3",
    "player": false,
    "active": true
  },
  {
    "name": "Yuuka Shizuoka",
    "number": "4",
    "player": false,
    "active": true
  },
  {
    "name": "Chio Murakami",
    "number": "5",
    "player": false,
    "active": true
  },
  {
    "name": "Gin Nakamura",
    "number": "6",
    "player": false,
    "active": true
  },
  {
    "name": "Yoko Endo",
    "number": "7",
    "player": false,
    "active": true
  },
  {
    "name": "Ayaka Suzuki",
    "number": "8",
    "player": false,
    "active": true
  },
  {
    "name": "Oki Yamada",
    "number": "9",
    "player": false,
    "active": true
  },
  {
    "name": "Tori Sorono",
    "number": "10",
    "player": false,
    "active": true
  },
  {
    "name": "Keiko Kano",
    "number": "11",
    "player": false,
    "active": true
  },
  {
    "name": "Yumi Kuji",
    "number": "12",
    "player": false,
    "active": true
  },
  {
    "name": "Fujita Hayashi",
    "number": "13",
    "player": false,
    "active": true
  },
  {
    "name": "Aoi Ito",
    "number": "14",
    "player": false,
    "active": true
  },
  {
    "name": "Fu Inoue",
    "number": "15",
    "player": false,
    "active": true
  },
  {
    "name": "Miyoko Higa",
    "number": "16",
    "player": false,
    "active": true
  },
  {
    "name": "Ochi Oshiro",
    "number": "17",
    "player": false,
    "active": true
  },
  {
    "name": "Eriko Maeda",
    "number": "18",
    "player": false,
    "active": true
  },
  {
    "name": "Moe Chinatsu",
    "number": "19",
    "player": false,
    "active": true
  },
  {
    "name": "Aoki Oshiro",
    "number": "20",
    "player": false,
    "active": true
  },
  {
    "name": "Kumiko Abe",
    "number": "21",
    "player": false,
    "active": true
  },
  {
    "name": "Noko Sasaki",
    "number": "22",
    "player": false,
    "active": true
  },
  {
    "name": "Ami Kikushi",
    "number": "23",
    "player": false,
    "active": true
  },
  {
    "name": "Sato Ituo",
    "number": "24",
    "player": false,
    "active": true
  },
  {
    "name": "Rio Namamura",
    "number": "25",
    "player": false,
    "active": true
  },
  {
    "name": "Hara Watashi",
    "number": "26",
    "player": false,
    "active": true
  },
  {
    "name": "Shodiu Nobunga",
    "number": "27",
    "player": false,
    "active": true
  },
  {
    "name": "Hakujo Saitou",
    "number": "28",
    "player": false,
    "active": true
  },
  {
    "name": "Yukari Kuji",
    "number": "29",
    "player": false,
    "active": true
  },
  {
    "name": "Takumi Takahashi",
    "number": "30",
    "player": false,
    "active": true
  },
  {
    "name": "Mark Stevens",
    "number": "31",
    "player": false,
    "active": true
  },
  {
    "name": "Tanaka Fuji",
    "number": "32",
    "player": false,
    "active": true
  },
  {
    "name": "Hiro Yamamoto",
    "number": "33",
    "player": false,
    "active": true
  },
  {
    "name": "Kato Odisu",
    "number": "34",
    "player": false,
    "active": true
  },
  {
    "name": "Ono Hake",
    "number": "35",
    "player": false,
    "active": true
  },
  {
    "name": "Kid Roko Asuma",
    "number": "36",
    "player": false,
    "active": true
  },
  {
    "name": "Eucon Hosokawa",
    "number": "37",
    "player": false,
    "active": true
  },
  {
    "name": "Enazo Ishikawa",
    "number": "38",
    "player": false,
    "active": true
  },
  {
    "name": "Endo Matsushima",
    "number": "39",
    "player": false,
    "active": true
  },
  {
    "name": "Kaku Nakajima",
    "number": "40",
    "player": false,
    "active": true
  },
  {
    "name": "Den Okimoto",
    "number": "41",
    "player": false,
    "active": true
  },
  {
    "name": "Tendo Wakayama",
    "number": "42",
    "player": false,
    "active": true
  },
  {
    "name": "Endo Yanagi",
    "number": "43",
    "player": false,
    "active": true
  },
  {
    "name": "Moro Tsushima",
    "number": "44",
    "player": false,
    "active": true
  },
  {
    "name": "Kuchii Agawa",
    "number": "45",
    "player": false,
    "active": true
  },
  {
    "name": "Kido Kawaguchi",
    "number": "46",
    "player": false,
    "active": true
  },
  {
    "name": "Matsuura Nikaido",
    "number": "47",
    "player": false,
    "active": true
  },
  {
    "name": "Hiro Tezuka",
    "number": "48",
    "player": false,
    "active": true
  },
  {
    "name": "Yukari Kuji",
    "number": "49",
    "player": false,
    "active": true
  },
  {
    "name": "Numani Tadakatsu",
    "number": "50",
    "player": false,
    "active": true
  }
]

let items = [
  "Gas powered chainsaw",
  "Hatchet",
  "Box of matches/ pack of cigarettes",
  "Crossbow (with 2d10 bolts)",
  "Grenade (quantity: 1d4)",
  "Boomarang",
  "Butchers cleaver",
  "Kama",
  "Taser",
  "Pocket knife",
  "Survival knife",
  "Binoculars",
  "Tracking device (designates the location of any student within ‘100 meters)",
  "Caltrops (quantity: 2d10)",
  "Revolver (with 2d12 bullets)",
  "Semi-auto pistol (with 1d4 clips of 8 bullets)",
  "Pump action shotgun (with 1d12 shells)",
  "Sawnoff double-barrel shotgun (with 1d12 shells)",
  "Bulletproof vest",
  "Katana",
  "Light sub machinegun (with 1d4 clips of 20 bullets)",
  "Throwing stars (quantity: 1d8)",
  "Bullhorn",
  "Laser pointer",
  "D batteries (quantity:1d6. Tip: insert in sock) ",
  "Flashlight",
  "Police baton",
  "Mace, can of",
  "Scissors",
  "Hammer",
  "Motorcycle helmet",
  "Iron frying pan",
  "Poison (1 small bottle good for 1d10 doses)",
  "Chain",
  "Uzi (with 1d4 clips of 20 bullets)",
  "Baseball bat",
  "Brass knuckles",
  "Rope",
  "Power drill (with 6 hour battery)",
  "Wrench",
  "Choking wire",
  "Blow dart gun (with 2d10 darts)",
  "Martial arts manual",
  "Silenced automatic pistol (with 1d4 clips of 8 bullets)",
  "Foghorn",
  "Flash-bang grenade (quantity:1d4)",
  "Land mines (quantity:1d4)",
  "Chloriform, bottle of (with handkerchief)",
  "Morphine, bottle of (enough for 1d6 doses, with 2 sterile syringes)",
  "Sling shot (with 1d20 bullets)",
  "Airsoft pistol (batteries included, with 1d4 20 shot clips) ",
  "Nunchuks",
  "Can of gasoline",
  "Can of spray paint",
  "Night vision goggles",
  "Glass bottle",
  "Military folding spade",
  "Flare gun (with 1d4 flares)",
  "Cage of snake (with one poisonous snake)",
  "Blowtorch",
  "Gas mask",
  "Grenade launcher (with 1d6 smoke grenades)",
  "Nail gun (with 6 hour battery and 1d4 clips of 30 nails) ",
  "Bear trap",
  "Collapsible baton",
  "Crowbar",
  "Lockpick kit (with instructions)",
  "Car keys (6 keys on a ring with a Hello Kitty key chain) ",
  "Roll of 100 yen coins",
  "Net",
  "Straight razor",
  "Butterfly knife",
  "Sniper rifle (single shot rifle with 2d10 bullets)",
  "Throwing darts (quantity: 1d10)",
  "Bola (quantity: 1d4)",
  "Acid, bottle of",
  "Croquette mallet",
  "Fire extinguisher",
  "Smoke grenades (quantity: 1d4)",
  "Fireworks (box of 12, with matches)",
  "Steel-toed boots, pair ",
  "Duct tape, roll of",
  "Speargun (with 1d6 spears)",
  "Umbrella (blue)",
  "Golf club",
  "Handcuffs (with 2 keys)",
  "Plunger",
  "Portable defibrillator (with battery, good for 1d6 treatments)",
  "Pingpong paddle",
  "Box cutter",
  "Laughing gas grenades (quantity: 1d4)",
  "Cleated shoes, pair of",
  "Machette",
  "Grappling hook (with 50 foot cable)",
  "Crutch",
  "Tennis racket",
  "Whip",
  "Caddle prod (with battery)",
  "Bow (with 1d20 arrows and extra string)",
  "Pens or pencils",
  "Medication",
  "Cigarettes",
  "Lighter or matches",
  "Make-up and hygiene products",
  "Change of clothes",
  "Lap top computer",
  "Musical instrument",
  "Kendo gear",
  "Cell phone",
  "Pocket knife",
  "Hand held video game (PSP, DS, Gameboy)",
  "Snacks",
  "Drugs",
  "Condoms",
  "Porn",
  "Camera (analog, digital, video)",
  "Alcohol",
  "Money",
  "Sports equipment",
  "Schoolbooks",
  "Coat",
  "Umbrella",
  "Books, magazines or manga",
  "Bag or backpack",
]

// use the express-static middleware
app.use(express.static('public'))

// sendFile will go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/items', (req, res) => {
  res.json(items);
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));