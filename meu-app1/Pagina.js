import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import PaginaDois from './Pagina_Dois';

export default function Pagina() {
  return (
    <View>
      <Text>Meu Segundo Texto</Text>
      <PaginaDois/>
    </View>
  );
}