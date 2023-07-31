import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.title.container}>
          <Text>Upload your medical condition video</Text>
        </View>
        <View></View>
        <Text>some text here</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.flatten({
  title: {
    container: {
      borderWidth: 1,
      borderColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      // color: var(--071738, #071738);
      // fontFamily: Raleway,
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '26px',
    },
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
