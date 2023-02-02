/*import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={books.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);*/
/*import React from 'react'
import ReactDOM from "react-dom/client";
const num=[1,2,3,4,5];
const updatedNums=num.map((number)=>
{
    return<li>{num}</li>;
});
ReactDOM.render(
    <ul>{updatedNums}</ul>,
    document.getElementById('root')
);*/
//import * as React from "React"; 
/*import React from 'react'
import ReactDOM from "react-dom/client";
const App = () => { 
    return ( 
       <div> 
        <DisplayDetails  name = {"Sakshi"}  age={"24"} city ={"delhi"} 
         course ={" React Props"}  /> 
  </div> 
)}; 
const DisplayDetails = (props)=>{ 
  return ( 
      <div> 
            <h1> user details </h1> 
                  <ul> Name : {props.name} </ul> 
                  <ul> City : {props.city} </ul> 
                  <ul> Age : {props.age } </ul> 
                  <ul> Course : {props.course} </ul> 
     </div> 
)}; 
export default App; */
/*import App from "./App";
function App1() {
let message="This is coming from app component";
return(
<div>
<h1>This is App Component</h1>
<App msg={message}></App>
</div>
);

};
export default App1;*/
/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
<App/>,document.getElementById("root"));*/
/*import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);*/
/*import React,{useState,useEffect}from "react";
import ReactDOM from "react-dom/client";
const UseEffectBasics=()=>{
  const[value,setValue]=useState(0);
  useEffect(()=>{
    console.log("call useEffect");
    if(value>0){
      document.title='New Messages(${Value})';
    }
  });

console.log("render component");
return(
<>
<h1>{value}</h1>
<button className="btn" onClick={() => setValue(value+1)}>
click me
</button>
</>
);
};
export default UseEffectBasics;*/
/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
/*import React,{ useState,useEffect } from "react"
import ReactDOM from "react-dom/client";
const url='http://api.github.com/users';

const UseEffectFetchData=()=>{
    const [users,setUsers]=useState([]);

    const getUsers=async()=>{
    const response=await fetch(url);
    const users=await response.json();
    setUsers(users);
    }
useEffect(()=>{
    getUsers();
},[]);
return(
    <>
    <h3>github users</h3>
    <ul className="users">
        {users.map((user)=>{
        const { id,login,avatar_url,html_url }=user;
        return(
            <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>profile</a>
                </div>
            </li>
         )
     })}
    </ul>
    </>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< UseEffectFetchData/>);
export default UseEffectFetchData;*/
/*import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextAPI from './context-api'
  const root=ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <ContextAPI/>
    </React.StrictMode>
  )*/
/*import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Everyone");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);*/
/*import React,{useEffect,useRef}from 'react'
import ReactDOM from 'react-dom/client'
const UseRefBasics=()=>{
  const refContainer=useRef(null);
  const handleSudmit=(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus();
  });
return(
  <>
  <form className='form' onSubmit={handleSudmit}>
  <div>
  <input type='text' ref={refContainer}/>
  </div>
  <button type='sudmit'>submit</button>
  </form>
  </>
)
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseRefBasics/>);
export default UseRefBasics();*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import UseStateObject from './UseStateObject'
const root = ReactDOM.createRoot(document.getElementById('root'))
  
root.render(
  <React.StrictMode>
    <UseStateObject
    />
  </React.StrictMode>)