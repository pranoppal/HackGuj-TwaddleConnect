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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableRipple} from 'react-native-paper';

export default function UserHome({navigation}) {
    const user = useStoreState((state) => state.user);
    const student = useStoreState((state) => state.student);
    const {getPosts} = useStoreActions((actions) => actions.student);

    const [isLoading, setLoading] = useState(true);

    //   useEffect(() => {
    //     const payload = {
    //         postBy:'student',
    //         student_id:'adfads56f456fa',
    //     }
    //     // if(user.id){
    //     //     getPosts(payload);
    //     // }
    //         getPosts(payload)
    //   }, [user]);

    useEffect(() => {
        const payload = {
            postBy: 'student',
            student_id: 'adfads56f456fa',
        };
        getPosts(payload);
        console.log('post leke aa');
    }, []);
    console.log('flkdsajflajkf');
    useEffect(() => {
        console.log('called', student);
        if (student && student.posts) setLoading(false);
    }, [student]);

    const showEventCards = () => {
        // if (!isEmpty(events)) {
        //   const cards = events.map((event, index) => {key={index}
        if (student && student.posts && !isEmpty(student.posts)) {
            const cards = student.posts.map((post, index) => {
                return (
                    <View style={styles.cardContainer} key={index}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginHorizontal: 24,
                                marginVertical: 12,
                                justifyContent: 'center',
                            }}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image
                                    source={require('../../../../assets/student.png')}
                                    style={{
                                        height: 48,
                                        width: 48,
                                        borderRadius: 24,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 4,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                }}>
                                <Text style={styles.eventNameText}>
                                    Narendra Modi
                                </Text>
                                <Text style={styles.eventClubText}>
                                    SVNIT Class 12
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <Image
                                source={require('../../../../assets/school.png')}
                                style={{
                                    height: 180,
                                    width: width,
                                    borderRadius: 24,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 24,
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                <AntDesign name="like2" size={18} />
                                <Text style={styles.eventDetailText}>Like</Text>
                            </View>
                            <TouchableRipple
                                onPress={() => {
                                    navigation.navigate('PostDetail');
                                }}>
                                <View style={styles.commentContainer}>
                                    <MaterialCommunityIcons
                                        name="comment-text-outline"
                                        size={18}
                                    />
                                    <Text style={styles.eventDetailText}>
                                        Comment
                                    </Text>
                                </View>
                            </TouchableRipple>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}>
                                <FontAwesome name="mail-forward" size={18} />
                                <Text style={styles.eventDetailText}>
                                    Share
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            });
            return cards;
        } else return null;
    };
    return !isLoading ? (
        <View style={{flex: 1}}>
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
        height: 300,
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
