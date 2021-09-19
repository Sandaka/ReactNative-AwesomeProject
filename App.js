/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={styles.sectionContainer}>
      <Image source={require('./assets/images/different-bakery-products-on-white-background-vector-30927396.jpg')} style={{ width: 391, height: 300, alignItems: 'center' }} />
      <Text style={styles.title}>The Bake Vibes</Text>

      <View style={styles.loginSection}>

        {/* <Text style={styles.loginText}>Login</Text> */}

        <TextInput style={styles.textFields} placeholder='Username'></TextInput>
        <TextInput style={styles.textFields} placeholder='Password'></TextInput>

        <View style={styles.loginButton}>
          <Button title='Login' color='orange'></Button>
        </View>

        {/* <TouchableOpacity style={styles.loginButton}>
          <Text>Button Text</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    //backgroundColor: '#000000',
    //height: '100%',

  },

  title: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Calibri',
    textAlign: 'center',
    marginTop: 20,
  },

  loginText: {
    color: 'grey',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },

  textFields: {
    // borderColor: '#7a42f4',
    height: 50,
    //borderStyle: 'solid',
    color: 'black',
    marginTop: 20,
    borderRadius: 1,
    elevation: 1,
    backgroundColor: 'white',
    width: 300
  },

  loginSection: {
    //justifyContent: 'center',
    //flex: 1,
    alignItems: 'center'
  },

  loginButton: {
    marginTop: 30,
    backgroundColor: 'orange',
    width: 100,
    borderRadius: 10,
  }
});

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
