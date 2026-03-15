/// ARMOR & WEAPONS ///
export const armorTable = [ /* crit = choose weapon type and gain random legendary effect. Legendaries have 2x value.
1. Divine: Replenish one influence on initiative and after being crit
2. Protected: Ignore the next damage source after initiative and after being crit
3. Reflexive: Take an extra action after initiative and immediately after being crit
4. Bloody: Heal 10% after combat and after being crit
5. Swift: +1 sneak and sprint rolls
6. Ethereal: Gain cover against melee attacks   */
    { roll: 2, text: "Junk armor: +5 def, 60c" },
    { roll: 3, text: "Raider armor: +6 def, 70c" },
    { roll: 4, text: "Leather armor: +7 def, 80c" },
    { roll: 5, text: "Chain armor: +8 def, 90c" },
    { roll: 6, text: "Metal armor: +9 def, 100c" },
    { roll: 7, text: "Servo armor: +10 def, 110c" },
    { roll: 8, text: "Ranger armor: +12 def, 120c" },
    { roll: 9, text: "Kinetic armor: +14 def, 130c" },
    { roll: 10, text: "Combat armor: +16 def, 140c" },
    { roll: 11, text: "Infantry armor: +18 def, 150c" },
    { roll: 12, text: "Assault armor: +20 def, 160c" },
    { roll: 13, text: "Mutant armor: +22 def, 170c" },
    { roll: 14, text: "Fiber armor: +24 def, 180c" },
    { roll: 15, text: "Dragon armor: +26 def, +190c" },
    { roll: 16, text: "Titan armor: +28 def, 200c" }
];

export /* crit = rearrange armor values and gain random legendary effect. Legendaries have 2x value.
1. Incendiary: adds burn 
2. Toxic: adds poison 
3. Destructive: converted to explosive splash  (or adds +1 splash range)
4. Barbed: adds bleed
5. Cryogenic: adds freeze
6. Extended: +1 range        */
    const weapons = {
        E1: [[6, "Pipe Pistol", "5 P", "small", "mid", "AGI", "30c"],
        [8, "Revolver", "6 P", "small", "mid", "AGI", "40c"],
        [10, "Combat Pistol", "7 P", "small", "mid", "AGI", "50c"],
        [12, "Magnum", "8 P", "small", "mid", "AGI", "60c"],
        [14, "Big Iron", "9 P", "small", "mid", "AGI", "70c"],
        [99, "Deadeye", "10 P", "small", "mid", "AGI", "80c"]],
        E2: [[6, "Laser Pistol", "6 E", "E-cell", "mid", "INT", "40c"],
        [8, "Plasma Pistol", "7 E", "E-cell", "mid", "INT", "50c"],
        [10, "Sonic Pistol", "8 E", "E-cell", "mid", "INT", "60c"],
        [12, "Tesla Pistol", "9 E", "E-cell", "mid", "INT", "70c"],
        [14, "Gauss Pistol", "10 E", "E-cell", "mid", "INT", "80c"],
        [99, "Purifier", "11 E", "E-cell", "mid", "INT", "90c"]],
        E3: [[6, "Pipe Rifle", "7 P", "large", "long", "AGI", "50c"],
        [8, "Service Rifle", "8 P", "large", "long", "AGI", "70c"],
        [10, "Hunting Rifle", "9 P", "large", "long", "AGI", "90c"],
        [12, "Combat Rifle", "10 P", "large", "long", "AGI", "110c"],
        [14, "Assault Rifle", "11 P", "large", "long", "AGI", "130c"],
        [99, "Furiosa", "12 P", "large", "long", "AGI", "150c"]],
        E4: [[6, "Laser Rifle", "8 E", "MF-cell", "long", "INT", "60c"],
        [8, "Plasma Rifle", "9 E", "MF-cell", "long", "INT", "80c"],
        [10, "Sonic Rifle", "10 E", "MF-cell", "long", "INT", "100c"],
        [12, "Tesla Rifle", "11 E", "MF-cell", "long", "INT", "120c"],
        [14, "Gauss Rifle", "12 E", "MF-cell", "long", "INT", "140c"],
        [99, "Neutrino", "13 E", "MF-cell", "long", "INT", "160c"]],
        E5: [[6, "Sawed-Off SG", "3x3 P", "small", "short", "AGI", "50c"],
        [8, "Hunting Shotgun", "3x4 P", "small", "short", "AGI", "60c"],
        [10, "Caravan Shotgun", "3x5 P", "small", "short", "AGI", "70c"],
        [12, "Combat Shotgun", "3x6 P", "small", "short", "AGI", "80c"],
        [14, "Riot Shotgun", "3x7 P", "small", "short", "AGI", "90c"],
        [99, "Invictus", "3x8 P", "small", "short", "AGI", "100c"]],
        E6: [[6, "Laser Shotgun", "3x4 E", "E-cell", "short", "INT", "60c"],
        [8, "Plasma Shotgun", "3x5 E", "E-cell", "short", "INT", "70c"],
        [10, "electron minigun", "3x6 E", "E-cell", "short", "INT", "80c"],
        [12, "Pulse Emitter", "3x7 E", "E-cell", "short", "INT", "90c"],
        [14, "Tesla Cannon", "3x8 E", "E-cell", "short", "INT", "100c"],
        [99, "Helios", "3x9 E", "E-cell", "short", "INT", "110c"]],
        O1: [[6, "Hand Mortar", "10 X splash", "fuel", "long", "AGI", "80c"],
        [8, "Grenade Launcher", "11 X splash", "fuel", "long", "AGI", "110c"],
        [10, "Grenade Cannon", "12 X splash", "fuel", "long", "AGI", "140c"],
        [12, "Missile Launcher", "13 X splash", "fuel", "long", "AGI", "170c"],
        [14, "Howitzer", "14 X splash", "fuel", "long", "AGI", "200c"],
        [99, "Judgement", "15 X splash", "fuel", "long", "AGI", "230c"]],
        O2: [[6, "Flamethrower", "9 X splash+burn", "fuel", "mid", "AGI", "70c"],
        [8, "Napalmer", "10 X splash+burn", "fuel", "mid", "AGI", "100c"],
        [10, "Incinerator", "11 X splash+burn", "fuel", "mid", "AGI", "130c"],
        [12, "Liquifier", "12 X splash+burn", "fuel", "mid", "AGI", "160c"],
        [14, "Hellfire", "13 X splash+burn", "fuel", "mid", "AGI", "190c"],
        [99, "Pyroclasm", "14 X splash+burn", "fuel", "mid", "AGI", "220c"]],
        O3: [[6, "Weak Melee", "6 P", "-", "melee", "STR", "30c"],
        [8, "Medium Melee", "7 P", "-", "melee", "STR", "50c"],
        [10, "Strong Melee", "8 P", "-", "melee", "STR", "70c"],
        [12, "Powerful Melee", "9 P", "-", "melee", "STR", "90c"],
        [14, "Extreme Melee", "10 P", "-", "melee", "STR", "110c"],
        [99, "Ultimate Melee", "11 P", "-", "melee", "STR", "130c"]],
        O4: [[6, "Brass Knuckles", "2x4 P", "-", "melee", "END", "30c"],
        [8, "Wristblade", "2x5 P", "-", "melee", "END", "50c"],
        [10, "Tiger Paw", "2x6 P", "-", "melee", "END", "70c"],
        [12, "Piston Glove", "2x7 P", "-", "melee", "END", "90c"],
        [14, "Ursa Claw", "2x8 P", "-", "melee", "END", "110c"],
        [99, "Godhand", "2x9 P", "-", "melee", "END", "130c"]],
        O5: [[6, "Shock Baton", "2x4 E", "-", "melee", "STR", "50c"],
        [8, "Welding Torch", "2x5 X", "-", "melee", "STR", "70c"],
        [10, "Tesla Coil", "2x6 E", "-", "melee", "STR", "90c"],
        [12, "Jumper Cables", "2x7 X", "-", "melee", "STR", "110c"],
        [14, "Energy Sword", "2x8 E", "-", "melee", "STR", "130c"],
        [99, "Lightning Rod", "2x9 X", "-", "melee", "STR", "150c"]],
        O6: [[6, "Shock Glove", "6 E", "-", "melee", "END", "50c"],
        [8, "Whalloper", "7 X", "-", "melee", "END", "70c"],
        [10, "Plasma Glove", "8 E", "-", "melee", "END", "90c"],
        [12, "Kinetic Fist", "9 X", "-", "melee", "END", "110c"],
        [14, "Thermite Glove", "10 E", "-", "melee", "END", "130c"],
        [99, "Firecracker", "11 X", "-", "melee", "END", "150c"]]
    };

