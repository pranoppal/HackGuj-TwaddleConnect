import {useStoreActions, useStoreState} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button} from 'react-native-paper';

export default function TeacherProfile(props) {
    //   const user = useStoreState(state => state.user);
    const [isLoading, setLoading] = useState(false);

    return (
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
            {!isLoading ? (
                <View style={{flex: 1}}>
                    <View style={{flex: 0.1}} />
                    <View style={styles.dpContainer}>
                        <Image
                            source={require('../../../../assets/student.png')}
                            style={{height: 150, width: 150, borderRadius: 75}}
                        />
                    </View>
                    <View style={[styles.nameEditButtonContainer, {}]}>
                        <Text style={{fontSize: 21}}>
                            Narendra{' '}
                            <Text style={{color: '#5382FA'}}>Modi</Text>
                        </Text>
                        <Button
                            icon={({size, color}) => (
                                <MaterialIcons
                                    name="edit"
                                    size={18}
                                    color="#5382FA"
                                />
                            )}
                            color="#5382FA"
                            style={styles.editButtonStyle}
                            onPress={() => console.log('Pressed')}>
                            Edit
                        </Button>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.eachDetailContainer}>
                            <View style={styles.iconDetailContainer}>
                                <Ionicons
                                    name="ios-information-circle-outline"
                                    size={24}
                                    color="#929292"
                                />
                            </View>
                            <View style={styles.textInfoIndiContainer}>
                                <Text style={styles.infoText}>About</Text>
                                <Text style={styles.eachDetailValueText}>
                                    I'm sabse acha teacher
                                </Text>
                            </View>
                        </View>
                        <View style={styles.eachDetailContainer}>
                            <View style={styles.iconDetailContainer}>
                                <Ionicons
                                    name="md-school-outline"
                                    size={24}
                                    color="#929292"
                                />
                            </View>
                            <View style={styles.textInfoIndiContainer}>
                                <Text style={styles.infoText}>School</Text>
                                <Text style={styles.eachDetailValueText}>
                                    KV EME Baroda
                                </Text>
                            </View>
                        </View>
                        <View style={styles.eachDetailContainer}>
                            <View
                                style={[
                                    styles.iconDetailContainer,
                                    {marginBottom: 2},
                                ]}>
                                <MaterialCommunityIcons
                                    name="google-classroom"
                                    size={24}
                                    color="#929292"
                                />
                            </View>
                            <View style={styles.textInfoIndiContainer}>
                                <Text style={styles.infoText}>Classes</Text>
                                <Text style={styles.eachDetailValueText}>
                                    3, 4, 9
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 0.4}}></View>
                </View>
            ) : (
                <ActivityIndicator
                    size="large"
                    style={{flex: 1, alignSelf: 'center'}}
                    color="#589BF4"
                />
            )}
        </View>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    dpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12,
    },
    nameEditButtonContainer: {
        flex: 0.7,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editButtonStyle: {
        width: 90,
        height: 35,
        borderWidth: 1,
        borderColor: '#5382FA',
        borderRadius: 30,
        alignSelf: 'flex-end',
        marginEnd: 24,
        justifyContent: 'center',
    },
    eachDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconDetailContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    eachDetailValueText: {fontSize: 15},
    infoText: {color: '#5382FA', fontSize: 12},
    textInfoIndiContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginStart: 16,
    },
});
