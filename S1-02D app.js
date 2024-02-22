import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>O que é react native?</Text>
      <View style={styles.aa}>
      <Text style={styles.abc}>React Native é um framework de desenvolvimento de aplicativos móveis que utiliza JavaScript e React para criar aplicativos nativos para iOS e Android. Ele permite aos desenvolvedores escrever código uma vez e usá-lo em ambas as plataformas, proporcionando uma experiência de desenvolvimento eficiente e rápida. Com uma vasta gama de componentes pré-construídos e uma comunidade ativa, o React Native é uma escolha popular para desenvolvedores que desejam criar aplicativos móveis com uma aparência e sensação nativas, enquanto utilizam uma linguagem de programação familiar como o JavaScript.</Text>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
    color: 'white',
  },

  abc: {
    flex:1,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50,
  },

  aa: {
    width: '60%',
  },


});
