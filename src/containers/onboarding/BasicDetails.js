import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    // TouchableOpacity,
    // ScrollView,
    // Image,
    Dimensions,
    ScrollView,
    // ActivityIndicator,
    // ToastAndroid,
    // Alert,
    // TextInput,
    // Pressable,
    // PermissionsAndroid,
    // TouchableOpacity,
} from 'react-native';
import {
    Button,
    Modal,
    Portal,
    Provider,
    RadioButton,
    Checkbox,
} from 'react-native-paper';
// import Feather from 'react-native-vector-icons/Feather';
import {useStoreActions, useStoreState} from 'easy-peasy';
// import {TextInputLayout} from 'rn-textinputlayout';
// import ImagePicker from 'react-native-image-crop-picker';
import Select2 from 'react-native-select-two';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';

/* this page is for getting basic details of the student such as name class school.
this can be done either by uploading the school id card otherwise manually entering the values.
*/
export default function BasicDetails({navigation, route}) {
    // const [isPermissionGranted, setPermissionGranted] = useState(false);
    // const [isAnimating, setAnimating] = useState(false);
    // const [modalVisible, setModalVisible] = useState(false);
    const {insertUser, getInterests} = useStoreActions(
        (actions) => actions.user,
    );
    const user = useStoreState((state) => state.user);

    const [isValidClass, setValidClass] = useState(false);
    const [isValidInterest, setValidInterest] = useState(false);
    const [classesModalVisible, setClassesModalVisible] = useState(false);
    const [classes, setClasses] = useState(' Add ?');
    const [
        multipleClassesModalVisible,
        setMultipleClassesModalVisible,
    ] = useState(false);
    const [firstClassChecked, setFirstClassChecked] = useState(false);
    const [secondClassChecked, setSecondClassChecked] = useState(false);
    const [thirdClassChecked, setThirdClassChecked] = useState(false);
    const [forthClassChecked, setForthClassChecked] = useState(false);
    const [fifthClassChecked, setFifthClassChecked] = useState(false);
    const [sixthClassChecked, setSixthClassChecked] = useState(false);
    const [seventhClassChecked, setSeventhClassChecked] = useState(false);
    const [eighthClassChecked, setEighthClassChecked] = useState(false);
    const [ninthClassChecked, setNinthClassChecked] = useState(false);
    const [tenthClassChecked, setTenthClassChecked] = useState(false);
    const [eleventhClassChecked, setEleventhClassChecked] = useState(false);
    const [twelfthClassChecked, setTwelfthClassChecked] = useState(false);

    const userDetails = route.params ? route.params.userDetails : null;
    const [interestListSelect2, setInterestListSelect2] = useState([]);
    const [token, setToken] = useState('');
    const [userType, setUserType] = useState('');
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        getInterests();
    }, []);

    useEffect(() => {
        if (userDetails && userDetails.token) setToken(userDetails.token);
        if (userDetails && userDetails.userType) setUserType(userDetails.userType);
    }, [userDetails]);



    useEffect(()=>{
        if(user && user.interests) setMockData(user.interests);
    },[user]);

    const hideClassesModal = () => setClassesModalVisible(false);

    const classesModal = () => {
        return (
            <Provider>
                <Portal>
                    <Modal
                        visible={classesModalVisible}
                        onDismiss={hideClassesModal}
                        contentContainerStyle={
                            styles.FABActionmodalContainerStyle
                        }>
                        <View style={styles.classModalContainer}>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: '#000',
                                    marginTop: 4,
                                }}>
                                Select class
                            </Text>
                            <ScrollView>
                                <RadioButton.Group
                                    onValueChange={(value) => {
                                        setClasses(value);
                                        setClassesModalVisible(false);
                                        setValidClass(true);
                                    }}
                                    value={classes}>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>I</Text>
                                        <RadioButton
                                            value="I"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>II</Text>
                                        <RadioButton
                                            value="II"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>III</Text>
                                        <RadioButton
                                            value="III"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>IV</Text>
                                        <RadioButton
                                            value="IV"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>V</Text>
                                        <RadioButton
                                            value="V"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>VI</Text>
                                        <RadioButton
                                            value="VI"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>VII</Text>
                                        <RadioButton
                                            value="VII"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>VIII</Text>
                                        <RadioButton
                                            value="VIII"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>IX</Text>
                                        <RadioButton
                                            value="IX"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>X</Text>
                                        <RadioButton
                                            value="X"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>XI</Text>
                                        <RadioButton
                                            value="XI"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                    <View style={styles.radioButtonStyle}>
                                        <Text>XII</Text>
                                        <RadioButton
                                            value="XII"
                                            color="#5382fa"
                                            uncheckedColor="#000"
                                        />
                                    </View>
                                </RadioButton.Group>
                            </ScrollView>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        );
    };
    const hideMultipleClassesModal = () =>
        setMultipleClassesModalVisible(false);

    function getMultipleClasses() {
        let multipleClassesList = [];
        if (firstClassChecked) multipleClassesList.push('I');
        if (secondClassChecked) multipleClassesList.push('II');
        if (thirdClassChecked) multipleClassesList.push('III');
        if (forthClassChecked) multipleClassesList.push('IV');
        if (fifthClassChecked) multipleClassesList.push('V');
        if (sixthClassChecked) multipleClassesList.push('VI');
        if (seventhClassChecked) multipleClassesList.push('VII');
        if (eighthClassChecked) multipleClassesList.push('VIII');
        if (ninthClassChecked) multipleClassesList.push('IX');
        if (tenthClassChecked) multipleClassesList.push('X');
        if (eleventhClassChecked) multipleClassesList.push('XI');
        if (twelfthClassChecked) multipleClassesList.push('XII');
        return multipleClassesList;
    }
    const multipleClassesModal = () => {
        return (
            <Provider>
                <Portal>
                    <Modal
                        visible={multipleClassesModalVisible}
                        onDismiss={hideMultipleClassesModal}
                        contentContainerStyle={
                            styles.FABActionmodalContainerStyle
                        }>
                        <View style={styles.multipleClassModalContainer}>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: '#000',
                                    marginTop: 4,
                                }}>
                                Select class
                            </Text>
                            <ScrollView>
                                <Checkbox.Item
                                    label="I"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        firstClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setFirstClassChecked(
                                            !firstClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="II"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        secondClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setSecondClassChecked(
                                            !secondClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="III"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        thirdClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setThirdClassChecked(
                                            !thirdClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="IV"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        forthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setForthClassChecked(
                                            !forthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="V"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        fifthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setFifthClassChecked(
                                            !fifthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="VI"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        sixthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setSixthClassChecked(
                                            !sixthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="VII"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        seventhClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setSeventhClassChecked(
                                            !seventhClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="VIII"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        eighthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setEighthClassChecked(
                                            !eighthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="IX"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        ninthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setNinthClassChecked(
                                            !ninthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="X"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        tenthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setTenthClassChecked(
                                            !tenthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="XI"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        eleventhClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setEleventhClassChecked(
                                            !eleventhClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                                <Checkbox.Item
                                    label="XII"
                                    color="#5382fa"
                                    uncheckedColor="#000"
                                    status={
                                        twelfthClassChecked
                                            ? 'checked'
                                            : 'unchecked'
                                    }
                                    onPress={() => {
                                        setTwelfthClassChecked(
                                            !twelfthClassChecked,
                                        );
                                    }}
                                    style={styles.checkboxStyle}
                                />
                            </ScrollView>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Button
                                    onPress={() => {
                                        if (
                                            twelfthClassChecked ||
                                            eighthClassChecked ||
                                            eleventhClassChecked ||
                                            tenthClassChecked ||
                                            ninthClassChecked ||
                                            seventhClassChecked ||
                                            sixthClassChecked ||
                                            fifthClassChecked ||
                                            forthClassChecked ||
                                            thirdClassChecked ||
                                            secondClassChecked ||
                                            firstClassChecked
                                        ) {
                                            setValidClass(true);
                                        }
                                        setMultipleClassesModalVisible(false);
                                    }}
                                    style={[
                                        styles.nextButtonStyle,
                                        {marginBottom: 12, zIndex: 10},
                                    ]}
                                    mode="contained"
                                    labelStyle={{color: '#fff'}}>
                                    Done
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        );
    };

    useEffect(() => {
        async function navigateToBasicDetails() {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('userId', user.user.uuid);
            await AsyncStorage.setItem('firstName', user.user.first_name);
            await AsyncStorage.setItem('lastName', user.user.last_name);
            await AsyncStorage.setItem('dp', user.user.dp);
            await AsyncStorage.setItem('email', user.user.email_id);
            await AsyncStorage.setItem('userType', userType);
            await AsyncStorage.setItem(
                'organisationName',
                user.user.organisation_name,
            );

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'BottomTabNavigator'}],
                }),
            );
        }
        if (user && user.user && user.user.uuid) navigateToBasicDetails();
    }, [user]);

    function handleNextButton() {
        let interests_list = [];
        for (const index of interestListSelect2) {
            interests_list.push(user.interests[index].name);
        }
        let payload = {};
        if (userDetails.userType === 'student') {
            payload = {
                user: userDetails,
                interests_list: interests_list,
                standard: classes,
            };
        } else if (userDetails.userType === 'teacher') {
            payload = {
                user: userDetails,
                interests_list: interests_list,
                classes: getMultipleClasses(),
            };
        }

        insertUser(payload);
    }

    function handleSelectClass() {
        if (userDetails.userType === 'student') {
            setClassesModalVisible(true);
        } else if (userDetails.userType === 'teacher') {
            setMultipleClassesModalVisible(true);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.basicDetailsHeader}>Basic Details</Text>
            <View style={styles.secondaryContainer}>
                <View style={styles.classesContainer}>
                    <Text
                        style={{fontSize: 18, color: '#fff', marginStart: 16}}>
                        Class:
                        {userDetails.userType === 'student'
                            ? classes
                            : getMultipleClasses().map((val, key) => (
                                  <Text key={key}>{val},</Text>
                              ))}
                    </Text>
                    <Button
                        onPress={() => handleSelectClass()}
                        color="#fff"
                        mode="outlined"
                        uppercase={false}
                        style={{
                            borderWidth: 2,
                            marginEnd: 16,
                            borderColor: '#fff',
                        }}>
                        Select
                    </Button>
                </View>
            </View>

            {userDetails.userType === 'student' ? (
                <View style={styles.interestsContainer}>
                    <Text
                        style={{
                            color: '#5382fa',
                            fontSize: 18,
                            marginBottom: 4,
                        }}>
                        Select your interests:
                    </Text>
                    <Select2
                        isSelectSingle={false}
                        style={{
                            borderRadius: 10,
                            marginHorizontal: 24,
                            width: width * 0.9,
                            backgroundColor: '#5382fa',
                        }}
                        selectedTitleStyle={{color: '#fff'}}
                        colorTheme="blue"
                        popupTitle="Select Interests"
                        title="Select Interests"
                        cancelButtonText="Cancel"
                        selectButtonText="Done"
                        searchPlaceHolderText="Eg. arts, chess"
                        data={mockData}
                        colorTheme="#5382fa"
                        listEmptyTitle="Loading, Please wait"
                        onSelect={(data) => {
                            setInterestListSelect2(data);
                            if (data.length > 0) setValidInterest(true);
                        }}
                        onRemoveItem={(data) => {}}
                    />
                </View>
            ) : (
                <View style={styles.interestsContainer}>
                    <Text
                        style={{
                            color: '#5382fa',
                            fontSize: 18,
                            marginBottom: 4,
                        }}>
                        Select your Expertise:
                    </Text>
                    <Select2
                        isSelectSingle={false}
                        style={{
                            borderRadius: 10,
                            marginHorizontal: 24,
                            width: width * 0.9,
                            backgroundColor: '#5382fa',
                        }}
                        selectedTitleStyle={{color: '#fff'}}
                        colorTheme="blue"
                        popupTitle="Select Expertise"
                        title="Select Expertise"
                        cancelButtonText="Cancel"
                        selectButtonText="Done"
                        searchPlaceHolderText="Eg. arts, chess"
                        data={mockData}
                        colorTheme="#5382fa"
                        listEmptyTitle="Loading, Please wait"
                        onSelect={(data) => {
                            setInterestListSelect2(data);
                            if (data.length > 0) setValidInterest(true);
                        }}
                        onRemoveItem={(data) => {}}
                    />
                </View>
            )}
            {multipleClassesModal()}
            {classesModal()}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Button
                    onPress={() => handleNextButton()}
                    style={styles.nextButtonStyle}
                    mode="contained"
                    disabled={isValidInterest && isValidClass ? false : true}
                    labelStyle={{color: '#fff'}}>
                    Next
                </Button>
            </View>
        </View>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    interestsContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryContainer: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    classesContainer: {
        backgroundColor: '#5382fa',
        width: width * 0.9,
        height: 75,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
    },
    basicDetailsHeader: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-Regular',
        marginTop: 8,
    },
    nextButtonStyle: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 24,
        zIndex: -10,
        width: 120,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#5382fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    multipleClassModalContainer: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        height: height * 0.94,
        width: width * 0.8,
        alignItems: 'center',
        borderRadius: 8,
    },
    classModalContainer: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        height: height * 0.87,
        width: width * 0.8,
        alignItems: 'center',
        borderRadius: 8,
    },
    radioButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.5,
        marginVertical: 2,
    },
    checkboxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.6,
        height: 40,
    },
    FABActionmodalContainerStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textInput: {
        fontSize: 16,
        // width: "95%",
        height: 40,
        // borderWidth: 1,
        // borderColor: 'gray',
        // textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
    },
    modalView: {
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width * 0.8,
        height: 180,
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    buttonStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        padding: 5,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        color: 'black',
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
    topText: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
    input: {
        marginTop: 40,
        margin: 15,
        height: 45,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },
});

