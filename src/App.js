import { throwStatement } from "@babel/types";
import { element } from "prop-types";
import react from"react";
import"./todostyle.css";
  class App extends react.Component{
    state = {
      tasks: [],
      currInput : ""
    };
    render = () => {
      return (
      <ul>
       {
         <input class= "inputtab" type = "text" onChange = {(e) => 
        {
          this.setState({currInput: e.currentTarget.value})
          } }
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              this.setState({tasks:[...this.state.tasks,this.state.currInput],
                currInput:" "}

       ) }
     }
 }  value = {this.state.currInput}

        />
       }
       {this.state.tasks.map((el) => {
         return<li>{el} <button onClick = {
           () => {
             let currTask = this.state.tasks;
             let filtered = currTask.filter((element) =>{
               return element!==el;
             })
             this.setState({
               tasks:filtered
             })
           }
         }>Delete</button></li>


       })
      }


      </ul>

      )}
  }
export default App;
