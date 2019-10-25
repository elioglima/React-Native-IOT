import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { backgroud, buttonPower, status, stdescritivo } from './styles'
import { SvgCssUri } from 'react-native-svg';

const Home = ({ navigation }) => {

  useEffect(() => {
    StatusBar.setBackgroundColor('#3A7FEA')
    StatusBar.setBarStyle('light-content')
  }, [])

  return (
    <View style={backgroud.base}>
      <View style={buttonPower.base} >
        <View style={buttonPower.botao}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            {/* <Image style={{ width: 100, height: 100 }} source={require('../../assets/power.png')} /> */}
            <SvgCssUri
              width="100%"
              height="100%"
              uri="../../assets/power.svg"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={status.base}>
        <View style={status.box}>
          <Text style={status.titulo}>NOW</Text>
          <Text style={status.status}>ONssss</Text>
        </View>
      </View>
      <View style={stdescritivo.base}>
        <View style={stdescritivo.box}>
          <Text style={stdescritivo.titulo1}>Switch to </Text>
          <Text style={stdescritivo.titulo2}>Standy By</Text>
        </View>
      </View>
    </View>
  );
}

Home.navigationOptions = {
  headerMode: 'screen',
  header: (<></>
  ),
}

export default Home

