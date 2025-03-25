

class CULTIVATION_MANUAL{
    mastery = 0

    constructor (name,rank,description,cult_effect,regen_effect) {
        this.name=name
        this.rank=rank
        this.description=description
        this.cult_effect=cult_effect
        this.regen_effect=regen_effect
    }

    get_manual(){
        //if can read
        cultivation_manual_inventory.push(this)
        //sendMessage("You learned the "+ this.name + "cultivation technique.")
    }
    use_manual(){
      player.breathing_manual_equiped = this
        //set in game data
    }
    cultivate(){
      let btn = document.getElementById("cultivate-btn")
      if(player.isCultivating){
        sendMessage("You stopped cultivating.")
        player.isCultivating=false
        btn.textContent="Cultivate"
      }else{
        sendMessage("You started cultivating.")
        player.isCultivating=true
        btn.textContent="Stop Cultivation"
      }
      let cult_effect = player.additional_cultivation_speed_effect + this.cult_effect
      let t = setInterval(()=>{
        if(!player.isCultivating){
          
          clearInterval(t)
        }
        if(player.cultivation_progress>=getRealm(player.realm).bottleneck){
          player.cultivation_progress=getRealm(player.realm).bottleneck
          //can breaktrhrough
          clearInterval(t)
          sendMessage("You stopped cultivating, you can breaktrought.")
          refresh_stat()
          player.isCultivating=false
          
        }else{
          player.cultivation_progress+=cult_effect
        }
        refresh_stat()
      },1000)
    }

}


function open_switch_manual_menue(){
  let menue = document.getElementById("switch-manual-menue")
  menue.innerHTML=`
    <h1 class="underlined">Manual Learned :</h1>
    <div id="manual-container"></div>
  `
  for (const manual of cultivation_manual_inventory) {
    const manualDiv=document.createElement("div")
    manualDiv.classList.add("item-div")
    manualDiv.innerHTML=`<img src="assets/martial_arts_manual_base.png" alt="${manual.name}" draggable="false"></img>`
    manualDiv.addEventListener("click",()=>{
      document.getElementById("current-manual").innerHTML=`
      <h2>${manual.name}</h2>
      <p>${manual.description}</p>
      <p>Cultivation Progress / seconde : ${manual.cult_effect+player.additional_cultivation_speed_effect}</p>
      <button id="switch-button">Switch</button>
      `
      document.getElementById("switch-button").addEventListener("click",()=>{
        player.breathing_manual_equiped=manual
        
      document.getElementById("current-manual").innerHTML=`
      <h2>${player.breathing_manual_equiped.name}</h2>
      <p>${player.breathing_manual_equiped.description}</p>
      <p>Cultivation Progress / seconde : ${player.breathing_manual_equiped.cult_effect+player.additional_cultivation_speed_effect}</p>
      `
      },{once:true})
    })
  add_tooltip(manualDiv,manual.name)
  document.getElementById("manual-container").appendChild(manualDiv)
  }
  
}


const three_power = new CULTIVATION_MANUAL(
  "Three Power Breathing Method",
  "3rd rate",
  "Used to train mind and body through qi ventilation, hard to reach the level of third master even if practiced for a long time.",
  1,
  1
);

const iron_bone_forge = new CULTIVATION_MANUAL(
  "Iron Bone Forging Tempering",
  "3rd rate",
  "A basic body-hardening method used by martial artists to strengthen bones and muscles.",
  3,
  1
);

const flowing_river_qi = new CULTIVATION_MANUAL(
  "Flowing River Qi Cultivation",
  "2nd rate",
  "A technique that mimics the ceaseless flow of a river, enhancing stamina and endurance.",
  10,
  1
);

const blazing_sun_fist = new CULTIVATION_MANUAL(
  "Blazing Sun Circulation",
  "2nd rate",
  "A martial breathing method that enhances internal heat, allowing for stronger strikes.",
  15,
  1
);

const storm_wind_breathing = new CULTIVATION_MANUAL(
  "Storm Wind Breathing",
  "1st rate",
  "A method that channels the force of the wind, improving agility and reaction speed.",
  30,
  1
);

const heavenly_turtle_breathing = new CULTIVATION_MANUAL(
  "Heavenly Turtle Breathing",
  "human grade",
  "A legendary technique that enhances longevity and internal qi resilience.",
  60,
  1
);

const azure_dragon_method = new CULTIVATION_MANUAL(
  "Azure Dragon Body Refinement",
  "master grade",
  "Harness the strength of the Azure Dragon to increase physical resilience and qi circulation.",
  150,
  1
);

const phantom_shadow_steps = new CULTIVATION_MANUAL(
  "Phantom Shadow Steps",
  "grand master grade",
  "A breathing technique that allows the user to move like a ghost, evading attacks effortlessly.",
  400,
  1
);

const tyrant_king_qi = new CULTIVATION_MANUAL(
  "Tyrant King's Qi Manipulation",
  "earth grade",
  "A domineering technique that allows the user to suppress opponents with sheer presence.",
  2000,
  1
);

const void_sky_breathing = new CULTIVATION_MANUAL(
  "Void Sky Breathing",
  "sky grade",
  "A mysterious method that refines qi to an ethereal state, granting immense power.",
  4000,
  1
);

