import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {

    state={
        inputValue:"",
        items:[]
    }

    handleChange=(event)=>{

        this.setState({
            inputValue:event.target.value
        })
        // console.log(this.state.inputValue);
    }

    storeItems=(event)=>{
        event.preventDefault();
        const {inputValue}=this.state;
        // const allItems=this.state.items;
        // allItems.push(inputValue)


        this.setState({
            items:[...this.state.items,inputValue],
            inputValue:''
        })
    }

    deleteItem=(key)=>{
        const allItems=this.state.items;
        allItems.splice(key,1);
        this.setState({
            items:allItems
        })
    }

  render() {
    const {inputValue,items}=this.state
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input type="text" value={inputValue} onChange={this.handleChange} placeholder="Enter Items..." />
        </form>
        <ul>
          {items.map((data,index)=>(
            <li key={index}>{data}<i className="fa-regular fa-trash-can" onClick={()=>this.deleteItem(index)}></i></li>
          ))}
        </ul>
      </div>
    );
  }
}
