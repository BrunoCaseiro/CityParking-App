import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions,Text } from 'react-native';
import GetLocation from 'react-native-get-location';
import { Marker } from 'react-native-maps';
export default class HomeScreen extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      lat: 40,
      alt: -8,
      isDone: false,
    }
  }
  componentDidMount(){
   navigator.geolocation.getCurrentPosition(
     position => {
       console.log(position.coords.latitude )
       this.setState({
         lat : position.coords.latitude,
         alt : position.coords.longitude,
         isDone : true,
       })
       console.log(this.state)
     }
   )
  }

  render() {
    if(this.state.isDone){
      return (
        <View style={styles.container}>
        
          <MapView style={styles.mapStyle}
              
              initialRegion={{
                latitude: this.state.lat,
                longitude: this.state.alt,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
          />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
        
         <Text>Loading...</Text>
        </View>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});