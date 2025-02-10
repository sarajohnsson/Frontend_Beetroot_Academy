// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         // Don't need to redraw, re-render everytime.
//         this.state = { counter: 0 };
//     }
//     // Wihtout arrow function the state has own local context.
//     clickhandler = () => {
//         // this.state.counter++;
//         const newCounter = this.state.counter + 1;
//         this.setState({ counter: newCounter });
//     };
//     // Component is the main unit in React, reusable to be inserted in absolutely any place. In one place, one file
//     render() {
//         return React.createElement('button', { onClick: this.clickhandler, className: 'btn' }, 'Click me');
//     }
// }
// const app = document.getElementById('app');
// const root = ReactDOM.createRoot(app);
// // Install extension React developer tools in google chrome. Two components, allows you to track the components and the data
"use strict";