/**
 * The array below serves the purpose of storing the base stats of every warframe.
 * This is accessed to load the html with the proper values.
 */
let warframes = [
    {
        name: "Ash",
        health: 450,
        shield: 300,
        armor: 100,
        sprintspeed: 1.15,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ash/NinjaStar.png.webp",
        ability2: "/abilityIcons/ash/NinjaSmokeScreen.png.webp",
        ability3: "/abilityIcons/ash/NinjaTeleport.png.webp",
        ability4: "/abilityIcons/ash/NinjaStorm.png.webp",
        ability1Name: "Shuriken",
        ability2Name: "Smoke Screen",
        ability3Name: "Teleport",
        ability4Name: "Blade Storm"
    },{
        name: "Ash Prime",
        health: 450,
        shield: 375,
        armor: 175,
        sprintspeed: 1.2,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ash/NinjaStar.png.webp",
        ability2: "/abilityIcons/ash/NinjaSmokeScreen.png.webp",
        ability3: "/abilityIcons/ash/NinjaTeleport.png.webp",
        ability4: "/abilityIcons/ash/NinjaStorm.png.webp",
        ability1Name: "Shuriken",
        ability2Name: "Smoke Screen",
        ability3Name: "Teleport",
        ability4Name: "Blade Storm"
    },{
        name: "Atlas",
        health: 300,
        shield: 300,
        armor: 450,
        sprintspeed: 0.9,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/atlas/AtlasRockPunch.png.webp",
        ability2: "/abilityIcons/atlas/AtlasBarrier.png.webp",
        ability3: "/abilityIcons/atlas/AtlasStoneGaze.png.webp",
        ability4: "/abilityIcons/atlas/AtlasSummon.png.webp",
        ability1Name: "Landslide",
        ability2Name: "Tectonics",
        ability3Name: "Petrify",
        ability4Name: "Rumblers"
    },{
        name: "Atlas Prime",
        health: 525,
        shield: 450,
        armor: 475,
        sprintspeed: 1,
        energy: 262,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/atlas/AtlasRockPunch.png.webp",
        ability2: "/abilityIcons/atlas/AtlasBarrier.png.webp",
        ability3: "/abilityIcons/atlas/AtlasStoneGaze.png.webp",
        ability4: "/abilityIcons/atlas/AtlasSummon.png.webp",
        ability1Name: "Landslide",
        ability2Name: "Tectonics",
        ability3Name: "Petrify",
        ability4Name: "Rumblers"
    },{
        name: "Banshee",
        health: 300,
        shield: 300,
        armor: 100,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/banshee/BansheeSonicBoom.png.webp",
        ability2: "/abilityIcons/banshee/BansheeSonar.png.webp",
        ability3: "/abilityIcons/banshee/BansheeSilence.png.webp",
        ability4: "/abilityIcons/banshee/BansheeSoundQuake.png.webp",
        ability1Name: "Sonic Boom",
        ability2Name: "SOnar",
        ability3Name: "Silence",
        ability4Name: "Sound Quake"
    },{
        name: "Banshee Prime",
        health: 300,
        shield: 300,
        armor: 125,
        sprintspeed: 1.15,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/banshee/BansheeSonicBoom.png.webp",
        ability2: "/abilityIcons/banshee/BansheeSonar.png.webp",
        ability3: "/abilityIcons/banshee/BansheeSilence.png.webp",
        ability4: "/abilityIcons/banshee/BansheeSoundQuake.png.webp",
        ability1Name: "Sonic Boom",
        ability2Name: "SOnar",
        ability3Name: "Silence",
        ability4Name: "Sound Quake"
    },{
        name: "Baruuk",
        health: 225,
        shield: 300,
        armor: 225,
        sprintspeed: 1.2,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/baruuk/BaruukBulletDodger.png.webp",
        ability2: "/abilityIcons/baruuk/BaruukCalmingWave.png.webp",
        ability3: "/abilityIcons/baruuk/BaruukOrbitalDisarm.png.webp",
        ability4: "/abilityIcons/baruuk/BaruukOverTheEdge.png.webp",
        ability1Name: "Elude",
        ability2Name: "Lull",
        ability3Name: "Desolate Hands",
        ability4Name: "Serene Storm"
    },{
        name: "Baruuk Prime",
        health: 225,
        shield: 375,
        armor: 225,
        sprintspeed: 1.2,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/baruuk/BaruukBulletDodger.png.webp",
        ability2: "/abilityIcons/baruuk/BaruukCalmingWave.png.webp",
        ability3: "/abilityIcons/baruuk/BaruukOrbitalDisarm.png.webp",
        ability4: "/abilityIcons/baruuk/BaruukOverTheEdge.png.webp",
        ability1Name: "Elude",
        ability2Name: "Lull",
        ability3Name: "Desolate Hands",
        ability4Name: "Serene Storm"
    },{
        name: "Caliban",
        health: 300,
        shield: 525,
        armor: 275,
        sprintspeed: 1.1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/caliban/CalibanWhirlwind.png.webp",
        ability2: "/abilityIcons/caliban/CalibanShockwave.png.webp",
        ability3: "/abilityIcons/caliban/CalibanSummonSentients.png.webp",
        ability4: "/abilityIcons/caliban/CalibanTriLaser.png.webp",
        ability1Name: "Razor Gyre",
        ability2Name: "Sentient Wrath",
        ability3Name: "Lethal Progeny",
        ability4Name: "Fusion Strike"
    },{
        name: "Chroma",
        health: 300,
        shield: 300,
        armor: 350,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/chroma/DragonElementalAttack.png.webp",
        ability2: "/abilityIcons/chroma/DragonLuckyDragon.png.webp",
        ability3: "/abilityIcons/chroma/DragonDragonScales.png.webp",
        ability4: "/abilityIcons/chroma/DragonSentient.png.webp",
        ability1Name: "Spectral Scream",
        ability2Name: "Elemental Ward",
        ability3Name: "Vex Armor",
        ability4Name: "Effigy"
    },{
        name: "Chroma Prime",
        health: 300,
        shield: 300,
        armor: 425,
        sprintspeed: 1,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/chroma/DragonElementalAttack.png.webp",
        ability2: "/abilityIcons/chroma/DragonLuckyDragon.png.webp",
        ability3: "/abilityIcons/chroma/DragonDragonScales.png.webp",
        ability4: "/abilityIcons/chroma/DragonSentient.png.webp",
        ability1Name: "Spectral Scream",
        ability2Name: "Elemental Ward",
        ability3Name: "Vex Armor",
        ability4Name: "Effigy"
    },{
        name: "Citrine",
        health: 405,
        shield: 300,
        armor: 250,
        sprintspeed: 1,
        energy: 180,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/citrine/FracturedBlast130xWhite.webp",
        ability2: "/abilityIcons/citrine/PreservingShell130xWhite.webp",
        ability3: "/abilityIcons/citrine/PrismaticGem130xWhite.webp",
        ability4: "/abilityIcons/citrine/Crystallize130xWhite.webp",
        ability1Name: "Fractured Blast",
        ability2Name: "Preserving Shell",
        ability3Name: "Prismatic Gem",
        ability4Name: "Crystallize"
    },{
        name: "Ember",
        health: 300,
        shield: 300,
        armor: 125,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ember/EmberFireBall.png.webp",
        ability2: "/abilityIcons/ember/EmberImmolation.png.webp",
        ability3: "/abilityIcons/ember/EmberFireBlast.png.webp",
        ability4: "/abilityIcons/ember/EmberInferno.png.webp",
        ability1Name: "Fireball",
        ability2Name: "Immolation",
        ability3Name: "Fire Blast",
        ability4Name: "Inferno"
    },{
        name: "Ember Prime",
        health: 300,
        shield: 375,
        armor: 125,
        sprintspeed: 1.11,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ember/EmberFireBall.png.webp",
        ability2: "/abilityIcons/ember/EmberImmolation.png.webp",
        ability3: "/abilityIcons/ember/EmberFireBlast.png.webp",
        ability4: "/abilityIcons/ember/EmberInferno.png.webp",
        ability1Name: "Fireball",
        ability2Name: "Immolation",
        ability3Name: "Fire Blast",
        ability4Name: "Inferno"
    },{
        name: "Equinox",
        health: 300,
        shield: 300,
        armor: 125,
        sprintspeed: 1.15,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/equinox/YinYangSwitch.png.webp",
        ability2: "/abilityIcons/equinox/YinYangTargetCalm.png.webp",
        ability3: "/abilityIcons/equinox/YinYangAuraEnemyDamage.png.webp",
        ability4: "/abilityIcons/equinox/YinYangBlastHeal.png.webp",
        ability1Name: "Metamorphosis",
        ability2Name: "Rest & Rage",
        ability3Name: "Pacify & Provoke",
        ability4Name: "Mend & Maim"
    },{
        name: "Equinox Prime",
        health: 375,
        shield: 300,
        armor: 150,
        sprintspeed: 1.15,
        energy: 247.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/equinox/YinYangSwitch.png.webp",
        ability2: "/abilityIcons/equinox/YinYangTargetCalm.png.webp",
        ability3: "/abilityIcons/equinox/YinYangAuraEnemyDamage.png.webp",
        ability4: "/abilityIcons/equinox/YinYangBlastHeal.png.webp",
        ability1Name: "Metamorphosis",
        ability2Name: "Rest & Rage",
        ability3Name: "Pacify & Provoke",
        ability4Name: "Mend & Maim"
    },{
        name: "Excalibur",
        health: 300,
        shield: 300,
        armor: 225,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/excalibur/Power04.png.webp",
        ability2: "/abilityIcons/excalibur/Power01.png.webp",
        ability3: "/abilityIcons/excalibur/Power03.png.webp",
        ability4: "/abilityIcons/excalibur/ExcaliburSwordOfDoom.png.webp",
        ability1Name: "Slash Dash",
        ability2Name: "Radial Blind",
        ability3Name: "Radial Javelin",
        ability4Name: "Exalted Blade"
    },{
        name: "Excalibur Prime",
        health: 300,
        shield: 300,
        armor: 300,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/excalibur/Power04.png.webp",
        ability2: "/abilityIcons/excalibur/Power01.png.webp",
        ability3: "/abilityIcons/excalibur/Power03.png.webp",
        ability4: "/abilityIcons/excalibur/ExcaliburSwordOfDoom.png.webp",
        ability1Name: "Slash Dash",
        ability2Name: "Radial Blind",
        ability3Name: "Radial Javelin",
        ability4Name: "Exalted Blade"
    },{
        name: "Excalibur Umbra",
        health: 300,
        shield: 300,
        armor: 300,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/excalibur-umbra/Power04.png.webp",
        ability2: "/abilityIcons/excalibur-umbra/ExcaliburUmbraRoar.png.webp",
        ability3: "/abilityIcons/excalibur-umbra/Power03.png.webp",
        ability4: "/abilityIcons/excalibur-umbra/ExcaliburSwordOfDoom.png.webp",
        ability1Name: "Slash Dash",
        ability2Name: "Radial Howl",
        ability3Name: "Radial Javelin",
        ability4Name: "Exalted Blade"
    },{
        name: "Frost",
        health: 300,
        shield: 450,
        armor: 300,
        sprintspeed: 0.95,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/frost/FrostFreeze.png.webp",
        ability2: "/abilityIcons/frost/FrostIceWave.png.webp",
        ability3: "/abilityIcons/frost/FrostSnowGlobe.png.webp",
        ability4: "/abilityIcons/frost/FrostAvalanche.png.webp",
        ability1Name: "Freeze",
        ability2Name: "Ice Wave",
        ability3Name: "Snow Globe",
        ability4Name: "Avalanche"
    },{
        name: "Frost Prime",
        health: 300,
        shield: 525,
        armor: 300,
        sprintspeed: 0.95,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/frost/FrostFreeze.png.webp",
        ability2: "/abilityIcons/frost/FrostIceWave.png.webp",
        ability3: "/abilityIcons/frost/FrostSnowGlobe.png.webp",
        ability4: "/abilityIcons/frost/FrostAvalanche.png.webp",
        ability1Name: "Freeze",
        ability2Name: "Ice Wave",
        ability3Name: "Snow Globe",
        ability4Name: "Avalanche"
    },{
        name: "Gara",
        health: 300,
        shield: 300,
        armor: 150,
        sprintspeed: 1.15,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/gara/GlassShank.png.webp",
        ability2: "/abilityIcons/gara/GlassShatteredAura.png.webp",
        ability3: "/abilityIcons/gara/GlassFragmentedReality.png.webp",
        ability4: "/abilityIcons/gara/GlassRing.png.webp",
        ability1Name: "Shattered Lash",
        ability2Name: "Splinter Storm",
        ability3Name: "Spectrorage",
        ability4Name: "Mass Vitrify"
    },{
        name: "Gara Prime",
        health: 360,
        shield: 300,
        armor: 190,
        sprintspeed: 1.15,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/gara/GlassShank.png.webp",
        ability2: "/abilityIcons/gara/GlassShatteredAura.png.webp",
        ability3: "/abilityIcons/gara/GlassFragmentedReality.png.webp",
        ability4: "/abilityIcons/gara/GlassRing.png.webp",
        ability1Name: "Shattered Lash",
        ability2Name: "Splinter Storm",
        ability3Name: "Spectrorage",
        ability4Name: "Mass Vitrify"
    },{
        name: "Garuda",
        health: 300,
        shield: 300,
        armor: 300,
        sprintspeed: 1,
        energy: 270,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/garuda/GarudaMeatShield.png.webp",
        ability2: "/abilityIcons/garuda/GarudaSanguineSiphon.png.webp",
        ability3: "/abilityIcons/garuda/GarudaBloodSunder.png.webp",
        ability4: "/abilityIcons/garuda/GarudaBoneZone.png.webp",
        ability1Name: "Dread Mirror",
        ability2Name: "Blood Altar",
        ability3Name: "Bloodletting",
        ability4Name: "Seeking Talons" 
    },{
        name: "Garuda Prime",
        health: 300,
        shield: 300,
        armor: 400,
        sprintspeed: 1,
        energy: 360,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/garuda/GarudaMeatShield.png.webp",
        ability2: "/abilityIcons/garuda/GarudaSanguineSiphon.png.webp",
        ability3: "/abilityIcons/garuda/GarudaBloodSunder.png.webp",
        ability4: "/abilityIcons/garuda/GarudaBoneZone.png.webp",
        ability1Name: "Dread Mirror",
        ability2Name: "Blood Altar",
        ability3Name: "Bloodletting",
        ability4Name: "Seeking Talons" 
    },{
        name: "Gauss",
        health: 300,
        shield: 450,
        armor: 175,
        sprintspeed: 1.4,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/gauss/RunnerMachRush.png.webp",
        ability2: "/abilityIcons/gauss/RunnerKineticPlating.png.webp",
        ability3: "/abilityIcons/gauss/RunnerEnergyTransfer.png.webp",
        ability4: "/abilityIcons/gauss/RunnerRedline.png.webp",
        ability1Name: "Mach Rush",
        ability2Name: "Kinetic Plating",
        ability3Name: "Thermal Sunder",
        ability4Name: "Redline"
    },{
        name: "Grendel",
        health: 350,
        shield: 75,
        armor: 350,
        sprintspeed: 0.95,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/grendel/GrendelDevour.png.webp",
        ability2: "/abilityIcons/grendel/GrendelConsume.png.webp",
        ability3: "/abilityIcons/grendel/GrendelBellyBowling.png.webp",
        ability4: "/abilityIcons/grendel/GrendelRegurgitate.png.webp",
        ability1Name: "Feast",
        ability2Name: "Nourish",
        ability3Name: "Pulverize",
        ability4Name: "Regurgitate"
    },{
        name: "Gyre",
        health: 300,
        shield: 525,
        armor: 100,
        sprintspeed: 1,
        energy: 240,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/gyre/GyrePulse.png.webp",
        ability2: "/abilityIcons/gyre/GyreSphere.png.webp",
        ability3: "/abilityIcons/gyre/GyreEnergised.png.webp",
        ability4: "/abilityIcons/gyre/GyreOvercharged.png.webp",
        ability1Name: "Arcsphere",
        ability2Name: "Coil Horizon",
        ability3Name: "Cathode Grace",
        ability4Name: "Rotorswell"
    },{
        name: "Harrow",
        health: 300,
        shield: 450,
        armor: 175,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/harrow/PriestCondemn.png.webp",
        ability2: "/abilityIcons/harrow/PriestPenance.png.webp",
        ability3: "/abilityIcons/harrow/PriestRavage.png.webp",
        ability4: "/abilityIcons/harrow/PriestPact.png.webp",
        ability1Name: "Condemn",
        ability2Name: "Penance",
        ability3Name: "Thurible",
        ability4Name: "Covenant"
    },{
        name: "Harrow Prime",
        health: 300,
        shield: 600,
        armor: 175,
        sprintspeed: 1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/harrow/PriestCondemn.png.webp",
        ability2: "/abilityIcons/harrow/PriestPenance.png.webp",
        ability3: "/abilityIcons/harrow/PriestRavage.png.webp",
        ability4: "/abilityIcons/harrow/PriestPact.png.webp",
        ability1Name: "Condemn",
        ability2Name: "Penance",
        ability3Name: "Thurible",
        ability4Name: "Covenant"
    },{
        name: "Hildryn",
        health: 225,
        shield: 1575,
        armor: 300,
        sprintspeed: 1,
        energy: 0,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/hildryn/HildrynBalefire.png.webp",
        ability2: "/abilityIcons/hildryn/HildrynShieldPillage.png.webp",
        ability3: "/abilityIcons/hildryn/HildrynHaven.png.webp",
        ability4: "/abilityIcons/hildryn/HildrynWingedDeath.png.webp",
        ability1Name: "Balefire",
        ability2Name: "Pillage",
        ability3Name: "Haven",
        ability4Name: "Aegis Storm"
    },{
        name: "Hydroid",
        health: 300,
        shield: 375,
        armor: 225,
        sprintspeed: 1.05,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/hydroid/PirateCannonBarage.png.webp",
        ability2: "/abilityIcons/hydroid/PirateTidalWave.png.webp",
        ability3: "/abilityIcons/hydroid/PirateLiquefy.png.webp",
        ability4: "/abilityIcons/hydroid/PirateKraken.png.webp",
        ability1Name: "Tempest Barrage",
        ability2Name: "Tidal Surge",
        ability3Name: "Undertow",
        ability4Name: "Tentacle Swarm"
    },{
        name: "Hydroid Prime",
        health: 300,
        shield: 525,
        armor: 275,
        sprintspeed: 1.05,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/hydroid/PirateCannonBarage.png.webp",
        ability2: "/abilityIcons/hydroid/PirateTidalWave.png.webp",
        ability3: "/abilityIcons/hydroid/PirateLiquefy.png.webp",
        ability4: "/abilityIcons/hydroid/PirateKraken.png.webp",
        ability1Name: "Tempest Barrage",
        ability2Name: "Tidal Surge",
        ability3Name: "Undertow",
        ability4Name: "Tentacle Swarm"
    },{
        name: "Inaros",
        health: 2200,
        shield: 0,
        armor: 225,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/inaros/SandmanBlast.png.webp",
        ability2: "/abilityIcons/inaros/SandmanDevour.png.webp",
        ability3: "/abilityIcons/inaros/SandmanStorm.png.webp",
        ability4: "/abilityIcons/inaros/SandmanSwarm.png.webp",
        ability1Name: "Desiccation",
        ability2Name: "Devour",
        ability3Name: "Sandstorm",
        ability4Name: "Sacarab Swarm"
    },{
        name: "Inaros Prime",
        health: 2300,
        shield: 0,
        armor: 225,
        sprintspeed: 1.05,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/inaros/SandmanBlast.png.webp",
        ability2: "/abilityIcons/inaros/SandmanDevour.png.webp",
        ability3: "/abilityIcons/inaros/SandmanStorm.png.webp",
        ability4: "/abilityIcons/inaros/SandmanSwarm.png.webp",
        ability1Name: "Desiccation",
        ability2Name: "Devour",
        ability3Name: "Sandstorm",
        ability4Name: "Sacarab Swarm"
    },{
        name: "Ivara",
        health: 225,
        shield: 300,
        armor: 100,
        sprintspeed: 1.15,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ivara/RangerVersatileQuiver.png.webp",
        ability2: "/abilityIcons/ivara/RangerAfterTouch.png.webp",
        ability3: "/abilityIcons/ivara/RangerSteal.png.webp",
        ability4: "/abilityIcons/ivara/RangerExaltedBow.png.webp",
        ability1Name: "Quiver",
        ability2Name: "Navigator",
        ability3Name: "Prowl",
        ability4Name: "Artemis Bow"
    },{
        name: "Ivara Prime",
        health: 225,
        shield: 450,
        armor: 125,
        sprintspeed: 1.2,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/ivara/RangerVersatileQuiver.png.webp",
        ability2: "/abilityIcons/ivara/RangerAfterTouch.png.webp",
        ability3: "/abilityIcons/ivara/RangerSteal.png.webp",
        ability4: "/abilityIcons/ivara/RangerExaltedBow.png.webp",
        ability1Name: "Quiver",
        ability2Name: "Navigator",
        ability3Name: "Prowl",
        ability4Name: "Artemis Bow"
    },{
        name: "Khora",
        health: 375,
        shield: 100,
        armor: 325,
        sprintspeed: 1.05,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/khora/KhoraCrack.png.webp",
        ability2: "/abilityIcons/khora/KhoraAllTiedUp.png.webp",
        ability3: "/abilityIcons/khora/KhoraSummon.png.webp",
        ability4: "/abilityIcons/khora/KhoraStrangleDome.png.webp",
        ability1Name: "Whipclaw",
        ability2Name: "Ensnare",
        ability3Name: "Venari",
        ability4Name: "Strangledome"
    },{
        name: "Khora Prime",
        health: 375,
        shield: 375,
        armor: 325,
        sprintspeed: 1.05,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/khora/KhoraCrack.png.webp",
        ability2: "/abilityIcons/khora/KhoraAllTiedUp.png.webp",
        ability3: "/abilityIcons/khora/KhoraSummon.png.webp",
        ability4: "/abilityIcons/khora/KhoraStrangleDome.png.webp",
        ability1Name: "Whipclaw",
        ability2Name: "Ensnare",
        ability3Name: "Venari",
        ability4Name: "Strangledome"
    },{
        name: "Lavos",
        health: 600,
        shield: 300,
        armor: 450,
        sprintspeed: 1.15,
        energy: 0,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/lavos/AlchemistSerpent.png.webp",
        ability2: "/abilityIcons/lavos/AlchemistRush.png.webp",
        ability3: "/abilityIcons/lavos/AlchemistTransmuter.png.webp",
        ability4: "/abilityIcons/lavos/AlchemistDistill.png.webp",
        ability1Name: "Ophidian Bite",
        ability2Name: "Vial Rush",
        ability3Name: "Transmutation Probe",
        ability4Name: "Catalyze"
    },{
        name: "Limbo",
        health: 300,
        shield: 225,
        armor: 100,
        sprintspeed: 1.15,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/limbo/LimboBanish.png.webp",
        ability2: "/abilityIcons/limbo/LimboRiftWalk.png.webp",
        ability3: "/abilityIcons/limbo/LimboVolatile.png.webp",
        ability4: "/abilityIcons/limbo/LimboTearInSpace.png.webp",
        ability1Name: "Banish",
        ability2Name: "Stasis",
        ability3Name: "Rift Surge",
        ability4Name: "Cataclysm"
    },{
        name: "Limbo Prime",
        health: 300,
        shield: 300,
        armor: 125,
        sprintspeed: 1.15,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/limbo/LimboBanish.png.webp",
        ability2: "/abilityIcons/limbo/LimboRiftWalk.png.webp",
        ability3: "/abilityIcons/limbo/LimboVolatile.png.webp",
        ability4: "/abilityIcons/limbo/LimboTearInSpace.png.webp",
        ability1Name: "Banish",
        ability2Name: "Stasis",
        ability3Name: "Rift Surge",
        ability4Name: "Cataclysm"
    },{
        name: "Loki",
        health: 225,
        shield: 225,
        armor: 100,
        sprintspeed: 1.25,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/loki/LokiDecoy.png.webp",
        ability2: "/abilityIcons/loki/LokiInvisibility.png.webp",
        ability3: "/abilityIcons/loki/LokiSwitchTeleport.png.webp",
        ability4: "/abilityIcons/loki/LokiRadialDisarm.png.webp",
        ability1Name: "Decoy",
        ability2Name: "Invisibility",
        ability3Name: "Switch Teleport",
        ability4Name: "Radial Disarm"
    },{
        name: "Loki Prime",
        health: 225,
        shield: 225,
        armor: 125,
        sprintspeed: 1.25,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/loki/LokiDecoy.png.webp",
        ability2: "/abilityIcons/loki/LokiInvisibility.png.webp",
        ability3: "/abilityIcons/loki/LokiSwitchTeleport.png.webp",
        ability4: "/abilityIcons/loki/LokiRadialDisarm.png.webp",
        ability1Name: "Decoy",
        ability2Name: "Invisibility",
        ability3Name: "Switch Teleport",
        ability4Name: "Radial Disarm"
    },{
        name: "Mag",
        health: 225,
        shield: 450,
        armor: 100,
        sprintspeed: 1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mag/MagPull.png.webp",
        ability2: "/abilityIcons/mag/MagMagnetize.png.webp",
        ability3: "/abilityIcons/mag/MagShieldRenew.png.webp",
        ability4: "/abilityIcons/mag/MagCrush.png.webp",
        ability1Name: "Pull",
        ability2Name: "Magnetize",
        ability3Name: "Polarize",
        ability4Name: "Crush"
    },{
        name: "Mag Prime",
        health: 300,
        shield: 450,
        armor: 125,
        sprintspeed: 1,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mag/MagPull.png.webp",
        ability2: "/abilityIcons/mag/MagMagnetize.png.webp",
        ability3: "/abilityIcons/mag/MagShieldRenew.png.webp",
        ability4: "/abilityIcons/mag/MagCrush.png.webp",
        ability1Name: "Pull",
        ability2Name: "Magnetize",
        ability3Name: "Polarize",
        ability4Name: "Crush"
    },{
        name: "Mesa",
        health: 373,
        shield: 225,
        armor: 100,
        sprintspeed: 1.1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mesa/GunslingerBallisticBattery.png.webp",
        ability2: "/abilityIcons/mesa/GunslingerRussianRoulette.png.webp",
        ability3: "/abilityIcons/mesa/GunslingerRicochetArmour.png.webp",
        ability4: "/abilityIcons/mesa/GunslingerGunFu.png.webp",
        ability1Name: "Ballistic Battery",
        ability2Name: "Shooting Gallery",
        ability3Name: "Shatter Shield",
        ability4Name: "Peacemaker"
    },{
        name: "Mesa Prime",
        health: 405,
        shield: 225,
        armor: 125,
        sprintspeed: 1.1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mesa/GunslingerBallisticBattery.png.webp",
        ability2: "/abilityIcons/mesa/GunslingerRussianRoulette.png.webp",
        ability3: "/abilityIcons/mesa/GunslingerRicochetArmour.png.webp",
        ability4: "/abilityIcons/mesa/GunslingerGunFu.png.webp",
        ability1Name: "Ballistic Battery",
        ability2Name: "Shooting Gallery",
        ability3Name: "Shatter Shield",
        ability4Name: "Peacemaker"
    },{
        name: "Mirage",
        health: 240,
        shield: 240,
        armor: 100,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mirage/HarlequinReflection.png.webp",
        ability2: "/abilityIcons/mirage/HarlequinDeadlyTrap.png.webp",
        ability3: "/abilityIcons/mirage/HarlequinLightDark.png.webp",
        ability4: "/abilityIcons/mirage/HarlequinPrism.png.webp",
        ability1Name: "Hall of Mirrors",
        ability2Name: "Sleight of Hand",
        ability3Name: "Eclipse",
        ability4Name: "Prism"
    },{
        name: "Mirage Prime",
        health: 240,
        shield: 330,
        armor: 175,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/mirage/HarlequinReflection.png.webp",
        ability2: "/abilityIcons/mirage/HarlequinDeadlyTrap.png.webp",
        ability3: "/abilityIcons/mirage/HarlequinLightDark.png.webp",
        ability4: "/abilityIcons/mirage/HarlequinPrism.png.webp",
        ability1Name: "Hall of Mirrors",
        ability2Name: "Sleight of Hand",
        ability3Name: "Eclipse",
        ability4Name: "Prism"
    },{
        name: "Nekros",
        health: 300,
        shield: 270,
        armor: 100,
        sprintspeed: 1.1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nekros/NecroSoulPunch.png.webp",
        ability2: "/abilityIcons/nekros/NecroTerrorTotem.png.webp",
        ability3: "/abilityIcons/nekros/NecroSearchTheDead.png.webp",
        ability4: "/abilityIcons/nekros/NecroCloneTheDead.png.webp",
        ability1Name: "Soul Punch",
        ability2Name: "Terrify",
        ability3Name: "Desecrate",
        ability4Name: "Shadows of the Dead"
    },{
        name: "Nekros Prime",
        health: 300,
        shield: 450,
        armor: 125,
        sprintspeed: 1.1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nekros/NecroSoulPunch.png.webp",
        ability2: "/abilityIcons/nekros/NecroTerrorTotem.png.webp",
        ability3: "/abilityIcons/nekros/NecroSearchTheDead.png.webp",
        ability4: "/abilityIcons/nekros/NecroCloneTheDead.png.webp",
        ability1Name: "Soul Punch",
        ability2Name: "Terrify",
        ability3Name: "Desecrate",
        ability4Name: "Shadows of the Dead"
    },{
        name: "Nezha",
        health: 375,
        shield: 150,
        armor: 190,
        sprintspeed: 1.15,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nezha/NezhaTrail.png.webp",
        ability2: "/abilityIcons/nezha/NezhaRing.png.webp",
        ability3: "/abilityIcons/nezha/NeshaSash.png.webp",
        ability4: "/abilityIcons/nezha/NezhaSpear.png.webp",
        ability1Name: "Fire Walker",
        ability2Name: "Blazing Chakram",
        ability3Name: "Warding Halo",
        ability4Name: "Divine Spears"
    },{
        name: "Nezha Prime",
        health: 375,
        shield: 150,
        armor: 450,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nezha/NezhaTrail.png.webp",
        ability2: "/abilityIcons/nezha/NezhaRing.png.webp",
        ability3: "/abilityIcons/nezha/NeshaSash.png.webp",
        ability4: "/abilityIcons/nezha/NezhaSpear.png.webp",
        ability1Name: "Fire Walker",
        ability2Name: "Blazing Chakram",
        ability3Name: "Warding Halo",
        ability4Name: "Divine Spears"
    },{
        name: "Nidus",
        health: 450,
        shield: 0,
        armor: 450,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nidus/InfestedRupture.png.webp",
        ability2: "/abilityIcons/nidus/InfestedTendrils.png.webp",
        ability3: "/abilityIcons/nidus/InfestedSymbioticLink.png.webp",
        ability4: "/abilityIcons/nidus/InfestedInfest.png.webp",
        ability1Name: "Virulence",
        ability2Name: "Larva",
        ability3Name: "Parasitic Link",
        ability4Name: "Ravenous"
    },{
        name: "Nidus Prime",
        health: 525,
        shield: 0,
        armor: 525,
        sprintspeed: 1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nidus/InfestedRupture.png.webp",
        ability2: "/abilityIcons/nidus/InfestedTendrils.png.webp",
        ability3: "/abilityIcons/nidus/InfestedSymbioticLink.png.webp",
        ability4: "/abilityIcons/nidus/InfestedInfest.png.webp",
        ability1Name: "Virulence",
        ability2Name: "Larva",
        ability3Name: "Parasitic Link",
        ability4Name: "Ravenous"
    },{
        name: "Nova",
        health: 300,
        shield: 225,
        armor: 100,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nova/NovaNullStar.png.webp",
        ability2: "/abilityIcons/nova/NovaAntimatterDrop.png.webp",
        ability3: "/abilityIcons/nova/NovaWormHole.png.webp",
        ability4: "/abilityIcons/nova/NovaMolecularPrime.png.webp",
        ability1Name: "Null Star",
        ability2Name: "Antimatter Drop",
        ability3Name: "Worm Hole",
        ability4Name: "Molecular Prime"
    },{
        name: "Nova Prime",
        health: 300,
        shield: 300,
        armor: 125,
        sprintspeed: 1.2,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nova/NovaNullStar.png.webp",
        ability2: "/abilityIcons/nova/NovaAntimatterDrop.png.webp",
        ability3: "/abilityIcons/nova/NovaWormHole.png.webp",
        ability4: "/abilityIcons/nova/NovaMolecularPrime.png.webp",
        ability1Name: "Null Star",
        ability2Name: "Antimatter Drop",
        ability3Name: "Worm Hole",
        ability4Name: "Molecular Prime"
    },{
        name: "Nyx",
        health: 300,
        shield: 300,
        armor: 100,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nyx/NyxMindControl.png.webp",
        ability2: "/abilityIcons/nyx/NyxPsychicBolts.png.webp",
        ability3: "/abilityIcons/nyx/NyxChaos.png.webp",
        ability4: "/abilityIcons/nyx/NyxAbsorb.png.webp",
        ability1Name: "Mind Control",
        ability2Name: "Psychic Bolts",
        ability3Name: "Chaos",
        ability4Name: "Absorb"
    },{
        name: "Nyx Prime",
        health: 300,
        shield: 375,
        armor: 125,
        sprintspeed: 1.125,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/nyx/NyxMindControl.png.webp",
        ability2: "/abilityIcons/nyx/NyxPsychicBolts.png.webp",
        ability3: "/abilityIcons/nyx/NyxChaos.png.webp",
        ability4: "/abilityIcons/nyx/NyxAbsorb.png.webp",
        ability1Name: "Mind Control",
        ability2Name: "Psychic Bolts",
        ability3Name: "Chaos",
        ability4Name: "Absorb"
    },{
        name: "Oberon",
        health: 373,
        shield: 300,
        armor: 175,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/oberon/PaladinSmite.png.webp",
        ability2: "/abilityIcons/oberon/PaladinHallowedGround.png.webp",
        ability3: "/abilityIcons/oberon/PaladinRenewal.png.webp",
        ability4: "/abilityIcons/oberon/PaladinReckoning.png.webp",
        ability1Name: "Smite",
        ability2Name: "Hallowed Ground",
        ability3Name: "Renewal",
        ability4Name: "Reckoning"
    },{
        name: "Oberon Prime",
        health: 375,
        shield: 300,
        armor: 225,
        sprintspeed: 1,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/oberon/PaladinSmite.png.webp",
        ability2: "/abilityIcons/oberon/PaladinHallowedGround.png.webp",
        ability3: "/abilityIcons/oberon/PaladinRenewal.png.webp",
        ability4: "/abilityIcons/oberon/PaladinReckoning.png.webp",
        ability1Name: "Smite",
        ability2Name: "Hallowed Ground",
        ability3Name: "Renewal",
        ability4Name: "Reckoning"
    },{
        name: "Octavia",
        health: 300,
        shield: 225,
        armor: 150,
        sprintspeed: 1.05,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/octavia/BardMusicBox.png.webp",
        ability2: "/abilityIcons/octavia/BardPiedPiper.png.webp",
        ability3: "/abilityIcons/octavia/BardPumpJam.png.webp",
        ability4: "/abilityIcons/octavia/BardAmplifier.png.webp",
        ability1Name: "Mallet",
        ability2Name: "Resonator",
        ability3Name: "Metronome",
        ability4Name: "Amp"
    },{
        name: "Octavia Prime",
        health: 300,
        shield: 300,
        armor: 150,
        sprintspeed: 1.05,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/octavia/BardMusicBox.png.webp",
        ability2: "/abilityIcons/octavia/BardPiedPiper.png.webp",
        ability3: "/abilityIcons/octavia/BardPumpJam.png.webp",
        ability4: "/abilityIcons/octavia/BardAmplifier.png.webp",
        ability1Name: "Mallet",
        ability2Name: "Resonator",
        ability3Name: "Metronome",
        ability4Name: "Amp"
    },{
        name: "Protea",
        health: 300,
        shield: 450,
        armor: 125,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/protea/ProteaGrenadeFan.png.webp",
        ability2: "/abilityIcons/protea/ProteaBFG.png.webp",
        ability3: "/abilityIcons/protea/ProteaDispensary.png.webp",
        ability4: "/abilityIcons/protea/ProteaTemporalAnchor.png.webp",
        ability1Name: "Grenade Fan",
        ability2Name: "Blaze Artillery",
        ability3Name: "Dispensary",
        ability4Name: "Temporal Anchor"
    },{
        name: "Revenant",
        health: 300,
        shield: 675,
        armor: 125,
        sprintspeed: 1,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/revenant/RevenantEnthrall.png.webp",
        ability2: "/abilityIcons/revenant/RevenantMesmerSkin.png.webp",
        ability3: "/abilityIcons/revenant/RevenantReave.png.webp",
        ability4: "/abilityIcons/revenant/RevenantDanseMacabre.png.webp",
        ability1Name: "Enthrall",
        ability2Name: "Mesmer Skin",
        ability3Name: "Reave",
        ability4Name: "Danse Macabre"
    },{
        name: "Revenant Prime",
        health: 300,
        shield: 750,
        armor: 125,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/revenant/RevenantEnthrall.png.webp",
        ability2: "/abilityIcons/revenant/RevenantMesmerSkin.png.webp",
        ability3: "/abilityIcons/revenant/RevenantReave.png.webp",
        ability4: "/abilityIcons/revenant/RevenantDanseMacabre.png.webp",
        ability1Name: "Enthrall",
        ability2Name: "Mesmer Skin",
        ability3Name: "Reave",
        ability4Name: "Danse Macabre"
    },{
        name: "Rhino",
        health: 300,
        shield: 450,
        armor: 225,
        sprintspeed: 0.95,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/rhino/RhinoDash.png.webp",
        ability2: "/abilityIcons/rhino/RhinoIronSkin.png.webp",
        ability3: "/abilityIcons/rhino/RhinoRadialBlast.png.webp",
        ability4: "/abilityIcons/rhino/RhinoStomp.png.webp",
        ability1Name: "Rhino Charge",
        ability2Name: "Iron Skin",
        ability3Name: "Roar",
        ability4Name: "Rhino Stomp"
    },{
        name: "Rhino Prime",
        health: 300,
        shield: 450,
        armor: 275,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/rhino/RhinoDash.png.webp",
        ability2: "/abilityIcons/rhino/RhinoIronSkin.png.webp",
        ability3: "/abilityIcons/rhino/RhinoRadialBlast.png.webp",
        ability4: "/abilityIcons/rhino/RhinoStomp.png.webp",
        ability1Name: "Rhino Charge",
        ability2Name: "Iron Skin",
        ability3Name: "Roar",
        ability4Name: "Rhino Stomp"
    },{
        name: "Saryn",
        health: 375,
        shield: 300,
        armor: 225,
        sprintspeed: 0.95,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/saryn/SarynVenom.png.webp",
        ability2: "/abilityIcons/saryn/SarynMoult.png.webp",
        ability3: "/abilityIcons/saryn/SarynContagion.png.webp",
        ability4: "/abilityIcons/saryn/SarynMiasma.png.webp",
        ability1Name: "Spores",
        ability2Name: "Molt",
        ability3Name: "Toxic Lash",
        ability4Name: "Miasma"
    },{
        name: "Saryn Prime",
        health: 375,
        shield: 300,
        armor: 300,
        sprintspeed: 1,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/saryn/SarynVenom.png.webp",
        ability2: "/abilityIcons/saryn/SarynMoult.png.webp",
        ability3: "/abilityIcons/saryn/SarynContagion.png.webp",
        ability4: "/abilityIcons/saryn/SarynMiasma.png.webp",
        ability1Name: "Spores",
        ability2Name: "Molt",
        ability3Name: "Toxic Lash",
        ability4Name: "Miasma"
    },{
        name: "Sevagoth",
        health: 300,
        shield: 270,
        armor: 150,
        sprintspeed: 0.95,
        energy: 187.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/sevagoth/WraithReap.png.webp",
        ability2: "/abilityIcons/sevagoth/WraithSow.png.webp",
        ability3: "/abilityIcons/sevagoth/WraithGloom.png.webp",
        ability4: "/abilityIcons/sevagoth/WraithDontFearTheReaper.png.webp",
        ability1Name: "Reap",
        ability2Name: "Sow",
        ability3Name: "Gloom",
        ability4Name: "Exalted Shadow"
    },{
        name: "Styanax",
        health: 300,
        shield: 750,
        armor: 250,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/styanax/AxiosJavelin130xWhite.webp",
        ability2: "/abilityIcons/styanax/TharrosStrike130xWhite.webp",
        ability3: "/abilityIcons/styanax/RallyPoint130xWhite.webp",
        ability4: "/abilityIcons/styanax/FinalStand130xWhite.webp",
        ability1Name: "Axios Javelin",
        ability2Name: "Tharros Strike",
        ability3Name: "Rally Point",
        ability4Name: "Final Stand"
    },{
        name: "Titania",
        health: 300,
        shield: 300,
        armor: 100,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/titania/FaerieDust.png.webp",
        ability2: "/abilityIcons/titania/FaerieSoul.png.webp",
        ability3: "/abilityIcons/titania/FaerieLamp.png.webp",
        ability4: "/abilityIcons/titania/FaerieShrink.png.webp",
        ability1Name: "Spellbind",
        ability2Name: "Tribute",
        ability3Name: "Lantern",
        ability4Name: "Razorwing"
    },{
        name: "Titania Prime",
        health: 375,
        shield: 300,
        armor: 125,
        sprintspeed: 1,
        energy: 262.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/titania/FaerieDust.png.webp",
        ability2: "/abilityIcons/titania/FaerieSoul.png.webp",
        ability3: "/abilityIcons/titania/FaerieLamp.png.webp",
        ability4: "/abilityIcons/titania/FaerieShrink.png.webp",
        ability1Name: "Spellbind",
        ability2Name: "Tribute",
        ability3Name: "Lantern",
        ability4Name: "Razorwing"
    },{
        name: "Trinity",
        health: 300,
        shield: 300,
        armor: 100,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/trinity/TrinityWellOfLife.png.webp",
        ability2: "/abilityIcons/trinity/TrinityEnergyVampire.png.webp",
        ability3: "/abilityIcons/trinity/TrinityLink.png.webp",
        ability4: "/abilityIcons/trinity/TrinityBlessing.png.webp",
        ability1Name: "Well of Life",
        ability2Name: "Energy Vampire",
        ability3Name: "Link",
        ability4Name: "Blessing"
    },{
        name: "Trinity Prime",
        health: 300,
        shield: 450,
        armor: 125,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/trinity/TrinityWellOfLife.png.webp",
        ability2: "/abilityIcons/trinity/TrinityEnergyVampire.png.webp",
        ability3: "/abilityIcons/trinity/TrinityLink.png.webp",
        ability4: "/abilityIcons/trinity/TrinityBlessing.png.webp",
        ability1Name: "Well of Life",
        ability2Name: "Energy Vampire",
        ability3Name: "Link",
        ability4Name: "Blessing"
    },{
        name: "Valkyr",
        health: 300,
        shield: 150,
        armor: 600,
        sprintspeed: 1.1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/valkyr/BerserkerGrapplingHook.png.webp",
        ability2: "/abilityIcons/valkyr/BerserkerScream.png.webp",
        ability3: "/abilityIcons/valkyr/BerserkerShieldBash.png.webp",
        ability4: "/abilityIcons/valkyr/BerserkerLastStand.png.webp",
        ability1Name: "Rip Line",
        ability2Name: "Warcry",
        ability3Name: "Paralysis",
        ability4Name: "Hysteria"
    },{
        name: "Valkyr Prime",
        health: 300,
        shield: 150,
        armor: 700,
        sprintspeed: 1.1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/valkyr/BerserkerGrapplingHook.png.webp",
        ability2: "/abilityIcons/valkyr/BerserkerScream.png.webp",
        ability3: "/abilityIcons/valkyr/BerserkerShieldBash.png.webp",
        ability4: "/abilityIcons/valkyr/BerserkerLastStand.png.webp",
        ability1Name: "Rip Line",
        ability2Name: "Warcry",
        ability3Name: "Paralysis",
        ability4Name: "Hysteria"
    },{
        name: "Vauban",
        health: 300,
        shield: 225,
        armor: 150,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/vauban/VaubanTeslaDrones.png.webp",
        ability2: "/abilityIcons/vauban/VaubanMinelayer.png.webp",
        ability3: "/abilityIcons/vauban/VaubanOrbitalStrike.png.webp",
        ability4: "/abilityIcons/vauban/VaubanBastille.png.webp",
        ability1Name: "Tesla Nervos",
        ability2Name: "Minelayer",
        ability3Name: "Photon Strike",
        ability4Name: "Bastille"
    },{
        name: "Vauban Prime",
        health: 300,
        shield: 300,
        armor: 200,
        sprintspeed: 1,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/vauban/VaubanTeslaDrones.png.webp",
        ability2: "/abilityIcons/vauban/VaubanMinelayer.png.webp",
        ability3: "/abilityIcons/vauban/VaubanOrbitalStrike.png.webp",
        ability4: "/abilityIcons/vauban/VaubanBastille.png.webp",
        ability1Name: "Tesla Nervos",
        ability2Name: "Minelayer",
        ability3Name: "Photon Strike",
        ability4Name: "Bastille"
    },{
        name: "Volt",
        health: 300,
        shield: 450,
        armor: 100,
        sprintspeed: 1,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/volt/VoltChainLightning.png.webp",
        ability2: "/abilityIcons/volt/VoltSuperSpeed.png.webp",
        ability3: "/abilityIcons/volt/VoltShield.png.webp",
        ability4: "/abilityIcons/volt/VoltOverLoad.png.webp",
        ability1Name: "Shock",
        ability2Name: "Speed",
        ability3Name: "Electric Shield",
        ability4Name: "Discharge"
    },{
        name: "Volt Prime",
        health: 300,
        shield: 450,
        armor: 125,
        sprintspeed: 1,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/volt/VoltChainLightning.png.webp",
        ability2: "/abilityIcons/volt/VoltSuperSpeed.png.webp",
        ability3: "/abilityIcons/volt/VoltShield.png.webp",
        ability4: "/abilityIcons/volt/VoltOverLoad.png.webp",
        ability1Name: "Shock",
        ability2Name: "Speed",
        ability3Name: "Electric Shield",
        ability4Name: "Discharge"
    },{
        name: "Voruna",
        health: 450,
        shield: 300,
        armor: 190,
        sprintspeed: 0.95,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/voruna/WerewolfShroud.png.webp",
        ability2: "/abilityIcons/voruna/WerewolfBite.png.webp",
        ability3: "/abilityIcons/voruna/WerewolfLeap.png.webp",
        ability4: "/abilityIcons/voruna/WerewolfHowl.png.webp",
        ability1Name: "Shroud of Dynar",
        ability2Name: "Fangs of Raksh",
        ability3Name: "Lycath's Hunt",
        ability4Name: "Ulfrun's Descent"
    },{
        name: "Wisp",
        health: 300,
        shield: 225,
        armor: 175,
        sprintspeed: 1.2,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/wisp/WispReservoir.png.webp",
        ability2: "/abilityIcons/wisp/WispList.png.webp",
        ability3: "/abilityIcons/wisp/WispHarnessTheLight.png.webp",
        ability4: "/abilityIcons/wisp/WispSolGate.png.webp",
        ability1Name: "Reservoirs",
        ability2Name: "Will-O-Wisp",
        ability3Name: "Breach Surge",
        ability4Name: "Sol Gate"
    },{
        name: "Wukong",
        health: 450,
        shield: 300,
        armor: 250,
        sprintspeed: 1,
        energy: 180,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/wukong/WukongHairOfTheKing.png.webp",
        ability2: "/abilityIcons/wukong/WukongCloudWalker.png.webp",
        ability3: "/abilityIcons/wukong/WukongDefy.png.webp",
        ability4: "/abilityIcons/wukong/WukongPrimalFury.png.webp",
        ability1Name: "Celestial Twin",
        ability2Name: "Cloud Walker",
        ability3Name: "Defy",
        ability4Name: "Primal Fury"
    },{
        name: "Wukong Prime",
        health: 450,
        shield: 360,
        armor: 275,
        sprintspeed: 1.05,
        energy: 195,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/wukong/WukongHairOfTheKing.png.webp",
        ability2: "/abilityIcons/wukong/WukongCloudWalker.png.webp",
        ability3: "/abilityIcons/wukong/WukongDefy.png.webp",
        ability4: "/abilityIcons/wukong/WukongPrimalFury.png.webp",
        ability1Name: "Celestial Twin",
        ability2Name: "Cloud Walker",
        ability3Name: "Defy",
        ability4Name: "Primal Fury"
    },{
        name: "Xaku",
        health: 291,
        shield: 267,
        armor: 137,
        sprintspeed: 1.02,
        energy: 229.5,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/xaku/BrokenFrameVoidRot.png.webp",
        ability2: "/abilityIcons/xaku/BrokenFrameTendrilGrasp.png.webp",
        ability3: "/abilityIcons/xaku/BrokenFrameEmbraceTheFallen.png.webp",
        ability4: "/abilityIcons/xaku/BrokenSelfDestruct.png.webp",
        ability1Name: "Xata's Whisper",
        ability2Name: "Graps of Lohk",
        ability3Name: "The Lost",
        ability4Name: "The Vast Untime"
    },{
        name: "Yareli",
        health: 300,
        shield: 450,
        armor: 100,
        sprintspeed: 1,
        energy: 300,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/yareli/YareliWaterTomb.png.webp",
        ability2: "/abilityIcons/yareli/YareliAquaBoard.png.webp",
        ability3: "/abilityIcons/yareli/YareliAqueousDisks.png.webp",
        ability4: "/abilityIcons/yareli/YareliCrushingWaters.png.webp",
        ability1Name: "Sea Snares",
        ability2Name: "Merulina",
        ability3Name: "Aquablades",
        ability4Name: "Riptide"
    },{
        name: "Zephyr",
        health: 450,
        shield: 450,
        armor: 100,
        sprintspeed: 1.15,
        energy: 150,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/zephyr/TenguTailWind.png.webp",
        ability2: "/abilityIcons/zephyr/TenguAirBurst.png.webp",
        ability3: "/abilityIcons/zephyr/TenguTurbulance.png.webp",
        ability4: "/abilityIcons/zephyr/TenguTornado.png.webp",
        ability1Name: "Tail Wind",
        ability2Name: "Airburst",
        ability3Name: "Turbulence",
        ability4Name: "Tornado"
    },{
        name: "Zephyr Prime",
        health: 450,
        shield: 450,
        armor: 125,
        sprintspeed: 1.2,
        energy: 225,
        duration: 100,
        efficiency: 100,
        range: 100,
        strength: 100,
        ability1: "/abilityIcons/zephyr/TenguTailWind.png.webp",
        ability2: "/abilityIcons/zephyr/TenguAirBurst.png.webp",
        ability3: "/abilityIcons/zephyr/TenguTurbulance.png.webp",
        ability4: "/abilityIcons/zephyr/TenguTornado.png.webp",
        ability1Name: "Tail Wind",
        ability2Name: "Airburst",
        ability3Name: "Turbulence",
        ability4Name: "Tornado"
    }
];

