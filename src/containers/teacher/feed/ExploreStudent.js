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
import {TouchableRipple, Button} from 'react-native-paper';
import {FAB} from 'react-native-paper';
import {BarChart, Grid} from 'react-native-svg-charts';

export default function ExploreStudent({navigation}) {
    //   const {events} = useStoreState(state => state.events);
    //   const {getEvents} = useStoreActions(actions => actions.events);
    const [isLoading, setLoading] = useState(false);
    const [
        overviewAnalyticsGraphVisible,
        setOverviewAnalyticsGraphVisible,
    ] = useState(false);
    //   useEffect(() => {
    //     getEvents();
    //   }, []);

    //   useEffect(() => {
    //     if (!isEmpty(events)) setLoading(false);
    //   }, [events]);

    function handleClassClick() {
        setOverviewAnalyticsGraphVisible(!overviewAnalyticsGraphVisible);
    }

    const fill = 'rgb(134, 65, 244)';
    const data = [
        50,
        10,
        40,
        95,
        -4,
        -24,
        null,
        85,
        undefined,
        0,
        35,
        53,
        -53,
        24,
        50,
        -20,
        -80,
    ];

    const showOverviewGraph = () => {
        return overviewAnalyticsGraphVisible ? (
            <View style={{flex: 1,marginTop:24,borderTopWidth:1}}>
                {/* <View style={{height:1,width:width*0.9,backgroundColor:'#000'}}/> */}
                <BarChart
                    style={{height: 200}}
                    data={data}
                    svg={{fill}}
                    contentInset={{top: 30, bottom: 30}}>
                    <Grid />
                </BarChart>
                <View>
                    <Button
                        icon="arrow-right"
                        mode="contained"
                        color="#5382FA"
                        uppercase={false}
                        style={{width:120,height:40,borderRadius:20,alignSelf:'flex-end',marginEnd:24,}}
                        labelStyle={{color:'#ffffff'}}
                        onPress={() => navigation.navigate('StudentAnalyticsTopBarNavigator')}>
                        Details
                    </Button>
                </View>
            </View>
        ) : (
            <View />
        );
    };
    const showClassCards = () => {
        // if (!isEmpty(events)) {
        //   const cards = events.map((event, index) => {key={index}

        return (
            <View style={styles.cardContainer}>
                <TouchableRipple onPress={() => handleClassClick()}>
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
                                name="arrow-down-drop-circle"
                                size={32}
                                color="#5382FA"
                            />
                        </View>
                    </View>
                </TouchableRipple>
                {showOverviewGraph()}
            </View>
        );
        //   });
        //   return cards;
        // } else return null;
    };
    return !isLoading ? (
        <View style={{flex: 1}}>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#5384FA',
                    width: 200,
                    justifyContent: 'space-between',
                    borderRadius: 20,
                    height: 40,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginVertical: 16,
                }}>
                <Text style={{fontSize: 16, color: '#fff', marginStart: 12}}>
                    Student Analytics
                </Text>
                <Image
                    source={require('../../../../assets/AnalyticsIcon.png')}
                    style={{width: 20, height: 18, marginEnd: 16}}
                />
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>{showClassCards()}</View>
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
