/* struct */
var player = {
    name: 'unnamed',
    rifle_skill: 0,
    cash: 700,
    supplies: {food: 0, ammo: 0, clothes: 0},
    health: {hurt: false, sick: false}
}

function input_type_mismatch_exception(required, actual){
    console.log("Required type is: " + required + " and actual type is: " + actual)
}

function set_name(new_name){
    if(typeof(new_name) == "string"){
        player.name = new_name
    }
    else {
        throw new input_type_mismatch_exception(typeof String, typeof new_name)
    }
}

function change_rifle_skill(new_rifle_skill){
    if(Number.isInteger(new_rifle_skill)){
        player.rifle_skill = new_rifle_skill
    }
    else{
        throw new input_type_mismatch_exception('integer', typeof new_rifle_skill)
    }
}

function debit(money) {
    if(player.cash == 0){
        console.log('No money left')
    }
    else if(typeof(money) == 'number') {
        //check for the money left
        player.cash -= money
    }
    else{
        throw new input_type_mismatch_exception('number', typeof money)
    }
}

function stock_food(amount) {
    if(typeof(amount) == 'number') {
        player.supplies.food += amount
    }
    else{
        throw new input_type_mismatch_exception('number', typeof amount)
    }
}

function consume_food(amount) {
    if(player.supplies.food == 0){
        console.log('No food left')
    }
    else if(typeof(amount) == 'number') {
        player.supplies.food -= amount
    }
    else{
        throw new input_type_mismatch_exception('number', typeof amount)
    }
}

function stock_ammo(amount) {
    if(typeof(amount) == 'number') {
        player.supplies.ammo += amount
    }
    else{
        throw new input_type_mismatch_exception('number', typeof amount)
    }
}

function use_ammo(amount) {
    if(player.supplies.ammo == 0){
        console.log('No ammos left')
    }
    else if(typeof(amount) == 'number') {
        player.supplies.ammo -= amount
    }
    else{
        throw new input_type_mismatch_exception('number', typeof amount)
    }
}

function add_clothes(pair) {
    if(typeof(pair) == 'number') {
        player.supplies.clothes += pair
    }
    else{
        throw new input_type_mismatch_exception('number', typeof pair)
    }
}

function remove_clothes(pair) {
    if(player.supplies.clothes == 0){
        console.log('No clothes left')
    }
    else if(typeof(pair) == 'number') {
        player.supplies.clothes -= pair
    }
    else{
        throw new input_type_mismatch_exception('number', typeof pair)
    }
}

function change_hurt_condition(condition){
    if(typeof(condition) == 'boolean'){
        player.health.hurt = condition
    }
    else {
        throw new input_type_mismatch_exception('boolean', typeof condition)
    }
}

function change_sick_condition(condition){
    if(typeof(condition) == 'boolean'){
        player.health.sick = condition
    }
    else {
        throw new input_type_mismatch_exception('boolean', typeof condition)
    }
}



try{
    console.log('A Tiny Test WITHOUT ERROR/EXCEPTION')
    console.assert(player.name == 'unnamed')
    set_name('momo')
    console.assert(player.name == 'momo')
    console.assert(player.rifle_skill == 0)
    change_rifle_skill(5)
    console.assert(player.rifle_skill == 5)
    console.assert(player.cash == 700)
    debit(70)
    console.assert(player.cash == 630)
    console.assert(player.supplies.food == 0)
    stock_food(100)
    console.assert(player.supplies.food == 100)
    consume_food(50)
    console.assert(player.supplies.food == 50)
    console.assert(player.supplies.ammo == 0)
    stock_ammo(200)
    console.assert(player.supplies.ammo == 200)
    use_ammo(50)
    console.assert(player.supplies.ammo == 150)
}catch(input_type_mismatch_exception){
    console.log("ALERT:: exception happend")
}

try {
    console.log('A Tiny Test WITH EXCEPTION')
    set_name(2)
    change_rifle_skill(6.6)
    debit('ababab')
} catch (input_type_mismatch_exception) {
    console.log("exception is handled")
}
