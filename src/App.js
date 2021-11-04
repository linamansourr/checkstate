import React,{Component} from 'react';
import Button  from "./Button";

import './App.css';
class Welcome extends React.Component {
 state = {
   name: "Lina Mansour"
 };
 state={
  bio: "I am a Business Inteligent student"
}
state={

  imgSrc: ["https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/182940839_177065977524630_7581617387007903027_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9PGjhxBlRO4AX-GBrwl&_nc_ht=scontent.ftun16-1.fna&oh=9d9ef723e30e669e5ca1b4ec849e0b68&oe=61AB70D6"],
  idx: 0
};


 handleClick=()=>this.setState({name:'Lina'})
 
 render() {
   return(
     <div>
     <h1>Hello {this.state.name}</h1>
     <button onClick={this.handleClick}> ClickMe</button>
     <div className="img">
       
       <img
       style={{width: 100, height:100}}
       src={this.state.imgSrc} />
     </div>
     </div>
   )
 }
}


