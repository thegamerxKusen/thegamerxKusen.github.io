//Demonic Cult
// Base locations (you can expand connections later)

const demonicPalace = new PLACE(
    "Demonic Palace",
    "The grand palace where the Heavenly Demon resides.",
    [
        new PLACE(
            "Throne Room",
            "The grand throne room where the Heavenly Demon holds court and oversees important matters.",
            [],
            []
        ),
        new PLACE(
            "Main Hall",
            "The central area of the Demonic Palace where various ceremonies and meetings are held.",
            [],
            []
        ),
        new PLACE(
            "Martial Hall",
            "A hall dedicated to martial training and demonstrations, often used for duels or showcases.",
            [],
            [dummy_training]
        ),
        new PLACE(
            "Elder Council Chamber",
            "A solemn hall where the Elders gather to discuss cult matters and politics.",
            [],
            []
        ),
        new PLACE(
            "Cult Treasury",
            "A heavily guarded vault storing rare treasures, secret manuals, and precious resources of the Heavenly Demon Cult.",
            [],
            []
        ),
        new PLACE(
            "Demonic Palace Garden",
            "A beautifully maintained garden with rare herbs, flowers, and hidden training spots.",
            [],
            []
        ),
        new PLACE(
            "Heavenly Demon's Residence",
            "The private quarters of the Heavenly Demon, heavily guarded and mysterious.",
            [
                new PLACE(
                    "Heavenly Demon's Bedroom",
                    "The personal sleeping quarters of the Heavenly Demon, rarely entered by anyone else.",
                    [],
                    []
                ),
                new PLACE(
                    "Meditation Chamber",
                    "A secret room where the Heavenly Demon cultivates and meditates on demonic techniques.",
                    [],
                    []
                ),
                new PLACE(
                    "Secret Library",
                    "A hidden library containing forbidden martial arts manuals and ancient scrolls.",
                    [],
                    []
                ),
                new PLACE(
                    "Private Garden",
                    "A serene garden within the Heavenly Demon's Residence, used for relaxation and rare meetings.",
                    [],
                    []
                ),
                new PLACE(
                    "Audience Chamber",
                    "A small, personal chamber where the Heavenly Demon meets with trusted individuals.",
                    [],
                    []
                ),
                new PLACE(
                    "Kitchen",
                    "A private kitchen used to prepare special meals for the Heavenly Demon and his guests.",
                    [],
                    []
                ),
                new PLACE(
                    "Bathroom",
                    "A luxurious bathing area used by the Heavenly Demon, with hot springs and herbal baths.",
                    [],
                    []
                ),
                new PLACE(
                    "Prince's Bedroom",
                    "The bedroom reserved for the player, the Prince, as the heir to the Heavenly Demon.",
                    [],
                    [sleep]
                )
            ],
            []
        )
    ],
    []
);



const guardianHall = new PLACE(
    "Guardian Hall",
    "The residence and training ground of the Cult's powerful Guardian Families who have protected the Heavenly Demon since the founding of the Cult.",
    [
        new PLACE(
            "Great Guardian Residence",
            "The private quarters of the Great Guardian Family, the most prestigious of the three Guardian Families.",
            [
                new PLACE(
                    "Great Guardian Leader's Chamber",
                    "The chamber of the current Great Guardian Family Head, where important family decisions are made.",
                    [],
                    []
                ),
                new PLACE(
                    "Ancestral Shrine",
                    "A solemn place where the Great Guardian Family pays respect to their ancestors who served Cheon Ma.",
                    [],
                    []
                ),
                new PLACE(
                    "Guardian Family Library",
                    "A vast collection of scrolls, records, and martial arts manuals exclusive to the Guardian Family lineage.",
                    [],
                    []
                ),
            ],
            []
        ),
        new PLACE(
            "Left Guardian Residence",
            "The quarters of the Left Guardian Family, loyal protectors of the cult's western front.",
            [
                new PLACE(
                    "Left Guardian Leader's Chamber",
                    "The personal office of the Left Guardian Family leader.",
                    [],
                    []
                ),
                new PLACE(
                    "Guardian Tactical War Room",
                    "A war room filled with maps, plans, and strategic scrolls used by Guardians to protect the Cult.",
                    [],
                    []
                )
            ],
            []
        ),
        new PLACE(
            "Right Guardian Residence",
            "The quarters of the Right Guardian Family, fierce defenders of the cult's eastern domain.",
            [
                new PLACE(
                    "Right Guardian Leader's Chamber",
                    "The private chamber of the Right Guardian Family leader.",
                    [],
                    []
                ),
                new PLACE(
                    "Guardian Armory",
                    "A secured armory containing traditional weapons passed down through the Guardian generations.",
                    [],
                    []
                )
            ],
            []
        ),
        new PLACE(
            "Guardian Training Grounds",
            "The vast open field where all three Guardian Families hone their martial skills and techniques.",
            [
                new PLACE(
                    "Advanced Combat Arena",
                    "A fortified arena used for sparring and testing Guardian-level martial arts techniques.",
                    [],
                    []
                ),
                new PLACE(
                    "Sealed Sword Pavilion",
                    "A sacred training area built around a sealed sword said to belong to the Sword Demon’s disciple.",
                    [],
                    []
                ),
                new PLACE(
                    "Heavenly Blade Dojo",
                    "The main dojo where Guardians practice advanced swordsmanship techniques passed down since Cheon Ma.",
                    [],
                    []
                )
            ],
            []
        ),
        new PLACE(
            "Guardian Meditation Hall",
            "A serene and spiritual area where the Guardians meditate and practice inner cultivation.",
            [],
            []
        ),
        new PLACE(
            "Guardian Infirmary",
            "The medical facility where injured Guardians are treated after intense training or missions.",
            [],
            []
        ),
        new PLACE(
            "Guardian Mess Hall",
            "The communal dining area where Guardians from all three families gather.",
            [],
            []
        ),
        new PLACE(
            "Guardian Vault",
            "A heavily secured vault that holds ancient relics, contracts, and treasures vital to the Guardian Family’s duty.",
            [],
            []
        )
    ],
    []
);

