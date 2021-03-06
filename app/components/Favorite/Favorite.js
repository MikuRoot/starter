import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import {Colors} from "../../configs/colors";

export default class Favorite extends React.PureComponent{
  render() {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.dark,
          fontSize: 16
        }}>
          Favorite screen
        </Text>
      </View>
    )
  }
}
