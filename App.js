import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Boton from './src/components/button';
import Campo from './src/components/input';

export default function App() {

  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const sumar = () => {
    let operacion = parseFloat(numero1) + parseFloat(numero2);
    setResultado(operacion);
  }

  const restar = () => {
    let operacion = parseFloat(numero1) - parseFloat(numero2);
    setResultado(operacion);
  }

  const multiplicar = () => {
    let operacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(operacion);
  }

  const dividir = () => {
    let operacion = parseFloat(numero1) / parseFloat(numero2);
    setResultado(operacion);
  }

  const limpiar = () => {
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>
        Número 1:
      </Text>
      <Campo
      textoPlaceholder='skyblue'
      texto={numero1}
      funcion={setNumero1}
      tipo='numeric'
      estilo={styles.input}
      placeholder='Número 1:'
      />
      <Text>Número 2:</Text>
      <Campo
      textoPlaceholder='skyblue'
      texto={numero2}
      funcion={setNumero2}
      tipo='numeric'
      estilo={styles.input}
      placeholder='Número 2:'
      />
      <Boton
      texto='Sumar +'
      funcion={sumar}
      estilo = {styles.button}
      estilo_texto = {styles.text}/>
      <Boton
      texto='Restar -'
      funcion={restar}
      estilo = {styles.buttonr}
      estilo_texto = {styles.text}>
      </Boton>
      <Boton
      texto = 'Multiplicar x'
      funcion = {multiplicar}
      estilo = {styles.buttonm}
      estilo_texto = {styles.text}>
      </Boton>
      <Boton
      texto = 'Dividir ÷'
      funcion = {dividir}
      estilo = {styles.buttond}
      estilo_texto = {styles.text}>
      </Boton>
      <Text
      style={styles.resultado}>
        Resultado: {resultado}
      </Text>

      <TouchableOpacity
        style={styles.reset}
        onPress={limpiar}>
        <Text
          style={styles.text}>
          limpiar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 75,
  },
  text: {
    color: 'white'
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 225,
    textAlignVertical: "center",
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 75,
  },
  buttonr: {
    backgroundColor: 'orange',
    height: 40,
    width: 225,
    textAlignVertical: "center",
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 75,
  },
  buttonm: {
    backgroundColor: 'yellow',
    height: 40,
    width: 225,
    textAlignVertical: "center",
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 75,
  },
  buttond: {
    backgroundColor: 'green',
    height: 40,
    width: 225,
    textAlignVertical: "center",
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 75,
  },
  reset: {
    backgroundColor: 'red',
    height: 40,
    width: 175,
    textAlignVertical: "center",
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 75,
  },
});