const grandElderPavilion = new PLACE(
    "Grand Elder Pavilion",
    "The sacred meeting place of the Cult's Grand Elders, where the most important decisions of the Heavenly Demon Divine Cult are made.",
    [
        new PLACE(
            "Elder Council Hall",
            "The main hall where the Grand Elders gather to discuss cult affairs, politics, and major decisions.",
            [],
            []
        ),
        new PLACE(
            "Ancient Scroll Library",
            "A massive library filled with forbidden techniques, lost martial arts, and historical records of the Cult.",
            [],
            []
        ),
        new PLACE(
            "Secret Archive Chamber",
            "A hidden room known only to the Grand Elders, containing confidential records and ancient relics sealed from the rest of the cult.",
            [],
            []
        ),
        new PLACE(
            "Hall of Decrees",
            "A ceremonial hall where the Grand Elders issue official orders and decrees in the name of the Heavenly Demon.",
            [],
            []
        ),
        new PLACE(
            "Heavenly Demon Statue Court",
            "An open courtyard with a towering statue of Cheon Ma, where the Grand Elders swear their loyalty and reflect on their duties.",
            [],
            []
        )
    ],
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
    "The Cult's central medical center, where skilled doctors treat injuries and concoct deadly poisons.",
    [
        new PLACE(
            "Herbal Garden",
            "A lush garden filled with rare medicinal herbs and poisonous plants used for treatments and toxins.",
            [],
            []
        ),
        new PLACE(
            "Doctor's Chamber",
            "The main office of the Cult's chief doctors and healers, where diagnoses and consultations are made.",
            [],
            []
        ),
        new PLACE(
            "Poison Laboratory",
            "A hidden laboratory where poison masters create, refine, and study deadly toxins and antidotes.",
            [],
            []
        ),
        new PLACE(
            "Patient Ward",
            "A large hall where injured cultists recover from their wounds under the care of healers.",
            [],
            []
        ),
        new PLACE(
            "Medicine Storage",
            "A secured room filled with prepared pills, medicinal powders, and poison antidotes.",
            [],
            []
        )
    ],
    []
);

const marketplace = new PLACE(
    "Marketplace",
    "A bustling market where cultists trade weapons, poisons, herbs, and rare artifacts.",
    [
        new PLACE(
            "Blacksmith",
            "A fiery forge where blades, spears, and other weapons are crafted and sold.",
            [],
            []
        ),
        new PLACE(
            "Poison Shop",
            "A dark, secluded stall filled with deadly poisons and antidotes.",
            [],
            []
        ),
        new PLACE(
            "Rare Items Shop",
            "A mysterious shop offering rare artifacts, talismans, and cursed objects.",
            [],
            []
        ),
        new PLACE(
            "Herbalist",
            "A fragrant stall with healing herbs, medicinal powders, and strange concoctions.",
            [],
            []
        ),
        new PLACE(
            "Auction House",
            "A large hall where rare and dangerous items are auctioned to the highest bidder.",
            [],
            []
        )
    ],
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
    "Heavenly Demon Divine Cult Main Base - Ten Thousand Mountains",
    [demonicPalace,guardianHall,grandElderPavilion,demonicAcademy,clanDistrict,marketplace,medicalHall],
    [npc_test,menue_test]
);