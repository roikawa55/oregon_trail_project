var player = {
    name: 'undefined',
    oxen: 0,
    rifle_skill: 1,
    supplies: { food: 0, bullets: 0, clothes: 0, miscellaneous: 0 },
    health: { hurt: "", sick: "" },
    cash: 700,
    total_mileage: 0
}

function check_type_match(arg, required) {
    if (typeof (arg) != required)
        throw new input_type_mismatch_exception(required, typeof arg)
}

function load_player_from_object(info_obj) {
    set_name(info_obj.name)
    player.oxen = info_obj.oxen
    player.supplies.food = info_obj.food
    player.supplies.bullets = info_obj.bullets
    player.supplies.clothes = info_obj.clothes
    player.supplies.miscellaneous = info_obj.miscellaneous
    player.cash = info_obj.cash
    player.rifle_skill = info_obj.rifle_skill
}

function set_name(new_name) {
    check_type_match(new_name, "string")
    player.name = new_name
}

function lose_oxen(oxen) {
    check_type_match(oxen, "number")
    if (player.oxen - oxen <= 0) {
        throw new oxen_shortage(player.oxen)
    }
    player.oxen -= oxen
}

function set_rifle_skill(new_rifle_skill) {
    if (Number.isInteger(new_rifle_skill)) {
        player.rifle_skill = new_rifle_skill
    }
    else {
        throw new input_type_mismatch_exception('integer', typeof new_rifle_skill)
    }
}

function debit(money) {
    check_type_match(money, "number")
    if (player.cash - money <= 0) {
        console.log('Not enough money left')
        throw new money_shortage(player.cash)
    }
    player.cash -= money
}

function consume_food(amount) {
    check_type_match(amount, "number")
    if (player.supplies.food - amount <= 0) {
        throw new food_shortage(player.supplies.food)
    }
    player.supplies.food -= amount
}

function consume_bullets(amount) {
    check_type_match(amount, "number")
    if (player.supplies.bullets - amount<= 0) {
        console.log('Not enough bullets left')
        throw new bullets_shortage(player.supplies.bullets)
    }
    player.supplies.bullets -= amount
}

function consume_clothes(pair) {
    check_type_match(pair, "number")
    if (player.supplies.clothes - pair <= 0) {
        throw new clothes_shortage(player.supplies.clothes)
    }
    player.supplies.clothes -= pair
}

function consume_miscellaneous(amount) {
    check_type_match(amount, 'number')
    if (player.supplies.miscellaneous - amount <= 0) {
        console.log('No clothes left')
        throw new miscellaneous_shortage(player.supplies.miscellaneous)
    }
    player.supplies.miscellaneous -= amount
}

function stock_by_attribute(attribute, amount) {
    if (typeof (attribute) != 'string')
        throw new input_type_mismatch_exception('number', typeof amount)

    if (typeof (amount) != 'number')
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
    debit(amount)
}

function change_health_condition(category, condition) {
    if (typeof (category) != 'string' || typeof (condition) != 'string') {
        throw new input_type_mismatch_exception("string", typeof condition)
    }
    else if (category == 'hurt') {
        player.health.hurt = condition
    }
    else if (category == 'sick') {
        player.health.sick = condition
    }
    else {
        console.log('category is: ' + category)
        throw new health_category_not_found_exception(category)
    }
}