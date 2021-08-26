import React, { useState } from 'react';
import { StyleSheet,  View , Image} from 'react-native';
import {Text, Button } from 'react-native-paper';


const Biscoito = () => {

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Tomar uma atitude é o primeiro passo para dar vida ao sonho.'
  ]

  const [img, setImg] = useState(require('../imagens/biscoito.png'));
  const [text, setText] = useState('');
 
  const abrir = () =>{
    setText('"' + frases[Math.floor(Math.random() * frases.length)] + '"');
    setImg(require('../imagens/biscoitoQuebrado.png'));
  }


  const normal = () =>{
      setText('');
      setImg(require('../imagens/biscoito.png'))
  }

  return(
    <View style={styles.container}>
      <Image style={styles.img}
              source={img}
      />
      <Text style={styles.text}>{text}</Text>
      <Button icon="cookie" mode="contained" style={styles.button} onPress={abrir} >Quebra o Biscoito</Button>
      <Button icon="cookie" mode="contained" style={styles.button} onPress={normal} >Resetar</Button>
    
    </View>
  );
}



export default Biscoito;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  img:{
    width: 200, 
    height:200,
    
      alignItems: 'center',
      flex:1
  },
  text:{
    fontSize:12,
    fontStyle:'italic',
    fontWeight: '700',
    alignItems:'center',
    justifyContent: 'center',
    
  },
  button:{
    color:'red'
  }
})