// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };


//                                                              EPISODE 1
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Answear: The outpoot will be The murderer is Miss Scarlet , because the verdict variable has const in front and it doesnt get modified in any part of the code
//                                                                  END


//                                                              EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Answear: in that case the program wont work , because we are trying to Assign at the Constant Variable a new name so it breakes
//                                                                END


//                                                              EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//Answear: The Outpoot will be: First Verdict: The murderer is Mrs. Peacock
//                              Second Verdict: The Murderer is Professor Plum.
// Thats because when we are calling the first Verdict it has its own let murderer that is beeing called with the function
// and at the second one it just gets the first let murderer that is mentioned at the top of the code
//                                                                END


//                                                              EPISODE 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//Answear: The outpoot will be: The suspects are Miss Scarlet , Professor Plum , Colonel Mustard
//                              Suspect Three is Mrs. Peacock
// the Suspect number 3 didnt change because inside the function the SuspectThree has the let infront , 
// so that means only for this function suspectThree has the name Colonel Mustard and outside this function its still Mrs.Peacock
//                                                                END


//                                                              EPISODE 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
//Answear: The Weapon will change and it will be The revolver , that happens beacause we are making a change in the DICTIONARY
// with the changeWeapon function by calling before the console.log and the const verdict = declareWeapon
//                                                                END


//                                                              EPISODE 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Answear: In this case The murderer will be Mrs.White because let murderer is beeing edited inside the changeMurderer by calling the plotTwist 
//function inside the changeMurderer function , so the outcome is Mrs.White , if that makes sence :)
//                                                                END


//                                                              EPISODE 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// In that case the murderer is Mr. Green because inside the plotTwist function the murder variable is beeing called with the 
// let infront , so that means it only changes inside the function and not in the outcome , that takes unexpectOutcode with it because its mentioned 
// in the same function .
//                                                                END


//                                                              EPISODE 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);


//Answear: In this case the Weapon will be the Candle Stick because all the if statments inside the functions are matching and the final out
// of them is that Colonel Mustart inside the Dining Room with The candle stick

//                                                                END


//                                                              EPISODE 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
//Answear: in that case the murderer is Professor Plum because the murderer in the declareMurderer function is beeing called from the 
//let murderer in the top of the code , the let murderer in the if statement is irelevant here , it wouldnt be if it was a var 
//                                                                END