/**
 * Uses binary search on the warframes array to find the clicked element and change DOM accordingly.
 */
let warframe = localStorage.getItem("warframe");
let warframePic = localStorage.getItem("warframe-pic");
let low = 0
let high = warframes.length - 1
let mid = Math.floor((high + low) / 2)
while (low <= high){
    if ((warframes[mid].name) < warframe){
        low = mid + 1
        mid = Math.floor((high + low) / 2)
    }
    else if ((warframes[mid].name) === warframe){
        document.getElementById("warframe-name").firstElementChild.innerText = warframe;
        document.getElementById("warframe-img").setAttribute("src", warframePic);
        document.getElementById("health").innerText = warframes[mid].health;
        document.getElementById("shield").innerText = warframes[mid].shield;
        document.getElementById("armor").innerText = warframes[mid].armor;
        document.getElementById("sprintspeed").innerText = warframes[mid].sprintspeed;
        document.getElementById("energy").innerText = warframes[mid].energy;
        document.getElementById("ability-1-img").setAttribute("src", warframes[mid].ability1);
        document.getElementById("ability-2-img").setAttribute("src", warframes[mid].ability2);
        document.getElementById("ability-3-img").setAttribute("src", warframes[mid].ability3);
        document.getElementById("ability-4-img").setAttribute("src", warframes[mid].ability4);
        document.getElementById("ability-1-name").innerText = warframes[mid].ability1Name;
        document.getElementById("ability-2-name").innerText = warframes[mid].ability2Name;
        document.getElementById("ability-3-name").innerText = warframes[mid].ability3Name;
        document.getElementById("ability-4-name").innerText = warframes[mid].ability4Name;
        document.getElementById("duration").innerText = warframes[mid].duration;
        document.getElementById("efficiency").innerText = warframes[mid].efficiency;
        document.getElementById("range").innerText = warframes[mid].range;
        document.getElementById("strength").innerText = warframes[mid].strength;
        low = high + 1
    }
    else{
        high = mid - 1
        mid = Math.floor((high + low) / 2)
    }
}
let currentWarframeIndex = mid;

