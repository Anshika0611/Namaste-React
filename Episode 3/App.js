import React from "react"
import ReactDOM from "react-dom/client"
// const heading=React.createElement("h1",{},"hello")
// root.render(heading)

// this creates a React element
const jsxele=<h1>hello world </h1> // this is jsx which works just like React.createElement("h1",{},"hello")
// root.render(jsxele)
//React components- Js functions that return a jsx or a react element


// this is same as above , we can write jsx without return in a single line, for multiple line write it inside()
// const Heading2=() => <h1>hello</h1>
const title=(
    <>
    <h1>hello</h1>
    {/* <Heading /> // calling this here will give error beacause const cant be called before initialization, it would work fine with var */}
    </>
)
const Heading2=() => (
    
    <>
    {/*They are all same */}
    <Heading/> 
    <Heading></Heading>
    {Heading()}

    <h1>This is called component composition</h1>
    </>
)
const Heading=()=> {
   return( 
    <div> 
     {title}    {/*we can call an element inside a component using {} */}
     <h1>hello world</h1>
     </div> 
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading2 />)
