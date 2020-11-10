const JSX = <h1>Hello JSX!</h1>;

//Create a Complex JSX ElementPassed
const JSX =<div>
<h1> </h1>
  <p></p>
<ul>
<li>can</li>
<li>man</li>
<li>sam</li>
</ul>
</div>

//Render HTML Elements to the DOMPassed
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));


const JSX = (
  <div className="myDiv">
 
    <h1>Add a class to this div</h1>
  </div>
);

//React: Learn About Self-Closing JSX TagsPassed

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br/ >
    <p>Be sure to close all tags!</p>
    <hr/ > 
     </div>
  
);

//React: Create a Stateless Functional ComponentPassed

onst MyComponent = function() {
  

  return(
      <div>Completed challenge!</div>
  );
  
    
  }
  React: Create a React ComponentPassed
  
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );


    // Change code above this line
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};



// class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
            <ChildComponent />
        
      </div>
    );
  }
};


React: Use React to Render Nested Components

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      
      <TypesOfFruit/>
  
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
       
      <Fruits/>
        
      </div>
    );
  }
};


React: Compose React Components
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
    <NonCitrus /> 
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
<Fruits />
        <Vegetables />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};


React: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
             <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))

//React: Write a React Component from Scratch
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
          <div id="challenge-node">
                 <h1>My First React Component!</h1>
          </div>
    );
  }
};
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));

React: Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}: </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
       <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};


const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
};


const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