// Function section
/**
 * openDropdown: 
 * Opens the dropdown menu above every mod slot.
 * @param {event} obj - the event object
 * @return {void} Nothing
 */
let buttons = document.getElementsByClassName("current-polarity");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", openDropdown);
}
function openDropdown(obj){
    let dropdown = obj.currentTarget.nextElementSibling; 
    if (dropdown.style.display === "flex"){
        dropdown.style.display = "none";
    }
    else{
        dropdown.style.display = "flex";
    }
}

/**
 * changeCurrentPolarity:
 * Changes the displayed polarity of the mod slot based on the polarity clicked by the user.
 * This function takes into account of any mod within the mod slot and changes the mod capacity 
 * accordingly. 
 * @param {event} obj - the event object
 * @return {void} Nothing
 */
let polarities = document.getElementsByClassName("polarity-button");
for (let i = 0; i < polarities.length; i++){
    polarities[i].addEventListener("click", changeCurrentPolarity);
}
function changeCurrentPolarity(obj){
    let polarity = obj.currentTarget;
    let polarityImage = polarity.firstElementChild.getAttribute("src");
    let dropdown = polarity.parentElement;
    let currentPolarity = dropdown.previousElementSibling;
    let currentPolarityImage = currentPolarity.firstElementChild.getAttribute("src");
    let mod = $(currentPolarity).parent().find(".mod-wrap");
    // Check if the current mod slot contains a mod. 
    // If a mod is found, revert its cost impact on the mod capacity.
    if ($(currentPolarity).parent().hasClass("contains-mod")){
        if ($(currentPolarity).parent().hasClass("mod-slot") || $(currentPolarity).parent().is("#exilus-slot")){
            fixCurrentCapacity(mod, false);
        }
        else if ($(currentPolarity).parent().is("#aura-slot")){
            fixMaxCapacity(mod, false);
        }
    }
    if (polarityImage === null){
        if (currentPolarityImage !== null){
            updateFormaCount(false);
        }
        currentPolarity.innerHTML = "";
        currentPolarity.appendChild(document.createElement('p'));
        currentPolarity.firstElementChild.innerText = "--";
    }
    else{
        if (currentPolarityImage === null){
            updateFormaCount(true);
        }
        currentPolarity.innerHTML = "";
        currentPolarity.appendChild(document.createElement('img'));
        currentPolarity.firstElementChild.setAttribute("src", polarityImage);
    }
    if ($(currentPolarity).parent().hasClass("contains-mod")){
        // Take into account the newly neutral, positively polarized, or negatively polarized mod cost.
        if ($(currentPolarity).parent().hasClass("mod-slot") || $(currentPolarity).parent().is("#exilus-slot")){
            // If the normal or exilus mod cannot remain in the slot after the new polarity,
            // return the mod to the mod section, otherwise apply it.
            if (overCapacity(mod, mod.parent())){
                mod.parent().removeClass("contains-mod");
                mod.appendTo("#mod-section");
                sortGrid();
                alert("This new polarity is incompatible with the current mod and there is no more mod capacity. As a result, it has been added back to the mod section.")
            }
            else{
                fixCurrentCapacity(mod, true);
            }
        }
        else if ($(currentPolarity).parent().is("#aura-slot")){
            // If the aura mod cannot remain in the slot after the new polarity,
            // revert the new polarity change, otherwise apply it.
            if (overCapacity(mod, mod.parent())){
                currentPolarity.innerHTML = "";
                if (currentPolarityImage === null){
                    currentPolarity.appendChild(document.createElement('p'));
                    currentPolarity.firstElementChild.innerText = "--";
                    if (polarityImage !== null){
                        updateFormaCount(false);
                    }
                }
                else{
                    currentPolarity.appendChild(document.createElement('img'));
                    currentPolarity.firstElementChild.setAttribute("src", currentPolarityImage);    
                    if (polarityImage === null){
                        updateFormaCount(true);
                    }             
                }
                alert("This new polarity is incompatible with the current mod and there is no more mod capacity. As a result, it will not be applied.")
            }
            fixMaxCapacity(mod, true);
        }
    }
    dropdown.style.display = "none";
}

