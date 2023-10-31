import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
const exampleImage = require('./assets/selfie.jpg')

export default function App() {

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
