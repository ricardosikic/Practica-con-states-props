import React from 'react';

// props = propiedades

export const Practice8 = () => {
    return(
        <div>
        <h1>app</h1>
        {/* <Hijo nombre={'thiago'} age={30}/> */}
        </div>
    );
}


// const Hijo = (props) => {
//     return(
//         <h1>HI {props.nombre} {props.age}</h1>
//     );
// }

// export const Practice8 = () => {
//     const user = {
//         name: 'thiago',
//         edad: 30,
//         ciudad: 'santiago'
//     }
//     return(
//         <div>
//         <h1>app</h1>
//         <Hijo name={user.name} edad={user.edad}/>
//         </div>
//     );
// }


// const Hijo = (props) => {
//     return(
//         <div>
//         <h1>nombre: {props.name}</h1>
//         <p>edad: {props.edad}</p>
//         </div>
//     );
// }

// export const Practice8 = () => {
    
//     // declaracion objeto
//     const user = {
//         name: 'thiago',
//         edad: 30,
//         ciudad: 'santiago'
//     }

    
//     return(
//         <div>
//         <h1>app</h1>
        
//         <Hijo1 {...user}/>
//         </div>
//     );
// }

// FORMA 1 SPREAD

// const Hijo = ({name, edad}) => {
//     return(
//         <div>
//         <h1>nombre: {name}</h1>
//         <p>edad: {edad}</p>
//         </div>
//     );
// }


// FORMA 2 SPREAD

// const Hijo = (props) => {
//     const {name, edad} = props;
//      return(
//         <div>
//             <h1>nombre: {name}</h1>
//             <h2>edad: {edad}</h2>
//         </div>
//     );
// }


// FORMA 3
// const Hijo = (props) => {
//     const {name, edad, ...rest} = props;
//      return(
//         <div>
//             <h1>nombre: {name}</h1>
//             <h2>edad: {edad}</h2>
//         </div>
//     );
// }


// const Hijo1 = (props) => {
//     const {name, edad} = props;
//      return(
//         <div>
//             <Hijo2 nombre={name}/>
//         </div>
//     );
// }

// const Hijo2 = (props) => {
   
//      return(
//         <div>
//             <h1>nombre: {props.nombre}</h1>
           
//         </div>
//     );
// }