/*     <Text
                    style={[
                        styles.textStyle,
                        {textAlign: 'center', marginBottom: 20},
                    ]}>
                    Please select file from your local storage{' '}
                </Text>
                <View style={{alignSelf: 'center', marginTop: 8}}>
                    <Feather
                        name="file-text"
                        style={{color: '#F14386', fontSize: 48}}
                    />
                </View>

                <Text style={{fontSize: 12, textAlign: 'center'}}>
                    Supported File Types: .pdf
                </Text>
                <Text style={{fontSize: 12, textAlign: 'center'}}>
                    Max. File size allowed: 5MB
                </Text>

                <Button
                    onPress={() => {
                        setModalVisible(true);
                        console.log('asdfasdf');
                    }}
                    color="#5382FA">
                    Upload
                </Button> */

// const requestStoragePermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//             {
//                 title: 'Cool Photo App storage Permission',
//                 message:
//                     'Cool Photo App needs access to your storage ' +
//                     'so you can take awesome pictures.',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //choose img from storage
//             chooseFromGallery();
//         } else {
//             console.log('Storage permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// const requestCameraPermission = async () => {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//                 title: 'Cool Photo App Camera Permission',
//                 message:
//                     'Cool Photo App needs access to your camera ' +
//                     'so you can take awesome pictures.',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //choose img from camera
//             chooseFromCamera();
//         } else {
//             console.log('Camera permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// };

// function chooseFromGallery() {
//     ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//     }).then((image) => {
//         console.log(image);
//         setModalVisible(false);
//     });
// }
// function chooseFromCamera() {
//     ImagePicker.openCamera({
//         width: 300,
//         height: 400,
//         cropping: true,
//     }).then((image) => {
//         console.log(image);
//         setModalVisible(false);
//     });
// }

// const showModal = () => {
//     return (
//         <View style={styles.centeredView}>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     Alert.alert('Modal has been closed.');
//                 }}>
//                 <View style={styles.centeredView}>
//                     <View style={styles.modalView}>
//                         <TouchableRipple
//                             onPress={() => requestCameraPermission()}
//                             rippleColor="rgba(0, 0, 0, .32)">
//                             <Text>Take picture now</Text>
//                         </TouchableRipple>
//                         <TouchableRipple
//                             onPress={() => requestStoragePermission()}
//                             rippleColor="rgba(0, 0, 0, .32)">
//                             <Text>Choose image from gallery</Text>
//                         </TouchableRipple>
//                         <TouchableRipple
//                             onPress={() => setModalVisible(false)}
//                             rippleColor="rgba(0, 0, 0, .32)">
//                             <Text>Cancel</Text>
//                         </TouchableRipple>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };
