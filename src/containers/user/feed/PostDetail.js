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

export default function PostDetail({navigation, route}) {
    const [isLoading, setLoading] = useState(false);

    const post = route.params ? route.params.postDetail : null;

    return !isLoading ? (
        <ScrollView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.headerDPNameContainer}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
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
                        <Text style={{fontSize: 12, marginVertical: -4}}>
                            {post.creator_details.organisation_name}
                        </Text>
                        <Text style={{fontSize: 12}}>{post.created_at}</Text>
                    </View>
                </View>
                <View style={{flex: 3, marginVertical: 8}}>
                    <Text style={{fontSize: 16, marginHorizontal: 24}}>
                        {post.content_text}
                    </Text>
                    <Image
                        source={{uri: post.content_image}}
                        style={styles.postImageStyle}
                    />
                </View>
                <View style={styles.divider}></View>
                <View style={styles.footerLikeCommentShareContainer}>
                    <View style={styles.likeContainer}>
                        <Image
                            source={require('../../../../assets/clap.png')}
                            style={{width: 18, height: 18}}
                        />
                        <Text style={styles.eventDetailText}>Clap</Text>
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
                            <Text style={styles.eventDetailText}>Comment</Text>
                        </View>
                    </TouchableRipple>
                    <View style={styles.shareContainer}>
                        <FontAwesome name="mail-forward" size={18} />
                        <Text style={styles.eventDetailText}>Share</Text>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <View
                    style={{
                        flex: 14,
                        flexDirection: 'column',
                        width: width,
                        marginVertical: 8,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.commentDPContainer}>
                            <Image
                                source={require('../../../../assets/student.png')}
                                style={styles.dpStyle}
                            />
                        </View>
                        <View style={styles.commentBodyStyle}>
                            <Text style={styles.eventNameText}>
                                Narendra Modi
                            </Text>
                            <Text style={styles.eventClubText}>
                                SVNIT Class 12
                            </Text>
                            <Text style={styles.commentText}>
                                Badhiya desh chala rha hu mai thik hai badhiya
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
    divider: {
        borderWidth: 1,
        width: width,
        height: 1,
        borderColor: '#a9a9a9',
        marginVertical: 1,
    },
    commentDPContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginStart: 12,
        marginTop: 8,
    },
    commentBodyStyle: {
        flex: 4.5,
        flexDirection: 'column',
        backgroundColor: '#D3D3D3',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 10,
        marginEnd: 16,
    },
    shareContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    likeContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    footerLikeCommentShareContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        alignItems: 'center',
        marginVertical: 8,
    },
    postImageStyle: {
        height: 180,
        width: width,
        borderRadius: 24,
    },
    headerNameContainer: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    dpStyle: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    headerDPNameContainer: {
        flex: 1,
        flexDirection: 'row',
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
        marginHorizontal: 8,
        marginTop: 16,
    },
    activityIndicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
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
    commentText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginTop: 8,
    },
});