/**
 * updateFormaCount:
 * Updates the forma count.
 * @param {boolean} add - Add to the forma count if true, subtract otherwise.
 * @return {void} Nothing
 */
function updateFormaCount(add){
    let formaCount = document.getElementById("forma-count");
    let originalCount = parseInt(formaCount.innerText, 10);
    formaCount.innerText = "";
    if (add === true){
        formaCount.innerText = originalCount + 1;
    }
    else{
        formaCount.innerText = originalCount - 1;
    }
}

/**
 * updateProgressBar:
 * Update the mod capacity bar and its styling to reflect how much capacity is left.
 * @return {void} Nothing
 */
function updateProgressBar(){
    let progressBar = document.getElementById("progress-filled");
    let remaining = parseInt(document.getElementById("mod-remaining").innerText, 10);
    let max = parseInt(document.getElementById("mod-total").innerText.substring(3), 10);
    let percent = (max - remaining) * (100.0 / max);
    progressBar.style.width = `${percent}%`;
}

/**
 * sortGrid:
 * Sort the mod section alphabetically by mod name.
 * @return {void} Nothing
 */
function sortGrid(){
    let grid = $("#mod-section");
    let allMods = $("#mod-section").children().get();
    let sortedMods = allMods.sort(function(a, b){
        let nameA = $(a).find(".mod-name").text();
        let nameB = $(b).find(".mod-name").text();
        return (nameA > nameB) ? 1 : (nameA < nameB) ? -1 : 0;
    });
    grid.append(sortedMods);
}

