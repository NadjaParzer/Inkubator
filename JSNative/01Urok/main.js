console.log('js is here');

const Bob = { // soderjit nomer ya4eyki napr. #789
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Don'] // A-345 eto toje ssylka. Massiv lejut otdelno ot objektov
}

const Helga = {} // drugaya ya4eyka #123
console.log(Bob === Helga); // false - sranivautsya ccbllky - '123 =! 789

newStudent = Bob // tut lejala ccylka na object
newStudent.name = 'Helga'
console.log(Bob);
console.log(Helga)

const copyStudent = {...Bob} // svoy nomer 246, eto kopiya =  name: studentFirst.name
// eto poverhnostnoe kopirovanie
copyStudent.name = 'Rob'
console.log(copyStudent)
console.log(Bob)

copyStudent.friends.push('Ann')
console.log(Bob);
console.log(copyStudent);



const trueCopyStudent = {
    ...Bob,
    friends: [...Bob.friends], //A-02
    name:'John'
} //cozdaem ya4eyku, ... - kopiya
console.log(trueCopyStudent);
console.log(trueCopyStudent.friends.pop());



function func(num) {
    const fn = () => console.log(`number:${num}`);
    return [num, fn]
}

//const toolKit = func(100)
//const getHundred = toolKit[1]
//const hundred = toolKit[0]

const[hundred, getHundred] = func(100)

getHundred()
alert(hundred)