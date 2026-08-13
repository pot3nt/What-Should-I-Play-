// ========================================
// CURSOR GLOW
// ========================================

const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", (event) => {
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
    });
}


// ========================================
// GAME DATABASE
// ========================================

const games = [

    // =========================
    // FPS
    // =========================

    {
        name: "KNIFE DUELS",
        genre: "FPS",
        description: "A fast-paced knife combat game featuring 1v1 duels, Free For All, team battles, kill streaks, XP, coins, and collectible knife skins.",
        link: "https://www.roblox.com/games/79877593860968/KNIFE-DUELS"
    },

    {
        name: "Airsoft Battles",
        genre: "FPS",
        description: "A chaotic multiplayer airsoft shooter with fast gunfights, PvP combat, and support for PC, mobile, Xbox, and PlayStation.",
        link: "https://www.roblox.com/games/16261605398/Airsoft-Battles"
    },

    {
        name: "Energy Assault FPS",
        genre: "FPS",
        description: "A futuristic FPS where energy weapons replace traditional guns. Play modes like Team Deathmatch, Capture the Flag, and Gun Game while unlocking weapons and skins.",
        link: "https://www.roblox.com/games/6172932937/Energy-Assault-FPS"
    },

    {
        name: "Weaponry",
        genre: "FPS",
        description: "A first and third-person PvP shooter with a large selection of weapons and competitive multiplayer combat.",
        link: "https://www.roblox.com/games/3297964905/Weaponry"
    },

    {
        name: "Ground War",
        genre: "FPS",
        description: "A massive 20v20 FPS featuring tanks, helicopters, guns, explosives, and large-scale military battles.",
        link: "https://www.roblox.com/games/118367369949006/Ground-War"
    },

    {
        name: "RIOTFALL",
        genre: "FPS",
        description: "A fast-paced action FPS currently in beta, focused on intense competitive gunfights.",
        link: "https://www.roblox.com/games/7796842481/RIOTFALL"
    },

    {
        name: "REDLINER",
        genre: "FPS",
        description: "A fast-paced FPS combining gunplay, sword combat, parrying, grappling, dashing, sliding, and wall-running.",
        link: "https://www.roblox.com/games/94987506187454/REDLINER"
    },

    {
        name: "Jailbird",
        genre: "FPS",
        description: "A tactical gang-warfare FPS where players customize their equipment and fight in intense combat.",
        link: "https://www.roblox.com/games/14772802900/Jailbird"
    },

    {
        name: "Operation One",
        genre: "FPS",
        description: "A dark 4v4 tactical FPS where teams secure buildings, use intel tools, and destroy parts of the environment.",
        link: "https://www.roblox.com/games/72920620366355/Operation-One"
    },

    {
        name: "Gun Grounds FFA",
        genre: "FPS",
        description: "A free-for-all gun game where players fight across an arena, earn cash, and customize their loadout.",
        link: "https://www.roblox.com/games/12137249458/FPS-Gun-Grounds-FFA"
    },

    {
        name: "BloxStrike",
        genre: "FPS",
        description: "A competitive 5v5 tactical shooter featuring round-based combat, objectives, weapon purchases, and a weapon skin economy.",
        link: "https://www.roblox.com/games/114234929420007/BloxStrike"
    },

    {
        name: "Weird Gun Game",
        genre: "FPS",
        description: "Build ridiculous custom weapons by combining gun parts, then use them to battle other players in chaotic gunfights.",
        link: "https://www.roblox.com/games/94590879393563/Weird-Gun-Game"
    },

    {
        name: "Hitman: Reborn",
        genre: "FPS",
        description: "A Roblox shooter inspired by the Hitman style of gameplay.",
        link: "https://www.roblox.com/games/6819084235/Hitman-Reborn"
    },

    {
        name: "RIVALS",
        genre: "FPS",
        description: "A fast-paced competitive FPS featuring intense 1v1 and 2v2 battles, powerful weapons, and skill-based combat.",
        link: "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
        name: "HyperShot",
        genre: "FPS",
        description: "A fast-paced competitive shooter focused on quick aim, movement, and intense gunfights.",
        link: "https://www.roblox.com/games/13709346726/HyperShot"
    },

    {
        name: "Deagle Arena",
        genre: "FPS",
        description: "A fast-paced arena shooter centered around high-skill Desert Eagle gunfights and quick reactions.",
        link: "https://www.roblox.com/games/11640856251/Deagle-Arena"
    },

    {
        name: "One Tap",
        genre: "FPS",
        description: "A competitive FPS where every shot matters. Test your aim and reactions in fast one-tap gunfights.",
        link: "https://www.roblox.com/games/11548225269/One-Tap"
    },


    // =========================
    // FIGHTING
    // =========================

    {
        name: "The Strongest Battlegrounds",
        genre: "Fighting",
        description: "A chaotic fighting game where players battle using powerful abilities, combos, and devastating attacks.",
        link: "https://www.roblox.com/games/10449761463/The-Strongest-Battlegrounds"
    },

    {
        name: "Boxing Beta",
        genre: "Fighting",
        description: "A competitive boxing game focused on timing, dodging, blocking, and landing powerful punches.",
        link: "https://www.roblox.com/games/1329445300/Boxing-Beta"
    },

    {
        name: "Ability Arena",
        genre: "Fighting",
        description: "Battle other players using unique abilities and build powerful combinations.",
        link: "https://www.roblox.com/games/11117166394/Ability-Arena"
    },

    {
        name: "Fight Test v2",
        genre: "Fighting",
        description: "A combat testing game where players can practice fighting mechanics and battle other players.",
        link: "https://www.roblox.com/games/1168263273/Fight-Test"
    },

    {
        name: "Jujutsu Shenanigans",
        genre: "Fighting",
        description: "A chaotic anime fighting game inspired by Jujutsu Kaisen featuring abilities, combos, and destructive battles.",
        link: "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans"
    },

    {
        name: "Combat Warriors",
        genre: "Fighting",
        description: "A brutal melee combat game featuring weapons, dodging, executions, and intense PvP battles.",
        link: "https://www.roblox.com/games/4282985734/Combat-Warriors"
    },

    {
        name: "Fight in a School",
        genre: "Fighting",
        description: "Fight other players around a school using different weapons and combat abilities.",
        link: "https://www.roblox.com/games/1168263273/Fight-in-a-School"
    },

    {
        name: "Untitled Boxing Game",
        genre: "Fighting",
        description: "A skill-based boxing game focused on movement, timing, dodging, blocking, and powerful counterattacks.",
        link: "https://www.roblox.com/games/9660975744/Untitled-Boxing-Game"
    },

    {
        name: "Heroes Battlegrounds",
        genre: "Fighting",
        description: "Battle other players using powerful superhero-inspired abilities and devastating combos.",
        link: "https://www.roblox.com/games/14923571990/Heroes-Battlegrounds"
    },

    {
        name: "Fight on a Baseplate",
        genre: "Fighting",
        description: "A simple but chaotic fighting game where players battle on a giant baseplate.",
        link: "https://www.roblox.com/games/144638591/Fight-on-a-Baseplate"
    },

    {
        name: "Project Smash",
        genre: "Fighting",
        description: "A fast-paced platform fighting game featuring unique characters, abilities, combos, and knockback-based combat.",
        link: "https://www.roblox.com/games/13996150028/Project-Smash"
    },


    // =========================
    // HORROR
    // =========================

    {
        name: "The Curse",
        genre: "Horror",
        description: "A terrifying horror experience filled with dark environments, supernatural threats, and disturbing encounters.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Home Alone",
        genre: "Horror",
        description: "Survive a terrifying night alone while strange events begin happening around you.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Sleep Paralysis",
        genre: "Horror",
        description: "Experience a disturbing horror scenario inspired by the terrifying phenomenon of sleep paralysis.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Pinefall",
        genre: "Horror",
        description: "Explore a creepy environment while uncovering disturbing secrets and trying to survive.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Scary Grocery: The Night Shift",
        genre: "Horror",
        description: "Work a terrifying night shift at a grocery store where something is seriously wrong.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Burrowed",
        genre: "Horror",
        description: "Explore a dark and unsettling environment while trying to survive terrifying encounters.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Fears",
        genre: "Horror",
        description: "Face terrifying creatures and disturbing situations in a collection of horror experiences.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Verity",
        genre: "Horror",
        description: "Uncover mysterious events and survive a disturbing horror experience.",
        link: "https://www.roblox.com/"
    },

    {
        name: "DOORS",
        genre: "Horror",
        description: "Explore a mysterious hotel, solve problems, avoid terrifying entities, and try to reach the end.",
        link: "https://www.roblox.com/games/6516141723/DOORS"
    },

    {
        name: "Animal Hospital",
        genre: "Horror",
        description: "What seems like an ordinary animal hospital hides something much darker.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Chained",
        genre: "Horror",
        description: "Survive terrifying encounters while exploring a dark and mysterious environment.",
        link: "https://www.roblox.com/"
    },

    {
        name: "In Backrooms",
        genre: "Horror",
        description: "Explore the endless Backrooms while trying to survive the dangers hiding within.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Did You Hear It?",
        genre: "Horror",
        description: "Listen carefully and investigate strange sounds in a disturbing horror experience.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Trespasser",
        genre: "Horror",
        description: "Something has entered your world. Investigate the threat and try to survive.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Night at the Infirmary",
        genre: "Horror",
        description: "Survive a terrifying night inside a mysterious infirmary.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Cheese Escape",
        genre: "Horror",
        description: "Escape a terrifying maze while being hunted by a giant mouse.",
        link: "https://www.roblox.com/games/5777099015/Cheese-Escape"
    },

    {
        name: "Endless Reality",
        genre: "Horror",
        description: "Explore an unsettling reality filled with strange environments and terrifying mysteries.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Rainbow Friends",
        genre: "Horror",
        description: "Survive colorful but terrifying creatures while completing objectives and escaping their playground.",
        link: "https://www.roblox.com/games/7991339063/Rainbow-Friends"
    },

    {
        name: "Insomnia",
        genre: "Horror",
        description: "A psychological horror experience filled with unsettling environments and disturbing encounters.",
        link: "https://www.roblox.com/"
    },


    // =========================
    // ADVENTURE
    // =========================

    {
        name: "Arcane Odyssey",
        genre: "Adventure",
        description: "Explore a massive magical world, complete quests, master magic, and battle enemies.",
        link: "https://www.roblox.com/games/3272915504/Arcane-Odyssey"
    },

    {
        name: "World // Zero",
        genre: "Adventure",
        description: "Explore fantasy worlds, fight monsters, collect loot, and progress through an action RPG adventure.",
        link: "https://www.roblox.com/games/2727067538/World-Zero"
    },

    {
        name: "Vesteria",
        genre: "Adventure",
        description: "Explore a colorful MMORPG world, defeat monsters, complete quests, and level up your character.",
        link: "https://www.roblox.com/games/2376885433/Vesteria"
    },

    {
        name: "Arcane Reborn",
        genre: "Adventure",
        description: "Explore a magical world and battle enemies using powerful abilities.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Pilgrammed",
        genre: "Adventure",
        description: "Explore a strange open world filled with enemies, bosses, quests, and secrets.",
        link: "https://www.roblox.com/games/3623096087/Pilgrammed"
    },

    {
        name: "Fantastic Frontier",
        genre: "Adventure",
        description: "Explore a massive open world, discover secrets, fight creatures, and collect valuable items.",
        link: "https://www.roblox.com/games/510411669/Pinewood-Computer-Core"
    },

    {
        name: "Adventure Up!",
        genre: "Adventure",
        description: "Explore dungeons, fight enemies, collect loot, and progress through an adventure RPG.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Dungeon Quest",
        genre: "Adventure",
        description: "Battle through dangerous dungeons, defeat bosses, collect powerful loot, and upgrade your character.",
        link: "https://www.roblox.com/games/2414851778/Dungeon-Quest"
    },

    {
        name: "World of Magic",
        genre: "Adventure",
        description: "Explore a massive magical world, learn spells, fight enemies, and create your own adventure.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Sailor Piece",
        genre: "Adventure",
        description: "Explore islands, battle enemies, collect powerful abilities, and progress through a massive anime-inspired world.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Deepwoken",
        genre: "Adventure",
        description: "Explore a dangerous fantasy world where death is permanent and every decision matters.",
        link: "https://www.roblox.com/games/4111023553/Deepwoken"
    },

    {
        name: "The Survival Game",
        genre: "Adventure",
        description: "Gather resources, build settlements, craft equipment, and survive in a dangerous medieval world.",
        link: "https://www.roblox.com/games/1697921058/The-Survival-Game"
    },

    {
        name: "Dawn of Aurora",
        genre: "Adventure",
        description: "Explore a mysterious world filled with adventure, exploration, and discovery.",
        link: "https://www.roblox.com/"
    },

    {
        name: "The Wild West",
        genre: "Adventure",
        description: "Explore the Wild West, become a cowboy, complete missions, hunt bounties, and fight other players.",
        link: "https://www.roblox.com/games/2317712696/The-Wild-West"
    },

    {
        name: "Dragon Adventures",
        genre: "Adventure",
        description: "Raise dragons, explore magical worlds, collect creatures, and build your own dragon collection.",
        link: "https://www.roblox.com/games/3475397644/Dragon-Adventures"
    },

    {
        name: "Creatures of Sonaria",
        genre: "Adventure",
        description: "Discover and play as unique creatures while surviving and exploring a massive world.",
        link: "https://www.roblox.com/games/5233782396/Creatures-of-Sonaria"
    },

    {
        name: "Treelands",
        genre: "Adventure",
        description: "Build and customize your own treehouse while exploring a peaceful fantasy world.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Islands",
        genre: "Adventure",
        description: "Build an island, gather resources, craft items, explore, farm, and create your own world.",
        link: "https://www.roblox.com/games/4872321990/Islands"
    },

    {
        name: "RPG Simulator",
        genre: "Adventure",
        description: "Fight monsters, complete quests, collect loot, and upgrade your character in an RPG world.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Adventure Story!",
        genre: "Adventure",
        description: "Explore a colorful adventure world, complete quests, and discover new areas.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Heroes Online",
        genre: "Adventure",
        description: "Become a hero or villain, unlock abilities, complete missions, and battle other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "World of Trollge",
        genre: "Adventure",
        description: "Explore a strange world inspired by Trollge mythology and discover its secrets.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Robot 64",
        genre: "Adventure",
        description: "Explore colorful worlds, collect items, defeat enemies, and complete platforming challenges.",
        link: "https://www.roblox.com/games/1111083356/Robot-64"
    },

    {
        name: "Super Paper Roblox",
        genre: "Adventure",
        description: "Explore a colorful paper-inspired world filled with platforming, enemies, and adventure.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Adventure Forward 2",
        genre: "Adventure",
        description: "Explore multiple worlds, collect items, solve challenges, and progress through a huge adventure.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Block Tales",
        genre: "Adventure",
        description: "Explore a retro-inspired RPG adventure with turn-based battles, characters, quests, and secrets.",
        link: "https://www.roblox.com/games/16483433878/Block-Tales"
    },


    // =========================
    // BUILDING
    // =========================

    {
        name: "Build A Boat For Treasure",
        genre: "Building",
        description: "Build your own boat and sail through dangerous obstacles to reach the treasure.",
        link: "https://www.roblox.com/games/537413528/Build-A-Boat-For-Treasure"
    },

    {
        name: "Plane Crazy",
        genre: "Building",
        description: "Build planes, cars, ships, machines, and practically anything you can imagine.",
        link: "https://www.roblox.com/games/166986752/Plane-Crazy"
    },

    {
        name: "Theme Park Tycoon 2",
        genre: "Building",
        description: "Build and manage your own theme park with rides, attractions, shops, and custom layouts.",
        link: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2"
    },

    {
        name: "Lumber Tycoon 2",
        genre: "Building",
        description: "Chop trees, collect resources, buy land, and build your own lumber empire.",
        link: "https://www.roblox.com/games/13822889/Lumber-Tycoon-2"
    },

    {
        name: "Build It",
        genre: "Building",
        description: "Build creative structures based on different themes and show them off to other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Blockate",
        genre: "Building",
        description: "Create your own worlds using blocks and build almost anything you can imagine.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Obby Creator",
        genre: "Building",
        description: "Build your own obstacle courses and play creations made by other players.",
        link: "https://www.roblox.com/games/2833594990/Obby-Creator"
    },

    {
        name: "Build to Survive",
        genre: "Building",
        description: "Build defenses and structures before enemies arrive and try to destroy you.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Retail Tycoon 2",
        genre: "Building",
        description: "Build and manage your own retail store, stock products, hire workers, and grow your business.",
        link: "https://www.roblox.com/games/5865858426/Retail-Tycoon-2"
    },

    {
        name: "Restaurant Tycoon 2",
        genre: "Building",
        description: "Build your own restaurant, design it however you want, hire employees, and serve customers.",
        link: "https://www.roblox.com/games/4490140733/Restaurant-Tycoon-2"
    },

    {
        name: "Theme Park Tycoon",
        genre: "Building",
        description: "Create and manage your own theme park with custom rides and attractions.",
        link: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2"
    },

    {
        name: "My Restaurant!",
        genre: "Building",
        description: "Build and customize your own restaurant while serving customers and expanding your business.",
        link: "https://www.roblox.com/games/4490140733/Restaurant-Tycoon-2"
    },

    {
        name: "Build Island",
        genre: "Building",
        description: "Create and customize your own island using a variety of building tools.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Build a Market",
        genre: "Building",
        description: "Build and manage your own marketplace while expanding your business.",
        link: "https://www.roblox.com/"
    },

    {
        name: "House Builder",
        genre: "Building",
        description: "Design and build houses using creative building tools.",
        link: "https://www.roblox.com/"
    },

    {
        name: "RoVille",
        genre: "Building",
        description: "Build homes, customize your character, get jobs, and live your own virtual life.",
        link: "https://www.roblox.com/games/2488935714/RoVille"
    },

    {
        name: "Welcome to Bloxburg",
        genre: "Building",
        description: "Build detailed homes, get jobs, earn money, and live your own virtual life.",
        link: "https://www.roblox.com/games/185655149/Welcome-to-Bloxburg"
    },

    {
        name: "BedWars",
        genre: "Building",
        description: "Protect your bed, collect resources, build defenses, and fight opposing teams.",
        link: "https://www.roblox.com/games/6872265039/BedWars"
    },

    {
        name: "Terraria Tycoon",
        genre: "Building",
        description: "Build and expand your own Terraria-inspired tycoon.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Build Your Base!",
        genre: "Building",
        description: "Build and customize your own base while defending it and expanding your territory.",
        link: "https://www.roblox.com/"
    },


    // =========================
    // RACING
    // =========================

    {
        name: "Vehicle Legends",
        genre: "Racing",
        description: "Drive and collect a huge selection of cars while racing around a large open world.",
        link: "https://www.roblox.com/games/4474524069/Vehicle-Legends"
    },

    {
        name: "Midnight Racing: Tokyo",
        genre: "Racing",
        description: "Race through detailed Japanese roads and highways using a wide variety of customizable cars.",
        link: "https://www.roblox.com/games/8000516340/Midnight-Racing-Tokyo"
    },

    {
        name: "Project Trackday",
        genre: "Racing",
        description: "Race on realistic tracks using a variety of high-performance vehicles.",
        link: "https://www.roblox.com/"
    },

    {
        name: "FR Legends",
        genre: "Racing",
        description: "Master drifting, customize your car, and compete on challenging tracks.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Nitro Nations",
        genre: "Racing",
        description: "Race high-performance cars in fast-paced drag races and customize your vehicles.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Formula Apex Racing",
        genre: "Racing",
        description: "Compete in high-speed formula racing around challenging circuits.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Karting World",
        genre: "Racing",
        description: "Race go-karts around colorful tracks and compete against other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "NASCAR Speed Hub",
        genre: "Racing",
        description: "Experience high-speed NASCAR-style racing and compete around oval tracks.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Rally Racing",
        genre: "Racing",
        description: "Race through challenging rally courses while mastering corners and difficult terrain.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Drift Paradise",
        genre: "Racing",
        description: "Drift powerful cars, customize your rides, and compete with other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Initial Drift",
        genre: "Racing",
        description: "Master Japanese-style drifting and race through mountain roads.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Pacifico 2",
        genre: "Racing",
        description: "Explore a large driving world filled with cars, roads, and racing opportunities.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Highway Legends",
        genre: "Racing",
        description: "Drive high-performance cars through highways and compete in fast races.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Asphalt 8 Roblox",
        genre: "Racing",
        description: "Experience arcade-style racing with fast cars and intense races.",
        link: "https://www.roblox.com/"
    },

    {
        name: "MotoRush",
        genre: "Racing",
        description: "Race motorcycles at high speeds and compete against other riders.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Bike Race Clicker",
        genre: "Racing",
        description: "Click to increase your speed, upgrade your bike, and race against other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Race Clicker",
        genre: "Racing",
        description: "Build speed through clicking and race against other players.",
        link: "https://www.roblox.com/games/9285238704/Race-Clicker"
    },

    {
        name: "Ultimate Racing",
        genre: "Racing",
        description: "Compete in fast races using a wide selection of vehicles.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Speed Race",
        genre: "Racing",
        description: "Race against other players through fast-paced tracks and obstacles.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Supercar Racing",
        genre: "Racing",
        description: "Drive exotic supercars and compete in high-speed races.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Racing Rocket",
        genre: "Racing",
        description: "Race rocket-powered vehicles through fast and chaotic courses.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Roblox Karting",
        genre: "Racing",
        description: "Race customizable karts around competitive tracks.",
        link: "https://www.roblox.com/"
    },

    {
        name: "F1 Racing",
        genre: "Racing",
        description: "Compete in high-speed Formula 1 inspired races.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Drift Race",
        genre: "Racing",
        description: "Use controlled drifts to race through challenging tracks.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Drag Racing",
        genre: "Racing",
        description: "Compete in short, high-speed drag races and upgrade your cars.",
        link: "https://www.roblox.com/"
    },


    // =========================
    // FUNNY
    // =========================

    {
        name: "Get a Snack at 4 AM",
        genre: "Funny",
        description: "Sneak around your house at 4 AM trying to get a snack while dealing with bizarre events.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Regretevator",
        genre: "Funny",
        description: "Ride a chaotic elevator filled with strange floors, random events, and ridiculous characters.",
        link: "https://www.roblox.com/games/1046029290/Regretevator"
    },

    {
        name: "Item Asylum",
        genre: "Funny",
        description: "Use ridiculous weapons and items in chaotic and hilarious multiplayer battles.",
        link: "https://www.roblox.com/games/5670218884/Item-Asylum"
    },

    {
        name: "The Normal Elevator",
        genre: "Funny",
        description: "Ride an elevator where completely normal things definitely don't happen.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Fling Things and People",
        genre: "Funny",
        description: "Grab, throw, fling, and launch objects and players around chaotic maps.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Plates of Fate: Remastered",
        genre: "Funny",
        description: "Survive random events and disasters while standing on your own plate.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Ragdoll Mania",
        genre: "Funny",
        description: "Become a ragdoll and cause absolute chaos with hilarious physics.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Ragdoll Engine",
        genre: "Funny",
        description: "Mess around with hilarious ragdoll physics and launch yourself around.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Raise a Floppa",
        genre: "Funny",
        description: "Take care of a Floppa, earn money, buy upgrades, and experience bizarre events.",
        link: "https://www.roblox.com/games/9203864304/Raise-a-Floppa"
    },

    {
        name: "Raise a Floppa 2",
        genre: "Funny",
        description: "Continue raising Floppa while unlocking strange upgrades and hilarious events.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Meme Sea",
        genre: "Funny",
        description: "Explore a meme-filled world, battle enemies, collect abilities, and discover ridiculous content.",
        link: "https://www.roblox.com/games/9224601490/Meme-Sea"
    },

    {
        name: "Trollge",
        genre: "Funny",
        description: "Explore strange Trollge-inspired content and experience chaotic events.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Fling a Friend",
        genre: "Funny",
        description: "Grab your friends and launch them across the map using ridiculous physics.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Epic Minigames",
        genre: "Funny",
        description: "Play a huge collection of fast and chaotic multiplayer minigames.",
        link: "https://www.roblox.com/games/277751860/Epic-Minigames"
    },

    {
        name: "Work at a Pizza Place",
        genre: "Funny",
        description: "Work different jobs at a pizza restaurant while earning money and customizing your house.",
        link: "https://www.roblox.com/games/192800/Work-at-a-Pizza-Place"
    },

    {
        name: "3008",
        genre: "Funny",
        description: "Build a base inside an endless IKEA-like store and survive the terrifying employees.",
        link: "https://www.roblox.com/games/2768379856/3008"
    },

    {
        name: "Catalog Avatar Creator",
        genre: "Funny",
        description: "Create ridiculous outfits and experiment with thousands of avatar items.",
        link: "https://www.roblox.com/games/7041939546/Catalog-Avatar-Creator"
    },

    {
        name: "Mic Up",
        genre: "Funny",
        description: "Hang out, talk with other players, and experience the chaos of Roblox voice chat.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Rate My Avatar",
        genre: "Funny",
        description: "Show off your avatar and let other players rate your style.",
        link: "https://www.roblox.com/games/6441847031/Rate-My-Avatar"
    },

    {
        name: "Slap Battles",
        genre: "Funny",
        description: "Use ridiculous gloves with unique abilities to slap other players around.",
        link: "https://www.roblox.com/games/6403373529/Slap-Battles"
    },


    // =========================
    // STRATEGY
    // =========================

    {
        name: "Rise of Nations",
        genre: "Strategy",
        description: "Control a nation, manage resources, build your economy, form alliances, and conquer territory.",
        link: "https://www.roblox.com/games/2569453732/Rise-of-Nations"
    },

    {
        name: "BedWars",
        genre: "Strategy",
        description: "Protect your bed, gather resources, build defenses, and strategically eliminate enemy teams.",
        link: "https://www.roblox.com/games/6872265039/BedWars"
    },

    {
        name: "Isle of Arrows",
        genre: "Strategy",
        description: "Build and defend your island while strategically placing structures and surviving waves.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Hexaria",
        genre: "Strategy",
        description: "Explore a fantasy world while using strategic turn-based combat and powerful cards.",
        link: "https://www.roblox.com/games/6737970321/Hexaria"
    },

    {
        name: "World Conquest",
        genre: "Strategy",
        description: "Conquer territories, manage your nation, and outsmart other players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Risk of Robloxia",
        genre: "Strategy",
        description: "Use strategy and teamwork to survive dangerous battles and challenging scenarios.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Polybattle",
        genre: "Strategy",
        description: "Battle across large maps using vehicles, weapons, and coordinated team strategies.",
        link: "https://www.roblox.com/games/1523337358/Polybattle"
    },

    {
        name: "Base Battles",
        genre: "Strategy",
        description: "Fight opposing teams using vehicles, weapons, and strategic base attacks.",
        link: "https://www.roblox.com/games/328028363/Two-Player-Computer-Tycoon"
    },

    {
        name: "Military Tycoon",
        genre: "Strategy",
        description: "Build your military base, unlock weapons and vehicles, and conquer enemy territory.",
        link: "https://www.roblox.com/games/2916860059/Military-Tycoon"
    },

    {
        name: "Restaurant Tycoon 2",
        genre: "Strategy",
        description: "Build and manage a restaurant while balancing employees, customers, and profits.",
        link: "https://www.roblox.com/games/4490140733/Restaurant-Tycoon-2"
    },

    {
        name: "Theme Park Tycoon 2",
        genre: "Strategy",
        description: "Strategically design and manage a successful theme park.",
        link: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2"
    },

    {
        name: "Retail Tycoon 2",
        genre: "Strategy",
        description: "Manage your own store, control inventory, hire employees, and grow your business.",
        link: "https://www.roblox.com/games/5865858426/Retail-Tycoon-2"
    },

    {
        name: "Loomian Legacy",
        genre: "Strategy",
        description: "Explore a massive world, collect Loomians, train your team, and battle strategically.",
        link: "https://www.roblox.com/games/306964494/Loomian-Legacy"
    },

    {
        name: "Tower Defense Simulator",
        genre: "Strategy",
        description: "Place towers, defend against waves of enemies, and strategically build the strongest defense.",
        link: "https://www.roblox.com/games/3260590327/Tower-Defense-Simulator"
    },

    {
        name: "Tower Battles",
        genre: "Strategy",
        description: "Place towers strategically and defend against waves of enemies.",
        link: "https://www.roblox.com/games/856282241/Tower-Battles"
    },

    {
        name: "All Star Tower Defense",
        genre: "Strategy",
        description: "Collect powerful anime characters and strategically place them to defeat waves of enemies.",
        link: "https://www.roblox.com/games/4996049426/All-Star-Tower-Defense"
    },

    {
        name: "Anime Adventures",
        genre: "Strategy",
        description: "Collect anime-inspired units and strategically defend against waves of enemies.",
        link: "https://www.roblox.com/games/8304191830/Anime-Adventures"
    },

    {
        name: "Toilet Tower Defense",
        genre: "Strategy",
        description: "Collect units and strategically defend against waves of enemies.",
        link: "https://www.roblox.com/games/13767237054/Toilet-Tower-Defense"
    },

    {
        name: "Tower Blitz",
        genre: "Strategy",
        description: "Place towers strategically and work with teammates to defeat enemy waves.",
        link: "https://www.roblox.com/games/23578803/Tower-Blitz"
    },

    {
        name: "Tower Heroes",
        genre: "Strategy",
        description: "Place unique heroes strategically to defend against waves of enemies.",
        link: "https://www.roblox.com/games/4646477729/Tower-Heroes"
    },

    {
        name: "Defenders Depot",
        genre: "Strategy",
        description: "Build defenses and survive waves of enemies while upgrading your base.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Dungeon Defenders",
        genre: "Strategy",
        description: "Defend your base using towers and powerful characters while fighting waves of enemies.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Miner's Haven",
        genre: "Strategy",
        description: "Build an efficient mining setup, manage resources, and optimize your factory.",
        link: "https://www.roblox.com/games/258258996/Miners-Haven"
    },

    {
        name: "Plane Crazy",
        genre: "Strategy",
        description: "Design complex machines and strategically build vehicles for different challenges.",
        link: "https://www.roblox.com/games/166986752/Plane-Crazy"
    },

    {
        name: "SCP: Roleplay",
        genre: "Strategy",
        description: "Choose a role inside an SCP facility and work with others to complete objectives and survive.",
        link: "https://www.roblox.com/games/5041144419/SCP-RP"
    },

    {
        name: "Entry Point",
        genre: "Strategy",
        description: "Plan heists, choose stealth or combat, and work strategically to complete missions.",
        link: "https://www.roblox.com/games/822133560/Entry-Point"
    },

    {
        name: "Notoriety",
        genre: "Strategy",
        description: "Plan and execute cooperative heists using stealth, teamwork, and strategic decision-making.",
        link: "https://www.roblox.com/games/21532277/Notoriety-A-PAYDAY-Experience"
    },

    {
        name: "Deadline",
        genre: "Strategy",
        description: "Use tactical gunplay and teamwork to outsmart opposing players.",
        link: "https://www.roblox.com/"
    },

    {
        name: "Bad Business",
        genre: "Strategy",
        description: "A competitive shooter where weapon choices, movement, and tactical decisions can decide the battle.",
        link: "https://www.roblox.com/games/3233893879/Bad-Business"
    },

    {
        name: "Arsenal",
        genre: "Strategy",
        description: "Use quick thinking, weapon knowledge, and movement to dominate fast-paced matches.",
        link: "https://www.roblox.com/games/286090429/Arsenal"
    },

    {
        name: "Counter Blox",
        genre: "Strategy",
        description: "A tactical round-based shooter inspired by classic competitive FPS games.",
        link: "https://www.roblox.com/games/301177256/Counter-Blox"
    },

    {
        name: "Phantom Forces",
        genre: "Strategy",
        description: "A competitive FPS where map knowledge, positioning, teamwork, and weapon choices are essential.",
        link: "https://www.roblox.com/games/292439477/Phantom-Forces"
    }

];


// ========================================
// GAME GRID
// ========================================

const gameGrid = document.getElementById("gameGrid");


// ========================================
// DISPLAY GAMES
// ========================================

function showGames(genre) {

    if (!gameGrid) {
        console.error("gameGrid was not found.");
        return;
    }

    gameGrid.innerHTML = "";

    const filteredGames = games.filter(game => game.genre === genre);

    if (filteredGames.length === 0) {

        gameGrid.innerHTML = `
            <div class="no-games">
                <h3>No games found</h3>
                <p>There aren't any games in this genre yet.</p>
            </div>
        `;

        return;
    }

    filteredGames.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `

            <div class="game-card-content">

                <span class="game-genre">
                    ${game.genre}
                </span>

                <h3>
                    ${game.name}
                </h3>

                <p>
                    ${game.description}
                </p>

                <a
                    href="${game.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="play-button"
                >
                    <span>PLAY NOW</span>
                    <span class="play-arrow">↗</span>
                </a>

            </div>

        `;

        gameGrid.appendChild(card);


        // ========================================
        // 3D CARD EFFECT
        // ========================================

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    });

}


// ========================================
// GENRE BUTTONS
// ========================================

const genreButtons =
    document.querySelectorAll(".genre-card");

genreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const genre = button.dataset.genre;

        showGames(genre);

        const gamesSection =
            document.getElementById("games");

        if (gamesSection) {

            gamesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// LUCKY BUTTON
// ========================================

const luckyButton =
    document.getElementById("luckyButton");

const luckyResult =
    document.getElementById("luckyResult");


if (luckyButton && luckyResult) {

    luckyButton.addEventListener("click", () => {

        // Prevent multiple rolls at once
        if (luckyButton.disabled) return;

        luckyButton.disabled = true;

        luckyButton.innerHTML = `
            <span class="button-icon">✦</span>
            Rolling...
            <span class="button-arrow">↻</span>
        `;


        // Pick final game
        const finalGame =
            games[Math.floor(Math.random() * games.length)];


        // ========================================
        // ROLLING ANIMATION
        // ========================================

        let rollCount = 0;

        const totalRolls = 18;

        const rollInterval = setInterval(() => {

            const randomGame =
                games[Math.floor(Math.random() * games.length)];

            luckyResult.innerHTML = `

                <div class="question-mark">
                    ✦
                </div>

                <div>

                    <span class="game-genre">
                        ${randomGame.genre}
                    </span>

                    <h3>
                        ${randomGame.name}
                    </h3>

                    <p>
                        Finding your game...
                    </p>

                </div>

            `;

            rollCount++;

            // ========================================
            // FINISH ROLL
            // ========================================

            if (rollCount >= totalRolls) {

                clearInterval(rollInterval);

                setTimeout(() => {

                    luckyResult.innerHTML = `

                        <div class="question-mark">
                            ✦
                        </div>

                        <div>

                            <span class="game-genre">
                                ${finalGame.genre}
                            </span>

                            <h3>
                                ${finalGame.name}
                            </h3>

                            <p>
                                ${finalGame.description}
                            </p>

                            <a
                                href="${finalGame.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="play-button"
                            >
                                <span>PLAY NOW</span>
                                <span class="play-arrow">↗</span>
                            </a>

                        </div>

                    `;


                    // Restore button

                    luckyButton.disabled = false;

                    luckyButton.innerHTML = `
                        <span class="button-icon">✦</span>
                        I'm Feeling Lucky
                        <span class="button-arrow">→</span>
                    `;

                }, 300);

            }

        }, 90);

    });

}