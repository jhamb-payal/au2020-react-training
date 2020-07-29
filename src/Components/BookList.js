import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

// class BookList extends Component {
    
//     render() { 
//         return ( 
//             <ThemeContext.Consumer>{(context) => {
//                 const { isLightTheme, light, dark } = context

//                 const theme = isLightTheme? light: dark
//                 return   <div style = {{background:theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style = {{background:theme.ui}}>The thousand splendid suns</li>
//                     <li style = {{background:theme.ui}}>Palace of Illusions</li>
//                     <li style = {{background:theme.ui}}>Power of Subconscious mind</li>
//                 </ul>
//                 </div> 
//             }}
             
//             </ThemeContext.Consumer>
        
//         );
//     }
// }

const BookList = () => {
    console.log(ThemeContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme? light: dark
    return   <div style = {{background:theme.bg, color: theme.syntax}}>
                <ul>
                    <li style = {{background:theme.ui}}>The thousand splendid suns</li>
                    <li style = {{background:theme.ui}}>Palace of Illusions</li>
                    <li style = {{background:theme.ui}}>Power of Subconscious mind</li>
                </ul>
                </div> 
}
export default BookList;