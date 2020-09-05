import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export default function Events() {
//   const {events} = useStoreState(state => state.events);
//   const {getEvents} = useStoreActions(actions => actions.events);
  const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     getEvents();
//   }, []);

//   useEffect(() => {
//     if (!isEmpty(events)) setLoading(false);
//   }, [events]);



  const showEventCards = () => {
    // if (!isEmpty(events)) {
    //   const cards = events.map((event, index) => {key={index}

        return (
          <View  style={styles.cardContainer}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                marginHorizontal: 24,
                marginTop: 24,
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.eventNameText}>asdfasd</Text>
                <Text style={styles.eventClubText}>fasd</Text>
                
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 24,
                marginVertical: 8,
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Feather name="clock" size={20} />
                <Text style={styles.eventDetailText}>5PM</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <EvilIcons name="location" size={24} />
                <Text style={styles.eventDetailText}>asdfasd</Text>
              </View>
            </View>
          </View>
        );
    //   });
    //   return cards;
    // } else return null;
  };
  return !isLoading ? (
    <View style={{flex:1}}>
      <ScrollView style={{flex: 1}}>
      <Text style={styles.eventsTitleText}>Feed</Text>
        <View style={styles.mainContainer}>{showEventCards()}</View>
      </ScrollView>
      </View>
  ) : (
    
      <View style={styles.mainContainer}>
        <ActivityIndicator
          color={'#f1c644'}
          size={36}
          style={styles.activityIndicator}
        />
      </View>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  topImage: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#efeeee',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    height: 180,
    marginBottom: 24,
  },
  eventsTitleText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  eventClubText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: -8,
  },
  eventDetailText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    textAlignVertical: 'center',
    marginStart: 4,
    marginBottom: 3,
  },
  eventNameText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
});
