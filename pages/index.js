
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image,  } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function LightPage() {

const navigation = useNavigation();

const [img, setImg] = useState(require('../src/namaste.png'));
const [textoFrase, setTextoFrase] = useState('');

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
  'Amar é espontâneo, é natural, espiritual.',
];

function quebraBiscoto() {
  let numeroAleatorio = Math.floor(Math.random() * frases.length)
  setTextoFrase(frases[numeroAleatorio]);

}

function reiniciar(){
  setTextoFrase('');
}

  return (
    <View style={styles.container}>
     <Image source={img} style={styles.img} />

     <Text style={styles.textoFrase}>{textoFrase}</Text>
     <TouchableOpacity  style={styles.botao} onPress={quebraBiscoto}>
       <View>
         <Text style={{fontWeight:'bold', color:'#fff'}}> A FRASE DO DIA É!</Text>
       </View>
     </TouchableOpacity> 

     <TouchableOpacity  style={[styles.botaoZerar, {backgroundColor:'#000', marginTop:10}]} onPress={reiniciar}>
       <View>
         <Text style={{fontWeight:'bold', color:'#fff'}}> LIMPAR FRASE.</Text>
       </View>
     </TouchableOpacity>

     <TouchableOpacity  style={[styles.theme]} onPress={ () => navigation.navigate('DarkPage') }>
       <View>
         <Text style={{fontWeight:'bold', color:'#fff'}}> DARK </Text>
       </View>
     </TouchableOpacity>  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width:400,
    height:400
  },
  textoFrase: {
    width:300,
    fontSize:20,
    fontWeight:'bold',
    color:'#035657',
    fontStyle: 'italic',
    textAlign:'center',
    margin:10
  },
  botao: {
    width:230,
    height:50,
    backgroundColor:'#035657',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  botaoZerar: {
    width:230,
    height:50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
  },
  theme: {
    backgroundColor:'#035657',
    borderRadius:20,
    padding:8,
    width:160,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
  }
});
