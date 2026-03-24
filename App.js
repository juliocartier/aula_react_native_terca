import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Pagina from './Pagina';
import PaginaDois from './Pagina_Dois';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.visao_borda}>
        <Text style={styles.texto}>Meu Primeiro Aplicativo</Text>
      </View>
      <Pagina/>
      <View style={styles.visao_borda}>
        <PaginaDois/>
      </View>
      <PaginaDois/>

      <Button title='Pressione' onPress={() => alert("Clicouu   aqui!!!!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: 'blue'
  },
  visao_borda: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
