import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

export default class Animations extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(0),
  };

  runAnimation = () => {
    Animated.stagger(2000, [
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      }),
      Animated.spring(this.state.scale, {
        toValue: 2.5,
        friction: 7,
      }),
    ]).start(() => {
      this.state.scale.setValue(1);
      this.state.opacity.setValue(0);
    });
  };

  render() {
    const scale = this.state.scale.interpolate({
      inputRange: [1, 2],
      outputRange: [0, 1],
    });

    const opacity = this.state.opacity.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [0, 0.1, 1],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.imageWrapper, { opacity }]}>
          <Animated.Image
            source={require('../assets/garbage.png')}
            style={[styles.actionIcon, { transform: [{ scale }], opacity }]}
          />
        </Animated.View>
        <View style={styles.animationButton}>
          <TouchableOpacity onPress={this.runAnimation}>
            <Text>Run Animation</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    height: 30,
  },
  imageWrapper: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  animationButton: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
