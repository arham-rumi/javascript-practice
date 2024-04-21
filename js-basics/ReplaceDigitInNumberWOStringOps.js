let num = 34645644 // Original Number
let digit_to_be_replaced = 4 // Digit that we want to be replaced in original number
let digit_replace_with = 7 // Digit that we want to replace the old digit with
let len = Math.ceil(Math.log10(num + 1)); // Get length of the number to set limit of divisor
let lim = 10 ** (len-1) // Divisor
let new_num = 0 // New number

// Executing the loop till our number exists
while(num){
    let quotient = Math.floor(num / lim) // Quotient: By dividing the number with 10s we will be getting the first digit of the remaining number
    // Check if the quotient (digit) matches with the digit that we want to get replaced
    if(quotient == digit_to_be_replaced){
        quotient = digit_replace_with
    }
    
    quotient *= lim // Multiply the quotient with the current value of divisor to get place value of quotient
    new_num += quotient // Add the resultant quotient to new number
    num %= lim // Update actual number by remainder of number
    lim /= 10 // Reduce the divisor by factor of 10 to again get the first digit as the quotient
}

console.log("new_num: ", new_num)
