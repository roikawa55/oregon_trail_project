import { input_type_mismatch_exception, 
    health_category_not_found_exception,
    money_shortage
   } from "./exception.js"


var player = {
    name : 'undefined',
    oxen : 0,
    rifle_skill : 1,
    supplies : {food: 0, bullets: 0, clothes: 0, miscellaneous: 0},
    health : {hurt: "", sick: ""},
    cash : 700
}

function check_type_match(arg, required){
   if(typeof(arg) != required)
       throw new input_type_mismatch_exception(required, typeof arg)
}

function load_player_from_object(info_obj){
   set_name(info_obj.name)
   stock_by_attribute("oxen", info_obj.oxen)
   stock_by_attribute("food", info_obj.food)
   stock_by_attribute("bullets", info_obj.bullets)
   stock_by_attribute("clothes", info_obj.clothes)
   stock_by_attribute("miscellaneous", info_obj.miscellaneous)
   debit(this.name + this.oxen + this.supplies.food 
       + this.supplies.bullets + this.supplies.clothes + this.supplies.miscellaneous)
}

function set_name(new_name){
   check_type_match(new_name, "string")
   player.name = new_name
}

function lose_oxen(oxen){
   check_type_match(oxen, "number")
   player.oxen -= oxen
}

function set_rifle_skill(new_rifle_skill){
   if(Number.isInteger(new_rifle_skill)){
       player.rifle_skill = new_rifle_skill
   }
   else{
       throw new input_type_mismatch_exception('integer', typeof new_rifle_skill)
   }
}

function debit(money) {
   if(player.cash <= 0){
       console.log('No money left')
       //throw new exception
   }
   this.check_type_match(money, "number")
   player.cash -= money
   
}

function consume_food(amount) {
   if(player.supplies.food == 0){
       console.log('No food left')
   }
   check_type_match(amount, "number")
   player.supplies.food -= amount
}

function consume_bullets(amount) {
   if(player.supplies.bullets == 0){
       console.log('No ammos left')
   }
   check_type_match(amount, "number")
   player.supplies.bullets -= amount
}

function consume_clothes(pair) {
   if(player.supplies.clothes == 0){
       console.log('No clothes left')
   }
   check_type_match(pair, "number")
   player.supplies.clothes -= pair
}

function consume_miscellaneous(amount) {
   if(player.supplies.miscellaneous == 0){
       console.log('No clothes left')
   }
   check_type_match(amount, 'number')
   player.supplies.miscellaneous -= amount
}

function stock_by_attribute(attribute, amount){
   if(typeof(attribute) != 'string')
       throw new input_type_mismatch_exception('number', typeof amount)

   if(typeof(amount) != 'number')
       throw new input_type_mismatch_exception('number', typeof amount)
       
   switch (attribute) {
       case 'oxen':
           player.oxen += amount
           break;
       case 'food':
           player.supplies.food += amount
           break;
       case 'bullets':
           player.supplies.bullets += amount
           break;
       case 'clothes':
           player.supplies.clothes += amount
           break;
       case 'miscellaneous':
           player.supplies.miscellaneous += amount
           break;
       default:
           break;
   }
}

function change_health_condition(category, condition){
   if(typeof(category) != 'string' || typeof(condition) != 'string'){
       throw new input_type_mismatch_exception("string", typeof condition)
   }
   else if(category == 'hurt'){
       player.health.hurt = condition
   }
   else if(category == 'sick'){
       player.health.sick = condition
   }
   else{
       console.log('category is: ' + category)
       throw new health_category_not_found_exception(category)
   }
}

function get_cash_amount(){
    console.log("player currently has $" + player.cash)
    return player.cash
}
