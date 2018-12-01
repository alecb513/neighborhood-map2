import React, { Component } from "react";


export default class MenuItem extends React.Component {
    render() {
                 let menuItem = document.querySelectorAll('li');
                 let i;
                 for(i=0;i<menuItem.length;i++){
                   console.log(i);
                 }
        
             return (
                    {MenuItem}
                 )
        
             }
}



















// class MenuItem extends Component {

//     render() {
//         let menuItem = document.querySelectorAll('li');
//         let i;
//         for(i=0;i<menuItem.length;i++){
//           console.log(i);
//         }

//         return (
//             {MenuItem}
//         )

//     }

// }
// export default MenuItem;