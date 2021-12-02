//import { player } from "./player.js";

var user = new player("user", 100,100,100,100,100)

var event_counter = 1      //this has to be a permanent data that keeps track of the counter
var random = 0
var total_mileage = 60      
var temp_d = 0              //'READ D' may change the value


function create_random_int_in_number(num){
    return Math.floor(Math.random() * num)
}

function update_random_int() {
    random = create_random_int_in_number(100)
}

function reduce_total_mileage(mile){
    total_mileage -= mile
}

function break_down_wagon() {
    total_mileage -= 15 + create_random_int_in_number(5)
    user.consume_miscellaneous(8)
    return "WAGON BREAKS DOWN--LOSE TIME AND SUPPLIES FIXING IT"
}

function ox_injured(){
    total_mileage -= 25
    user.lose_oxen(20)
    return "OX INJURES LEG--SLOWS YOU DOWN REST OF TRIP"
}

function daughter_broke_arm(){
    total_mileage -= 5 + create_random_int_in_number(4)
    user.consume_miscellaneous(2+create_random_int_in_number(3))
    return "BAD LUCK--YOUR DAUGHTER BROKE HER ARM\n" + "YOU HAD TO STOP AND USE SUPPLIES TO MAKE A SLING"
}

function ox_got_lost(){
    total_mileage -= 17
    "OX WANDERS OFF--SPEND TIME LOOKING FOR IT"
}

function son_got_lost(){
    total_mileage -= 10
    return "YOUR SON GETS LOST---SPEND HALF THE DAY LOOKING FOR HIM"
}

function unsafe_water(){
    total_mileage -= 10 + create_random_int_in_number(2)
    return "UNSAFE WATER--LOSE TIME LOOKING FOR CLEAN SPRING"
}

function heavy_rains(){
    var message = ""
    if(total_mileage > 950){
        message = "COLD WEATHER---BRRRRRRR!---YOU "
        if(user.have_enough_clothes(22 + create_random_int_in_number(4)))
            message += "HAVE ENOUGH CLOTHING TO KEEP YOU WARM"
        else
            message += "DON'T HAVE ENOUGH CLOTHING TO KEEP YOU WARM"
            // -> illness sub routine
    }

    message = "HEAVY RAINS---TIME AND SUPPLIES LOST"
    user.consume_food(10)
    user.consume_bullets(500)
    user.consume_miscellaneous(15)
    total_mileage -= 5 + create_random_int_in_number(10)

    return message
}

function bandits_attack(){
    console.log("BANDITS ATTACK")
    //do shooting sub routine
    /*
    GOSUB 6140
    3980 LET B=B-20*B1
    3990 IF B >= 0 THEN 4030
    4000 PRINT "YOU RAN OUT OF BULLETS---THEY GET LOTS OF CASH"
    4010 LET T=T/3
    4020 GOTO 4040
    4030 IF B1 <= 1 THEN 4100
    4040 PRINT "YOU GOT SHOT IN THE LEG AND THEY TOOK ONE OF YOUR OXEN"
    4050 LET K8=1
    4060 PRINT "BETTER HAVE A DOC LOOK AT YOUR WOUND"
    4070 LET M1=M1-5
    4080 LET A=A-20
    4090 GOTO 4710
    4100 PRINT "QUICKEST DRAW OUTSIDE OF DODGE CITY!!!"
    4110 PRINT "YOU GOT 'EM!"
    4120 GOTO 4710
    */

}

function wagon_burned(){
    user.consume_food(40)
    user.consume_bullets(400)
    user.consume_miscellaneous(3 + create_random_int_in_number(8))
    total_mileage -= 15
    return "THERE WAS A FIRE IN YOUR WAGON--FOOD AND SUPPLIES DAMAGE!"
}

function got_lost(){
    total_mileage -=  10 + create_random_int_in_number(5)
    return "LOSE YOUR WAY IN HEAVY FOG---TIME IS LOST"
}

function helpful_indian(){
    return "HELPFUL INDIANS SHOW YOU WERE TO FIND MORE FOOD"
}

function poisonous_snake(){
    var message = "YOU KILLED A POISONOUS SNAKE AFTER IT BIT YOU"
    
    user.consume_bullets(10)
    try
    {
        user.consume_miscellaneous(5)
    }
    catch(miscellaneous_shortage)
    {
        message += "YOU DIE OF SNAKEBITE SINCE YOU HAVE NO MEDICINE"
        // ->end the game
    }
    return message
}

function swamped_wagon(){
    user.consume_food(30)
    user.consume_clothes(20)
    total_mileage -= 20 + create_random_int_in_number(20)
    return "WAGON GETS SWAMPED FORDING RIVER--LOSE FOOD AND CLOTHES"
}

function wild_animal(){
    console.log("WILD ANIMALS ATTACK!")
    //->shooting/hunting
    /*
        if bullets > 39
            B1 = ACTUAL RESPONSE TIME FOR INPUTTING "BANG" > 2 -> too slow 
                "SLOW ON THE DRAW---THEY GOT AT YOUR FOOD AND CLOTHES"
            otherwise "NICE SHOOTIN' PARDNER---THEY DIDN'T GET MUCH"

            player.consume_bullets(20*B1)
            player.consume_clothes(B1*4)
            player.consume_food(B1*8)
            -> go to mountain function
        else
            "YOU WERE TOO LOW ON BULLETS--" + "THE WOLVES OVERPOWERED YOU"
            injured -> die w/ "YOU DIED OF " -> some rescue system (5180 line-558);

    */
}

function hail_storm(){
    total_mileage -= 5 - create_random_int_in_number(10)
    user.consume_bullets(200)
    user.consume_miscellaneous(4 + create_random_int_in_number(3))
    return "HAIL STORM---SUPPLIES DAMAGED"
}

function get_sick(){
    
}

////


function random_event_generator(){
    switch (event_counter) {
        case 1:
            return break_down_wagon()
        case 2:
            return ox_injured()
        case 3:
            return daughter_broke_arm()
        case 4:
            return ox_got_lost()
        case 5:
            return son_got_lost()
        case 6:
            return unsafe_water()
        case 7: 
            return heavy_rains()
        case 8:
            return bandits_attack()
        case 9:
            return wagon_burned()
        case 10:
            return got_lost()
        case 11:
            return poisonous_snake()
        case 16:
            return helpful_indian()
        case 21:
            return swamped_wagon()
        case 31:
            return wild_animal()
        case 41:
            return hail_storm()
        case 51:
            return get_sick()
        case 61:
            return helpful_indian()
        default:
            break;
    }
}

while(random <= temp_d)
{
    console.log("rand is: " + random + ", temp_d is: " + temp_d + ", event_counter: " + event_counter)
    update_random_int()
    console.log("rand is: " + random + ", temp_d is: " + temp_d + ", event_counter: " + event_counter)
    event_counter++
    console.log(random_event_generator())
}
