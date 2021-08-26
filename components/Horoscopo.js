import React, { useState } from 'react';
import { StyleSheet,  View , Image} from 'react-native';
import {Text, Button } from 'react-native-paper';


const Biscoito = () => {

  const frasesAries = [
    'A vida é maravilhosa, se não tiver medo dela..',
    'Evitar o perigo não é, a longo prazo, tão seguro quanto se expor ao perigo. A vida é uma aventura ousada ou, então, não é nada.',
    'Dar valor às coisas, não pelo que valem, mas pelo que significam.',
    'Nossa maior glória não é nunca haver caído, e sim, ter levantado depois de cada queda.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'O importante é ganhar. Tudo e sempre. Essa história de que o importante é competir não passa de pura demagogia.',
    'Não tenho paciência para quem não entende o óbvio.',
    'Se eu tivesse cumprido todas as regras, eu nunca teria chegado até aqui.'
  ]

  const [img, setImg] = useState(require('../imagens/aries.png'));
  const [text, setText] = useState('');
 
  const abrir = () =>{
    setText('"' + frases[Math.floor(Math.random() * frases.length)] + '"');
    setImg(require('../imagens/aries.png'));
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
      <Button icon="cookie" mode="contained" style={styles.button} onPress={abrir} >Aries</Button>
      <Button icon="cookie" mode="contained" style={styles.button} onPress={normal} >Touro</Button>
      <Button icon="cookie" mode="contained" style={styles.button} onPress={abrir} >Peixes</Button>
      <Button icon="cookie" mode="contained" style={styles.button} onPress={normal} >Libras</Button>
    
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