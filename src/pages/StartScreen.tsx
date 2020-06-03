import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderNav from '../comps/HeaderNav';
import { SetMenu } from '../store/actions';

export const H = Dimensions.get('window').height;
export const W = Dimensions.get('window').width;


const StartScreen: React.FC = (props: any) => {
  return (
    <View style={styles.back}>
      <View style={{ flex: 1 }}>
        <HeaderNav title={'услуги'}>
          <Text>HEllo</Text>
        </HeaderNav>
        <View style={styles.imageBox}>
          <View style={{ height: W, width: W, paddingHorizontal: 10, flex: 5 }}>
            <TouchableOpacity
              onPress={() => {
                // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                // props.SetMenu(true)
                // console.log(props, 'state props start');
              }}>
              <Image
                source={require('../img/truck.jpg')}
                resizeMethod={'resize'}
                resizeMode={'cover'}
                style={{ width: '100%', height: '100%' }}
              />
              {/* блок отображения absolute */}
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingTop: 30
                }}>
                <View
                  style={{
                    padding: 15,
                    backgroundColor: '#383838',
                    opacity: 0.6,
                  }}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#fff',
                      }}>
                      Услуги грузоперевозок
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 50,
                        fontWeight: 'bold',
                      }}>
                      -10%
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* нижний контейнер */}
          <View style={{ flexDirection: 'row', paddingVertical: 10, flex: 3 }}>
            <View style={{ width: 0.5 * W, flex: 1, paddingHorizontal: 10 }}>
              <TouchableOpacity>
                <Image
                  source={require('../img/people.jpg')}
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  style={{ width: '100%', height: '100%' }}
                />
                {/* блок отображения absolute */}
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: '#383838',
                      opacity: 0.6,
                      height: '50%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#fff',
                      }}>
                      Услуги грузчиков
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: 0.5 * W, flex: 1, paddingRight: 10 }}>
              <TouchableOpacity>
                <Image
                  source={require('../img/list.jpg')}
                  resizeMethod={'resize'}
                  resizeMode={'cover'}
                  style={{ width: '100%', height: '100%' }}
                />
                {/* блок отображения absolute */}
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: '#383838',
                      opacity: 0.6,
                      height: '50%',
                      width: '100%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        color: '#fff',
                      }}>
                      История заказов
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#383838',
  },
  imageBox: {
    // flexDirection: 'column',
    flex: 1,
  },
});

const mstp = (state: any) => {
  return {
    menu: state.menu
  };
};
const mdtp = (dispatch: any) => {
  return {
    SetMenu: (bool: boolean) => dispatch(SetMenu(bool)),
  };
};
const ConnectStartScreen = connect(
  mstp,
  mdtp,
)(StartScreen);

export default ConnectStartScreen;
