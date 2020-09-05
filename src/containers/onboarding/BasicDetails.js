import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    ActivityIndicator,
    ToastAndroid,
    Alert,
    TextInput,
    Pressable,
    PermissionsAndroid,
    Modal,
} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {useStoreActions, useStoreState} from 'easy-peasy';
// import {TextInputLayout} from 'rn-textinputlayout';
import ImagePicker from 'react-native-image-crop-picker';

/* this page is for getting basic details of the student such as name class school.
this can be done either by uploading the school id card otherwise manually entering the values.
*/
export default function BasicDetails({navigation}) {
    const [isPermissionGranted, setPermissionGranted] = useState(false);
    const [isAnimating, setAnimating] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const options = {
        title: 'Select School ID Card',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Cool Photo App storage Permission',
                    message:
                        'Cool Photo App needs access to your storage ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //choose img from storage
                chooseFromGallery();
            } else {
                console.log('Storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //choose img from camera
                chooseFromCamera();
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    function chooseFromGallery() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            console.log(image);
            setModalVisible(false);
        });
    }
    function chooseFromCamera() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            console.log(image);
            setModalVisible(false);
        });
    }

    function showConfirmUploadAlert(file) {
        Alert.alert(
            'Confirm Upload',
            'File Name:' + file.name,
            [
                {text: 'Yes', onPress: () => uploadFile(file)},
                {
                    text: 'No',
                    onPress: () => {
                        setFileSelected(false);
                    },
                },
            ],
            {cancelable: false},
        );
    }

    const showModal = () => {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.centeredView}>
                        <View
                            style={styles.modalView}>
                            <TouchableRipple
                                onPress={() => requestCameraPermission()}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <Text>Take picture now</Text>
                            </TouchableRipple>
                            <TouchableRipple
                                onPress={() => requestStoragePermission()}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <Text>Choose image from gallery</Text>
                            </TouchableRipple>
                            <TouchableRipple
                                onPress={() => setModalVisible(false)}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <Text>Cancel</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', right: 0, top: 0}}>
                <TouchableRipple
                    onPress={() => navigation.navigate('BottomTabNavigator')}
                    rippleColor="rgba(0, 0, 0, .32)">
                    <Text>SKIP{'>>'}</Text>
                </TouchableRipple>
            </View>
            <View>
                <Text
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
                </Button>

                {showModal()}
                <ActivityIndicator
                    animating={isAnimating}
                    size="large"
                    style={{flex: 1, alignSelf: 'center'}}
                    color="#ee6002"
                />                
                <Button
                    onPress={() => {
                        navigation.navigate('BottomTabNavigator');
                    }}
                    color="#5382FA">
                    Next
                </Button>
                
            </View>
        </View>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
        backgroundColor:"#ffffff",
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        padding: 16,
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