/**
 * polarized:
 * Determines whether or not a mod slot and its mod have compatible polarities.
 * @param {jQuery} mod - jQuery object representing the mod.
 * @param {jQuery} modSlot - jQuery object representing the mod slot of the mod.
 * @return {int} - 1 if the mod's polarity is compatible with the mod slot's polarity,
 * 0 if the mod slot has no polarity, and
 * -1 if the mod's polarity is incompatible with the mod slot's polarity.
 */
function polarized(mod, modSlot){
    let currentPolarityImg = modSlot.find(".current-polarity img").attr("src");
    let modPolarityImg = mod.find(".polarity").attr("src");
    if (currentPolarityImg === undefined){
        return 0
    }
    else if (modPolarityImg === currentPolarityImg){
        return 1;
    }
    else{
        return -1;
    }
}

/**
 * fixCurrentCapacity:
 * Changes the remaining mod capacity, taking into account mod polarities.
 * @param {jQuery} mod - jQuery object representing the mod.
 * @param {boolean} decreaseSpace - decrease mod capacity if true, increase it otherwise.
 * @return {void} Nothing
 */
function fixCurrentCapacity(mod, decreaseSpace){
    let remaining = parseInt($("#mod-remaining").text(), 10);
    let modCost = parseInt(mod.find(".drain").text(), 10);
    let newRemaining = 0;
    if (polarized(mod, mod.parent()) === -1){
        modCost = Math.floor(modCost * 1.25);
    }
    else if (polarized(mod, mod.parent()) === 1){
        modCost = Math.floor(modCost * 0.5);
    }
    if (decreaseSpace == true){
        newRemaining = remaining - modCost;
    }
    else{
        newRemaining = remaining + modCost;
    }
    $("#mod-remaining").text(newRemaining);
    updateProgressBar();
}

