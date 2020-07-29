import React ,{ useState, useEffect }from 'react';
import uuid  from 'uuid/dist/v1';
// class SongList extends Component {
//     state = { 
//         songs:[{title:"Yellow", id: 1},
//         {title: "Paradise", id:2},
//         {title: "Perfect", id:3}
//      ]}
//     render() { 
//         return ( <nav>
//     <ul>{this.state.songs.map((song) => {return <li key = {song.id}>{song.title}</li>})}</ul>
//         </nav> );
//     }
// }

const SongList = () => {
    /*eslint-disable no-unused-vars */
    const [songs, setSong]= useState([{title:"Yellow", id: 1},
    {title: "Paradise", id:2},
    {title: "Perfect", id:3}
 ])

 const [age, setAge] = useState(23);
 const handleClick = () => {
     setSong([...songs, {title:"i don't care", id:uuid()}])
 }
 useEffect(() => {
     console.log("useEffect ran", songs)
 },[songs]) 
 return ( <><nav>
    <ul>{songs.map((song) => {return <li key = {song.id}>{song.title}{age}</li>})}</ul>
    <button onClick = {handleClick}>Add Song</button>
    <button onClick = {() => setAge(27)}>Click Me</button>
        </nav> </>);
}
export default SongList;