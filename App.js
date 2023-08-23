import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View,TextInput,Button,TouchableOpacity,} from 'react-native';
export default function App() {

const [valor1,setv1] = useState('');
const [valor2,setv2] = useState('');
const [valor3,setv3] = useState('');

const [Km,setKm] = useState('');
const [Combu,setCombu] = useState('');

function Calculo(){
  const resultado = (valor3 * valor2 )/ valor1
  alert('X é iqual á '+resultado);
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Regra de Três
      </Text>
      <Text style={{fontSize:30,marginBottom:100,}}>
        Digite os Valores
      </Text>
      
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
      style={styles.input}
        placeholder="Valor 1"
        placeholderTextColor='#fff'
        placeholderFontWeight= '900'
        keyboardType="numeric"
        onChangeText={(valor1)=>setv1(valor1)}
      />
      <TextInput
      style={styles.input}
        placeholder="Valor 2"
        placeholderTextColor='#fff'
        placeholderFontWeight= '900'
        keyboardType="numeric"
        onChangeText={(valor2)=>setv2(valor2)}
      />
      </View>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black' , fontSize:30,  width:10,}} />
  <View>
    <Text style={{width: 75, textAlign: 'center', fontSize:30,}}>=</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black', width:10,}} />
</View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
<TextInput
        style={styles.input}
        placeholder="Valor 3"
        placeholderTextColor='#fff'
        keyboardType="numeric"
        onChangeText={(valor3)=>setv3(valor3)}
      />
      <Text style={{width: 75, textAlign: 'center', fontSize:45,marginHorizontal:75, margin:0,}}>X</Text>
</View>
      

      <TouchableOpacity style={styles.btn} onPress={Calculo}>
      <Text style={styles.textbtn}>Calcular</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c299ff',
    padding: 8,
  },
  paragraph: {
    marginTop: 75,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  btn:{
    marginTop:150,
    alignItems:'center',
    backgroundColor:'#8533ff',
    padding:15,
    borderRadius:15,
    margin:20,
    borderColor:'#6600ff',
    borderWidth:5,
  },
  textbtn:{
    fontSize:30,
    color:"#fff",
    fontWeight:'900',
  },
  input:{
    textAlign:'center',
    fontSize:20,
    padding:10,
    backgroundColor:'#8533ff',
    borderRadius:10,
    width:100,
    marginHorizontal: 60,
    borderColor:'#6600ff',
    borderWidth:2,
  }
});
