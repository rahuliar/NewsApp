import react from 'react';
import { StatusBar, StyleSheet, Text, View} from 'react-native';
import InshortTabs from './Components/InshortTabs';
import Context from './API/Context';

function App() {
  return (
    <View style={styles.container}>
     <InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

export default()=>{
  return(
    <Context>
      <App/>
    </Context>
  )
}
