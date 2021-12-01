"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Games",
      [
        {
          title: "Dungeons & Dragons",
          genre1: 5,
          genre2: 3,
          genre3: 7,
          url: "https://imgur.com/pMG8tab",
          description:
            "The Dungeons & Dragons roleplaying game is about storytelling in worlds of sword and sorcery. It shares elements with childhood games of make-believe. Like those games, D&D is driven by imagination. It’s about picturing the towering castle beneath the stormy night sky and imagining how a fantasy adventurer might react to the challenges that scene presents.",
        },
        {
          title: "Animal Crossing New Horizons",
          genre1: 4,
          genre2: 5,
          genre3: 12,
          url: "https://imgur.com/kQ4jMwK",
          description:
            "Nook Inc. invites you to create your personal island paradise on a deserted island brimming with possibility.",
        },
        {
          title: "Apex Legends",
          genre1: 11,
          genre2: 2,
          genre3: 12,
          url: "https://imgur.com/h2e1VOB",
          description:
            "Show 'em what you're made of in Apex Legends, a free-to-play hero shooter where contenders from across the Frontier team up to battle for glory, fame, and fortune.",
        },
        {
          title: "Civ VI",
          genre1: 7,
          genre2: 4,
          genre3: 9,
          url: "https://imgur.com/rT4fKBQ",
          description:
            "Originally created by legendary game designer Sid Meier, Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with history’s greatest leaders as you attempt to build the greatest civilization the world has ever known.",
        },
        {
          title: "Dead by Daylight",
          genre1: 2,
          genre2: 14,
          genre3: 7,
          url: "https://imgur.com/q00qIcm",
          description: "",
        },
        {
          title: "Destiny 2",
          genre1: 11,
          genre2: 12,
          genre3: 2,
          url: "https://imgur.com/sHmP094",
          description:
            "Join millions of players, create your Guardian, and start collecting unique weapons and armor to customize your look and playstyle. Embark on challenging co-op missions and a variety of competitive PvP modes. Experience Destiny 2’s evolving story with friends or explore the stars as a fireteam of one.",
        },
        {
          title: "Elite Dangerous",
          genre1: 2,
          genre2: 4,
          genre3: 7,
          url: "https://imgur.com/93x1FO0",
          description:
            "Elite Dangerous brings gaming’s original open world adventure to the modern generation with a stunning recreation of the entire Milky Way galaxy. Here battles rage, governments fall, and humanity’s frontier expands – and you can impact it all. Welcome to the definitive massively multiplayer space epic.",
        },
        {
          title: "Forza Horizon 4",
          genre1: 10,
          genre2: 2,
          genre3: 4,
          url: "https://imgur.com/ciK3AxF",
          description:
            "Live the Horizon Life when you play Forza Horizon 4. Experience a shared world with dynamic seasons. Explore beautiful scenery, collect over 450 cars and become a Horizon Superstar in historic Britain.",
        },
        {
          title: "GTFO",
          genre1: 11,
          genre2: 7,
          genre3: 14,
          url: "https://imgur.com/48vT0d7",
          description:
            "GTFO is a hardcore 4 player cooperative first-person shooter, with a focus on team play and atmosphere. It features edge-of-your-seat suspense, team-based puzzle-solving and high-intensity combat.",
        },
        {
          title: "Jackbox Games",
          genre1: 1,
          genre2: 6,
          genre3: 14,
          url: "https://imgur.com/spTbZRX",
          description:
            "Five new games: the hit threequel Quiplash 3, the collaborative chaos of The Devils and the Details, the fierce drawing game Champ’d Up, the speech game Talking Points and the guessing game Blather Round. Use phones or tablets as controllers. Play with up to 8 players, and an audience of 10,000!",
        },
        {
          title: "League of Legends",
          genre1: 2,
          genre2: 8,
          genre3: 14,
          url: "https://imgur.com/gQLL8aq",
          description:
            "League of Legends is a team-based game with over 140 champions to make epic plays with.",
        },
        {
          title: "Minecraft",
          genre1: 15,
          genre2: 5,
          genre3: 3,
          url: "https://imgur.com/PtW9vS8",
          description:
            "With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!",
        },
        {
          title: "Rocket League",
          genre1: 10,
          genre2: 2,
          genre3: 14,
          url: "https://imgur.com/KBoFrBh",
          description:
            "WELCOME TO THE HIGH-POWERED HYBRID OF ARCADE-STYLE SOCCER AND VEHICULAR MAYHEM! CUSTOMIZE YOUR CAR, HIT THE FIELD, AND COMPETE IN ONE OF THE MOST CRITICALLY ACCLAIMED SPORTS GAMES OF ALL TIME!",
        },
        {
          title: "Titanfall 2",
          genre1: 11,
          genre2: 7,
          genre3: 14,
          url: "https://imgur.com/eMk1Qwo",
          description:
            "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
        },
        {
          title: "Valheim",
          genre1: 2,
          genre2: 3,
          genre3: 1,
          url: "https://imgur.com/DwN1GIM",
          description:
            "A brutal exploration and survival game for 1-10 players, set in a procedurally-generated purgatory inspired by viking culture. Battle, build, and conquer your way to a saga worthy of Odin’s patronage!",
        },
        {
          title: "Valorant",
          genre1: 11,
          genre2: 14,
          genre3: 2,
          url: "https://imgur.com/KPxiYAw",
          description:
            "More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.",
        },
        {
          title: "Warhammer: Vermintide 2",
          genre1: 2,
          genre2: 14,
          genre3: 12,
          url: "https://imgur.com/wx4MyJS",
          description:
            "The critically acclaimed Vermintide 2 is a visually stunning and groundbreaking melee action game pushing the boundaries of the first person co-op genre. Join the fight now!",
        },
        {
          title: "CS:GO",
          genre1: 11,
          genre2: 14,
          genre3: 2,
          url: "https://imgur.com/15MvGSW",
          description:
            "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content",
        },
        {
          title: "Dark Souls 3",
          genre1: 2,
          genre2: 3,
          genre3: 12,
          url: "https://imgur.com/c9ECEY5",
          description:
            "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
        },
        {
          title: "Left 4 Dead 2",
          genre1: 11,
          genre2: 14,
          genre3: 12,
          url: "https://imgur.com/Q2n8ok1",
          description:
            "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans...",
        },
        {
          title: "Magic: the Gathering",
          genre1: 13,
          genre2: 7,
          genre3: 6,
          url: "https://imgur.com/LedPtVX",
          description:
            "Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast",
        },
        {
          title: "Portal 2",
          genre1: 9,
          genre2: 14,
          genre3: 2,
          url: "https://imgur.com/XXmnIl6",
          description:
            'The "Perpetual Testing Initiative" has been expanded to allow you to design co-op puzzles for you and your friends!',
        },
        {
          title: "Sea of Thieves",
          genre1: 2,
          genre2: 3,
          genre3: 4,
          url: "https://imgur.com/kpjKGHt",
          description:
            "Explore a vast open world of unspoiled islands, sunken ships and mysterious artefacts. Seek out lost treasure, confront cursed Skeleton Captains and protect precious Trading Company cargo. Go hunting and fishing or dip into hundreds of optional goals!",
        },
        {
          title: "Mario Kart 8",
          genre1: 10,
          genre2: 4,
          genre3: 7,
          url: "https://imgur.com/rjNSw1j",
          description:
            "Race anytime, anywhere! Hit the road with the definitive version of Mario Kart 8.",
        },
        {
          title: "RuneScape",
          genre1: 8,
          genre2: 2,
          genre3: 3,
          url: "https://imgur.com/qhyWcLy",
          description:
            "A unique MMO set in the vast, fantasy world of Gielinor, brimming with diverse races, guilds and ancient gods battling for dominion. RuneScape now features more ways to play, brand new skills and over 200 gripping story-driven quests.",
        },
        {
          title: "Stick Fight",
          genre1: 16,
          genre2: 2,
          genre3: 1,
          url: "https://imgur.com/h9z1PBR",
          description:
            "Stick Fight is a physics-based couch/online fighting game where you battle it out as the iconic stick figures from the golden age of the internet.",
        },
        {
          title: "World of Warcraft",
          genre1: 8,
          genre2: 5,
          genre3: 3,
          url: "https://imgur.com/UkiizRg",
          description:
            "All roads lead to Outland, hero. Start playing the Burning Crusade Classic™ pre-expansion update today and get your draenei or blood elf hero ready for battle. Then on June 1, battle to level 70 beyond the Dark Portal and defend Azeroth.",
        },
        {
          title: "Terraria",
          genre1: 15,
          genre2: 4,
          genre3: 5,
          url: "https://imgur.com/zBvMfod",
          description:
            "The very world is at your fingertips as you fight for survival, fortune, and glory. Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, or construct your own city - In the World of Terraria, the choice is yours!",
        },
        {
          title: "Super Smash Bros Ultimate",
          genre1: 16,
          genre2: 2,
          genre3: 7,
          url: "https://imgur.com/6ZDIc9S",
          description:
            "All past Super Smash Bros. fighters join the battle. Every single one!",
        },
        {
          title: "Nidhogg II",
          genre1: 16,
          genre2: 2,
          genre3: 7,
          url: "https://imgur.com/6OhlwUk",
          description:
            "The rules are simple. Reach the other side and kill anyone that stands in your way. Deftly parry and rend their throats, riddle their bowels with arrows, or squish their brains between your toes. The wurm cares not for chivalry.",
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
