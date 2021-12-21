
const month_date_options = ['MARCH 29', 'APRIL 12', 'APRIL 26', 'MAY 10', 'MAY 24', 
                            'JUNE 7', 'JUNE 21', 'JULY 5', 'JULY 19', 'AUGUST 2',
                            'AUGUST 16', 'AUGUST 31', 'SEPTEMBER 13', 'SEPTEMBER 27', 
                            'OCTOBER 11', 'OCTOBER 25', 'NOVEMBER 8', 'NOVEMBER 22', 
                            'DECEMBER 6', 'DECEMBER 20']

var current_date_index = 0

const date = 'MONDAY'
const year = 1847
const too_long_trail_message = "YOU HAVE BEEN ON THE TRAIL TOO LONG ------\n"
                            + "YOUR FAMILY DIES IN THE FIRST BLIZZARD OF WINTER"

function date_to_string(){
    return date + " " + month_date_options[current_date_index] + " " + year
}

function check_for_long_trail(){
    return current_date_index >= month_date_options.length
}

module.exports.date_to_string = date_to_string
module.exports.check_for_long_trail = check_for_long_trail