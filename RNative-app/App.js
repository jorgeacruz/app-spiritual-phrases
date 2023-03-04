import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {

  const [fraseEspiritual, setFraseEspiritual] = useState();

  // Lista de Frases
  let frases = [
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
  ];

  function frasedoDia() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setFraseEspiritual(frases[numeroAleatorio]);
  }

  function Limpar(){
    setFraseEspiritual('');
  }
  

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require('./src/image/logo.png')} style={styles.logo}/>
      <View style={styles.areaFrase}>
          <Text style={styles.textoFrase}>{fraseEspiritual}</Text>
      </View>
      <View style={styles.areaBTN}>
        <TouchableOpacity style={styles.btnClear} onPress={frasedoDia}>
          <Text style={{fontWeight:'bold'}}> FRASE DO DIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnClear} onPress={Limpar}>
          <Text style={{fontWeight:'bold'}}> LIMPAR FRASES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005657',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:300,
    height:300,
    marginBottom:100
  },
  areaFrase:{
   justifyContent:'center',
   alignItems:'center',
   margin:30
  },
  textoFrase: {
    color:'#fff',
    textAlign:'center',
    fontSize:20
  },
  btnClear:{
    backgroundColor:'#fff',
    padding:8,
    margin:4,
    borderRadius:3,
    width:300,
    alignItems:'center',
  },
  areaBTN:{
    marginTop:100
  }
});
