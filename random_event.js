//import { player } from "./player";

//var user = new player("user", 1,1,1,1,1)

var event_counter = 60       //'RESTORE' might get the value stored somewhere
var random = 0
var total_mileage = 60
var temp_d = 0              //'READ D' may change the value


function create_random_int_in_number(num){
    return Math.floor(Math.random() * num)
}

function update_random_int() {
    random = create_random_int_in_number(100)
}

function helpful_indian(){
    console.log("HELPFUL INDIANS SHOW YOU WERE TO FIND MORE FOOD")
}

function poisonous_snake(){
    console.log("YOU KILLED A POISONOUS SNAKE AFTER IT BIT YOU")
    
    player.consume_bullets(10)
    try
    {
        player.consume_miscellaneous(5)
    }
    catch(miscellaneous_shortage)
    {
        console.log("YOU DIE OF SNAKEBITE SINCE YOU HAVE NO MEDICINE")
        //end_game()
    }
}

function swamped_wagon(){
    console.log("WAGON GETS SWAMPED FORDING RIVER--LOSE FOOD AND CLOTHES")
    
    player.consume_food(30)
    player.remove_clothes(20)

    total_mileage -= 20 + create_random_int_in_number(20)
    
}

function wild_animal(){
    console.log("WILD ANIMALS ATTACK!")
    //->shooting
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
    console.log("HAIL STORM---SUPPLIES DAMAGED")
    total_mileage -= 5 - create_random_int_in_number(10)
    player.consume_bullets(200)
    player.consume_miscellaneous(4 + create_random_int_in_number(3))
}

function get_sick(){
    
}

////
function break_down_wagon() {
    console.log("WAGON BREAKS DOWN--LOSE TIME AND SUPPLIES FIXING IT")
    total_mileage -= 15 + create_random_int_in_number(5)
    player.consume_miscellaneous(8)
}

function ox_injured(){
    console.log("OX INJURES LEG--SLOWS YOU DOWN REST OF TRIP")
    total_mileage -= 25
    player.lose_oxen(20)
}

function daughter_broke_arm(){
    console.log("BAD LUCK--YOUR DAUGHTER BROKE HER ARM\n" + "YOU HAD TO STOP AND USE SUPPLIES TO MAKE A SLING")
    total_mileage -= 5 + create_random_int_in_number(4)
    player.consume_miscellaneous(2+create_random_int_in_number(3))
}

function ox_got_lost(){
    console.log("OX WANDERS OFF--SPEND TIME LOOKING FOR IT")
    total_mileage -= 17
}

function son_got_lost(){
    console.log("YOUR SON GETS LOST---SPEND HALF THE DAY LOOKING FOR HIM")
    total_mileage -= 10
}

function unsafe_water(){
    console.log("UNSAFE WATER--LOSE TIME LOOKING FOR CLEAN SPRING")
    total_mileage -= 10 + create_random_int_in_number(2)
}

function heavy_rains(){
    if(total_mileage > 950){
        console.log("COLD WEATHER---BRRRRRRR!---YOU ")
        //check for clothes > 22 + create_random_int_in_number(4) 
        //if so console.log("HAVE ENOUGH CLOTHING TO KEEP YOU WARM")
        //else console.log("DON'T HAVE ENOUGH CLOTHING TO KEEP YOU WARM") then illness sub routine
    }

    console.log("HEAVY RAINS---TIME AND SUPPLIES LOST")
    player.consume_food(10)
    player.consume_bullets(500)
    player.consume_miscellaneous(15)
    total_mileage -= 5 + create_random_int_in_number(10)
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
    console.log("THERE WAS A FIRE IN YOUR WAGON--FOOD AND SUPPLIES DAMAGE!")
    player.consume_food(40)
    player.consume_bullets(400)
    player.consume_miscellaneous(3 + create_random_int_in_number(8))
    total_mileage -= 15
}

function got_lost(){
    console.log("LOSE YOUR WAY IN HEAVY FOG---TIME IS LOST")
    total_mileage -=  10 + create_random_int_in_number(5)
}

function random_event_generator(){
    switch (event_counter) {
        case 1:
            break_down_wagon()
            break;
        case 2:
            ox_injured()
            break;
        case 3:
            daughter_broke_arm()
            break;
        case 4:
            ox_got_lost()
            break;
        case 5:
            son_got_lost()
            break;
        case 6:
            unsafe_water()
            break;
        case 7: 
            heavy_rains()
            break;
        case 8:
            bandits_attack()
            break;
        case 9:
            wagon_burned()
            break;
        case 10:
            got_lost()
            break;
        case 11:
            poisonous_snake()
            break;
        case 16:
            helpful_indian()
            break;
        case 21:
            swamped_wagon()
            break;
        case 31:
            wild_animal()
            break;
        case 41:
            hail_storm()
            break;
        case 51:
            get_sick()
            break;
        case 61:
            helpful_indian()
            break;
        default:
            break;
    }
}

while(random <= temp_d)
{
    console.log("rand is: " + random + ", temp_d is: " + temp_d)
    update_random_int()
    console.log("rand is: " + random + ", temp_d is: " + temp_d)
    event_counter++
    random_event_generator()
}
