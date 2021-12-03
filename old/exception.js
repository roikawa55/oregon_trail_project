class Exception extends Error{
    constructor(message) {
        super(message); 
        this.name = "exception"; 
    }
}

export class input_type_mismatch_exception extends Exception {
    constructor(required, actual){
        super("Required type is: " + required + " and actual type is: " + actual)
        this.name = "input_type_mismatch_exception"
    }
}

export class health_category_not_found_exception extends Exception{
    constructor(category){
        super("Health category " + category + " does not match either hurt or sick")
        this.name = "health_category_not_found_exception"
    }
}

export class money_shortage extends Exception {
    constructor(money){
        super("No money left")
        this.name = "money_shortage"
    }
}

export class oxen_shortage extends Exception {
    constructor(oxen){
        super("No oxen left")
        this.name = "oxen_shortage"
    }
}

export class food_shortage extends Exception {
    constructor(food){
        super("Not enough food left")
        this.name = "food_shortage"
    }
}
export class bullets_shortage extends Exception {
    constructor(bullets){
        super("Not enough bullets left")
        this.name = "bullets_shortage"
    }
}
export class clothes_shortage extends Exception {
    constructor(clothes){
        super("Not enough clothes left")
        this.name = "clothes_shortage"
    }
}

export class miscellaneous_shortage extends Exception {
    constructor(miscellaneous){
        super("Not enough miscellaneous supplies left")
        this.name = "miscellaneous_shortage"
    }
}
