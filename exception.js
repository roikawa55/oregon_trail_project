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