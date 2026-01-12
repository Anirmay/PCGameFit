// ========================================
// Game Database with System Requirements
// ========================================
const gamesDatabase = [
    // Action Games
    {
        name: "Grand Theft Auto V",
        category: "Open World",
        minRAM: 8,
        minStorage: 72,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Grand Theft Auto IV",
        category: "Open World",
        minRAM: 2,
        minStorage: 32,
        minGPU: 2,
        minCPU: 2,
        recRAM: 4,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Grand Theft Auto: San Andreas",
        category: "Open World",
        minRAM: 512,
        minStorage: 4,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Grand Theft Auto: Vice City",
        category: "Open World",
        minRAM: 256,
        minStorage: 2,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Grand Theft Auto III",
        category: "Open World",
        minRAM: 256,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Grand Theft Auto: Episodes from Liberty City",
        category: "Action",
        minRAM: 2,
        minStorage: 18,
        minGPU: 2,
        minCPU: 2,
        recRAM: 4,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Grand Theft Auto: Chinatown Wars",
        category: "Action",
        minRAM: 1,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Grand Theft Auto Online",
        category: "Action",
        minRAM: 8,
        minStorage: 72,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Grand Theft Auto: The Trilogy - Definitive Edition",
        category: "Open World",
        minRAM: 8,
        minStorage: 45,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Devil May Cry 5",
        category: "Action",
        minRAM: 8,
        minStorage: 35,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Metal Gear Rising",
        category: "Action",
        minRAM: 4,
        minStorage: 25,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // Open World Games
    {
        name: "The Elder Scrolls V: Skyrim",
        category: "Open World",
        minRAM: 4,
        minStorage: 12,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Fallout 4",
        category: "Open World",
        minRAM: 8,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Fallout: New Vegas",
        category: "Open World",
        minRAM: 2,
        minStorage: 10,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Fallout 3",
        category: "Open World",
        minRAM: 2,
        minStorage: 7,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Far Cry 3",
        category: "Open World",
        minRAM: 4,
        minStorage: 15,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Far Cry 4",
        category: "Open World",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Far Cry 5",
        category: "Open World",
        minRAM: 8,
        minStorage: 40,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Saints Row: The Third",
        category: "Open World",
        minRAM: 2,
        minStorage: 10,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Saints Row IV",
        category: "Open World",
        minRAM: 4,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Just Cause 2",
        category: "Open World",
        minRAM: 2,
        minStorage: 10,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Just Cause 3",
        category: "Open World",
        minRAM: 6,
        minStorage: 54,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Sleeping Dogs",
        category: "Open World",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Watch Dogs",
        category: "Open World",
        minRAM: 6,
        minStorage: 25,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Watch Dogs 2",
        category: "Open World",
        minRAM: 6,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Mafia II",
        category: "Open World",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Mafia III",
        category: "Open World",
        minRAM: 6,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Mad Max",
        category: "Open World",
        minRAM: 6,
        minStorage: 32,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Red Dead Redemption 2",
        category: "Open World",
        minRAM: 8,
        minStorage: 150,
        minGPU: 3,
        minCPU: 2,
        recRAM: 12,
        recGPU: 5,
        recCPU: 3
    },

    // FPS Games
    {
        name: "Counter-Strike 2",
        category: "FPS",
        minRAM: 8,
        minStorage: 85,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Call of Duty: Modern Warfare II",
        category: "FPS",
        minRAM: 16,
        minStorage: 125,
        minGPU: 4,
        minCPU: 3,
        recRAM: 32,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Valorant",
        category: "FPS",
        minRAM: 4,
        minStorage: 30,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Apex Legends",
        category: "FPS",
        minRAM: 8,
        minStorage: 56,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // RPG Games
    {
        name: "The Witcher 3: Wild Hunt",
        category: "RPG",
        minRAM: 8,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Elden Ring",
        category: "RPG",
        minRAM: 12,
        minStorage: 60,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Cyberpunk 2077",
        category: "RPG",
        minRAM: 12,
        minStorage: 70,
        minGPU: 3,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Skyrim Special Edition",
        category: "RPG",
        minRAM: 8,
        minStorage: 12,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 2
    },

    // Open World Games
    {
        name: "Red Dead Redemption 2",
        category: "Open World",
        minRAM: 12,
        minStorage: 150,
        minGPU: 3,
        minCPU: 3,
        recRAM: 16,
        recGPU: 5,
        recCPU: 4
    },
    {
        name: "Assassin's Creed Valhalla",
        category: "Open World",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Watch Dogs Legion",
        category: "Open World",
        minRAM: 8,
        minStorage: 45,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // Horror Games
    {
        name: "Resident Evil Village",
        category: "Horror",
        minRAM: 8,
        minStorage: 35,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Dead Space Remake",
        category: "Horror",
        minRAM: 16,
        minStorage: 50,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Outlast",
        category: "Horror",
        minRAM: 4,
        minStorage: 5,
        minGPU: 1,
        minCPU: 1,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Phasmophobia",
        category: "Horror",
        minRAM: 8,
        minStorage: 16,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 3
    },

    // Racing Games
    {
        name: "Forza Horizon 5",
        category: "Racing",
        minRAM: 8,
        minStorage: 110,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Need for Speed Heat",
        category: "Racing",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "F1 2023",
        category: "Racing",
        minRAM: 8,
        minStorage: 80,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // Indie Games
    {
        name: "Hollow Knight",
        category: "Indie",
        minRAM: 4,
        minStorage: 9,
        minGPU: 1,
        minCPU: 1,
        recRAM: 8,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Stardew Valley",
        category: "Indie",
        minRAM: 2,
        minStorage: 500,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Celeste",
        category: "Indie",
        minRAM: 2,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Hades",
        category: "Indie",
        minRAM: 8,
        minStorage: 15,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // Sports Games
    {
        name: "FIFA 24",
        category: "Sports",
        minRAM: 8,
        minStorage: 100,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "NBA 2K24",
        category: "Sports",
        minRAM: 8,
        minStorage: 110,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Rocket League",
        category: "Sports",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 1,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // Simulation Games
    {
        name: "Microsoft Flight Simulator",
        category: "Simulation",
        minRAM: 16,
        minStorage: 150,
        minGPU: 4,
        minCPU: 3,
        recRAM: 32,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "The Sims 4",
        category: "Simulation",
        minRAM: 4,
        minStorage: 26,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Cities: Skylines",
        category: "Simulation",
        minRAM: 4,
        minStorage: 4,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // Adventure Games
    {
        name: "Tomb Raider (2013)",
        category: "Adventure",
        minRAM: 4,
        minStorage: 12,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Uncharted: Legacy of Thieves",
        category: "Adventure",
        minRAM: 8,
        minStorage: 126,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "A Way Out",
        category: "Adventure",
        minRAM: 8,
        minStorage: 25,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // Anime Games
    {
        name: "Genshin Impact",
        category: "Anime",
        minRAM: 8,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Dragon Ball Z: Kakarot",
        category: "Anime",
        minRAM: 8,
        minStorage: 36,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Naruto Shippuden: Ultimate Ninja Storm 4",
        category: "Anime",
        minRAM: 4,
        minStorage: 40,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // Classics Games
    {
        name: "Half-Life 2",
        category: "Classics",
        minRAM: 1,
        minStorage: 6,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Portal 2",
        category: "Classics",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Age of Empires II: Definitive Edition",
        category: "Classics",
        minRAM: 4,
        minStorage: 30,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // PS2 Games (Emulated)
    {
        name: "God of War II (PS2)",
        category: "PS2",
        minRAM: 4,
        minStorage: 5,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "GTA San Andreas (PS2)",
        category: "PS2",
        minRAM: 2,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Shadow of the Colossus (PS2)",
        category: "PS2",
        minRAM: 4,
        minStorage: 4,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // Remastered Games
    {
        name: "The Last of Us Part I",
        category: "Remastered",
        minRAM: 16,
        minStorage: 100,
        minGPU: 5,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Mafia: Definitive Edition",
        category: "Remastered",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Demon's Souls Remake",
        category: "Remastered",
        minRAM: 12,
        minStorage: 75,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },

    // Small Games
    {
        name: "Among Us",
        category: "Small Games",
        minRAM: 1,
        minStorage: 250,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Terraria",
        category: "Small Games",
        minRAM: 2,
        minStorage: 200,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Undertale",
        category: "Small Games",
        minRAM: 2,
        minStorage: 200,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },

    // Virtual Reality Games
    {
        name: "Half-Life: Alyx",
        category: "Virtual Reality",
        minRAM: 12,
        minStorage: 70,
        minGPU: 5,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Beat Saber",
        category: "Virtual Reality",
        minRAM: 4,
        minStorage: 200,
        minGPU: 3,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 2
    },
    {
        name: "Boneworks",
        category: "Virtual Reality",
        minRAM: 8,
        minStorage: 20,
        minGPU: 4,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // Popular Games
    {
        name: "Minecraft",
        category: "Popular",
        minRAM: 4,
        minStorage: 1,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Fortnite",
        category: "Popular",
        minRAM: 8,
        minStorage: 26,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "League of Legends",
        category: "Popular",
        minRAM: 2,
        minStorage: 12,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "PUBG: Battlegrounds",
        category: "Popular",
        minRAM: 8,
        minStorage: 40,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // Adult Games
    {
        name: "The Witcher 2: Assassins of Kings",
        category: "Adult",
        minRAM: 4,
        minStorage: 25,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Grand Theft Auto IV",
        category: "Adult",
        minRAM: 4,
        minStorage: 32,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // More Action Games
    {
        name: "Sekiro: Shadows Die Twice",
        category: "Action",
        minRAM: 8,
        minStorage: 25,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Batman: Arkham Knight",
        category: "Action",
        minRAM: 8,
        minStorage: 45,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Bayonetta",
        category: "Action",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Ghostrunner",
        category: "Action",
        minRAM: 8,
        minStorage: 22,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More FPS Games
    {
        name: "Overwatch 2",
        category: "FPS",
        minRAM: 6,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Battlefield 2042",
        category: "FPS",
        minRAM: 16,
        minStorage: 100,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Doom Eternal",
        category: "FPS",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Titanfall 2",
        category: "FPS",
        minRAM: 8,
        minStorage: 45,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Rainbow Six Siege",
        category: "FPS",
        minRAM: 8,
        minStorage: 61,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Halo Infinite",
        category: "FPS",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More RPG Games
    {
        name: "Dark Souls III",
        category: "RPG",
        minRAM: 8,
        minStorage: 25,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Final Fantasy XIV",
        category: "RPG",
        minRAM: 8,
        minStorage: 80,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Baldur's Gate 3",
        category: "RPG",
        minRAM: 16,
        minStorage: 150,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Monster Hunter: World",
        category: "RPG",
        minRAM: 8,
        minStorage: 48,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Fallout 4",
        category: "RPG",
        minRAM: 8,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Dragon Age: Inquisition",
        category: "RPG",
        minRAM: 8,
        minStorage: 26,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Open World Games
    {
        name: "Spider-Man Remastered",
        category: "Open World",
        minRAM: 16,
        minStorage: 75,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Far Cry 6",
        category: "Open World",
        minRAM: 8,
        minStorage: 60,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Just Cause 3",
        category: "Open World",
        minRAM: 8,
        minStorage: 54,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Saints Row IV",
        category: "Open World",
        minRAM: 4,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // More Horror Games
    {
        name: "Resident Evil 4 Remake",
        category: "Horror",
        minRAM: 16,
        minStorage: 67,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Alien: Isolation",
        category: "Horror",
        minRAM: 4,
        minStorage: 35,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "The Evil Within 2",
        category: "Horror",
        minRAM: 8,
        minStorage: 40,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Amnesia: The Dark Descent",
        category: "Horror",
        minRAM: 2,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Little Nightmares II",
        category: "Horror",
        minRAM: 6,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // More Racing Games
    {
        name: "Assetto Corsa Competizione",
        category: "Racing",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Dirt Rally 2.0",
        category: "Racing",
        minRAM: 8,
        minStorage: 100,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Project CARS 2",
        category: "Racing",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "BeamNG.drive",
        category: "Racing",
        minRAM: 8,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Indie Games
    {
        name: "Dead Cells",
        category: "Indie",
        minRAM: 2,
        minStorage: 500,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Cuphead",
        category: "Indie",
        minRAM: 4,
        minStorage: 4,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Ori and the Will of the Wisps",
        category: "Indie",
        minRAM: 8,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 3
    },
    {
        name: "Shovel Knight",
        category: "Indie",
        minRAM: 1,
        minStorage: 300,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Slay the Spire",
        category: "Indie",
        minRAM: 2,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Binding of Isaac: Rebirth",
        category: "Indie",
        minRAM: 2,
        minStorage: 450,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Factorio",
        category: "Indie",
        minRAM: 4,
        minStorage: 3,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 1,
        recCPU: 2
    },

    // More Sports Games
    {
        name: "WWE 2K24",
        category: "Sports",
        minRAM: 8,
        minStorage: 80,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "eFootball 2024",
        category: "Sports",
        minRAM: 8,
        minStorage: 40,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Tony Hawk's Pro Skater 1+2",
        category: "Sports",
        minRAM: 8,
        minStorage: 24,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Simulation Games
    {
        name: "Euro Truck Simulator 2",
        category: "Simulation",
        minRAM: 4,
        minStorage: 3,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Farming Simulator 22",
        category: "Simulation",
        minRAM: 8,
        minStorage: 35,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Planet Coaster",
        category: "Simulation",
        minRAM: 8,
        minStorage: 8,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Kerbal Space Program",
        category: "Simulation",
        minRAM: 4,
        minStorage: 3,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More Adventure Games
    {
        name: "Life is Strange",
        category: "Adventure",
        minRAM: 2,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "The Walking Dead: Season 1",
        category: "Adventure",
        minRAM: 3,
        minStorage: 3,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "It Takes Two",
        category: "Adventure",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Control",
        category: "Adventure",
        minRAM: 8,
        minStorage: 42,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More Anime Games
    {
        name: "Persona 5 Royal",
        category: "Anime",
        minRAM: 8,
        minStorage: 41,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Nier: Automata",
        category: "Anime",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Tales of Arise",
        category: "Anime",
        minRAM: 8,
        minStorage: 45,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Scarlet Nexus",
        category: "Anime",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Classics Games
    {
        name: "Counter-Strike 1.6",
        category: "Classics",
        minRAM: 512,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Bioshock",
        category: "Classics",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Max Payne 3",
        category: "Classics",
        minRAM: 4,
        minStorage: 35,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Left 4 Dead 2",
        category: "Classics",
        minRAM: 2,
        minStorage: 13,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },

    // More PS2 Games
    {
        name: "Tekken 5 (PS2)",
        category: "PS2",
        minRAM: 2,
        minStorage: 2,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Need for Speed: Most Wanted (PS2)",
        category: "PS2",
        minRAM: 2,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Metal Gear Solid 3 (PS2)",
        category: "PS2",
        minRAM: 4,
        minStorage: 4,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More Remastered Games
    {
        name: "Resident Evil 2 Remake",
        category: "Remastered",
        minRAM: 8,
        minStorage: 26,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Final Fantasy VII Remake",
        category: "Remastered",
        minRAM: 8,
        minStorage: 100,
        minGPU: 4,
        minCPU: 3,
        recRAM: 16,
        recGPU: 6,
        recCPU: 4
    },
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        category: "Remastered",
        minRAM: 8,
        minStorage: 8,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 2
    },

    // More Small Games
    {
        name: "Fall Guys",
        category: "Small Games",
        minRAM: 8,
        minStorage: 2,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Human: Fall Flat",
        category: "Small Games",
        minRAM: 4,
        minStorage: 2,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Vampire Survivors",
        category: "Small Games",
        minRAM: 1,
        minStorage: 150,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Papers, Please",
        category: "Small Games",
        minRAM: 2,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },

    // More Virtual Reality Games
    {
        name: "Superhot VR",
        category: "Virtual Reality",
        minRAM: 8,
        minStorage: 4,
        minGPU: 4,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "The Walking Dead: Saints & Sinners",
        category: "Virtual Reality",
        minRAM: 8,
        minStorage: 15,
        minGPU: 4,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More Popular Games
    {
        name: "Roblox",
        category: "Popular",
        minRAM: 1,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "Dota 2",
        category: "Popular",
        minRAM: 4,
        minStorage: 15,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Warframe",
        category: "Popular",
        minRAM: 4,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Destiny 2",
        category: "Popular",
        minRAM: 8,
        minStorage: 105,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More Adult Games
    {
        name: "Sleeping Dogs",
        category: "Adult",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Mafia II",
        category: "Adult",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },

    // More Racing Games
    {
        name: "Need for Speed: Most Wanted (2012)",
        category: "Racing",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Need for Speed: Underground 2",
        category: "Racing",
        minRAM: 512,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Need for Speed: Carbon",
        category: "Racing",
        minRAM: 1,
        minStorage: 4,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Grid Legends",
        category: "Racing",
        minRAM: 8,
        minStorage: 100,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "WRC 10",
        category: "Racing",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "TrackMania Nations Forever",
        category: "Racing",
        minRAM: 512,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 2
    },

    // More Adult Games
    {
        name: "Grand Theft Auto: San Andreas",
        category: "Adult",
        minRAM: 512,
        minStorage: 4,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Grand Theft Auto: Vice City",
        category: "Adult",
        minRAM: 256,
        minStorage: 2,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "The Witcher",
        category: "Adult",
        minRAM: 1,
        minStorage: 15,
        minGPU: 1,
        minCPU: 2,
        recRAM: 2,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Huniepop",
        category: "Adult",
        minRAM: 2,
        minStorage: 500,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Huniepop 2: Double Date",
        category: "Adult",
        minRAM: 4,
        minStorage: 2,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More Action Games
    {
        name: "Assassin's Creed Origins",
        category: "Action",
        minRAM: 8,
        minStorage: 45,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Just Cause 4",
        category: "Action",
        minRAM: 8,
        minStorage: 59,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Sleeping Dogs",
        category: "Action",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Saints Row: The Third",
        category: "Action",
        minRAM: 2,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 4,
        recGPU: 3,
        recCPU: 2
    },

    // More FPS Games
    {
        name: "Battlefield 1",
        category: "FPS",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Payday 2",
        category: "FPS",
        minRAM: 4,
        minStorage: 31,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Left 4 Dead 2",
        category: "FPS",
        minRAM: 2,
        minStorage: 13,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Team Fortress 2",
        category: "FPS",
        minRAM: 1,
        minStorage: 15,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 2,
        recCPU: 2
    },

    // More Indie Games
    {
        name: "Undertale",
        category: "Indie",
        minRAM: 2,
        minStorage: 200,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "A Hat in Time",
        category: "Indie",
        minRAM: 4,
        minStorage: 9,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Limbo",
        category: "Indie",
        minRAM: 512,
        minStorage: 150,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Inside",
        category: "Indie",
        minRAM: 4,
        minStorage: 3,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More RPG Games
    {
        name: "Divinity: Original Sin 2",
        category: "RPG",
        minRAM: 4,
        minStorage: 60,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Pillars of Eternity",
        category: "RPG",
        minRAM: 4,
        minStorage: 14,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Disco Elysium",
        category: "RPG",
        minRAM: 8,
        minStorage: 20,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More Simulation Games
    {
        name: "Stardew Valley",
        category: "Simulation",
        minRAM: 2,
        minStorage: 500,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "House Flipper",
        category: "Simulation",
        minRAM: 4,
        minStorage: 6,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "PC Building Simulator",
        category: "Simulation",
        minRAM: 8,
        minStorage: 8,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // More Popular Games
    {
        name: "Among Us",
        category: "Popular",
        minRAM: 1,
        minStorage: 250,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Fall Guys",
        category: "Popular",
        minRAM: 8,
        minStorage: 2,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Overwatch",
        category: "Popular",
        minRAM: 6,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },

    // More Classics Games
    {
        name: "Doom (1993)",
        category: "Classics",
        minRAM: 8,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 16,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Quake III Arena",
        category: "Classics",
        minRAM: 128,
        minStorage: 500,
        minGPU: 1,
        minCPU: 1,
        recRAM: 256,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "StarCraft: Brood War",
        category: "Classics",
        minRAM: 128,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 256,
        recGPU: 1,
        recCPU: 1
    },

    // More Small Games
    {
        name: "Geometry Dash",
        category: "Small Games",
        minRAM: 512,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Bloons TD 6",
        category: "Small Games",
        minRAM: 4,
        minStorage: 2,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 1,
        recCPU: 2
    },

    // More Adult Games
    {
        name: "Yakuza 0",
        category: "Adult",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Yakuza Kiwami",
        category: "Adult",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Yakuza: Like a Dragon",
        category: "Adult",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Saints Row (2022)",
        category: "Adult",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Mafia III",
        category: "Adult",
        minRAM: 6,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Mafia: Definitive Edition",
        category: "Adult",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More Action Games
    {
        name: "Tomb Raider (2013)",
        category: "Action",
        minRAM: 4,
        minStorage: 12,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Rise of the Tomb Raider",
        category: "Action",
        minRAM: 6,
        minStorage: 25,
        minGPU: 3,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Shadow of the Tomb Raider",
        category: "Action",
        minRAM: 8,
        minStorage: 40,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Prototype",
        category: "Action",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Prototype 2",
        category: "Action",
        minRAM: 2,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 4,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Ninja Gaiden 3",
        category: "Action",
        minRAM: 2,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 4,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Darksiders",
        category: "Action",
        minRAM: 2,
        minStorage: 12,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Darksiders II",
        category: "Action",
        minRAM: 4,
        minStorage: 14,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Darksiders III",
        category: "Action",
        minRAM: 8,
        minStorage: 25,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Anime Games
    {
        name: "Sword Art Online: Fatal Bullet",
        category: "Anime",
        minRAM: 8,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Sword Art Online: Hollow Realization",
        category: "Anime",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "One Piece: Pirate Warriors 4",
        category: "Anime",
        minRAM: 6,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Demon Slayer: Kimetsu no Yaiba",
        category: "Anime",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Attack on Titan 2",
        category: "Anime",
        minRAM: 6,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "My Hero One's Justice 2",
        category: "Anime",
        minRAM: 4,
        minStorage: 10,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Bleach: Brave Souls",
        category: "Anime",
        minRAM: 4,
        minStorage: 5,
        minGPU: 1,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },

    // More Open World Games
    {
        name: "The Witcher 3: Wild Hunt",
        category: "Open World",
        minRAM: 8,
        minStorage: 50,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Skyrim Special Edition",
        category: "Open World",
        minRAM: 8,
        minStorage: 12,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Fallout 4",
        category: "Open World",
        minRAM: 8,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Dying Light",
        category: "Open World",
        minRAM: 4,
        minStorage: 40,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Dying Light 2",
        category: "Open World",
        minRAM: 8,
        minStorage: 60,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },
    {
        name: "Mad Max",
        category: "Open World",
        minRAM: 6,
        minStorage: 32,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Sleeping Dogs: Definitive Edition",
        category: "Open World",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Mafia II: Definitive Edition",
        category: "Open World",
        minRAM: 6,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },

    // More Racing Games
    {
        name: "Burnout Paradise Remastered",
        category: "Racing",
        minRAM: 4,
        minStorage: 8,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Need for Speed: Payback",
        category: "Racing",
        minRAM: 6,
        minStorage: 30,
        minGPU: 3,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Need for Speed: Rivals",
        category: "Racing",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Need for Speed: Hot Pursuit Remastered",
        category: "Racing",
        minRAM: 8,
        minStorage: 45,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "The Crew 2",
        category: "Racing",
        minRAM: 8,
        minStorage: 30,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Wreckfest",
        category: "Racing",
        minRAM: 8,
        minStorage: 4,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Dirt 5",
        category: "Racing",
        minRAM: 8,
        minStorage: 50,
        minGPU: 3,
        minCPU: 2,
        recRAM: 16,
        recGPU: 5,
        recCPU: 3
    },

    // More Small Games
    {
        name: "Brotato",
        category: "Small Games",
        minRAM: 512,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Vampire Survivors",
        category: "Small Games",
        minRAM: 1,
        minStorage: 150,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Plants vs. Zombies",
        category: "Small Games",
        minRAM: 1,
        minStorage: 65,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Peggle Deluxe",
        category: "Small Games",
        minRAM: 256,
        minStorage: 50,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Bejeweled 3",
        category: "Small Games",
        minRAM: 1,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Angry Birds",
        category: "Small Games",
        minRAM: 512,
        minStorage: 100,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Super Meat Boy",
        category: "Small Games",
        minRAM: 1,
        minStorage: 300,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "The Binding of Isaac: Rebirth",
        category: "Small Games",
        minRAM: 2,
        minStorage: 450,
        minGPU: 1,
        minCPU: 1,
        recRAM: 4,
        recGPU: 1,
        recCPU: 1
    },

    // More Adult Games (Optimized for Intel Iris Xe - GPU Tier 2)
    {
        name: "Grand Theft Auto III",
        category: "Adult",
        minRAM: 256,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "The Witcher 2: Assassins of Kings",
        category: "Adult",
        minRAM: 2,
        minStorage: 16,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Yakuza Kiwami 2",
        category: "Adult",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Yakuza 3 Remastered",
        category: "Adult",
        minRAM: 4,
        minStorage: 24,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Yakuza 4 Remastered",
        category: "Adult",
        minRAM: 4,
        minStorage: 24,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Yakuza 5 Remastered",
        category: "Adult",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Yakuza 6: The Song of Life",
        category: "Adult",
        minRAM: 4,
        minStorage: 30,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Bully: Scholarship Edition",
        category: "Adult",
        minRAM: 1,
        minStorage: 4,
        minGPU: 1,
        minCPU: 1,
        recRAM: 2,
        recGPU: 1,
        recCPU: 2
    },
    {
        name: "L.A. Noire",
        category: "Adult",
        minRAM: 2,
        minStorage: 16,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Max Payne",
        category: "Adult",
        minRAM: 256,
        minStorage: 550,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Max Payne 2: The Fall of Max Payne",
        category: "Adult",
        minRAM: 512,
        minStorage: 1,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Max Payne 3",
        category: "Adult",
        minRAM: 4,
        minStorage: 35,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Deus Ex: Human Revolution",
        category: "Adult",
        minRAM: 2,
        minStorage: 8,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Deus Ex: Mankind Divided",
        category: "Adult",
        minRAM: 8,
        minStorage: 45,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },
    {
        name: "Spec Ops: The Line",
        category: "Adult",
        minRAM: 2,
        minStorage: 10,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Kane & Lynch: Dead Men",
        category: "Adult",
        minRAM: 1,
        minStorage: 7,
        minGPU: 1,
        minCPU: 2,
        recRAM: 2,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Kane & Lynch 2: Dog Days",
        category: "Adult",
        minRAM: 2,
        minStorage: 10,
        minGPU: 1,
        minCPU: 2,
        recRAM: 4,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Manhunt",
        category: "Adult",
        minRAM: 256,
        minStorage: 2,
        minGPU: 1,
        minCPU: 1,
        recRAM: 512,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Manhunt 2",
        category: "Adult",
        minRAM: 512,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "Scarface: The World Is Yours",
        category: "Adult",
        minRAM: 512,
        minStorage: 4,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "The Godfather: The Game",
        category: "Adult",
        minRAM: 512,
        minStorage: 3,
        minGPU: 1,
        minCPU: 1,
        recRAM: 1,
        recGPU: 1,
        recCPU: 1
    },
    {
        name: "The Godfather II",
        category: "Adult",
        minRAM: 1,
        minStorage: 8,
        minGPU: 1,
        minCPU: 2,
        recRAM: 2,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Thief (2014)",
        category: "Adult",
        minRAM: 4,
        minStorage: 20,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 3,
        recCPU: 2
    },
    {
        name: "Dishonored",
        category: "Adult",
        minRAM: 4,
        minStorage: 9,
        minGPU: 2,
        minCPU: 2,
        recRAM: 8,
        recGPU: 2,
        recCPU: 2
    },
    {
        name: "Dishonored 2",
        category: "Adult",
        minRAM: 8,
        minStorage: 60,
        minGPU: 2,
        minCPU: 2,
        recRAM: 16,
        recGPU: 4,
        recCPU: 3
    },

    // More Popular Games
    { name: "Minecraft", category: "Popular", minRAM: 4, minStorage: 1, minGPU: 1, minCPU: 2, recRAM: 8, recGPU: 2, recCPU: 2 },
    { name: "Fortnite", category: "Popular", minRAM: 8, minStorage: 30, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 3, recCPU: 3 },
    { name: "Valorant", category: "FPS", minRAM: 4, minStorage: 23, minGPU: 1, minCPU: 2, recRAM: 4, recGPU: 2, recCPU: 2 },
    { name: "Apex Legends", category: "FPS", minRAM: 6, minStorage: 56, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 3 },
    { name: "League of Legends", category: "Popular", minRAM: 2, minStorage: 16, minGPU: 1, minCPU: 2, recRAM: 4, recGPU: 2, recCPU: 2 },
    { name: "Dota 2", category: "Popular", minRAM: 4, minStorage: 60, minGPU: 1, minCPU: 2, recRAM: 8, recGPU: 2, recCPU: 2 },
    { name: "Rocket League", category: "Sports", minRAM: 4, minStorage: 20, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "Overwatch 2", category: "FPS", minRAM: 6, minStorage: 50, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 3 },
    { name: "Roblox", category: "Popular", minRAM: 1, minStorage: 20, minGPU: 1, minCPU: 1, recRAM: 4, recGPU: 1, recCPU: 2 },
    { name: "PUBG: Battlegrounds", category: "Popular", minRAM: 8, minStorage: 40, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 3, recCPU: 3 },
    { name: "Elden Ring", category: "RPG", minRAM: 12, minStorage: 60, minGPU: 4, minCPU: 3, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Dark Souls III", category: "RPG", minRAM: 8, minStorage: 25, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 4, recCPU: 3 },
    { name: "Sekiro: Shadows Die Twice", category: "Action", minRAM: 8, minStorage: 25, minGPU: 3, minCPU: 2, recRAM: 8, recGPU: 4, recCPU: 3 },
    { name: "God of War", category: "Action", minRAM: 8, minStorage: 70, minGPU: 3, minCPU: 2, recRAM: 8, recGPU: 5, recCPU: 3 },
    { name: "Spider-Man Remastered", category: "Action", minRAM: 8, minStorage: 75, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Horizon Zero Dawn", category: "Open World", minRAM: 8, minStorage: 100, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Doom Eternal", category: "FPS", minRAM: 8, minStorage: 80, minGPU: 3, minCPU: 3, recRAM: 8, recGPU: 5, recCPU: 3 },
    { name: "Halo: The Master Chief Collection", category: "FPS", minRAM: 8, minStorage: 120, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 4, recCPU: 3 },
    { name: "Forza Horizon 5", category: "Racing", minRAM: 8, minStorage: 110, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Resident Evil Village", category: "Horror", minRAM: 8, minStorage: 50, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Stardew Valley", category: "Indie", minRAM: 2, minStorage: 500, minGPU: 1, minCPU: 1, recRAM: 4, recGPU: 1, recCPU: 1 },
    { name: "Terraria", category: "Indie", minRAM: 2, minStorage: 200, minGPU: 1, minCPU: 1, recRAM: 4, recGPU: 1, recCPU: 2 },
    { name: "Hollow Knight", category: "Indie", minRAM: 4, minStorage: 9, minGPU: 1, minCPU: 2, recRAM: 8, recGPU: 1, recCPU: 2 },
    { name: "Hades", category: "Indie", minRAM: 8, minStorage: 15, minGPU: 1, minCPU: 2, recRAM: 8, recGPU: 2, recCPU: 2 },
    { name: "Among Us", category: "Small Games", minRAM: 1, minStorage: 250, minGPU: 1, minCPU: 1, recRAM: 2, recGPU: 1, recCPU: 1 },
    { name: "Fall Guys", category: "Small Games", minRAM: 8, minStorage: 2, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "Genshin Impact", category: "Anime", minRAM: 8, minStorage: 30, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 3, recCPU: 3 },
    { name: "Baldur's Gate 3", category: "RPG", minRAM: 8, minStorage: 150, minGPU: 3, minCPU: 3, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Starfield", category: "RPG", minRAM: 16, minStorage: 125, minGPU: 4, minCPU: 3, recRAM: 16, recGPU: 6, recCPU: 3 },
    { name: "Hogwarts Legacy", category: "RPG", minRAM: 16, minStorage: 85, minGPU: 4, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Palworld", category: "Popular", minRAM: 16, minStorage: 40, minGPU: 3, minCPU: 3, recRAM: 32, recGPU: 4, recCPU: 3 },
    { name: "Lethal Company", category: "Horror", minRAM: 4, minStorage: 1, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "The Last of Us Part I", category: "Action", minRAM: 16, minStorage: 100, minGPU: 4, minCPU: 2, recRAM: 16, recGPU: 6, recCPU: 3 },
    { name: "Cyberpunk 2077: Phantom Liberty", category: "RPG", minRAM: 12, minStorage: 70, minGPU: 4, minCPU: 3, recRAM: 16, recGPU: 6, recCPU: 4 },
    { name: "Lies of P", category: "Action", minRAM: 8, minStorage: 50, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 5, recCPU: 3 },
    { name: "Remnant II", category: "Action", minRAM: 16, minStorage: 80, minGPU: 4, minCPU: 3, recRAM: 16, recGPU: 5, recCPU: 3 },

    // Additional Popular Games
    { name: "Warframe", category: "Popular", minRAM: 4, minStorage: 50, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "Destiny 2", category: "Popular", minRAM: 6, minStorage: 105, minGPU: 3, minCPU: 2, recRAM: 8, recGPU: 4, recCPU: 3 },
    { name: "Sea of Thieves", category: "Adventure", minRAM: 4, minStorage: 50, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 3 },
    { name: "Deep Rock Galactic", category: "FPS", minRAM: 6, minStorage: 5, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "Phasmophobia", category: "Horror", minRAM: 8, minStorage: 13, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 2 },
    { name: "Dead by Daylight", category: "Horror", minRAM: 8, minStorage: 50, minGPU: 2, minCPU: 2, recRAM: 8, recGPU: 3, recCPU: 3 },
    { name: "It Takes Two", category: "Adventure", minRAM: 8, minStorage: 50, minGPU: 3, minCPU: 2, recRAM: 16, recGPU: 4, recCPU: 3 },
    { name: "A Way Out", category: "Adventure", minRAM: 8, minStorage: 25, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 3, recCPU: 3 },
    { name: "Satisfactory", category: "Simulation", minRAM: 8, minStorage: 15, minGPU: 3, minCPU: 2, recRAM: 8, recGPU: 4, recCPU: 3 },
    { name: "Rust", category: "Popular", minRAM: 10, minStorage: 25, minGPU: 2, minCPU: 2, recRAM: 16, recGPU: 3, recCPU: 3 }
];

// ========================================
// DOM Elements
// ========================================
const ramSelect = document.getElementById('ram-select');
const storageSelect = document.getElementById('storage-select');
const gpuSelect = document.getElementById('gpu-select');
const cpuSelect = document.getElementById('cpu-select');
const checkButton = document.getElementById('check-compatibility');
const categorySection = document.getElementById('category-section');
const resultsSection = document.getElementById('results-section');
const resultsTitle = document.getElementById('results-title');
const resultsStats = document.getElementById('results-stats');
const gamesGrid = document.getElementById('games-grid');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const categoryButtons = document.querySelectorAll('.category-btn');
const sortSelect = document.getElementById('sort-select');

// ========================================
// State Management
// ========================================
let userSpecs = {
    ram: 0,
    storage: 0,
    gpu: 0,
    cpu: 0
};

let currentCategory = 'all';
let currentSort = 'default';
let compatibleGames = [];

// ========================================
// Event Listeners
// ========================================
ramSelect.addEventListener('change', updateUserSpecs);
storageSelect.addEventListener('change', updateUserSpecs);
gpuSelect.addEventListener('change', updateUserSpecs);
cpuSelect.addEventListener('change', updateUserSpecs);
checkButton.addEventListener('click', checkCompatibility);

// Category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.dataset.category;
        displayGames();
    });
});

// ========================================
// Functions
// ========================================
function updateUserSpecs() {
    userSpecs.ram = parseInt(ramSelect.value) || null;
    userSpecs.storage = parseInt(storageSelect.value) || null;
    userSpecs.gpu = parseInt(gpuSelect.value) || null;
    userSpecs.cpu = parseInt(cpuSelect.value) || null;

    // Enable button if all specs are selected
    const allSelected = userSpecs.ram && userSpecs.storage && userSpecs.gpu && userSpecs.cpu;
    checkButton.disabled = !allSelected;
}

function checkCompatibility() {
    // Calculate compatibility for all games
    compatibleGames = gamesDatabase.map(game => {
        const compatibility = calculateCompatibility(game);
        return {
            ...game,
            ...compatibility
        };
    }).filter(game => game.compatible);

    // Sort by compatibility level (optimal > recommended > minimum)
    compatibleGames.sort((a, b) => {
        const order = { optimal: 3, recommended: 2, minimum: 1 };
        return order[b.level] - order[a.level];
    });

    // Show results
    categorySection.style.display = 'block';
    resultsSection.style.display = 'block';
    currentCategory = 'all';
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.category-btn[data-category="all"]').classList.add('active');

    displayGames();

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calculateCompatibility(game) {
    const meetsMinimum =
        userSpecs.ram >= game.minRAM &&
        userSpecs.storage >= game.minStorage &&
        userSpecs.gpu >= game.minGPU &&
        userSpecs.cpu >= game.minCPU;

    if (!meetsMinimum) {
        return { compatible: false };
    }

    const meetsRecommended =
        userSpecs.ram >= game.recRAM &&
        userSpecs.gpu >= game.recGPU &&
        userSpecs.cpu >= game.recCPU;

    // Calculate performance level
    let level, performance;

    if (meetsRecommended && userSpecs.gpu >= game.recGPU + 1) {
        level = 'optimal';
        performance = 'Ultra Settings @ 60+ FPS';
    } else if (meetsRecommended) {
        level = 'recommended';
        performance = 'High Settings @ 60 FPS';
    } else {
        level = 'minimum';
        performance = 'Medium Settings @ 30-60 FPS';
    }

    return {
        compatible: true,
        level,
        performance
    };
}

function displayGames() {
    // Filter games by category
    let gamesToDisplay = compatibleGames;
    if (currentCategory !== 'all') {
        gamesToDisplay = compatibleGames.filter(game => game.category === currentCategory);
    }

    // Sort games based on current sort option
    if (currentSort === 'a-z') {
        gamesToDisplay.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'z-a') {
        gamesToDisplay.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === 'newest') {
        // Reverse the default order for "newest first"
        gamesToDisplay = [...gamesToDisplay].reverse();
    }
    // 'default' keeps the original order

    // Update stats
    const totalGames = compatibleGames.length;
    const categoryGames = gamesToDisplay.length;

    if (currentCategory === 'all') {
        resultsTitle.textContent = `Compatible Games (${totalGames})`;
        resultsStats.textContent = `${totalGames} games match your specifications`;
    } else {
        resultsTitle.textContent = `${currentCategory} Games (${categoryGames})`;
        resultsStats.textContent = `${categoryGames} of ${totalGames} compatible games`;
    }

    // Display games or no results
    if (gamesToDisplay.length === 0) {
        gamesGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        gamesGrid.style.display = 'grid';
        noResults.style.display = 'none';
        renderGames(gamesToDisplay);
    }
}

function renderGames(games) {
    gamesGrid.innerHTML = '';

    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.style.animationDelay = `${index * 0.05}s`;

        gameCard.innerHTML = `
            <div class="game-header">
                <div>
                    <h3 class="game-title">${game.name}</h3>
                    <p class="game-category">${game.category}</p>
                </div>
                <span class="compatibility-badge ${game.level}">${game.level}</span>
            </div>
            
            <div class="game-requirements">
                <div class="requirement-row">
                    <span class="requirement-label">RAM</span>
                    <span class="requirement-value">${game.minRAM} GB min / ${game.recRAM} GB rec</span>
                </div>
                <div class="requirement-row">
                    <span class="requirement-label">Storage</span>
                    <span class="requirement-value">${formatStorage(game.minStorage)}</span>
                </div>
                <div class="requirement-row">
                    <span class="requirement-label">GPU Tier</span>
                    <span class="requirement-value">${getGPUName(game.minGPU)} min</span>
                </div>
                <div class="requirement-row">
                    <span class="requirement-label">CPU Tier</span>
                    <span class="requirement-value">${getCPUName(game.minCPU)} min</span>
                </div>
            </div>
            
            <div class="performance-indicator">
                🎮 ${game.performance}
            </div>
        `;

        // Add click event to open Google search for the game
        gameCard.style.cursor = 'pointer';
        gameCard.addEventListener('click', () => {
            const searchQuery = encodeURIComponent(game.name + ' game');
            window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
        });

        gamesGrid.appendChild(gameCard);
    });
}

function formatStorage(mb) {
    if (mb >= 1024) {
        return `${(mb / 1024).toFixed(0)} GB`;
    }
    return `${mb} MB`;
}

function getGPUName(tier) {
    const gpuNames = {
        1: 'Intel UHD',
        1.5: 'Intel Iris Xe',
        2: 'GTX 1050',
        2.5: 'GTX 1060',
        3: 'GTX 1650',
        3.5: 'GTX 1660 Ti',
        4: 'RTX 2060/3050',
        5: 'RTX 3060',
        5.5: 'RTX 3070',
        6: 'RTX 4060',
        7: 'RTX 4070+'
    };
    return gpuNames[tier] || 'Unknown';
}

function getCPUName(tier) {
    const cpuNames = {
        1: 'i3/R3',
        2: 'i5/R5',
        3: 'i7/R7',
        4: 'i9/R9'
    };
    return cpuNames[tier] || 'Unknown';
}

// ========================================
// Event Listeners
// ========================================

// Sort dropdown event listener
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    displayGames();
});

// ========================================
// Initialize
// ========================================
console.log('🎮 GameCheckPro initialized with', gamesDatabase.length, 'games');
