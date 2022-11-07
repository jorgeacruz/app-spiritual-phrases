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
      'Ter muitas aspirações é ser espiritualmente rico.',
      'A serenidade espiritual é o fruto máximo da justiça.',
      'Sempre acredite que você pode ser melhor do que imagina.',
      'Todo problema aparece como uma lição para a nossa evolução.',
      'Para sermos felizes espiritualmente a morte do ego é imprecindivel...',
      'Não liberar perdão é como um câncer, te devora espiritualmente.',
      'O mal uso dos dons espirituais provoca o afastamento do Espírito Santo.',
      'O crescimento espiritual real é somente isto: eu diminuo, Ele cresce .',
      'Quem se conhece, conhece a todos, isso é a unificação espiritual.',
      'Ser espiritual é ser desapegado da matéria, é ser desmaterial.',
      'Se você não exercitar a sua fé, sempre será um Frango espiritualmente.',
      'A minha fortaleza espiritual, vem dos meus ancestrais.',
      'Em caso de dúvida ou mal-entendido, presumir o melhor, presumir o amor.',
      'Nossas ações são manifestações do que somos.',
      '⁠Desenvolver-se é deixar de se envolver com aquilo que te faz mal.',
      'Somente quem se descobrir singular poderá compreender o plural.',
      'A beleza do dom da humildade é que ela está disponível para todos nós.',
      'Acredite em você mesmo. Você é capaz de muito mais do que imagina.',
      'A Umbanda não faz o mal, quem faz o mal são as pessoas!',
      'Amar é espontâneo, é natural, espiritual.',
    ];

  }

  quebraBiscoito() {
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrases = '" ' + this.frases[numAleatorio] + ' "';
    this.setState(state);
  }
  limpaFrase(){
    let state = this.state;
    state.textoFrases = '';
    this.setState(state);
  }
  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img' alt='logo' />
        <Botao nome="Busque a frase do dia" acaoBtn={this.quebraBiscoito} />
        
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
