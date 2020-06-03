

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  UIManager,
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { connect, Provider } from 'react-redux';
import store from './src/store/store';

import StartScreen from './src/pages/StartScreen'
import MyIcon from './src/comps/MyIcon';
import { SetMenu } from './src/store/actions';

export const H = Dimensions.get('window').height;
export const W = Dimensions.get('window').width;


if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: React.FC = (props: any) => {

  return (
    <View style={{ flex: 1 }}>
      <StartScreen />
      {/* правый закрыватель */}
      {props.menu && <TouchableOpacity style={{ ...styles.menu, right: 0, top: 0, backgroundColor: '#111', width: W, opacity: 0.2 }}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          props.SetMenu(false)
        }} />}
      {/* меню бокс */}
      <View
        style={{
          ...styles.menu,
          right: !props.menu ? W + 100 : 50
        }}
      >
        {/* //содержимое меню */}
        <View style={{ flex: 1, justifyContent: 'space-between' }}>

          <View style={{ flex: 5, alignItems: 'flex-end' }}>
            <View style={{ flex: 1, width: W - 50, padding: 10 }}>
              <Text
                style={{
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  color: '#fff',
                  fontSize:22
                }}>
                меню
              </Text>
              {/* <Divider /> */}

              
            </View>

          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                props.SetMenu(false);
              }}
              style={{ padding: 15 }}>
              <MyIcon source={require('./src/img/back.png')} size={50} />
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    height: '100%',
    width: '130%',
    backgroundColor: '#808080',
    zIndex: 10000,
  }
});



const mstp = (state: any) => {
  return {
    menu: state.menu
  };
};
const mdtp = (dispatch: any) => {
  return {
    SetMenu: (bool: any) => dispatch(SetMenu(bool))
  };
};
const ConnectApp = connect(mstp, mdtp)(App);

const ProviderApp: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectApp />
    </Provider>

  );
};

export default ProviderApp;

