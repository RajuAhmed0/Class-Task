// Task - 1 
//use for loop
// const oddNumber = [1, 3, 5, 7, 9];
// let evenNumber = [];

// for (let i = 0; i < oddNumber.length; i++) {
    // evenNumber.push(oddNumber[i] + 1); //push number and condition
    
// }
// console.log(evenNumber);

// map function use 
// const evenNumbe2 = oddNumber.map(number => number + 1);
// console.log(evenNumbe2);



// Task - 2 
/* const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const divisibleNumber = numbers.filter(num => num % 10 === 0); //filter method ar je condition  ase sei condition ar shathe jegulo ans mile sob output dhekhabe
console.log(divisibleNumber); */


// Task - 3 
/* const instructor = [
    { name: "Nodi", age: 28, position: "Senior" },
    { name: "Akil", age: 26, position: "Junior" },
    { name: "Shobuj", age: 30, position: "Senior" },
  ];
  
  const findSenior = instructor.find(find => find.position === "Senior"); // and find method ar condition ar shathe jodi sob mile jai se akta and frist je milbe take shudhu output hisabe dhekabe aitai filter and find diffarents
  console.log(findSenior); */
  


// Task - 4 
const people = [
    { name: "Meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: "Suchorita", age: 22 },
  ];
//   const total = number.reduce((previous, current) => previous + current, 0);

  const totalAges =  people.reduce((num, ages) => num + ages.age, 0);
  console.log(totalAges);
  

