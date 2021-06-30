import React from 'react';

// ...->Spread operator:
const App38 = () => {

const name = ["pooja","poo","pooo"]

const fullname = [1,2,3,...name,4,5,6,...name];

const age = [23,4,56,78,4,32];

const add = [...name,...age]

const [first,...remaining] = age;

const fullname1 = { id:1, name:"Pooo"};

const data = {
    sub: "it",
    ...fullname1,
    age: 24,
};
console.log(data)
 return (
     <>
     <h1>{fullname}</h1>
     <p>{add}</p>
     <p>{first}</p>
     <p>{remaining}</p>
     <p>{data.id}</p>
     </>
 )



}

export default App38;