/**
 * fixMaxCapacity:
 * Changes the max capacity and remaining mod capacity, taking into account mod polarities.
 * @param {jQuery} mod - jQuery object representing the mod.
 * @param {boolean} increaseSpace - increase mod capacity if true, decrease it otherwise.
 * @return {void} Nothing
 */
function fixMaxCapacity(mod, increaseSpace){
    let max = parseInt(document.getElementById("mod-total").innerText.substring(3), 10);
    let modCost = parseInt(mod.find(".drain").text(), 10);
    let newMax = 0;
    let remaining = parseInt($("#mod-remaining").text(), 10);
    let newRemaining = 0;
    if (polarized(mod, mod.parent()) === -1){
        modCost = Math.floor(modCost * 0.8);
    }
    else if (polarized(mod, mod.parent()) === 1){
        modCost = Math.floor(modCost * 2);
    }
    if (increaseSpace == true){
        newMax = max + modCost;
        newRemaining = remaining + modCost;
    }
    else{
        newMax = max - modCost;
        newRemaining = remaining - modCost;
    }
    $("#mod-total").text(`\u00A0/ ${newMax}`);
    $("#mod-remaining").text(newRemaining);
}

/**
 * overCapacity:
 * Determines whether or not the mod can be added based on the current mod capacity.
 * @param {jQuery} mod - jQuery object representing the mod.
 * @param {jQuery} modSlot - jQuery object representing the mod slot of the mod. 
 * @return {boolean} - True if the mod can be safely added, false otherwise.
 */
