// Infected
// On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.

// In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:

// On day 0, the first computer is infected.
// Each subsequent day, the number of infected computers doubles.
// Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.
// For example, on:

// Day 0: 1 total computer is infected.
// Day 1: 2 total computers are infected.
// Day 2: 4 total computers are infected.
// Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.
// Return the number of total infected computers after the given amount of days have passed.

//function infected(days) {
// counter
//  let counter = 1;
// if (days == 0) {
//  return counter
// use a loop
// }

// else if(days >= 1 && days % 3 != 0){
// console.log(days)
//   return counter
// } else {
//  console.log(days)
//  console.log(days + days)
//  console.log((days + days) - (Number.parseFloat(days + days / 100 // * 20).toFixed(2)))
//   return (days + days) - (Number.parseFloat(days + days / 100 * 20).toFixed(2))
// }
// }

// infected(3)

// function infected(days){
//  let counter = 1;
//  for (let i = 1; i <= days; i++ ) {
//      counter = counter ** 2;
//    if (days % 3 == 0) {
//      console.log("3!")
//      console.log(counter)
//    }
//  console.log(counter)
//  counter ** 2
//    return counter
//  }
// }

//infected(3)

// Squaring a number using the exponentiation operator
// const number = 5;
// const squared = number ** 2;
// console.log(squared);

// Output: 25

//function infected(days) {
//   if (days == 0) {
//    return 1
//  } else if (days == 1) {
//    return 2
//  } else {
//    if (days % 3 == 0) {
//      console.log(days ** 2 )
//    }
//    return days ** 2
//  }
// }

function infected(days) {
  console.log('This is what we start with: ', days);
  let counter = days + 1;
  console.log('This is what we have when we add 1: ', counter);
  counter ** 2;
  console.log('This is what we have when we power 2: ', counter);
  // check if days mod 3
  if (days % 3 == 0) {
    let discount = (counter / 100) * 20;
    console.log(discount);
  }
  return days;
}

infected(3);
