var player = {
    name: 'undefined',
    oxen: 0,
    rifle_skill: 1,
    meal_plan: "MODERATE",
    supplies: { food: 0, bullets: 0, clothes: 0, miscellaneous: 0 },
    health: { hurt: "", sick: "" },
    cash: 700,
    total_mileage: 0
}

function load_player_from_object(info_obj) {
    set_name(info_obj.name)
    player.oxen = parseInt(info_obj.oxen)
    player.supplies.food = parseInt(info_obj.food)
    player.supplies.bullets = parseInt(info_obj.bullets)
    player.supplies.clothes = parseInt(info_obj.clothes)
    player.supplies.miscellaneous = parseInt(info_obj.miscellaneous)
    debit(player.oxen + player.supplies.food + player.supplies.bullets 
        + player.supplies.clothes + player.supplies.miscellaneous)
    player.meal_plan = info_obj.meal_plan
}

function set_name(new_name) {
    player.name = new_name
}

function lose_oxen(oxen) {
    if (player.oxen - oxen <= 0) {
        throw new oxen_shortage(player.oxen)
    }
    player.oxen -= oxen
}

function set_rifle_skill(new_rifle_skill) {
    if (Number.isInteger(new_rifle_skill)) {
        player.rifle_skill = new_rifle_skill
    }
}

function debit(money) {
    if (player.cash - money <= 0) {
        console.log('Not enough money left')
    }
    player.cash -= money
}

function consume_food(amount) {
    if (player.supplies.food - amount <= 0) {
        console.log("Not enough food left")
    }
    player.supplies.food -= amount
}

function consume_bullets(amount) {
    if (player.supplies.bullets - amount<= 0) {
        console.log('Not enough bullets left')
    }
    player.supplies.bullets -= amount
}

function consume_clothes(pair) {
    if (player.supplies.clothes - pair <= 0) {
        console.log("Not enough clothes left")
    }
    player.supplies.clothes -= pair
}

function consume_miscellaneous(amount) {
    if (player.supplies.miscellaneous - amount <= 0) {
        console.log("Not enough miscellaneous supplies left")
    }
    player.supplies.miscellaneous -= amount
}

function stock_by_attribute(attribute, amount) {
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
    debit(amount)
}

function change_health_condition(category, condition) {
    if (category == 'hurt') {
        player.health.hurt = condition
    }
    else if (category == 'sick') {
        player.health.sick = condition
    }
    else {
        console.log("Health category " + category + " does not match either hurt or sick")
    }
}


function reduce_total_mileage(lost_mileage){
    player.total_mileage -= lost_mileage
}

function add_total_mileage(mileage){
    player.total_mileage += mileage
}

module.exports.player = player
module.exports.load_player_from_object = load_player_from_object