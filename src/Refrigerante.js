import React, { Component } from 'react';
import $ from 'jquery';

class Refrigerante extends Component{

  constructor() {
    super();    
    this.state = {lista : []};
  }

  componentDidMount(){
    console.log("didMount");
    $.ajax({
        url:"http://localhost:8080/api/autores",
        dataType: 'json',
        success:function(resposta){    
          console.log("chegou a resposta");          
          this.setState({lista:resposta});
        }.bind(this)
      } 
    );          
  }

  render(){
    return (
    <div>
        <div className="header">
          <h1>Listar Refrigerantes</h1>
        </div>
        <div className="content" id="content">                            
        {
                    this.props.lista.map(function(refri){
                      return (
                          <tr key={refri.id}>
                            <td>{refri.sabor}</td>                
                            <td>{refri.tamanho}</td>                                              
                          </tr>
                      );
                    })}                    
        </div>      

      </div>
    );
  }

}

export default Refrigerante;
