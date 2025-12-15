import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fixly</Text>
      <Image
        source={require('./assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Your Home Hero</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1877F2', // blue sky
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
});