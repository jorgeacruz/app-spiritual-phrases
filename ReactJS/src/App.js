import React, { Component } from 'react';
import '../src/estilo.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrases: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

  }

  quebraBiscoito(){
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrases = this.frases[numAleatorio];
    this.setState(state);
  }
  render() {
    return (
      <div className='container'>
        <h2> Encontre a Paz nas Frases Espirituais</h2>
        <img src={require('./assets/biscoito.png')} className='img' alt='logo'/>
        <Botao nome="Busque a frase do dia" acaoBtn={this.quebraBiscoito}/>
        <h3 className='Frases'>{this.state.textoFrases}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className='botaoFrase'>{this.props.nome}</button>
      </div>
    )
  }
}
