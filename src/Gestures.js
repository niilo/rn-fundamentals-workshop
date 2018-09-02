import React from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const BALL_SIZE = 80;
const BALL_CENTER = BALL_SIZE / 2;
const SCREEN_CENTER_Y = 460 / 2;
const SCREEN_CENTER_X = 360 / 2;

class Gestures extends React.Component {

  location = new Animated.ValueXY({ x: SCREEN_CENTER_X, y: SCREEN_CENTER_Y })

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponderCapture: () => true,

    onPanResponderMove: Animated.event([
      {
        nativeEvent: { pageY: this.location.y, pageX: this.location.x }
      }
    ]),
    onPanResponderRelease: (ev) => this.onRelease(ev)
  })

  onRelease = (event) => {
    Animated.parallel(
      [
        Animated.spring(this.location, {
          toValue: { y: SCREEN_CENTER_Y, x: SCREEN_CENTER_X },
          duration: 500 - event.nativeEvent.pageY,
          useNativeDriver: true
        }),
      ]
    ).start()
  }

  render() {

    const transformY = Animated.add(this.location.y, new Animated.Value(-BALL_CENTER * 2))
    const transformX = Animated.add(this.location.x, new Animated.Value(-BALL_CENTER))

    return <View
      {...this._panResponder.panHandlers}
      style={styles.container}
    >

      <Animated.View
        style={[styles.box, {
          transform: [
            {
              translateY: transformY
            },
            {
              translateX: transformX
            }
          ]
        }]} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    backgroundColor: 'blue',
    borderRadius: BALL_SIZE / 2,
  }
})

export default Gestures;