function overCapacity(mod, modSlot){
    let modCost = parseInt(mod.find(".drain").text(), 10);
    let remaining = parseInt($("#mod-remaining").text(), 10);
    if (modSlot.hasClass("mod-slot") || modSlot.is("#exilus-slot")){
        if (polarized(mod, modSlot) === -1){
            modCost = Math.floor(modCost * 1.25);
        }
        else if (polarized(mod, modSlot) === 1){
            modCost = Math.floor(modCost * 0.5);
        }
        return (remaining - modCost) < 0;
    }
    else if (modSlot.is("#aura-slot")){
        if (polarized(mod, modSlot) === -1){
            modCost = Math.floor(modCost * 0.8);
        }
        else if (polarized(mod, mod.parent()) === 1){
            modCost = Math.floor(modCost * 2);
        }
        return (remaining + modCost) < 0;
    }
}

/**
 * recalculateStat:
 * Changes the given stat based on the bonus value from the mod.
 * @param {String} modDesc - full description of the mod's effects.
 * @param {int} startIndex - the index from which to derive the value.
 * @param {boolean} revert - true if stats should be reverted, false otherwise.
 * @param {String} stat - the stat to target.
 * @return {void} Nothing
 */
function recalculateStat(modDesc, startIndex, revert, stat){
    let multiplier = 1;
    let value = 0;
    startIndex -= 1;
    while (modDesc.charAt(startIndex) !== '+' && modDesc.charAt(startIndex) !== '-'){
        value += (modDesc.charAt(startIndex).charCodeAt(0) - '0'.charCodeAt(0)) * multiplier;
        multiplier *= 10;
        startIndex -= 1;
    }
    if (modDesc.charAt(startIndex) === '-'){
        value *= -1;
    }
    if (revert){
        value *= -1;
    }
    value /= 100;
    let baseValue = 0;
    if (stat === "health"){
        baseValue = warframes[currentWarframeIndex].health;
    }
    else if (stat === "shield"){
        baseValue = warframes[currentWarframeIndex].shield;
    }
    else if (stat === "armor"){
        baseValue = warframes[currentWarframeIndex].armor;
    }
    else if (stat === "sprintspeed"){
        baseValue = warframes[currentWarframeIndex].sprintspeed;
    }
    else if (stat === "energy"){
        baseValue = warframes[currentWarframeIndex].energy;
    }
    else if (stat === "duration"){
        baseValue = warframes[currentWarframeIndex].duration;
    }
    else if (stat === "efficiency"){
        baseValue = warframes[currentWarframeIndex].efficiency;
    }
    else if (stat === "range"){
        baseValue = warframes[currentWarframeIndex].range;
    }
    else if (stat === "strength"){
        baseValue = warframes[currentWarframeIndex].strength;
    }
    // Adding the # to the string allows jQuery to use it.
    stat = "#" + stat;
    let currentStatValue = parseInt($(stat).text(), 10);
    console.log((currentStatValue / baseValue) + value);
    let newStatValue = Math.floor(((currentStatValue / baseValue) + value) * baseValue);
    console.log("new Stat Value " + newStatValue);
    $(stat).text(newStatValue);
}

/**
 * changeStats:
 * Sifts through a mod description to find every possible stat change and applies them.
 * @param {jQuery} mod - the mod to extract values from. 
 * @param {boolean} revert - true if stats should be reverted, false otherwise.
 * @return {void} Nothing
 */
function changeStats(mod, revert){
    let modDesc = mod.find(".mod-effect").text();
    let searchFor = modDesc.indexOf("% Health");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "health");
    }
    searchFor = modDesc.indexOf("% Shield Capacity");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "shield");
    }
    searchFor = modDesc.indexOf("% Armor");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "armor");
    }
    searchFor = modDesc.indexOf("% Sprint Speed");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "sprintspeed");
    }
    searchFor = modDesc.indexOf("% Energy Max");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "energy");
    }
    searchFor = modDesc.indexOf("% Ability Duration");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "duration");
    }
    searchFor = modDesc.indexOf("% Ability Efficiency");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "efficiency");
    }
    searchFor = modDesc.indexOf("% Ability Range");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "range");
    }
    searchFor = modDesc.indexOf("% Ability Strength");
    if (searchFor !== -1){
        recalculateStat(modDesc, searchFor, revert, "strength");
    }
}

