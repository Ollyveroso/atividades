import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.abc}>ollyver ośorio, armario 2, numero 11</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: 'white',
  },
  abc: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start', // Alinha os elementos à esquerda
    paddingTop: 50,
    paddingLeft: 20, // Adiciona um padding à esquerda para o primeiro elemento Text
  },
  aa: {
    marginTop: 20, // Adiciona um espaço entre o primeiro e o segundo elemento Text
  },
});

