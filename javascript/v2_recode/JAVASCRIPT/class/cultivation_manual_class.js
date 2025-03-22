let cultivation_manual_inventory_v2 =[]


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
        cultivation_manual_inventory_v2.push(this)
        //sendMessage("You learned the "+ this.name + "cultivation technique.")
    }
    use_manual(){
        //set in game data
    }

}

const three_power = new CULTIVATION_MANUAL(
    "Three Power Breathing Method",
    "3rd rate",
    "Used to train mind and body through qi ventilation, hard to reach the level of third master even if pratcticed for a lifetime.",
    1/30,
    1
)
const iron_bone_forge = new CULTIVATION_MANUAL(
    "Iron Bone Forging Tempering",
    "3rd rate",
    "A basic body-hardening method used by martial artists to strengthen bones and muscles.",
    1 / 28,
    1
  );
  
  const flowing_river_qi = new CULTIVATION_MANUAL(
    "Flowing River Qi Cultivation",
    "2nd rate",
    "A technique that mimics the ceaseless flow of a river, enhancing stamina and endurance.",
    1,
    1
  );
  
  const blazing_sun_fist = new CULTIVATION_MANUAL(
    "Blazing Sun Circulation",
    "2nd rate",
    "A martial breathing method that enhances internal heat, allowing for stronger strikes.",
    1.5,
    1
  );
  
  const storm_wind_breathing = new CULTIVATION_MANUAL(
    "Storm Wind Breathing",
    "1st rate",
    "A method that channels the force of the wind, improving agility and reaction speed.",
    2,
    1
  );
  
  const heavenly_turtle_breathing = new CULTIVATION_MANUAL(
    "Heavenly Turtle Breathing",
    "human grade",
    "A legendary technique that enhances longevity and internal qi resilience.",
    5,
    1
  );
  
  const azure_dragon_method = new CULTIVATION_MANUAL(
    "Azure Dragon Body Refinement",
    "master grade",
    "Harness the strength of the Azure Dragon to increase physical resilience and qi circulation.",
    8,
    1
  );
  
  const phantom_shadow_steps = new CULTIVATION_MANUAL(
    "Phantom Shadow Steps",
    "grand master grade",
    "A breathing technique that allows the user to move like a ghost, evading attacks effortlessly.",
    20,
    1
  );
  
  const tyrant_king_qi = new CULTIVATION_MANUAL(
    "Tyrant King's Qi Manipulation",
    "earth grade",
    "A domineering technique that allows the user to suppress opponents with sheer presence.",
    100,
    1
  );
  
  const void_sky_breathing = new CULTIVATION_MANUAL(
    "Void Sky Breathing",
    "sky grade",
    "A mysterious method that refines qi to an ethereal state, granting immense power.",
    100,
    1
  );
  
  const celestial_ascent_method = new CULTIVATION_MANUAL(
    "Celestial Ascent Method",
    "heaven grade",
    "A divine technique that allows one to break free from mortal limitations and ascend to the heavens.",
    200,
    1
  );
  
  // Sky Demon Cult
  const sword_force_of_the_heavenly_demon = new CULTIVATION_MANUAL(
    "Sword Force of the Heavenly Demon",
    "heaven grade",
    "A breathing technique created by the Heavenly Demon Patriarch, founder and Ancestor of the Heavenly Demon Divine Cult. It allows one to train sword skills and meditate at the same time with rapid and stable qi energy circulation.",
    150,
    1
  );
  
  // Forces of Justice
  const holy_light_breathing = new CULTIVATION_MANUAL(
    "Holy Light Breathing",
    "heaven grade",
    "A technique that channels the power of the heaven, enhancing healing and granting immense power.",
    150,
    1
  );
  
  // Forces of Evil
  const dark_shadow_breathing = new CULTIVATION_MANUAL(
    "Dark Shadow Breathing",
    "heaven grade",
    "A technique that channels the power of the underworld, enhancing raw strength and destruction abilities.",
    150,
    1
  );
  
  // Forbidden
  const black_dragon_breath = new CULTIVATION_MANUAL(
    "Black Dragon's Breath",
    "forbidden",
    "A forbidden technique that consumes the user's life force to unleash devastating power.",
    500,
    1
  );
