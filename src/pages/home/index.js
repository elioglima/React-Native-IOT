import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

  const [estado, setEstado] = useState(false)
  const corOn = '#499dff'
  const corOff = '#fff'

  useEffect(() => {
    // StatusBar.setColor(corOn)
    StatusBar.setHidden(true)
  }, [])

  const onPress = () => {
    setEstado(!estado)
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: estado ? corOn : corOff,
    }}>
      <View style={{
        flex: 6,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
        backgroundColor: estado ? corOn : corOff,
      }} >
        <View style={{}}>
          <TouchableOpacity onPress={onPress} >
            <Icon name="power-off" size={150} color={estado ? corOff : corOn} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flex: 3,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
      }}>
        <View style={{
          width: 200,
        }}>
          <Text style={{
            fontSize: 15,
            color: estado ? corOff : corOn
          }}>NOW</Text>
          <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: estado ? corOff : corOn
          }}>{estado ? 'ON' : 'Standy By'}</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onPress} >
        <View style={{
          flex: 3,
          backgroundColor: estado ? corOff : corOn,
          justifyContent: 'center',
          alignContent: "center",
          alignItems: "center",
        }}>
          <View style={{
            width: 200,
          }}>

            <Text style={{
              fontSize: 15,
              color: estado ? corOn : corOff,
            }}>Switch to </Text>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: estado ? corOn : corOff,
            }}>{estado ? 'Standy By' : 'ON'}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View >
  );
}

Home.navigationOptions = {
  headerMode: 'screen',
  header: (<></>
  ),
}

export default Home

