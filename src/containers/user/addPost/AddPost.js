import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Image,
    ScrollView,
    ImageBackground,
    TextInput,
    Dimensions,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableRipple, Divider, Button} from 'react-native-paper';
import Select2 from 'react-native-select-two';

export default function AddPost({navigation}) {
    const {user} = useStoreState((state) => state.user);
    const {createPost} = useStoreActions((actions) => actions.student);
    const [isLoading, setLoading] = useState(false);
    var textInputContent = '';

    const mockData = [
        {id: 1, name: 'React Native Developer', checked: true}, // set default checked for render option item
        {id: 2, name: 'Android Developer'},
        {id: 3, name: 'iOS Developer'},
        {id: 4, name: 'iOS Developer'},
        {id: 5, name: 'iOS Developer'},
        {id: 6, name: 'iOS Developer'},
    ];

    //configure the header
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => handleSubmitPost()}>Post</Button>
            ),
            headerTitle: () => <Text style={{fontSize: 18}}>Share Post</Text>,
            headerLeft: () => (
                <TouchableRipple
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{marginStart: 8}}>
                    <MaterialCommunityIcons
                        name="window-close"
                        size={24}
                        color="#5382FA"
                    />
                </TouchableRipple>
            ),
        });
    }, [navigation]);

    function handleSubmitPost() {
        if (textInputContent.length == 0) return;
        const payload = {
            userId: 'afjea4f54faesfaeaadsf',
            contentText: textInputContent,
        };
        createPost(payload);
    }
    return !isLoading ? (
        <View style={styles.mainContainer}>
            <View style={styles.headerDPNameContainer}>
                <View style={styles.dpContainer}>
                    <Image
                        source={require('../../../../assets/student.png')}
                        style={styles.dpStyle}
                    />
                </View>
                <View style={styles.headerNameContainer}>
                    <Text style={styles.eventNameText}>Narendra Modi</Text>
                    <View style={[styles.postToChannelContainer,{alignItems:'center',borderWidth:1}]}>
                        <Select2
                            isSelectSingle={true}
                            style={{borderWidth:0,}}
                            colorTheme="blue"
                            popupTitle="Select item"
                            title="Select item"
                            data={mockData}
                            onSelect={(data) => {}}
                            onRemoveItem={(data) => {}}
                        />
                        <MaterialCommunityIcons name="chevron-down" size={24} color="#5382FA" style={{marginStart:-width*0.25,}}/>
                    </View>
                </View>
            </View>
            <View style={{flex: 2}}>
                <Select2
                    isSelectSingle={false}
                    style={{borderRadius: 20}}
                    colorTheme="blue"
                    popupTitle="Select item"
                    title="Select item"
                    data={mockData}
                    onSelect={(data) => {}}
                    onRemoveItem={(data) => {}}
                />
            </View>
            <View style={{flex: 3, marginVertical: 8}}>
                <TextInput
                    style={{
                        width: width * 0.9,
                        height: height * 0.3,
                        color: '#5382FA',
                        fontSize: 18,
                    }}
                    onChangeText={(text) => (textInputContent = text)}
                    placeholder="Share anything you feel!"
                    placeholderTextColor={'#5382FA'}
                />
            </View>
            <View style={styles.footerOptionsContainer}>
                <View style={styles.divider} />
                <View style={styles.footerIndividualOptionsContainer}>
                    <FontAwesome
                        name="image"
                        size={24}
                        style={{marginHorizontal: 16}}
                        color="#5382FA"
                    />
                    <Text>Add an Image</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.footerIndividualOptionsContainer}>
                    <Ionicons
                        name="document-text"
                        size={24}
                        color="#5382FA"
                        style={{marginHorizontal: 16}}
                    />
                    <Text>Attach a document</Text>
                </View>
                <View style={styles.divider} />
            </View>
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
    dpContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerOptionsContainer: {
        flex: 2,
        backgroundColor: '#ffffff',
        alignSelf: 'flex-start',
        width: width,
    },
    footerIndividualOptionsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
    },
    postToChannelContainer: {
        flex: 1,
        borderRadius: 6,
        flexDirection: 'row',
    },
    divider: {
        width: width,
        height: 1,
        backgroundColor: '#929292',
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
        marginHorizontal: 8,
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
