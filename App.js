
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';

export default function App() {

const [img, setImg] = useState(require('./src/biscoito.png'));
const [textoFrase, setTextoFrase] = useState('');

  return (
    <View style={styles.container}>
     <Image source={img} style={styles.img} />

     <Text style={styles.textoFrase}>{textoFrase}</Text>
     <TouchableOpacity  style={styles.botao}>
       <View>
         <Text style={{fontWeight:'bold'}}> Quebrar Biscoito</Text>
       </View>
     </TouchableOpacity> 

     <TouchableOpacity  style={[styles.botaoZerar, {backgroundColor:'#000', marginTop:10}]}>
       <View>
         <Text style={{fontWeight:'bold', color:'#fff'}}> Zerar Biscoito</Text>
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
    width:230,
    height:230
  },
  textoFrase: {
    fontSize:20,
    color:'#dd7b22',
    fontStyle: 'italic',
    textAlign:'center'
  },
  botao: {
    width:230,
    height:50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    marginTop:70
  },
  botaoZerar: {
    width:230,
    height:50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
  
    
  }
});
