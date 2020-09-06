import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Image,
    ScrollView,
    // ImageBackground,
    Dimensions,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
// import Feather from 'react-native-vector-icons/Feather';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableRipple} from 'react-native-paper';
import {call} from 'react-native-reanimated';

export default function UserHome({navigation}) {
    const user = useStoreState((state) => state.user);
    const student = useStoreState((state) => state.student);
    const {getPosts,clapPost,delClap} = useStoreActions((actions) => actions.student);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.user && user.user.uuid) {
            getPosts({
                postBy: user.user.by,
                userId: user.user.uuid,
            });
        }
    }, [user]);

    useEffect(() => {
        if (student && student.posts && !isEmpty(student.posts))
            setLoading(false);
    }, [student]);

    function handleClap(post) {
        if(!post.clapped)
            clapPost({pid:post.pid, userType:user.user.by, userId: user.user.uuid,});
        if(post.clapped)
        delClap({pid:post.pid, userType:user.user.by, userId: user.user.uuid,});
        if (user && user.user && user.user.uuid) {
            getPosts({
                postBy: user.user.by,
                userId: user.user.uuid,
            });
        }
    }

    const showEventCards = () => {
        if (student && student.posts && !isEmpty(student.posts)) {
            const cards = student.posts.map((post, index) => {
                let clapped = post.clapped;
                return (
                    <View style={styles.cardContainer} key={index}>
                        <View style={styles.headerDPNameContainer}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Image
                                    source={{uri: post.creator_details.dp}}
                                    style={styles.dpStyle}
                                />
                            </View>
                            <View style={styles.headerNameContainer}>
                                <Text style={styles.eventNameText}>
                                    {post.creator_details.first_name +
                                        ' ' +
                                        post.creator_details.last_name}
                                </Text>
                                <Text style={styles.eventClubText}>
                                    {post.creator_details.organisation_name}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <Text style={{fontSize: 16, marginHorizontal: 24}}>
                                {post.content_text}
                            </Text>
                            <Image
                                source={{uri: post.content_image}}
                                style={{
                                    height: 10,
                                    width: width,
                                    borderRadius: 24,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginHorizontal: 24,
                            }}>
                            <Text>
                                {post.reactions ? post.reactions.length : 0}{' '}
                                Claps
                            </Text>
                            <Text>
                                {post.comments ? post.comments.length : 0}{' '}
                                Comments
                            </Text>
                        </View>
                        <View style={styles.footerLikeCommentShareContainer}>
                            <View style={{flex: 1}}>
                                {clapped ? (
                                    <TouchableRipple
                                        onPress={() => {
                                            handleClap(post);
                                        }}>
                                        <View style={styles.clappedBg}>
                                            <Image
                                                source={require('../../../../assets/clap.png')}
                                                style={{width: 18, height: 18}}
                                            />
                                            <Text
                                                style={styles.eventDetailText}>
                                                Clap
                                            </Text>
                                        </View>
                                    </TouchableRipple>
                                ) : (
                                    <TouchableRipple
                                        onPress={() => {
                                            handleClap(post);
                                        }}>
                                        <View style={styles.unclappedBg}>
                                            <Image
                                                source={require('../../../../assets/clap.png')}
                                                style={{width: 18, height: 18}}
                                            />
                                            <Text
                                                style={styles.eventDetailText}>
                                                Clap
                                            </Text>
                                        </View>
                                    </TouchableRipple>
                                )}
                            </View>
                            <TouchableRipple
                                onPress={() => {
                                    navigation.navigate('PostDetail', {
                                        postDetail: post,
                                    });
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
    unclappedBg: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    clappedBg: {
        backgroundColor: '#5382fa',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10,
        marginHorizontal:8,
    },
    footerLikeCommentShareContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: 8,
        paddingVertical: 4,
        borderColor: '#a9a9a9',
    },
    headerNameContainer: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dpStyle: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    headerDPNameContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 24,
        marginVertical: 12,
        justifyContent: 'center',
    },
    divider: {
        borderWidth: 1,
        height: 1,
        borderColor: '#a9a9a9',
        marginVertical: 1,
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
        alignItems: 'center',
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
        flex: 1,
        width: width * 0.9,
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
