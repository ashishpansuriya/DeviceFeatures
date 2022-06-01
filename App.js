import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlaceNavigator from './navigation/PlaceNavigator';
import placeReducer from './Redux/place-reducer';
import {Provider} from 'react-redux';
import {init} from './helper/Db';

init()
  .then(() => {
    console.log('Initialize');
  })
  .catch(err => {
    console.log('Initialize fail');
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlaceNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