const celestial_ascent_method = new CULTIVATION_MANUAL(
  "Celestial Ascent Method",
  "heaven grade",
  "A divine technique that allows one to break free from mortal limitations and ascend to the heavens.",
  8000,
  1
);

// Sky Demon Cult
const sword_force_of_the_heavenly_demon = new CULTIVATION_MANUAL(
  "Sword Force of the Heavenly Demon",
  "heaven grade",
  "A breathing technique created by the Heavenly Demon Patriarch, founder and Ancestor of the Heavenly Demon Divine Cult. It allows one to train sword skills and meditate at the same time with rapid and stable qi energy circulation.",
  6000,
  1
);

// Forces of Justice
const holy_light_breathing = new CULTIVATION_MANUAL(
  "Holy Light Breathing",
  "heaven grade",
  "A technique that channels the power of the heaven, enhancing healing and granting immense power.",
  6000,
  1
);

// Forces of Evil
const dark_shadow_breathing = new CULTIVATION_MANUAL(
  "Dark Shadow Breathing",
  "heaven grade",
  "A technique that channels the power of the underworld, enhancing raw strength and destruction abilities.",
  6000,
  1
);

// Forbidden
const black_dragon_breath = new CULTIVATION_MANUAL(
  "Black Dragon's Breath",
  "forbidden",
  "A forbidden technique that consumes the user's life force to unleash devastating power.",
  20000,
  1
);


const tempered_skin_manual = new CULTIVATION_MANUAL(
  "Tempered Skin Manual",
  "3rd rate",
  "A basic manual used by outer sect disciples to harden the skin against minor injuries.",
  2,
  1
);

const stone_wall_breathing = new CULTIVATION_MANUAL(
  "Stone Wall Breathing",
  "2nd rate",
  "A steady breathing method that strengthens muscles and bones, giving the user solid defense like a stone wall.",
  12,
  1
);

const crimson_flame_method = new CULTIVATION_MANUAL(
  "Crimson Flame Method",
  "1st rate",
  "A powerful cultivation that ignites internal qi like flames, increasing offensive power drastically.",
  25,
  1
);

const black_tortoise_defense = new CULTIVATION_MANUAL(
  "Black Tortoise Defense",
  "human grade",
  "Inspired by the Black Tortoise, this method greatly enhances defense and internal qi resistance.",
  70,
  1
);

const white_tiger_fury = new CULTIVATION_MANUAL(
  "White Tiger's Fury",
  "master grade",
  "The user channels the rage of the White Tiger, increasing their physical strength and ferocity.",
  160,
  1
);

const shadow_step_art = new CULTIVATION_MANUAL(
  "Shadow Step Art",
  "grand master grade",
  "An advanced movement art that allows the user to step through shadows and evade attacks.",
  350,
  1
);

const imperial_dragon_method = new CULTIVATION_MANUAL(
  "Imperial Dragon Method",
  "earth grade",
  "A cultivation art that builds the user's qi like a soaring imperial dragon, overwhelming opponents.",
  1800,
  1
);

const celestial_rainfall_breathing = new CULTIVATION_MANUAL(
  "Celestial Rainfall Breathing",
  "sky grade",
  "This heavenly art refines qi like the falling rain from the sky, nourishing the body and soul.",
  4500,
  1
);

const immortal_void_scripture = new CULTIVATION_MANUAL(
  "Immortal Void Scripture",
  "heaven grade",
  "An ancient scripture rumored to be written by immortals, allowing the user to touch the realm of the void.",
  9000,
  1
);

  const manual_registery = {
    "Three Power Breathing Method": three_power,
    "Iron Bone Forging Tempering": iron_bone_forge,
    "Flowing River Qi Cultivation": flowing_river_qi,
    "Blazing Sun Circulation": blazing_sun_fist,
    "Storm Wind Breathing": storm_wind_breathing,
    "Heavenly Turtle Breathing": heavenly_turtle_breathing,
    "Azure Dragon Body Refinement": azure_dragon_method,
    "Phantom Shadow Steps": phantom_shadow_steps,
    "Tyrant King's Qi Manipulation": tyrant_king_qi,
    "Void Sky Breathing": void_sky_breathing,
    "Celestial Ascent Method": celestial_ascent_method,
    "Sword Force of the Heavenly Demon": sword_force_of_the_heavenly_demon,
    "Holy Light Breathing": holy_light_breathing,
    "Dark Shadow Breathing": dark_shadow_breathing,
    "Black Dragon's Breath": black_dragon_breath,
    "Tempered Skin Manual": tempered_skin_manual,
    "Stone Wall Breathing": stone_wall_breathing,
    "Crimson Flame Method": crimson_flame_method,
    "Black Tortoise Defense": black_tortoise_defense,
    "White Tiger's Fury": white_tiger_fury,
    "Shadow Step Art": shadow_step_art,
    "Imperial Dragon Method": imperial_dragon_method,
    "Celestial Rainfall Breathing": celestial_rainfall_breathing,
    "Immortal Void Scripture": immortal_void_scripture
  };
  let cultivation_manual_inventory =[three_power]
