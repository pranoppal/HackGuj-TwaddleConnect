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
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty, join} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    FAB,
    TouchableRipple,
    Modal,
    Portal,
    Provider,
    TextInput,
    IconButton,
} from 'react-native-paper';

export default function UserClub({navigation}) {
    //   const {events} = useStoreState(state => state.events);
    //   const {getEvents} = useStoreActions(actions => actions.events);
    const [isLoading, setLoading] = useState(false);
    const [FABActionmodalVisible, setFABActionModalVisible] = useState(false);
    const [joinClubModalVisible, setJoinClubModalVisible] = useState(false);
    const [createClubModalVisible, setCreateClubModalVisible] = useState(false);

    function createClub() {
        hideMenu;
    }
    function joinClub() {
        hideMenu;
    }
    //   useEffect(() => {
    //     if (!isEmpty(events)) setLoading(false);
    //   }, [events]);

    const hideFABActionModal = () => setFABActionModalVisible(false);
    const hideJoinClubModal = () => setJoinClubModalVisible(false);
    const hideCreateClubModal = () => setCreateClubModalVisible(false);

    const CreateClubModalBody = () => {
        return (
            <Provider>
                <Portal>
                    <Modal
                        visible={createClubModalVisible}
                        onDismiss={hideCreateClubModal}
                        contentContainerStyle={
                            styles.FABActionmodalContainerStyle
                        }>
                        <View
                            style={{
                                flexDirection: 'column',
                                backgroundColor: '#ffffff',
                                height: 150,
                                width: width * 0.8,
                                alignItems: 'center',
                                borderRadius: 8,
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: '#5382FA',
                                    marginTop: 16,
                                }}>
                                Create Club
                            </Text>
                            <View style={styles.joinClubModalViewContainer}>
                                <View
                                    style={{
                                        marginHorizontal: 16,
                                        flex: 2,
                                        marginVertical: 8,
                                    }}>
                                    <TextInput
                                        label="Club Name"
                                        mode="outlined"
                                        placeholder="Club Name"
                                        numberOfLines={1}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            fontSize: 15,
                                        }}
                                        theme={{
                                            colors: {
                                                text: 'black',
                                                placeholder: 'black',
                                                background: 'white',
                                            },
                                        }}
                                        onChangeText={(text) =>
                                            console.log('text', text)
                                        }
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 0.5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            backgroundColor: '#5382FA',
                                            borderRadius: 24,
                                            marginEnd: 16,
                                        }}>
                                        <IconButton
                                            icon="check"
                                            color="#ffffff"
                                            size={24}
                                            onPress={() => {
                                                console.log('asd0');
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        );
    };

    const JoinClubModalBody = () => {
        return (
            <Provider>
                <Portal>
                    <Modal
                        visible={joinClubModalVisible}
                        onDismiss={hideJoinClubModal}
                        contentContainerStyle={
                            styles.FABActionmodalContainerStyle
                        }>
                        <View
                            style={{
                                flexDirection: 'column',
                                backgroundColor: '#ffffff',
                                height: 150,
                                width: width * 0.8,
                                alignItems: 'center',
                                borderRadius: 8,
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: '#5382FA',
                                    marginTop: 16,
                                }}>
                                Join Club
                            </Text>
                            <View style={styles.joinClubModalViewContainer}>
                                <View
                                    style={{
                                        marginHorizontal: 16,
                                        flex: 2,
                                        marginVertical: 8,
                                    }}>
                                    <TextInput
                                        label="Club Code"
                                        mode="outlined"
                                        placeholder="Club code"
                                        numberOfLines={1}
                                        style={{
                                            backgroundColor: '#ffffff',
                                            fontSize: 15,
                                        }}
                                        theme={{
                                            colors: {
                                                text: 'black',
                                                placeholder: 'black',
                                                background: 'white',
                                            },
                                        }}
                                        onChangeText={(text) =>
                                            console.log('text', text)
                                        }
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 0.5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            backgroundColor: '#5382FA',
                                            borderRadius: 24,
                                            marginEnd: 16,
                                        }}>
                                        <IconButton
                                            icon="check"
                                            color="#ffffff"
                                            size={24}
                                            onPress={() => {
                                                console.log('asd0');
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        );
    };
    const FabActionmodalBody = () => {
        return (
            <Provider>
                <Portal>
                    <Modal
                        visible={FABActionmodalVisible}
                        onDismiss={hideFABActionModal}
                        dismissable={true}
                        contentContainerStyle={
                            styles.FABActionmodalContainerStyle
                        }>
                        <View style={styles.centeredView}>
                            <TouchableRipple
                                onPress={() => {
                                    setFABActionModalVisible(false);
                                    setCreateClubModalVisible(true);
                                }}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <Text style={styles.modalFABText}>
                                    Create Club
                                </Text>
                            </TouchableRipple>
                            <View style={styles.dividerLine} />
                            <TouchableRipple
                                onPress={() => {
                                    setFABActionModalVisible(false);
                                    setJoinClubModalVisible(true);
                                }}
                                rippleColor="rgba(0, 0, 0, .32)">
                                <Text style={styles.modalFABText}>
                                    Join Club
                                </Text>
                            </TouchableRipple>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        );
    };

    const showEventCards = () => {
        // if (!isEmpty(events)) {
        //   const cards = events.map((event, index) => {key={index}

        return (
            <TouchableRipple
                onPress={() => {
                    navigation.navigate('ClubDetail');
                }}
                style={styles.cardContainer}
                rippleColor="rgba(0, 0, 0, .32)">
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        marginHorizontal: 24,
                        marginTop: 24,
                    }}>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}>
                        <Text style={styles.orgNameText}>KV EME Baroda</Text>
                        <Text style={styles.classNameText}>Class 12</Text>
                    </View>
                </View>
            </TouchableRipple>
        );
        //   });
        //   return cards;
        // } else return null;
    };
    return !isLoading ? (
        <View style={{flex: 1}}>
            <Text style={styles.eventsTitleText}>Club</Text>
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>{showEventCards()}</View>
                {joinClubModalVisible ? <Text>asdf</Text> : <Text>2343</Text>}
            </ScrollView>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => {
                    setFABActionModalVisible(true);
                }}
            />
            {FabActionmodalBody()}
            {JoinClubModalBody()}
            {CreateClubModalBody()}
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
    joinClubModalViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 150,
        width: width * 0.8,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'space-between',
    },
    dividerLine: {backgroundColor: '#929292', height: 1, width: width * 0.8},
    FABActionmodalContainerStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    modalFABText: {
        fontSize: 18,
        textAlign: 'left',
        marginVertical: 8,
        marginHorizontal: 16,
        paddingVertical: 8,
    },
    centeredView: {
        borderRadius: 8,
        backgroundColor: '#ffffff',
        width: width * 0.8,
    },
    modalView: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width,
        height: 125,
        backgroundColor: '#ffffff',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    mainContainer: {
        flex: 2,
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
        height: 100,
        marginBottom: 24,
    },
    eventsTitleText: {
        fontSize: 24,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    classNameText: {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
    },
    orgNameText: {
        fontSize: 20,
        fontFamily: 'Helvetica',
    },
});
