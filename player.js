import { input_type_mismatch_exception, 
         health_category_not_found_exception,
         money_shortage
        } from "./exception.js"


class player{    
    #name = 'undefined'
    #oxen = 0
    #rifle_skill = 1
    #supplies = {food: 0, bullets: 0, clothes: 0, miscellaneous: 0}
    #health= {hurt: "", sick: ""}
    #cash = 700
    

    constructor(name, oxen, food, bullets, clothes, miscellaneous){
        this.set_name(name)
        this.stock_oxen(oxen)
        this.stock_food(food)
        this.stock_bullets(bullets)
        this.stock_clothes(clothes)
        this.stock_miscellaneous(miscellaneous)
        this.debit(this.#name + this.#oxen + this.#supplies.food 
            + this.#supplies.bullets + this.#supplies.clothes + this.#supplies.miscellaneous)
    }

    check_type_match(arg, required){
        if(typeof(arg) != required)
            throw new input_type_mismatch_exception(required, typeof arg)
    }

    load_player_from_object(info_obj){
        this.set_name(info_obj.name)
        this.stock_oxen(info_obj.oxen)
        this.stock_food(info_obj.food)
        this.stock_bullets(info_obj.bullets)
        this.stock_clothes(info_obj.clothes)
        this.stock_miscellaneous(info_obj.miscellaneous)
        this.debit(this.#name + this.#oxen + this.#supplies.food 
            + this.#supplies.bullets + this.#supplies.clothes + this.#supplies.miscellaneous)
    }


    set_name(new_name){
        this.check_type_match(new_name, "string")
        this.#name = new_name
    }

    stock_oxen(oxen){
        this.check_type_match(oxen, "number")
        this.#oxen += oxen
    }

    lose_oxen(oxen){
        this.check_type_match(oxen, "number")
        this.#oxen -= oxen
    }

    set_rifle_skill(new_rifle_skill){
        if(Number.isInteger(new_rifle_skill)){
            this.#rifle_skill = new_rifle_skill
        }
        else{
            throw new input_type_mismatch_exception('integer', typeof new_rifle_skill)
        }
    }
    
    debit(money) {
        if(this.#cash <= 0){
            console.log('No money left')
            //throw new exception
        }
        this.check_type_match(money, "number")
        this.#cash -= money
        
    }
    
    stock_food(amount) {
        this.check_type_match(amount, "number")
        this.#supplies.food += amount
    }
    
    consume_food(amount) {
        if(this.#supplies.food == 0){
            console.log('No food left')
        }
        this.check_type_match(amount, "number")
        this.#supplies.food -= amount
    }
    
    stock_bullets(amount) {
        this.check_type_match(amount, "number")
        this.#supplies.bullets += amount
    }
    
    consume_bullets(amount) {
        if(this.#supplies.bullets == 0){
            console.log('No ammos left')
        }
        this.check_type_match(amount, "number")
        this.#supplies.bullets -= amount
    }
    
    stock_clothes(pair) {
        this.check_type_match(pair, "number")
        this.#supplies.clothes += pair
    }
    
    consume_clothes(pair) {
        if(this.#supplies.clothes == 0){
            console.log('No clothes left')
        }
        this.check_type_match(pair, "number")
        this.#supplies.clothes -= pair
    }

    stock_miscellaneous(amount){
        this.check_type_match(amount, "number")
        this.#supplies.miscellaneous += amount
    }

    consume_miscellaneous(amount) {
        if(this.#supplies.miscellaneous == 0){
            console.log('No clothes left')
        }
        this.check_type_match(amount, 'number')
        this.#supplies.miscellaneous -= amount
    }

    stock_by_attribute(attribute, amount){
        if(typeof(attribute) != 'string')
            throw new input_type_mismatch_exception('number', typeof amount)

        if(typeof(amount) != 'number')
            throw new input_type_mismatch_exception('number', typeof amount)
            
        switch (attribute) {
            case 'oxen':
                this.#oxen += amount
                break;
            case 'food':
                this.#supplies.food += amount
                break;
            case 'bullets':
                this.#supplies.bullets += amount
                break;
            case 'clothes':
                this.#supplies.clothes += amount
                break;
            case 'miscellaneous':
                this.#supplies.miscellaneous += amount
                break;
            default:
                break;
        }
    }

    consume_by_attribute(attribute, amount){

    }
    
    change_health_condition(category, condition){
        if(typeof(category) != 'string' || typeof(condition) != 'string'){
            throw new input_type_mismatch_exception("string", typeof condition)
        }
        else if(category == 'hurt'){
            this.#health.hurt = condition
        }
        else if(category == 'sick'){
            this.#health.sick = condition
        }
        else{
            console.log('category is: ' + category)
            throw new health_category_not_found_exception(category)
        }
    }

    have_enough_clothes(minimum){
        return this.#supplies.clothes > minimum
    }
}

var user = new player("user", 100,100,100,100,100)
try{
    user.change_health_condition("injure", "snack bite")

}
catch(err){
        console.log(err.message)
        console.log(err.name)
}
