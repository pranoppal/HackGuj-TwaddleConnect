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
// import {useStoreState, useStoreActions} from 'easy-peasy';
// import {isEmpty} from 'lodash-es';
// import Feather from 'react-native-vector-icons/Feather';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableRipple} from 'react-native-paper';
import {FAB} from 'react-native-paper';

export default function UserHome({navigation}) {
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
            <View style={styles.cardContainer}>
                <TouchableRipple onPress={() => {}}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <View>
                            <Text style={{fontSize: 21, marginStart: 24}}>
                                Class 2
                            </Text>
                        </View>
                        <View style={{marginEnd: 24}}>
                            <MaterialCommunityIcons
                                name="arrow-right-circle"
                                size={32}
                                color="#5382FA"
                            />
                        </View>
                    </View>
                </TouchableRipple>
            </View>
        );
        //   });
        //   return cards;
        // } else return null;
    };
    return !isLoading ? (
        <View style={{flex: 1}}>
            <Text style={styles.eventsTitleText}>Student Analytics</Text>
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>{showEventCards()}</View>
            </ScrollView>
            <FAB
                style={styles.fab}
                small
                label="THE WORLD"
                icon="repeat"
                color="#fff"
                onPress={() => navigation.navigate('ExploreAll')}
            />
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#5382FA',
    },
    commentContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
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
        marginBottom: 24,
        paddingVertical: 24,
    },
    eventsTitleText: {
        fontSize: 24,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    eventClubText: {
        fontSize: 14,
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
        fontSize: 16,
        fontFamily: 'Helvetica',
    },
});