export const recipeTable = [
    { book: "Gunsmith Magazine", recipe: "1 gun scrap + gun = auto mod: -1 dmg, 2x hits, +1 ammo" },
    { book: "Gunsmith Magazine", recipe: "1 gun scrap + gun = scope mod: +2 dmg, action to aim scope" },
    { book: "Gunsmith Magazine", recipe: "1 tech scrap + melee/unarmed: hydraulic mod: +1 dmg, 1 turn cooldown" },
    { book: "Gunsmith Magazine", recipe: "1 tech scrap + weapon: ailment mod: -1 dmg, +1 ailment stack per hit" },
    { book: "Gunsmith Magazine", recipe: "1 armor scrap + gun + melee = gunblade mod: -1 dmg to both, combine weapons, can attack with both weapons in same action where applicable" },
    { book: "Gunsmith Magazine", recipe: "1 all scrap + weapon = Calibrated mod: +1 dmg" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 1 armor scrap= 1 molatov: 10 X Splash+ burn, mid, STR, 20c" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 3 water/rations = 3 cleaner water/rations (irradiated->dirty->clean)" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 1 animal flesh = 1 stimpak" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 1 mutant flesh = 1 radaway" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 1 human flesh = 1 adrenaline" },
    { book: "Apocalypse Cookbook", recipe: "1 fuel + 3 clean water&rations  = 1 wasteland soup: -3 hunger, -3 thirst, +30% HP" },
    { book: "Tinker's Digest", recipe: "Autojacker + 1 of each scrap = Harness: adds 3 item slots, does not take up inventory slot, 50c" },
    { book: "Tinker's Digest", recipe: "Hackerator + 1 of each scrap = Analyzer: before initiative, learn weapon+armor of 1 enemy, or search any tile to short range, 50c"},
    { book: "Tinker's Digest", recipe: "Hammerator + 1 of each scrap = Helmet: +1 all armor, 50c" },
    { book: "Tinker's Digest", recipe: "Generator + 1 of each scrap = Forcefield: +10 max HP, 50c" },
    { book: "Tinker's Digest", recipe: "Breatherator + 1 of each scrap = Regulator: heal 10% HP when sleeping, 50c" },
    { book: "Tinker's Digest", recipe: "Illuminator + 1 of each scrap = Laser sight: +1 dmg with weapons, 50c" }
];


export const ammoTable = [ // crit = get ammo of your choice (random grenade tier) and a transmuter (converts items to random roll from another category from weapon, armor, ammo, food, water, scrap at a ratio of 1 D to 3 stackables.  one use, 100c, 
    { type: "Small rounds", roll: "1d6+4", cost: 5 }, 
    { type: "E-cell", roll: "1d6+3", cost: 10 },  
    { type: "Grenades", roll: "1d6", cost: 0 }, 
    { type: "Fuel", roll: "1d6", cost: 20 }, 
    { type: "Large rounds", roll: "1d6+2", cost: 10 }, 
    { type: "MF-cell", roll: "1d6+1", cost: 15 } 
];
export const grenadeTable = [
    { max: 6, name: "Scrap Grenade", dmg: "11 X splash", cost: "20c" },
    { max: 8, name: "Chem Grenade", dmg: "12 X splash", cost: "25c" },
    { max: 10, name: "Frag Grenade", dmg: "13 X splash", cost: "30c" },
    { max: 12, name: "Plasma Grenade", dmg: "14 X splash", cost: "35c" },
    { max: 14, name: "Electron Grenade", dmg: "15 X splash", cost: "40c" },
    { max: Infinity, name: "Atomic Grenade", dmg: "16 X splash", cost: "45c" }
];

// ---------- PERK DATA ----------

export const perkData = {
    STRENGTH: [
        { name: "Big Back", desc: "Gain +1 heavy limit and your limbs cannot be crippled." },
        { name: "Wrecking Ball", desc: "Melee and thrown attacks can spend your movement to do +1 damage." },
        { name: "Blacksmith", desc: "Repairing a broken item gives it +1 durability." },
        { name: "Conditioning", desc: "Remove 1 injury when you sleep while at full HP." },
        { name: "Karate Kid", desc: "Melee aimed shots can shove or grapple the target instead of crippling." },
        { name: "Carnivore", desc: "Consuming flesh gives an extra -1 hunger and heals 10% HP." },
        { name: "Boomer", desc: "Splash damage aimed shots splash to short range." },
        { name: "Hidden Gem", desc: "When you scavenge you also find a heavy junk item worth 1d6x10 caps." },
        { name: "Chiropractor", desc: "When you cripple a limb, you can cripple another different limb." },
        { name: "Iron Man", desc: "You cannot be shoved, grappled, or inflicted with ailments by hostile creatures." },
        { name: "Saboteur", desc: "Explosive guns do +1 damage and your attacks always detonate explosive tiles." },
        { name: "Heavy Metal", desc: "Gain +1 energy armor for each heavy weapon you have." }
    ],

    AGILITY: [
        { name: "Commando", desc: "Rifles do +1 damage when fired from special terrain." },
        { name: "Gunslinger", desc: "Pistol attacks do +1 damage if you moved this turn." },
        { name: "Adrenaline Rush", desc: "When you use resist on a roll and take a result below a 4, regain resist. " },
        { name: "Gotta Go Fast", desc: "Ignore the effects of rubble and sprint moves +1 distance." },
        { name: "Ninja", desc: "You can move while sneaking, and can still attempt to sneak on blank tiles." },
        { name: "Guerrilla", desc: "All special terrain also counts as cover and your attacks ignore obstructions." },
        { name: "Sniper", desc: "Atacks ignore cover and long range weapons gain +1 range." },
        { name: "Perfectionist", desc: "Critical successes restore luck and heal 10% HP." },
        { name: "Jack of All Trades", desc: "Gain another skill that uses stats different from your current skill." },
        { name: "Quantum Clip", desc: "Each ammo type you use has a 1/6 chance to not be consumed by your guns, changing each turn." },
        { name: "Rivers of Blood", desc: "Physical damage aimed shots cause the target to bleed." },
        { name: "Gun Fu", desc: "Gain +1 physical armor for each enemy in melee range." }
    ],

    ENDURANCE: [
        { name: "Artisan", desc: "Consume only 2 scrap when you repair an item at 2 durability." },
        { name: "Fast Metabolism", desc: "Gain +10 max HP and addiction withdrawl only lasts 1 day." },
        { name: "Acquired Taste", desc: "Treat irradiated food and drink as dirty instead." },
        { name: "Second Wind", desc: "Removing statuses is twice as effective when the status is above 5." },
        { name: "All-nighter", desc: "Gain +1 fatigue to scavenge a settlement." },
        { name: "Deep Pockets", desc: "Item stack sizes over 10 no longer become heavy." },
        { name: "Radiotherapy", desc: "Heal 10% HP each time you gain one or more rads." },
        { name: "Perseverance", desc: "After rolling a stat at 0 or 1, restore skill." },
        { name: "Rare Hunter", desc: "You can reroll scavenged crit loot 3 additional times." },
        { name: "Stand By Me", desc: "You can bring an ally with you when you move and can intercept non aimed shots against allies." },
        { name: "Point-blank", desc: "Shotguns do +1 damage against enemies in melee range." },
        { name: "Exposure Therapy", desc: "Rad damage aimed shots poison the target." }
    ],

    INTELLIGENCE: [
        { name: "Pocket Change", desc: "Looting killed humans always yields an extra 5 caps." },
        { name: "Substance Enthusiast", desc: "Mutagens last twice as long and all addictive substances heal +10% HP on use." },
        { name: "Hoarder", desc: "You can use broken items but durability loss destroys them." },
        { name: "Discerning Eye", desc: "You can reroll the type of scavenging roll you get once." },
        { name: "Gifted", desc: "You can replace two rolled 1s with a 6." },
        { name: "Green Thumb", desc: "Potted plants give double yield if held for the whole level." },
        { name: "Side Hustle", desc: "Gain an additional background." },
        { name: "Mastermind", desc: "Your skill, luck, and resist can be used in place of one another." },
        { name: "Reverse Polarity", desc: "Energy damage aimed shots apply freeze but remove burn." },
        { name: "Overclock", desc: "Energy damage aimed shots apply burn but remove freeze." },
        { name: "Extraterrestrial", desc: "Artifacts can convert durability to and from HP at a 1:10 ratio." },
        { name: "Magnetic Field", desc: "Gain +1 rad armor for each unique technology you have." }
    ],

    CHARISMA: [
        { name: "Terrifying Presence", desc: "You can command creatures under 4 HP within short range to flee or attack their allies." },
        { name: "Do Not Go Gently", desc: "Luck gives 2 dice to other players rolling with a stat at 0 or 1." },
        { name: "VIP Member", desc: "Sleeping in a settlement is free and twice as effective." },
        { name: "True Grit", desc: "Resist causes the roll to be a minimum of 3 dice and can be used on other players." },
        { name: "Good Karma", desc: "Gain an additional gold stat. Critical fails now count as regular fails." },
        { name: "Esper", desc: "You can spend HP instead of ammo equal to 40% the ammo's value when attacking." },
        { name: "Vampire", desc: "You can drink the blood of recently deceased creatures." },
        { name: "I Know a Place", desc: "Chosen faction settlements provide a free crit loot roll from their faction shop." },
        { name: "Technophile", desc: "Heal +10% HP when you use a technology or craft an item with one." },
        { name: "Art of the Deal", desc: "Haggling is twice as effective." },
        { name: "Oh Baby a Triple", desc: "You can replace any rolled triples with a 6." },
        { name: "Cool Guys Don't Look at Explosions", desc: "Gain +5 explosive armor." }
    ]
};

export const backgroundData = [
    { name: "Technician", desc: "Repairing weapons does not require a roll." },
    { name: "Mechanic", desc: "Repairing armor does not require a roll." },
    { name: "Farmer", desc: "You can purify rations 3:2 (irradiated → dirty → clean)." },
    { name: "Chef", desc: "You can convert any 2 flesh into 1 fuel." },
    { name: "Exterminator", desc: "You know when enemies have under 4 HP and can execute them on your turn." },
    { name: "Guard", desc: "You can convert 3 small rounds ↔ 2 large rounds." },
    { name: "Plumber", desc: "You can purify water 3:2 (irradiated → dirty → clean)." },
    { name: "Doctor", desc: "You can convert any 3 meds into 2 of another med." },
    { name: "Scientist", desc: "You can convert any 3 chems into 2 of another chem." },
    { name: "Engineer", desc: "Repairing technology does not require a roll." },
    { name: "Tailor", desc: "You can convert any 3 scrap into 2 of another scrap." },
    { name: "Electrician", desc: "You can convert 3 E-cells ↔ 2 MF-cells." }
];

// === Zone Table ===
export const zoneTable = {
    11: "Office: Contains 2 Vending machines with hidden 1d6 power water for 10c each. Autojacker to open.",
    12: "Mall: Use illuminator when scavenging for +3 rerolls ",
    13: "Bunker: Scavenged items have +1 durability.",
    14: "Graveyard: Contains map to legendary loot 3 random hexes away.",
    15: "University: Contains a 1D artifact",
    16: "Factory: Contains a random 1D heavy dual tech (two techs combined)",
    21: "Museum: Can scavenge for heavy relics worth 1d6x50c. crit:3d6",
    22: "Armory: Scavenging armor gives +3 rerolls with no multi-scavenge penalty.",
    23: "Park: Contains a random giant potted plant. (heavy, double yield).",
    24: "Railyard: Scavenging for scrap gives +3 rerolls, no multi-scavenge penalty, and 1d3 flares",
    25: "Library: Order a recipe that arrives on level up",
    26: "Warehouse: Ship yourselves or your items to any cleared hex.",
    31: "Casino: Contains a slot machine. Spend 40c to roll 1d6×10c. can luck/resist. Crit = 120c + break, 1 = break. use hackerator for +1 dice",
    32: "Laundromat: Spend 10c to reroll armor values. Use generator to also give it +1 durability",
    33: "Workshop: Has a workbench; repairing items only costs 2 scrap.",
    34: "Missile Silo: Spend 10 tech scrap to fire a nuclear missile at any hex (annihilates towns for -1 morale)",
    35: "Gas Station: contains 3 pumps with 3d6 fuel, each costing 10/20/30 caps per.",
    36: "Bank: Deposit caps, gain 20% on level up. Withdraw at any bank.",
    41: "Military Base: Contains a mutated weapon.",
    42: "Farm: Contains 2d6 animal flesh.",
    43: "Quarry: Use explosives to excavate heavy ore worth 1d6×20c.",
    44: "Crashed Ship: Scavenging for weapons gives +3 rerolls, no multi-scavenge penalty, and all weapons are mutated",
    45: "Campsite: Contains 1d6 flares (20c). Flares reduce enemies by 1 in Ruins.",
    46: "Foundry: Spend 5 of its associated scrap to upgrade any weapon with +1 damage",
    51: "Stadium: Generates any faction's settlement 3 hexes away.",
    52: "Observatory: Generates a Ruins from 5 choices 3 hexes away.",
    53: "Airport: Generates an adjacent Subway. Contains 1 flare for each Subway on map.",
    54: "Resort: Generates adjacent irradiated lake (+1 rads each way) with uninhabited island (+3 to scavenging). use breatherator each way to avoid rads.",
    55: "Subway: Generates another Subway 5 hexes away. You can fast travel between cleared Subways.",
    56: "Laboratory: Contains a random mutagen roll.",
    61: "Hospital: When you heal or remove a status, heal +10% or remove 1 extra.",
    62: "Restaurant: Order food (1d6+5 power rations) that arrives on level up.",
    63: "Hotel: Sleeping here grants 'Well Rested' and refreshes all skill/luck/resist.",
    64: "Construction Yard: Copies the effect of any ruins you have encountered.",
    65: "Supermarket: Scavenging stackables gives +3 rerolls with no multi-scavenge penalty.",
    66: "Church: No battle. Friendly merchant with 2 bodyguards sells 2 random items from military equipment, artifacts or plants ."
};

// === Monster Data ===
export const monsterData = {
    E1: {
        label: "Cannibals", notes: "special: hidden land mines. Loot: weapons, armor, human flesh ", subs: [
            { name: "Recruit", hp: 10, def: 4, notes: "scaled weapons, 11x mines" }, // 1-6
            { name: "Soldier", hp: 12, def: 8, notes: "scaled weapons, 12x mines" }, // 7-8
            { name: "Officer", hp: 14, def: 12, notes: "scaled weapons +1 dmg, 13x mines" }, // 9-10
            { name: "Captain", hp: 16, def: 16, notes: "scaled weapons +1 dmg, 14x mines" }, // 11-12
            { name: "Lieutenant", hp: 18, def: 20, notes: "scaled weapons +2 dmg, 15x mines" }, // 13-14
            { name: "General", hp: 20, def: 24, notes: "scaled weapons +2 dmg, 16x mines" } // 15+
        ]
    },
    E2: {
        label: "Beasts", notes: "special: hidden bear traps, on death: allies can immediately take action. Loot: animal flesh", subs: [ // bear trap = +1 injury and 2x cripple legs
            { name: "Squid", hp: 6, def: 5, notes: "6 R mid" }, //giant land adapted squids that spray irradiated ink
            { name: "Wildcat", hp: 8, def: 10, notes: "7 P melee + bleed, +1 spd" },
            { name: "Raptor", hp: 10, def: 15, notes: " 8 P melee, grapple on 6, +1 spd, +2 dmg if moved 2 distance" }, //lab grown dinosaurs
            { name: "Ursa", hp: 12, def: 20, notes: "2x9 P melee, shove on 6" }, //giant bear
            { name: "Mammoth", hp: 14, def: 25, notes: "2x10 P melee + bleed, shove on 6, +1 spd" }, //previously deathclaw, same functionality
            { name: "Dragon", hp: 16, def: 30, notes: "11 X+R splash + poison + burn, short, flies (cover vs melee)" } //Giant flying lizards that spew toxic ash.
        ]
    },
    E3: {
        label: "Nesters", notes: "special: eggs, 50% to hatch into swarmers each round. Loot: animal flesh", subs: [ // swarmers have 0 armor, 1 HP and the same attack as the adult
            { name: "Gator", hp: 4, def: 8, notes: "6 P melee + bleed, grapple on 6" },
            { name: "Bubbler", hp: 6, def: 12, notes: "7 P/R melee, 2x armor, aim head ignores armor" }, //giant bipdal lobsters covered in thick chitin except face
            { name: "Salamander", hp: 8, def: 16, notes: "8 X + burn, short" }, //Giant reptiles that spew fire
            { name: "Lumpy", hp: 10, def: 20, notes: "9 E + freeze, mid" }, //Giant toads that attack with beams of ice
            { name: "Hornet", hp: 12, def: 24, notes: "11 P melee + poison, flies (cover vs melee), +1 spd" },
            { name: "Terminite", hp: 14, def: 28, notes: "2x12 P melee, grapples on 6" } //Giant termites
        ]
    },
    E4: {
        label: "Burrowers", notes: "special: burrow. half are burrowed, Loot: animal flesh", subs: [//burrowers can enter or exit a burrow once per turn as a free action, all burrows are connected.
            { name: "Silverfish", hp: 6, def: 12, notes: "5 P+R melee, flies (cover vs melee)" },//Giant silverfish that fly
            { name: "Rodent", hp: 8, def: 16, notes: "2x6 P melee, grapples on 6" },
            { name: "Ninetails", hp: 10, def: 20, notes: "3x7 E, melee" }, //foxes with electrified tails
            { name: "Pyrodillos", hp: 12, def: 24, notes: "9 X splash + burn, short" },
            { name: "Angler", hp: 14, def: 28, notes: "2x10 R + freeze, short" }, //Giant bipedal anglerfish that stuns enemies with its radioactie light source
            { name: "Hydra", hp: 16, def: 32, notes: "3x11 P melee + poison," } //Giant snake with multiple heads
        ]
    },
    E5: {
        label: "Robots", notes: "take +1 dmg per cripple. Loot: armor scraps", subs: [
            { name: "Police Bot", hp: 10, def: 16, notes: "7 E short" },
            { name: "Watchdog", hp: 12, def: 20, notes: "8 P melee + bleed, +1 spd" },//robotic home security dog
            { name: "Medical Bot", hp: 14, def: 24, notes: "9 E + freeze, short" }, //robot with 4 arms attached with several medical tools and coolant tanks, used in hospitals.
            { name: "Patriot", hp: 16, def: 28, notes: "2x9 X splash, long" }, //a mobile autonomous missile battery used for defense
            { name: "War Bot", hp: 18, def: 32, notes: "11 P+E mid" }, // armored robot with weaponized arms, each outfitted with rifles and lasers
            { name: "Annihilator", hp: 20, def: 36, notes: "13 E+R, long, recharge 1" } //robot with a giant radar dish on its torso that emits high energy beams
        ]
    },
    E6: {
        label: "Androids", notes: "terrain 4-5: hidden pulse mines. Loot: weapons, tech scrap", subs: [ // humanoid robots built for war and espionage
            { name: "Sentry", hp: 4, def: 12, notes: "scaled energy weapons, 11E mines" },
            { name: "Patroller", hp: 8, def: 16, notes: "scaled energy weapons, 12E mines" },
            { name: "Trooper", hp: 10, def: 20, notes: "scaled energy weapons +1 dmg, 13E mines" },
            { name: "Eradicator", hp: 12, def: 24, notes: "scaled energy weapons +1 dmg, 14E mines" },
            { name: "Assassin", hp: 14, def: 28, notes: "scaled energy weapons +2 dmg, 15E mines" },
            { name: "Terminator", hp: 16, def: 32, notes: "scaled energy weapons +2 dmg, 16E mines" }
        ]
    },
    O1: {
        label: "Cultists", notes: "1 also has random artifact. uses mutated weapons, Loot: weapons, 1D artifact, human flesh", subs: [ // mutated weapons =  (damage converted to radiation) 
            { name: "Initiate", hp: 10, def: 4, notes: "scaled mutated weapons" },
            { name: "Acolyte", hp: 12, def: 8, notes: "scaled mutated weapons" },
            { name: "Disciple", hp: 14, def: 12, notes: "scaled mutated weapons +1 dmg" },
            { name: "Priest", hp: 16, def: 16, notes: "scaled mutated weapons +1 dmg" },
            { name: "Fanatic", hp: 18, def: 20, notes: "scaled mutated weapons +2 dmg" },
            { name: "Elder", hp: 20, def: 24, notes: "scaled mutated weapons +2 dmg" }
        ]
    },
    O2: {
        label: "Drones", notes: "special: rubble, ignore rubble, have 3 shield (ignores first 3 damaging hits), Loot: gun scraps", subs: [ //futuristic robots deployed by aliens
            { name: "Observer", hp: 2, def: 4,  notes: "2x5 E, mid" },
            { name: "Assimilator", hp: 4, def: 8, notes: "2x6 R, mid" },
            { name: "Excavator", hp: 6, def: 12, notes: "3x7 X, short" },
            { name: "Destroyer", hp: 8, def: 16, notes: "10 X splash, mid" },
            { name: "Suppressor", hp: 10, def: 20, notes: "2x9 E + freeze, mid" },
            { name: "Invader", hp: 12, def: 24, notes: "12 R splash+burn, long" }
        ]
    },
    O3: {
        label: "Zombies", notes: "special: cover, +1 spd, 2x HP, 1/2 armor, Loot: mutant flesh", subs: [ //dead humans that were reanimated by radiation
            { name: "Shambler", hp: 12, def: 6, notes: "5 P+R melee, grapples on 6" },
            { name: "Stalker", hp: 16, def: 9, notes: "6 P+R melee, grapples on 6" },
            { name: "Emitter", hp: 20, def: 12, notes: "9 R splash, melee" },
            { name: "Ravager", hp: 24, def: 15, notes: "8 P+R melee, grapples on 6" },
            { name: "Firebrand", hp: 28, def: 18, notes: "11 X splash+burn other, melee" },
            { name: "Frostbrand", hp: 32, def: 21, notes: "12 E splash+freeze other, melee" }
        ]
    },
    O4: {
        label: "Aberrations", notes: "special: rad source, on death: explodes for HP as rad splash, Loot: mutant flesh", subs: [ // rad source = 50% to gain 1 rad if you enter/start turn on tile. 
            { name: "Tangler", hp: 8, def: 10, notes: "7 P melee, grapples on 6" }, //a ball of slimy tentacle vines 
            { name: "Crawler", hp: 10, def: 15, notes: "8 R melee, +1 spd" }, //giant centipede made out of human limbs
            { name: "Buzzer", hp: 12, def: 20, notes: "9 R, melee+freeze, flies (has cover against melee)" }, //giant flying amalgamation with a proboscis that emits freezing chemicals
            { name: "Bloat", hp: 14, def: 25, notes: "10 P melee, explodes 15X splash on death" }, //giant mound of flesh with legs
            { name: "Widow", hp: 16, def: 30, notes: "9 P+R+psn melee, +1 spd, grapples on 6" }, //giant spider made out of human limbs
            { name: "Cybermutant", hp: 18, def: 35, notes: "12 E+burn/P+bleed/R+poison, very long, scans players" } //weapons and machinery fused with mutated flesh
        ]
    },
    O5: {
        label: "Mutants", notes: "special: rad source, each have 1 rad grenade. Loot: weapons, mutant flesh", subs: [ //Humans that have been mutated to become smarter, stronger, and violent, appearance based on morlocks
            { name: "Skirmisher", hp: 12, def: 12, notes: "scaled heavy guns, 12 R grenades" },
            { name: "Brute", hp: 14, def: 16, notes: "scaled heavy guns, 13 R grenades" },
            { name: "Enforcer", hp: 16, def: 20,  notes: "scaled heavy guns +1 dmg, 14 R grenades" },
            { name: "Leader", hp: 18, def: 24, notes: "scaled heavy guns +1 dmg, 15 R grenades" },
            { name: "Overlord", hp: 20, def:28, notes: "scaled heavy guns +2 dmg, 16 R grenades" },
            { name: "Mastermind", hp: 22, def: 32, notes: "scaled heavy guns +2 dmg, 17 R grenades" }
        ]
    },
    O6: {
        label: "Revenants", notes: "special: hidden bear traps, half sneak, have ninja, Loot: weapons, mutant flesh", subs: [ //mutated giant ghostly floating humans that can sneak
            { name: "Ghast", hp: 4, def: 6,  notes: "scaled heavy melee" },
            { name: "Spirit", hp: 6, def: 10, notes: "scaled heavy melee" },
            { name: "Phantom", hp: 8, def: 14, notes: "scaled heavy melee +1 dmg" },
            { name: "Spectre", hp: 10, def: 18, notes: "scaled heavy melee +1 dmg" },
            { name: "Wraith", hp: 12, def: 22, notes: "scaled heavy melee +2 dmg" },
            { name: "Lich", hp: 14, def: 26, notes: "scaled heavy melee +2 dmg" }
        ]
    }
};

export const rationTypes = ["Armor/Clean", "Gun/Dirty", "Tech/Irradiated"];
//crit workbench = scraps of your choice and a plant.
//crit water: all replaced with power water (-1 thirst, -1 fatigue, +10% HP) 
//crit food: all replaced with healthy rations (-1 hunger, -1 rads, +10% HP)

export const artifacts = [ // "action to use, 6 = no HP cost, crit = heal hp instead. repair with 20 HP or steal from another artifact.  Spend 1 durability to mutate a weapon into a CHA weapon that does rad damage. 
    {name: "Orange Artifact", effect: "Cripple a limb, 3 HP, mid, 100c"},
    {name: "Blue Artifact", effect: "Clear a tile, 3 HP, mid, 100c"},
    {name: "Red Artifact", effect: "Generate rubble tile, 3 HP, mid, 100c"},
    {name: "Purple Artifact", effect: "Generate cover tile, 3 HP, mid, 100c"},
    {name: "Green Artifact", effect: "Move creature 1 space, 3 HP, mid, 100c"},
    {name: "Yellow Artifact", effect: "Give a player defend, 3 HP, mid, 100c"}
];

export const plants = [ // "Generates a resource every time you level up",
    {name: "Sludgeflower", effect: "Generates 3 fuel on level up, 100c"},
    {name: "Fleshroom", effect: "Generates 5 clean flesh on level up, 100c"},
    {name: "Mutfruit", effect: "Generates 5 clean water on level up, 100c"},
    {name: "Radovera", effect: "Generates 3 bandage on level up, 100c"},
    {name: "Indigourd", effect: "Generates 3 rad-x on level up, 100c"},
    {name: "Tobacoca", effect: "Generates 3 adrenaline on level up, 100c"}
    ];

export const medTable = [ //crit = find chosen med and also find random chem roll
    { name: "Bandage", effect: "-1 Injury, +10% HP, 10c" },
    { name: "Rad-X", effect: "-1 Rads, +10% HP, 10c" }, // rename: mutagone? chromocure? geneclean? antioxidants?
    { name: "Adrenaline", effect: "-1 Fatigue, +10% HP, 10c" },
    { name: "Stimpak", effect: "-2 Injury, +20% HP (Addictive), 10c" },
    { name: "Rad-Away", effect: "-2 Rads, +20% HP (Addictive), 10c" }, // rename: mutagone? chromocure? geneclean? 
    { name: "Addictol", effect: "Removes addictions, +10% HP, 10c" } // rename: purge?
];

export const chemTable = [ // rename: mutagens, substances that grant temporary beneficial mutations
    { name: "Iron Mutagen", effect: "+2 to all armor values for 1 day (Addictive), 30c" }, 
    { name: "Frenzy Mutagen", effect: "+2 damage for 1 day (Addictive), 30c" }, 
    { name: "Warp Mutagen", effect: "+2 AGI, +1 movement/sprint distance for 1 day (Addictive), 30c" }, 
    { name: "Mind Mutagen", effect: "+2 INT, +2 CHA for 1 day (Addictive), 30c" }, 
    { name: "Body Mutagen", effect: "+2 STR, +2 END for 1 day (Addictive), 30c" }, 
    { name: "Pure Mutagen", effect: "+1 movement/sprint distance, damage, and all armor for 1 day (addictive), 30c" }
];


export const techTable = [ //crit = find chosen tech and also find random alien artifact
    { name: "Generator", effect: "Provide power for electronics, 50c" },
    { name: "Autojacker", effect: "Portable hydraulic jack for moving heavy and jammed objects, 50c" },
    { name: "Hammerator", effect: "Hand jackhammer for expanding openings or clearing rubble, 50c" },
    { name: "Breatherator", effect: "For low oxygen or underwater areas, 50c" },
    { name: "Illuminator", effect: "For dark or foggy areas, 50c" },
    { name: "Hackerator", effect: "Opens electronic locks and hacks computers, 50c" }
];


// Shop types and their corresponding generator functions
export const shopTypes = [
    { name: "Weapons" },
    { name: "Armor" },
    { name: "Meds" },
    { name: "Tech" },
    { name: "Rations" },
    { name: "Water" }
];

export const complications = [ //When rolling complications, if the bracketed technology is held by the player, they can use it to add +3 to the scavenge roll. 
    ["+1/2 Thirst", "END", "Sweating from hot area with no air flow (hammerator)"],
    ["+1/2 Hunger", "CHA", "Puking from terrible smell (breatherator)"],
    ["+1/2 Thirst", "INT", "Diarrhea from unidentified environmental toxins (illuminator)"],
    ["+1/2 Hunger", "STR", "Burning calories from prolongued heavy lifting (autojacker)"],
    ["+1/2 Thirst", "AGI", "Stuck in an overly dehumidified area (generator)"],
    ["+1/2 Hunger", "END", "Burning calories breaking through obstacles (hammerator)"],
    ["Lose 5/10 HP", "CHA", "Witnesses a gruesomely disturbing scene (illuminator)"],
    ["Lose 5/10 HP", "INT", "Chemicals cause hallucination (breatherator)"],
    ["Lose 5/10 HP", "CHA", "path is blocked while being chased (hammerator)"],
    ["Lose 5/10 HP", "AGI", "Fired on by automated defenses (hackerator)"],
    ["Lose 5/10 HP", "INT", "Get buried under collapsed rubble (autojacker)"],
    ["Lose 5/10 HP", "CHA", "Have to scare off nearby deadly animals (autojacker)"],
    ["+1/2 Fatigue", "STR", "Overexertion from opening unpowered doors (generator)"],
    ["+1/2 Fatigue", "AGI", "Running from defenses in the dark (illuminator)"],
    ["+1/2 Fatigue", "INT", "Getting lost in confusing area (illuminator)"],
    ["+1/2 Fatigue", "END", "Exposure to extreme cold (generator)"],
    ["+1/2 Fatigue", "END", "Low oxygen area (breatherator)"],
    ["+1/2 Fatigue", "STR", "Exhaustion from climbing elevator shafts (generator)"],
    ["+1/2 Rads", "STR", "Scavenge through heavy toxic waste barrel dump (autojacker)"],
    ["+1/2 Rads", "END", "Treks through irradiated water (breatherator)"],
    ["+1/2 Rads", "AGI", "Navigating large area full of radiation (illuminator)"],
    ["+1/2 Rads", "CHA", "encounter Wandering radiation cleanup bots (hackerator)"],
    ["+1/2 Rads", "END", "dig up buried loot in irradiated room (hammerator)"],
    ["+1/2 Rads", "INT", "activate radiation filtration system (generator)"],
    ["+1/2 Injury", "INT", "Able to hack and disable a security turret (hackerator)"],
    ["+1/2 Injury", "AGI", "Have to squeeze through tight gap (hammerator)"],
    ["+1/2 Injury", "STR", "Have to move heavy objects under water (breatherator)"],
    ["+1/2 Injury", "STR", "A muscle is strained moving something heavy (autojacker)"],
    ["+1/2 Injury", "CHA", "Attacked by roaming security robots (hackerator)"],
    ["+1/2 Injury", "AGI", "Avoid gunfire from defenses (hackerator)"]
];

export const townDescriptors = [ 
    { roll: 11, name: "Old Fort", desc: "A pre-war military fort repurposed by settlers for defense and shelter, complete with makeshift barracks and watchtowers." },
    { roll: 12, name: "Western Town", desc: "An abandoned western town brought back to life by settlers who have repaired and occupied its buildings." },
    { roll: 13, name: "Mining Camp", desc: "A community built around an old mine, extracting valuable minerals and using them to trade for other necessities." },
    { roll: 14, name: "Train Station", desc: "An old train station turned into a central hub for a small settlement, with train cars repurposed as homes." },
    { roll: 15, name: "Wind Farm", desc: "Settlers have established a community around an old wind farm, using the remaining turbines to generate power." },
    { roll: 16, name: "Abandoned Airport", desc: "The terminal and hangars have been turned into living spaces and workshops by a group of settlers." },
    { roll: 21, name: "Deserted Factory Town", desc: "An old factory complex repurposed into a settlement, with the factory buildings serving as homes and workshops." },
    { roll: 22, name: "Ruined Hotel", desc: "A large, partially collapsed hotel now houses a community, with rooms turned into living quarters." },
    { roll: 23, name: "Fishing Village", desc: "Located near a dried-up lakebed, settlers rely on small-scale farming and trade for survival." },
    { roll: 24, name: "Cliffside Dwellings", desc: "Homes built into the sides of cliffs, offering natural defense and a unique living environment." },
    { roll: 25, name: "Desert Outpost", desc: "A small, fortified settlement built around a well or water source, serving as a rest stop for travelers." },
    { roll: 26, name: "Abandoned Theme Park", desc: "The remains of an old amusement park now house a quirky community that has repurposed the attractions." },
    { roll: 31, name: "Scrap Yard", desc: "A large junkyard turned settlement, with homes and workshops built from scavenged materials." },
    { roll: 32, name: "Power Plant Village", desc: "A small community has formed around the ruins of a power plant, using its resources for energy and shelter." },
    { roll: 33, name: "Desert Monastery", desc: "An old religious site now inhabited by settlers who maintain the buildings and gardens." },
    { roll: 34, name: "Deserted Prison", desc: "The cells and facilities of an old prison now house a community, providing a secure and fortified location." },
    { roll: 35, name: "Abandoned Mall", desc: "The remains of a shopping mall now serve as a large, communal living space for settlers." },
    { roll: 36, name: "Water Tower Town", desc: "A settlement has formed around a large water tower, with homes and farms benefiting from the stored water." },
    { roll: 41, name: "Canyon Settlement", desc: "A community built within a canyon, using the natural formations for defense and shelter." },
    { roll: 42, name: "Deserted School Campus", desc: "An old school repurposed into a settlement, with classrooms and gyms turned into living spaces." },
    { roll: 43, name: "Oil Rig Community", desc: "An old, once ocean-based oil rig now houses a small, industrious settlement." },
    { roll: 44, name: "Ruined Cathedral", desc: "The remains of a large church now serve as a communal living space and meeting hall for settlers." },
    { roll: 45, name: "Old Gas Station", desc: "A small settlement has formed around an old gas station, using its infrastructure for trade and repair." },
    { roll: 46, name: "Desert Market Town", desc: "A town built around a central market square, where traders and settlers gather to exchange goods." },
    { roll: 51, name: "Fallen Bridge Camp", desc: "A settlement has formed beneath the remains of a large collapsed bridge, using the structure for shelter." },
    { roll: 52, name: "Drive-In Theater", desc: "The old projection booth and concession stands have been repurposed into homes and shops for a small community." },
    { roll: 53, name: "Airplane Graveyard", desc: "Settlers have turned old, grounded planes into homes and workshops in a sprawling community." },
    { roll: 54, name: "Shipping Container Village", desc: "A settlement made from repurposed shipping containers, providing sturdy and modular living spaces." },
    { roll: 55, name: "Ruined Observatory", desc: "An old observatory turned into a fortified settlement, using the high ground for defense." },
    { roll: 56, name: "Desert Commune", desc: "A community with an unexploded nuclear bomb in the center." },
    { roll: 61, name: "Small Farmstead", desc: "A group of settlers is attempting to grow crops and raise livestock, using irrigation systems and old farming techniques." },
    { roll: 62, name: "Shanty Town", desc: "A collection of makeshift homes built from scrap metal and other scavenged materials, housing a small community." },
    { roll: 63, name: "Trading Post", desc: "A bustling hub where traders from various parts of the wasteland come to barter goods and services." },
    { roll: 64, name: "Ranch", desc: "A larger-scale farm with fields and animal pens, providing food and supplies for a small settlement." },
    { roll: 65, name: "Ruined Suburb", desc: "An old suburban neighborhood being repurposed by settlers, with houses turned into communal living spaces." },
    { roll: 66, name: "Vault", desc: "A vault that allows visitors and trades with outsiders." }
];

export const townQuests = [
    { roll: 11, text: `"Rot from Within" – A trusted town member of X faction is secretly poisoning food supplies to 'thin the weak.' Expose them, join them, or take their place.` },
    { roll: 12, text: `"Election Day" – An election is being held to decide if they want to continue on their current faction or convert to another after being visited by an envoy.` },
    { roll: 13, text: `Retrieve the Stolen Goods – Thieves from X faction have stolen valuable supplies from the town, and the player must recover them.` },
    { roll: 14, text: `Investigate the Sabotage – Someone from X faction is sabotaging the town's equipment; find and stop them.` },
    { roll: 15, text: `Secure the Power Source – The town's power source is failing; find a new one or repair the existing one involving X faction.` },
    { roll: 16, text: `"The Price of Safety" – A settlement wants a massive wall built, but the only materials are sacred to a nearby X faction settlement.` },
    { roll: 21, text: `Help the Farmers – Crops are failing; determine the cause and fix it.` },
    { roll: 22, text: `Recruit New Settlers – The town needs more people; recruit settlers from other areas.` },
    { roll: 23, text: `Resolve a Dispute – Two important town members are in conflict; mediate a resolution.` },
    { roll: 24, text: `Feed the Hunger – The town hides a secret: they are reluctant cannibals suffering withdrawal.` },
    { roll: 25, text: `"The Hardest Goodbye" – A survivor asks you to put down their feral ghoul spouse… unless they can be saved.` },
    { roll: 26, text: `Escort the Diplomat – Safely escort a diplomat to a neighboring settlement.` },
    { roll: 31, text: `Uprising – A slaver town faces a slave rebellion. Choose a side.` },
    { roll: 32, text: `Establish Trade Routes – Make contact with nearby settlements to open trade.` },
    { roll: 33, text: `Recover Lost Technology – Rumors say a nearby X faction settlement has valuable pre-war tech they arent using. help retrieve it or activate it for the others.` },
    { roll: 34, text: `Stolen resources" – Raiders from X faction stole resources needed to establish a thriving colony. Infiltrate and recover, or help them create a new life` },
    { roll: 35, text: `Investigate the Crime – A crime has occurred; find the culprit.` },
    { roll: 36, text: `"The Ghoulfather" – A ghoul crime lord wants one last score against X faction.` },
    { roll: 41, text: `Convince the Skeptics – Some townsfolk doubt an important discovery; win them over.` },
    { roll: 42, text: `Reclaim the Outpost – A nearby outpost has been taken by X enemy; reclaim it.` },
    { roll: 43, text: `"The Guilty Innocent" – A beloved hero is secretly guilty; expose or protect them.` },
    { roll: 44, text: `"Psycho Circus" – A chem dealer's new formula turns people feral.` },
    { roll: 45, text: `"The Arena" – A raider warband has built a combat arena in town.` },
    { roll: 46, text: `Flesh for Flesh – Nearby X faction needs to trade citizens for genetic diversity, but something isnt quite right.` },
    { roll: 51, text: `"The Price of Freedom" – A nearby town will release captives… for a price.` },
    { roll: 52, text: `Investigate the Ruins – Strange activity reported in nearby ruins, it is currently being looted by X faction who do not want to share.` },
    { roll: 53, text: `"AI Overlord" – An AI controls a town and won't let workers take breaks or leave. Find a way to stop the AI from ruining the town.` },
    { roll: 54, text: `Quell the Rebellion – A group of townsfolk plan a rebellion; some want to stay with the current leaders and some want to splinter to X faction. Choose a side.` },
    { roll: 55, text: `The Disappearing – Many townsfolk exploring near X faction settlement nearby never come back. find out why. ` },
    { roll: 56, text: `Heal the Injured – Several citizens need medical supplies urgently. There is a nearby settlement of X faction that may be able to help` },
    { roll: 61, text: `Protect the Scavengers – Escort a scavenger party to a nearby ruins inhabited by a difficult enemy.` },
    { roll: 62, text: `"New Gods of the Old World" – The town worships a nuclear bomb that sits unexploded and unstable in the middle of town. It may not be completely dormant...` },
    { roll: 63, text: `Rescue the Captives – X faction kidnapped townsfolk; infiltrate and rescue them.` },
    { roll: 64, text: `Hostile Neighbors – A nearby X faction settlement terrorizes the town; eliminate or negotiate.` },
    { roll: 65, text: `Refugee Crisis - Several refugees have come to the town but are not being accepted in due to lack of resources. resolve the conflict. ` },
    { roll: 66, text: `Find the Missing Civilian – A key figure has gone missing in a maze-like network of sewer tunnels under the town. Find them without getting lost or learn the truth.` }
];

export const professionQuests = {
    Technician: [
        "Dead Signal – Restore a dead radio relay using a salvaged comm tower part.",
        "Gun Show – Upgrade a scavenger's sentimental weapon.",
        "Cold Steel – Repair one of each: weapon, armor, and tech."
    ],
    Mechanic: [
        "Steel & Silence – Upgrade a stealth merc's armor.",
        "Harden the Hide – Restore riot gear using ceramic plates.",
        "Overhaul – Reinforce a caravan's busted armor."
    ],
    Farmer: [
        "Tainted Crop – Cure a fungal infection in irradiated melons.",
        "Dig Deep – Convert an old garden into a viable plot.",
        "The Root Problem – Track mutated vines destroying a well."
    ],
    Chef: [
        "Thirsty Business – Convert meat into fuel for town tech.",
        "Kitchen Sink Science – Recreate a legendary morale-boosting stew.",
        "Grill Master – Produce exotic-meat fuel for a merchant."
    ],
    Exterminator: [
        "Rats in the Walls – Clear a mole-rat infestation.",
        "Big Game Hunt – Kill a mutant alpha predator.",
        "Pest Control – Clear bloatflies from a junkyard."
    ],
    Police: [
        "Gun Balance – Convert small ammo to large for guards.",
        "Hold the Line – Arm and organize a civilian watch.",
        "Order in the Wastes – Retrieve stolen ammo crates."
    ],
    Plumber: [
        "Pipe Dream – Repair a vault's sludge-clogged plumbing.",
        "Backflow – Fix upstream contamination of clean water.",
        "Thirst Trap – Purify a dirty desert pool."
    ],
    Doctor: [
        "Wounded Pride – Convert wrong meds into life-saving ones.",
        "First Do Harm – Replace swapped placebos before riots start.",
        "Curative Measures – Synthesize medicine for a rare plague."
    ],
    Scientist: [
        "Happy Accidents – Combine random chems safely.",
        "Stimulant Shortage – Reclaim hoarded chems from raiders.",
        "Bad Batch – Stabilize an unstable chem supply."
    ],
    Engineer: [
        "Arc Spark – Repair a malfunctioning tech turret.",
        "Linebreaker – Rebuild a settlement's power fence.",
        "Mind the Gap – Restore a failing bridge lift system."
    ],
    Tailor: [
        "Patch It Up – Craft protective clothing for wasteland kids.",
        "Fashion Statement – Create an outfit to impress a faction.",
        "The Disguise – Make a fake uniform for a spy."
    ],
    Electrician: [
        "Overload – Convert a broken fusion cell into usable energy.",
        "Power Play – Restore power to a Nuka-Cola billboard.",
        "Mission Impossible – Disable an unstable bomb guarded by threats."
    ]
};

// ===== FACTIONS =====
export const factions = [
    {
        name: "The Metallion", //Militaristic faction that vows to retake the wasteland by establishing the strongest army to assert control over the commoners. Strong dislike of mutated creatures and the weak. government runs on promotion through contribution towards the goal. 
        tag: "Armor",
        desc: "Militaristic, hate the weak and tickers (mutants), meritocracy, hateful" 
    },
    {
        name: "Terra Nova", //Demoractic society that uses aptitude testing to allow citizens to contribute the most optimal way towards the revival of society, use historical best practice to improve efficincy and minimize corruption.  Strongly leverage technology and reliance on science. Low emphasis on military, easily manipulated. 
        tag: "Meds",
        desc: "Trying to rebuild society with hostorical best practice and science, democracy, weary"
    },
    {
        name: "Providence", //Faction that belives the aliens are benevolent and accept mutation as a gift from the divine, society mostly consists of friendly mutated creatures and those who want to help them. Often require indoctrination/baptism to join, and rules to follow. 
        tag: "Water",
        desc: "Simple-life, rescue dregs of society/mutants, theocracy, friendly" 
    },
    {
        name: "The Sundered Republic", //Faction that attempts to rebuild society as it was before.  Uses traditional representative government, beaurocratic processes, generally civilized and not violent. Slow to adapt, technologically stunted. 
        tag: "Weapons",
        desc: "Bureaucratic progressive society, republic, weary"
    },
    {
        name: "The Empire",  //A warmongering civilization that uses antiquated brutal diplomacy and enacts slavery, provides minimal due process for disagreeables.  Strive to conquer the wasteland through force. Strong faction pride, share all resources with eachother. strong pride towards their emperor. 
        tag: "Rations",
        desc: "Communist monarchy, slavers, hateful"
    },
    {
        name: "The Alliance", //This faction is splintered groups of settlements that rely on eachother for trade but do not officially unite.  Most unogranized faction, but also most welcoming with no requirements of its members. Every man for himself.  
        tag: "Technology",
        desc: "Small town commune, anarchy, friendly"
    }
];

export const npcTable = [
  { roll: 11, name: "Bitter War Veteran", desc: "Gruff, one-eyed, tells long stories of battles no one remembers. Distrusts outsiders." },
  { roll: 12, name: "Cheerful Merchant", desc: "Overly optimistic, insists every item is 'a steal,' even junk." },
  { roll: 13, name: "Paranoid Scavenger", desc: "Constantly scanning the horizon, mutters about being followed." },
  { roll: 14, name: "Wandering Bard", desc: "Plays a battered guitar, trades songs for food. Knows odd rumors." },
  { roll: 15, name: "Cynical Medic", desc: "Skilled healer but mocks patients for getting hurt in the first place." },
  { roll: 16, name: "Soft-Spoken Farmer", desc: "Avoids conflict, loves talking about soil and crops." },
  { roll: 21, name: "Scrap Artist", desc: "Creates sculptures from junk, values beauty over practicality." },
  { roll: 22, name: "Cold Bounty Hunter", desc: "Says little, eyes everyone as a potential target." },
  { roll: 23, name: "Story-Hoarding Elder", desc: "Collects tales like treasure, trades them for supplies." },
  { roll: 24, name: "Outcast Mutant", desc: "Mistrustful but surprisingly gentle; hides disfigurements." },
  { roll: 25, name: "Disgraced Officer", desc: "Still wears a faded uniform, insists on strict protocol." },
  { roll: 26, name: "Gambling Addict", desc: "Always shuffling a deck, willing to bet on anything." },
  { roll: 31, name: "Feral Child", desc: "Skittish and dirty, communicates with whistles and hand signals." },
  { roll: 32, name: "Smooth-Talking Swindler", desc: "Can make junk sound valuable and lies sound sweet." },
  { roll: 33, name: "Inventive Tinkerer", desc: "Constantly fiddling with devices, absent-minded in conversation." },
  { roll: 34, name: "Runaway Cultist", desc: "Avoids eye contact, refuses to talk about their past faith." },
  { roll: 35, name: "Grumpy Fisherman", desc: "Complains about everything except fishing." },
  { roll: 36, name: "Nomadic Trader", desc: "Has goods from distant places, shares strange slang." },
  { roll: 41, name: "Desert Hermit", desc: "Lives alone by choice, mutters about 'the old ways.'" },
  { roll: 42, name: "Overzealous Guard", desc: "Takes rules way too seriously, even in casual conversation." },
  { roll: 43, name: "Scarred Pit Fighter", desc: "Proud of every scar, constantly seeks challenges." },
  { roll: 44, name: "Lovesick Drunk", desc: "Always talking about a lost lover, drinks to remember." },
  { roll: 45, name: "Animal Whisperer", desc: "Talks to animals as if they respond, claims they do." },
  { roll: 46, name: "Irradiated Prophet", desc: "Speaks in riddles, claims visions come from 'the Glow.'" },
  { roll: 51, name: "Hoarder", desc: "Collects anything shiny or unusual, highly territorial." },
  { roll: 52, name: "Traveling Preacher", desc: "Preaches hope in the wasteland but hides deep doubt." },
  { roll: 53, name: "Retired Raider", desc: "Calm now, but still has a dangerous glint in their eye." },
  { roll: 54, name: "Wanderlust Explorer", desc: "Maps everything, constantly seeks 'what's over that hill.'" },
  { roll: 55, name: "Charismatic Drifter", desc: "Always has a story, usually half true." },
  { roll: 56, name: "Grinning Bodyguard", desc: "Enjoys their work a little too much." },
  { roll: 61, name: "Silent Gunslinger", desc: "Answers with nods, lets their weapon do the talking." },
  { roll: 62, name: "Bitter Widow/Widower", desc: "Blames the wasteland for everything lost." },
  { roll: 63, name: "Scavenger Kid", desc: "Tiny, bold, and far too street-smart for their age." },
  { roll: 64, name: "Flamboyant Trader", desc: "Dresses extravagantly, announces every sale dramatically." },
  { roll: 65, name: "Fortune Teller", desc: "Uses cards, bones, or bottle caps to 'see' the future." },
  { roll: 66, name: "Sleepless Night Watchman", desc: "Stares into the dark like they're waiting for something awful." }
];

export const statNames = ["STR", "AGI", "END", "INT", "CHA"];

export const armorTypes = [
    ["Physical", "p"],
    ["Energy", "n"],
    ["Explosive", "x"],
    ["Radiation", "r"] 
];

export const statAbbrev = {
    STRENGTH: "STR",
    AGILITY: "AGI",
    ENDURANCE: "END",
    INTELLIGENCE: "INT",
    CHARISMA: "CHA"
};

export const negNames = ["Hunger", "Thirst", "Fatigue", "Rads", "Injury"];

export const tileTypes = [
    { name: "Explosive", symbol: "💣", color: "#e25822" },
    { name: "Cover", symbol: "🧱", color: "#888888" },
    { name: "Ruins", symbol: "🪨", color: "#6b4f3a" },
    { name: "Obstruction", symbol: "❌", color: "#4a148c" },
    { name: "Special", symbol: "⭐", color: "#e6c200" },
    { name: "Blank", symbol: "", color: "#2b2b2b" }
];

export const rowLabels = ["A", "B", "C", "D", "E"];
export const colLabels = ["1", "2", "3", "4", "5"];
export const fixedWeights = [1, 2, 2, 1, 3, 6];

export const fleshTable = [
  { name: "Animal Flesh",  effect: "-1 Hunger, END save or +1 Rads, 5c" },
  { name: "Mutant Flesh",  effect: "-1 Hunger, -1 Injury, +1 Rads, 5c" },
  { name: "Human Flesh",   effect: "-1 Hunger, CHA save or become cannibal, 5c" },
];

export const rationWaterTable = [
  { name: "Irradiated Water",  effect: "-1 Thirst, +1 Rads, 5c" },
  { name: "Dirty Water",       effect: "-1 Thirst, END save or +1 Rads, 5c" },
  { name: "Clean Water",       effect: "-1 Thirst, 5c" },
  { name: "Power Water",       effect: "-1 Thirst, -1 Fatigue, +10% HP, 10c" },
  { name: "Irradiated Ration", effect: "-1 Hunger, +1 Rads, 5c" },
  { name: "Dirty Ration",      effect: "-1 Hunger, END save or +1 Rads, 5c" },
  { name: "Clean Ration",      effect: "-1 Hunger, 5c" },
  { name: "Healthy Ration",    effect: "-1 Hunger, -1 Rads, +10% HP, 10c" },
];

export const moraleTable = [
  { value: "+5", effect: "quest to join faction (must defeat tier 6 battle)" },
  { value: "+4", effect: "20% discount" },
  { value: "+3", effect: "faction shop also sells crit loot" },
  { value: "+2", effect: "10% discount" },
  { value: "+1", effect: "Gain access to faction shop" },
  { value: "-1", effect: "-50% quest rewards" },
  { value: "-2", effect: "+100% prices" },
  { value: "-3", effect: "faction collapses and can no longer be rolled" },
];

