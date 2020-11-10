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