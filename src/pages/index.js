import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Green from './greenpage';


export default function Home() {

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
  
  function frasedoDia() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(frases[numeroAleatorio]);
  
  }
  
  function reiniciar(){
    setTextoFrase('');
  }
  
const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={{flex:2, paddingTop:80}}>
            <Image source={require('../images/namaste.png')} style={{height:300, width:300}}/>
        </View>
        <View style={{flex:1}}>
            <Text style={styles.textoFrase}>{textoFrase}</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity style={styles.btFrase} onPress={frasedoDia}>
                <Text style={{color:'#fff', fontWeight:'bold'}}>A FRASE DO DIA É!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btLimpar} onPress={reiniciar}>
                <Text style={{color:'#fff', fontWeight:'bold'}}>Limpar Frase</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={[styles.theme]} onPress={ () => navigation.navigate('Green') }>
            <View>
                <Text style={{fontWeight:'bold', color:'#fff'}}> DARK </Text>
            </View>
        </TouchableOpacity> 
        </View>

        


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
  btFrase: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#005556',
      borderRadius:8,
      width:300,
      padding:20,
      marginBottom:10
  },
  btLimpar: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
    borderRadius:8,
    width:300,
    padding:20,
},
btTheme: {
    backgroundColor:'#005556',
    position:'absolute',
    top:100,
    right:30,
    padding:30,
    borderRadius:300
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
  theme: {
    backgroundColor:'#035657',
    borderRadius:20,
    padding:8,
    width:160,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  }
});
