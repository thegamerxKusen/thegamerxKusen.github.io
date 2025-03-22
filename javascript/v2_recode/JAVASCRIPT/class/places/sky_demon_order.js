//Demonic Cult
// Base locations (you can expand connections later)

const demonicPalace = new PLACE(
    "Demonic Palace",
    "The grand palace where the Heavenly Demon resides.",
    [],
    []
);

const guardianHall = new PLACE(
    "Guardian Hall",
    "The residence and training ground of the Cult's powerful guardians.",
    [],
    []
);

const grandElderPavilion = new PLACE(
    "Grand Elder Pavilion",
    "The meeting place of the Cult's Grand Elders, filled with ancient scrolls.",
    [],
    []
);
const sealedDemonCave = new PLACE(
    "Sealed Demon Cave",
    "A dark cave where ancient demons and traitors are imprisoned.",
    [],
    []
);
const demonicAcademy = new PLACE(
    "Demonic Academy",
    "The Demonic Academy is where the Heavenly Demon Divine Cult's children train to become elite warriors. All previous statuses are void, and only strength determines success.",
    [
        new PLACE(
            "Main Hall",
            "The administrative heart of the Academy where key decisions and meetings happen.",
            [
                new PLACE("Director's Office", "Office of the Demonic Academy Director from the Guardian Family.", [], []),
                new PLACE("Grand Martial Training Ground", "Large open area used for large-scale martial training and demonstrations.", [], []),
                new PLACE("Martial Instructor Dormitory", "Living quarters for the Academy's 36 martial instructors.", [], [])
            ],
            []
        ),
        new PLACE(
            "Studying Facilities",
            "Where cadets access knowledge and martial manuals.",
            [
                new PLACE("Precious Library", "Library storing rare martial arts manuals and cultivation methods.", [], [])
            ],
            []
        ),
        new PLACE(
            "Training Facilities",
            "Facilities dedicated to martial arts training and cultivation.",
            [
                new PLACE("Individual Training Facility", "Private space for basic individual training.", [], []),
                new PLACE("Expert Individual Training Facility", "Advanced training area reserved for Expert-level cadets.", [], []),
                new PLACE("Isolation Training Facility", "Secluded space for intense cultivation or punishment.", [], [])
            ],
            []
        ),
        new PLACE(
            "Support Facilities",
            "Facilities that support the daily life of cadets.",
            [
                new PLACE("Cadet Dormitory", "Housing for all cadets during their years at the Academy.", [], []),
                new PLACE("Demonic Academy Smithy", "Forge where weapons and armors are crafted.", [], []),
                new PLACE("Demonic Academy Infirmary", "Medical facility where injured cadets are treated.", [], []),
                new PLACE("Demonic Academy Cafeteria", "Where cadets eat and gather.", [], []),
                new PLACE("Demonic Academy Armory", "Storage of weapons available to the cadets.", [], []),
                new PLACE("Supply Room", "Where daily necessities and equipment are distributed.", [], [])
            ],
            []
        ),
        new PLACE(
            "Special Facilities",
            "Restricted and dangerous facilities used for exams or punishment.",
            [
                new PLACE("Detention Center", "A place to imprison cadets or offenders within the Academy.", [], []),
                new PLACE("Sealed Demon Cave", "Ancient cave filled with traps and trials, used in advanced exams.", [], [])
            ],
            []
        )
    ],
    []
);
const medicalHall = new PLACE(
    "Medical Hall",
    "The Cult's medical center and poison laboratory.",
    [],
    []
);

const outerTrainingGrounds = new PLACE(
    "Outer Training Grounds",
    "Rugged terrain used for intense training and punishment.",
    [],
    []
);
//market place

const blacksmith = new PLACE(
    "Blacksmith",
    "A fiery forge where blades, spears, and other weapons are crafted and sold.",
    [],
    []
);

const poisonShop = new PLACE(
    "Poison Shop",
    "A dark, secluded stall filled with deadly poisons and antidotes.",
    [],
    []
);

const rareItemsShop = new PLACE(
    "Rare Items Shop",
    "A mysterious shop offering rare artifacts, talismans, and cursed objects.",
    [],
    []
);

const herbalist = new PLACE(
    "Herbalist",
    "A fragrant stall with healing herbs, medicinal powders, and strange concoctions.",
    [],
    []
);

const auctionHouse = new PLACE(
    "Auction House",
    "A large hall where rare and dangerous items are auctioned to the highest bidder.",
    [],
    []
);

// Now create the Marketplace and link the sub-places
const marketplace = new PLACE(
    "Marketplace",
    "A bustling market where cultists trade weapons, poisons, and rare items.",
    [blacksmith, poisonShop, rareItemsShop, herbalist, auctionHouse],
    []
);

const forbiddenGrounds = new PLACE(
    "Forbidden Grounds",
    "A dangerous and mysterious area where the Cult hides its darkest secrets.",
    [],
    []
);

const clanDistrict = new PLACE(
    "Clan Residential District",
    "The living quarters of the various clans within the cult, extend in all of the ten thousand mountain.",
    [],
    []
);

// Example of special sub-locations


const sky_demon_order = new PLACE(
    "Sky Demon Order",
    "Heavenly Demon Divin Cult Main Base - Ten Thousand Mountains",
    [demonicPalace,guardianHall,grandElderPavilion,demonicAcademy,clanDistrict,marketplace,medicalHall,outerTrainingGrounds,forbiddenGrounds],
    []
);