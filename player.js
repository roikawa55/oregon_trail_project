/* struct */
var player = {
    name: 'unnamed',
    rifle_skill: 0,
    cash: 700,
    supplies: {food: 0, ammo: 0, clothes: 0},
    health: {hurt: 0, sick: 0}
};


function set_name(new_name){
    if(new_name instanceof String){
        player.name = new_name
    }
    else {
        throw new input_type_mismatch_exception(typeof String, typeof new_name)
    }
}

function input_type_mismatch_exception(required, actual){
    console.log("Required type is: " + required + " and actual type is: " + actual)
}

function set_rifle_skill(new_rifle_skill){
    if(Number.isInteger(new_rifle_skill)){
        player.rifle_skill = new_rifle_skill
    }
    else{
        throw new input_type_mismatch_exception(typeof Number, typeof new_rifle_skill)
    }
}




console.log(player.name);
try{
    set_name("THIS IS NEW NAME")

}catch(input_type_mismatch_exception){
    console.log("exception is handled")
}
