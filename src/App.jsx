import React, { useState } from 'react';
import './App.css';
import "./global.css";
// import Usemem from './Hooks/Usemem';
// import Classbased1 from './components/Classbased1';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
// import Props from './components/Props';
// import State from './components/States';
// import Propscls from './components/Propscls';
// import Classbased from './components/Classbased';
// import Counter from './components/Counter';
// import Likebutton from './components/Likebutton';
// import List from './components/List';
// import A from './components/A';
// import B from './components/B';
// import Inline from './components/Inline';
// import Modcss from './components/Modcss';
// import Ref from './components/Ref';
// import Radiobtnreact from './components/Radiobtnreact';
// import Spotify from './components/Spotify';
// import Uncontrolled from './components/Uncontrolled';
// import Controlled from './components/Controlled';
// import Uncontrolledcls from './components/Uncontrolledcls';
// import Controlledcls from './components/Controlledcls';
// import Task from './components/Task';
// import Task1 from './components/Task1';
// import D from './components/D';
// import C from './components/C';
// import E from './components/E';
// import F from './components/F';
import Useeffect from './Hooks/Useeffect';
// import big from './components/big';
// import Axios from './components/Axios';
// import Axios1 from './components/Axios1';
// import A from './Hooks/A';
// import Main from './Hooks/Main';
// import Lifecycle from './components/Lifecycle';




const App=()=> {
  let [state, setState]=useState(true)
//   let obj={
//     name:"anis",
//     id:"777"
// }
  return (
    <div>
          {/* <h1>hi hello </h1>   */}
          {/* <Child1/> */}
          {/* <Child2/> */}
          {/* <Classbased1/> */}
          {/* <Hello/> */}
          {/* <Props data="world" /> */}
          {/* <Props data="galaxy" /> */}
          {/* <Props data="universe" /> */}
          {/* <Props data={obj}/> */}
          {/* <Propscls abc="hello"/>   */}
          {/* <Statescls/> */}
          {/* <State/> */}
          {/* <Counter/> */}
          {/* <List/> */}
          {/* <Likebutton/> */}
          {/* <A/> */}
          {/* <B/> */}
          {/* <Inline/> */}
          {/* <Modcss/> */}
          {/* <Ref/> */}
          {/* <Radiobtnreact/> */}
          {/* <Spotify/> */}
          {/* <Uncontrolled/> */}
          {/* <Controlled/> */}
          {/* <Uncontrolledcls/> */}
          {/* <Controlledcls/> */}
          {/* <Task/> */}
          {/* <Task1/> */}
          {/* <D/> */}
          {/* <C/> */}
          {/* <E/> */}
          {/* <F/> */}
          <Useeffect/>
          {/* <big/> */}
          {/* <Axios/> */}
          {/* <Axios1/> */}
          {/* <A/> */}
          {/* <Main/> */}
          {/* <Usemem/> */}
          {/* <button onClick={()=>{setState(true)}}>BIRTH COMPONENT</button>
          <button onClick={()=>{setState(false)}}>KILL COMPONENT</button>
          {state?<Lifecycle/>:null} */}

    </div>
  );
}

export default App;
