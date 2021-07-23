// create an express app
const express = require("express")
const app = express()
const path = require('path');

let students = [
  {
    "name": "Aomori Hahoko",
    "number": "1"
  },
  {
    "name": "Sumi Fukushima",
    "number": "2"
  },
  {
    "name": "Emi Hokkaido",
    "number": "3"
  },
  {
    "name": "Yuuka Shizuoka",
    "number": "4"
  },
  {
    "name": "Chio Murakami",
    "number": "5"
  },
  {
    "name": "Gin Nakamura",
    "number": "6"
  },
  {
    "name": "Yoko Endo",
    "number": "7"
  },
  {
    "name": "Ayaka Suzuki",
    "number": "8"
  },
  {
    "name": "Oki Yamada",
    "number": "9"
  },
  {
    "name": "Tori Sorono",
    "number": "10"
  },
  {
    "name": "Keiko Kano",
    "number": "11"
  },
  {
    "name": "Yumi Kuji",
    "number": "12"
  },
  {
    "name": "Fujita Hayashi",
    "number": "13"
  },
  {
    "name": "Aoi Ito",
    "number": "14"
  },
  {
    "name": "Fu Inoue",
    "number": "15"
  },
  {
    "name": "Miyoko Higa",
    "number": "16"
  },
  {
    "name": "Ochi Oshiro",
    "number": "17"
  },
  {
    "name": "Eriko Maeda",
    "number": "18"
  },
  {
    "name": "Moe Chinatsu",
    "number": "19"
  },
  {
    "name": "Aoki Oshiro",
    "number": "20"
  },
  {
    "name": "Kumiko Abe",
    "number": "21"
  },
  {
    "name": "Noko Sasaki",
    "number": "22"
  },
  {
    "name": "Ami Kikushi",
    "number": "23"
  },
  {
    "name": "Sato Ituo",
    "number": "24"
  },
  {
    "name": "Rio Namamura",
    "number": "25"
  },
  {
    "name": "Hara Watashi",
    "number": "26"
  },
  {
    "name": "Shodiu Nobunga",
    "number": "27"
  },
  {
    "name": "Hakujo Saitou",
    "number": "28"
  },
  {
    "name": "Yukari Kuji",
    "number": "29"
  },
  {
    "name": "Takumi Takahashi",
    "number": "30"
  },
  {
    "name": "Mark Stevens",
    "number": "31"
  },
  {
    "name": "Tanaka Fuji",
    "number": "32"
  },
  {
    "name": "Hiro Yamamoto",
    "number": "33"
  },
  {
    "name": "Kato Odisu",
    "number": "34"
  },
  {
    "name": "Ono Hake",
    "number": "35"
  },
  {
    "name": "Kid Roko Asuma",
    "number": "36"
  },
  {
    "name": "Eucon Hosokawa",
    "number": "37"
  },
  {
    "name": "Enazo Ishikawa",
    "number": "38"
  },
  {
    "name": "Endo Matsushima",
    "number": "39"
  },
  {
    "name": "Kaku Nakajima",
    "number": "40"
  },
  {
    "name": "Den Okimoto",
    "number": "41"
  },
  {
    "name": "Tendo Wakayama",
    "number": "42"
  },
  {
    "name": "Endo Yanagi",
    "number": "43"
  },
  {
    "name": "Moro Tsushima",
    "number": "44"
  },
  {
    "name": "Kuchii Agawa",
    "number": "45"
  },
  {
    "name": "Kido Kawaguchi",
    "number": "46"
  },
  {
    "name": "Matsuura Nikaido",
    "number": "47"
  },
  {
    "name": "Hiro Tezuka",
    "number": "48"
  },
  {
    "name": "Yukari Kuji",
    "number": "49"
  },
  {
    "name": "Numani Tadakatsu",
    "number": "50"
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