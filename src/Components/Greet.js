import React from 'react';

// function Greet(){
//     return <div><h1>Hello Everyone!</h1></div>
// }
// let employee = {
//     name: "Karan",
//     age:"23",
//     city: "Delhi"

// }
//destructuring
// const {name, age, city} = employee

export const Greet = ({name, age, designation, children}) => {
    

return <div><h1>Hello {name}! Your age is {age}. designation is {designation}</h1>{children}</div>
}

// export default Greet