$(document).ready(function() {
    // Removing the right click context menu mechanic from every mod slot.
    $(".mod-slot").bind("contextmenu", function(e) {
        return false;
    });
    $("#exilus-slot").bind("contextmenu", function(e) {
        return false;
    });
    $("#aura-slot").bind("contextmenu", function(e) {
        return false;
    });

    /**
     * Allows user to right click on a mod within a mod slot to send it back to its original place 
     * in the mod section. Mod capacity is affected.
     */
    $(".mod-wrap").mousedown(function(event){
        let mod = $(this);
        if (event.which == 3){
            if (!mod.parent().is("#mod-section")){
                if (mod.parent().hasClass("mod-slot") || mod.parent().is("#exilus-slot")){
                    fixCurrentCapacity(mod, false);
                    if (mod.parent().is("#exilus-slot")){
                        $("#exilus-img").css("width", "50px");
                    }
                    mod.parent().removeClass("contains-mod");
                    changeStats(mod, true);
                    mod.appendTo("#mod-section");
                }
                else if (mod.parent().is("#aura-slot")){
                    let modCost = parseInt(mod.find(".drain").text(), 10);
                    let remaining = parseInt($("#mod-remaining").text(), 10);
                    if (polarized(mod, mod.parent()) === -1){
                        modCost = Math.floor(modCost * 0.8);
                    }
                    else if (polarized(mod, mod.parent()) === 1){
                        modCost = Math.floor(modCost * 2);
                    }
                    /**
                     * If removing the current aura mod would make it impossible to have other 
                     * mod slots occupied, alert the user. Otherwise, remove the mod.
                     */
                    if (remaining - modCost < 0){
                        alert("Cannot remove this mod because there won't be enough mod capacity left.");
                    }
                    else{
                        $("#aura-img").css("width", "50px");
                        fixMaxCapacity(mod, false);
                        mod.parent().removeClass("contains-mod");
                        changeStats(mod, true);
                        mod.appendTo("#mod-section");
                    }
                }
            }
            sortGrid();
        }
    });
    $(".mod-wrap").draggable({
        helper: 'clone',
        appendTo: 'body',
        cursorAt: {
            left: 100,
            top: 20
        },
        start: function (event, ui) {
            let mod = $(this);
            mod.hide();
            mod.parent().removeClass("contains-mod");
            let greenBord = "#04D004";
            let greenBack = "#375223";
            let orangeBord = "#E7A268";
            let orangeBack = "#995100";
            let blueBord = "#688EF3";
            let blueBack = "#004799";
            let redBord = "#F94E4E";
            let redBack = "#581A1A";
            /**
             * When grabbed, normal mods can only be added to normal mod slots, highlighted as green.
             * Mod slots with incompatible polarities will be highlighted orange, while compatible 
             * slots are highlighted blue.
             */
            if (mod.hasClass("mod-wrap") && !mod.hasClass("exilus") && !mod.hasClass("aura")){
                $(".mod-slot").each(function(){
                    if (!$(this).hasClass("contains-mod")){
                        let modSlotPolarityImg = $(this).find(".current-polarity img").attr("src");
                        let modPolarityImg = mod.find(".polarity").attr("src");
                        if (modSlotPolarityImg === undefined){
                            $(this).css("border-color", greenBord);
                            $(this).css("background-color", greenBack);
                        }
                        else if (modSlotPolarityImg != modPolarityImg){
                            $(this).css("border-color", orangeBord);
                            $(this).css("background-color", orangeBack);
                        }
                        else{
                            $(this).css("border-color", blueBord);
                            $(this).css("background-color", blueBack);
                        }
                    }
                });
                if (!$("#aura-slot").hasClass("contains-mod")){
                    $("#aura-slot").css("border-color", redBord);
                    $("#aura-slot").css("background-color", redBack);
                }
                if (!$("#exilus-slot").hasClass("contains-mod")){
                    $("#exilus-slot").css("border-color", redBord);
                    $("#exilus-slot").css("background-color", redBack);
                }
            }
            /**
             * When grabbed, aura mods can only be added to the aura mod slot, highlighted as green.
             * An aura slot with an incompatible polarity will be highlighted orange, while a compatible 
             * slot is highlighted blue.
             */
            else if (mod.hasClass("mod-wrap") && mod.hasClass("aura") && !mod.hasClass("exilus")){
                $(".mod-slot").each(function(){
                    if (!$(this).hasClass("contains-mod")){
                        $(this).css("border-color", redBord);
                        $(this).css("background-color", redBack);
                    }
                });
                if (!$("#aura-slot").hasClass("contains-mod")){
                    let modSlotPolarityImg = $("#aura-slot").find(".current-polarity img").attr("src");
                    let modPolarityImg = mod.find(".polarity").attr("src");
                    if (modSlotPolarityImg === undefined){
                        $("#aura-slot").css("border-color", greenBord);
                        $("#aura-slot").css("background-color", greenBack);
                    }
                    else if (modSlotPolarityImg != modPolarityImg){
                        $("#aura-slot").css("border-color", orangeBord);
                        $("#aura-slot").css("background-color", orangeBack);
                    }
                    else{
                        $("#aura-slot").css("border-color", blueBord);
                        $("#aura-slot").css("background-color", blueBack);
                    }
                }
                if (!$("#exilus-slot").hasClass("contains-mod")){
                    $("#exilus-slot").css("border-color", redBord);
                    $("#exilus-slot").css("background-color", redBack);
                }
                if (mod.parent().is("#aura-slot")){
                    $("#aura-img").css("width", "50px");
                }
            }
            /**
             * When grabbed, exilus mods can only be added to the exilus mod slot, highlighted as green.
             * An exilus slot with an incompatible polarity will be highlighted orange, while a compatible 
             * slot is highlighted blue.
             */
            else if (mod.hasClass("mod-wrap") && mod.hasClass("exilus") && !mod.hasClass("aura")){
                $(".mod-slot").each(function(){
                    if (!$(this).hasClass("contains-mod")){
                        $(this).css("border-color", redBord);
                        $(this).css("background-color", redBack);
                    }
                });
                if (!$("#aura-slot").hasClass("contains-mod")){
                    $("#aura-slot").css("border-color", redBord);
                    $("#aura-slot").css("background-color", redBack);
                }
                if (!$("#exilus-slot").hasClass("contains-mod")){
                    let modSlotPolarityImg = $("#exilus-slot").find(".current-polarity img").attr("src");
                    let modPolarityImg = mod.find(".polarity").attr("src");
                    if (modSlotPolarityImg === undefined){
                        $("#exilus-slot").css("border-color", greenBord);
                        $("#exilus-slot").css("background-color", greenBack);
                    }
                    else if (modSlotPolarityImg != modPolarityImg){
                        $("#exilus-slot").css("border-color", orangeBord);
                        $("#exilus-slot").css("background-color", orangeBack);
                    }
                    else{
                        $("#exilus-slot").css("border-color", blueBord);
                        $("#exilus-slot").css("background-color", blueBack);
                    }
                }
                if (mod.parent().is("#exilus-slot")){
                    $("#exilus-img").css("width", "50px");
                }
            }
            // When grabbed, the mod capacity will be changed as if the mod wasn't applied to the slot.
            if (mod.parent().hasClass("mod-slot") || mod.parent().is("#exilus-slot")){
                fixCurrentCapacity(mod, false);
                changeStats(mod, true);
            }
            else if (mod.parent().is("#aura-slot")){
                fixMaxCapacity(mod, false);
                changeStats(mod, true);
            }
        },
        stop: function (event, ui) {
            let mod = $(this);
            mod.show();
            // When let go, the mod capacity will be changed accordingly.
            if (mod.parent().hasClass("mod-slot") || mod.parent().is("#exilus-slot")){
                fixCurrentCapacity(mod, true);
                changeStats(mod, false);
            }
            else if (mod.parent().is("#aura-slot")){
                fixMaxCapacity(mod, true);
                changeStats(mod, false);
            }
        },
        revert: function(){
            let mod = $(this);
            if (mod.parent().is("#aura-slot")){
                $("#aura-img").css("width", "0px");
            }
            else if (mod.parent().is("#exilus-slot")){
                $("#exilus-img").css("width", "0px");
            }
            // Revert all slot colors to normal.
            mod.parent().addClass("contains-mod");
            $(".mod-slot").css("border-color", "white");
            $(".mod-slot").css("background-color", "transparent");
            $("#aura-slot").css("border-color", "white");
            $("#aura-slot").css("background-color", "transparent");
            $("#exilus-slot").css("border-color", "white");
            $("#exilus-slot").css("background-color", "transparent");
            return true;
        },
        scroll: true,
        revertDuration: 0
    });
    $(".mod-slot").droppable({
        accept: function(dragged){
            /**
             * Accept only 1 normal mod (at a time) that doesn't drain the remaining mod capacity below 0.
             */
            let modSlot = $(this);
            if (modSlot.hasClass("contains-mod")){
                return false;
            }
            else if (dragged.hasClass("mod-wrap") && !dragged.hasClass("exilus") && !dragged.hasClass("aura")){
                if (overCapacity(dragged, modSlot)){
                    return false;
                }
                return true;
            }
            return false;
        },
        tolerance: "pointer",
        drop: function(event, ui){
            let modSlot = $(this);
            modSlot.append(ui.draggable);
            modSlot.addClass("contains-mod");
        }
    });
    $("#aura-slot").droppable({
        /**
         * Accept only 1 aura mod (at a time).
         */
        accept: function(dragged){
            let modSlot = $(this);
            if (modSlot.hasClass("contains-mod")){
                return false;
            }
            else if (dragged.hasClass("mod-wrap") && dragged.hasClass("aura") && !dragged.hasClass("exilus")){
                return true;
            }
            return false;
        },
        tolerance: "pointer",
        drop: function(event, ui){
            let modSlot = $(this);
            modSlot.append(ui.draggable);
            modSlot.addClass("contains-mod");
            $("#aura-img").css("width", "0px");
        }
    });
    $("#exilus-slot").droppable({
        /**
         * Accept only 1 exilus mod (at a time) that doesn't drain the remaining mod capacity below 0.
         */
        accept: function(dragged){
            let modSlot = $(this);
            if (modSlot.hasClass("contains-mod")){
                return false;
            }
            else if (dragged.hasClass("mod-wrap") && dragged.hasClass("exilus") && !dragged.hasClass("aura")){
                if (overCapacity(dragged, modSlot)){
                    return false;
                }
                return true;
            }
            return false;
        },
        tolerance: "pointer",
        drop: function(event, ui){
            let modSlot = $(this);
            modSlot.append(ui.draggable);
            modSlot.addClass("contains-mod");
            $("#exilus-img").css("width", "0px");
        }
    });
});