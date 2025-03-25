class REALM{
    constructor(name,bottleneck,id){
        this.name=name
        this.bottleneck=bottleneck
        this.id=id
    }
    static breakthrough(){
        
    }
}
const civilian = new REALM("Civilian", 1000, 0);
civilian.breakthrough = () => {
   player.realm=1
};

const third_rate = new REALM("Third rate", 5000, 1);           // x5
const second_rate = new REALM("Second rate", 25000, 2);        // x5
const first_rate = new REALM("First rate", 125000, 3);         // x5

const entry_master = new REALM("Entry Master", 625000, 4);             // x5
const proficient_master = new REALM("Proficient Master", 3125000, 5);  // x5
const peak_master = new REALM("Peak Master", 15625000, 6);             // x5

const entry_super_master = new REALM("Entry Super Master", 78125000, 7);   // x5
const proficient_super_master = new REALM("Proficient Super Master", 390625000, 8); // x5
const peak_super_master = new REALM("Peak Super Master", 1953125000, 9);   // x5

const entry_superior_master = new REALM("Entry Superior Master", 9765625000, 10);    // x5
const proficient_superior_master = new REALM("Proficient Superior Master", 48828125000, 11); // x5
const peak_superior_master = new REALM("Peak Superior Master", 244140625000, 12);     // x5

const entry_supreme_master = new REALM("Entry Supreme Master", 1220703125000, 13);    // x5
const proficient_supreme_master = new REALM("Proficient Supreme Master", 6103515625000, 14); // x5
const peak_supreme_master = new REALM("Peak Supreme Master", 30517578125000, 15);     // x5

const divine_master = new REALM("Divine Master", 152587890625000, 16);        // x5
const heavenly_master = new REALM("Heavenly Master", 762939453125000, 17);    // x5
const void_master = new REALM("Void Master", 3814697265625000, 18);           // x5
const willful_master = new REALM("Willful Master", 999999999999999, 19);     // Final


const realm_registry = {
    0: civilian,
    1: third_rate,
    2: second_rate,
    3: first_rate,
    4: entry_master,
    5: proficient_master,
    6: peak_master,
    7: entry_super_master,
    8: proficient_super_master,
    9: peak_super_master,
    10: entry_superior_master,
    11: proficient_superior_master,
    12: peak_superior_master,
    13: entry_supreme_master,
    14: proficient_supreme_master,
    15: peak_supreme_master,
    16: divine_master,
    17: heavenly_master,
    18: void_master,
    19: willful_master
};

function getRealm(index){
    return realm_registry[index]
    
}