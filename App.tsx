import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  requireNativeComponent,
  SafeAreaView,
} from 'react-native';

const SwiftUIButton = requireNativeComponent('SwiftUIButton');

const App = () => {
  const [count, updateCount] = useState(0);

  return (
    <>
      <SafeAreaView />
      <Text style={styles.title}>React Native SwiftUI Proxy</Text>
      <SwiftUIButton
        style={styles.buttonContainer}
        count={count}
        onCountChange={e => updateCount(e.nativeEvent.count)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
