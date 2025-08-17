import React from 'react';
import reactdom from 'react-dom/client'
import Header from './Header';

 const heading=React.createElement("div",{className:"title"},[
    React.createElement('h1',{},"heading 1"),
    React.createElement('h2',{},"heading 2")
])

 const root=reactdom.createRoot(document.getElementById("root"));
// using JSX
 const ele=<div className='title'>
    <h1>heading 1</h1>
    <h2>heading 2</h2>
 </div>
  const Heading2=()=>{
   return <h3>hello</h3>

 }
 const Heading=()=>{
    return(
        
        <div className='title'>
            <Heading2 />
            <h1 id="head">heading 1</h1>
            <h2>heading 2</h2>
        </div>
    )
 }

//  root.render(ele);
//  root.render(<Heading />);
root.render(<Header />);