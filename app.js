// //  <div id="parent">
// <div id="child">
//     <h1></h1>
// </div>
// </div>

// const heading=React.createElement('div',{id:parent},
//     React.createElement('div',{id:"child"},
//         React.createElement('h1',{},"hey bby")
//     )
// )
//siblings
const heading=React.createElement('div',{id:parent},
    React.createElement('div',{id:"child"},
       [React.createElement('h1',{},"hey bby"),
        React.createElement('h2',{},"hey bby")]
    )
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)







// const heading=React.createElement('h1',{id:"heading"},"hello world")
// console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById('root')) 
// root.render(heading)