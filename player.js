class player{    
    #name = 'undefined'
    #oxen = 0
    #rifle_skill = 0
    #supplies = {food: 0, bullets: 0, clothes: 0}
    #health= {hurt: false, sick: false}
    #cash = 700
    
    //#attribute_types = {name_type: 'string'};

    constructor(name, oxen, rifle_skill, food, bullets, clothes){
        this.set_name(name)
        this.stock_oxen(oxen)
        this.set_rifle_skill(rifle_skill)
        this.stock_food(food)
        this.stock_bullets(bullets)
        this.add_clothes(clothes)
        this.debit(this.#name + this.#oxen + this.#supplies.food + this.#supplies.bullets + this.#supplies.clothes)
    }
    
    input_type_mismatch_exception(required, actual){
        console.log("Required type is: " + required + " and actual type is: " + actual)
    }

    health_category_not_found_exception(category){
        console.log("Health category " + category + " does not match either hurt or sick")
    }
     
    check_type_match(arg, required){
        if(typeof(required) != "string"){
            throw new input_type_mismatch_exception('string', typeof required)
        }
        if(typeof(arg) != required)
            throw new input_type_mismatch_exception(required, typeof arg)
    }

    set_name(new_name){
        if(typeof(new_name) == "string"){
            this.#name = new_name
        }
        else {
            throw new input_type_mismatch_exception(typeof String, typeof new_name)
        }
    }

    stock_oxen(oxen){
        check_type_match(oxen, "number")
        this.#oxen += oxen
    }

    lose_oxen(oxen){
        if(typeof(oxen) == 'number') {
            this.#oxen -= oxen
        }
        else{
            throw new input_type_mismatch_exception('number', typeof oxen)
        }
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
        if(this.#cash == 0){
            console.log('No money left')
        }
        else if(typeof(money) == 'number') {
            this.#cash -= money
        }
        else{
            throw new input_type_mismatch_exception('number', typeof money)
        }
    }
    
    stock_food(amount) {
        if(typeof(amount) == 'number') {
            this.#supplies.food += amount
        }
        else{
            throw new input_type_mismatch_exception('number', typeof amount)
        }
    }
    
    consume_food(amount) {
        if(this.#supplies.food == 0){
            console.log('No food left')
        }
        else if(typeof(amount) == 'number') {
            this.#supplies.food -= amount
        }
        else{
            throw new input_type_mismatch_exception('number', typeof amount)
        }
    }
    
    stock_bullets(amount) {
        if(typeof(amount) == 'number') {
            this.#supplies.bullets += amount
        }
        else{
            throw new input_type_mismatch_exception('number', typeof amount)
        }
    }
    
    consume_bullets(amount) {
        if(this.#supplies.bullets == 0){
            console.log('No ammos left')
        }
        else if(typeof(amount) == 'number') {
            this.#supplies.bullets -= amount
        }
        else{
            throw new input_type_mismatch_exception('number', typeof amount)
        }
    }
    
    add_clothes(pair) {
        if(typeof(pair) == 'number') {
            this.#supplies.clothes += pair
        }
        else{
            throw new input_type_mismatch_exception('number', typeof pair)
        }
    }
    
    remove_clothes(pair) {
        if(this.#supplies.clothes == 0){
            console.log('No clothes left')
        }
        else if(typeof(pair) == 'number') {
            this.#supplies.clothes -= pair
        }
        else{
            throw new input_type_mismatch_exception('number', typeof pair)
        }
    }

    stock_by_attribute(attribute, amount){
    
    }

    consume_by_attribute(attribute, amount){

    }
    
    change_health_condition(category, condition){
        if(typeof(category) != 'string' || typeof(condition) != 'boolean'){
            throw new input_type_mismatch_exception('boolean', typeof condition)
        }
        else if(category == 'hurt'){
            this.#health.hurt = condition
        }
        else if(category == 'sick'){
            this.#health.sick = condition
        }
        else{
            throw new health_category_not_found_exception(category)
        }
    }
}