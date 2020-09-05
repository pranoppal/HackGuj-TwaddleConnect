import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

export default function Splash({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                <TouchableRipple
                    style={styles.buttonContainer}
                    onPress={() => {
                        console.log('asdf');
                        navigation.navigate('TeacherBottomTabNavigator');
                    }}>
                    <Text style={{color: '#ffffff'}}>Teacher</Text>
                </TouchableRipple>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <View
                        style={styles.dividerLine}
                    />
                    <Text style={{color:'#929292'}}>  OR  </Text>
                    <View
                        style={styles.dividerLine}
                    />
                </View>

                <TouchableRipple
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('BottomTabNavigator')}>
                    <Text style={{color: '#ffffff'}}>Student</Text>
                </TouchableRipple>
            </View>
        </View>
    );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    dividerLine:{backgroundColor: '#929292', height: 1, width: 40},
    buttonContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#5382FA',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    logo: {
        height: height * 0.19,
        aspectRatio: 2,
        marginTop: -24,
    },
});
