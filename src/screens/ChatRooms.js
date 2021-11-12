import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import colors from '../theme/Colors';
import fonts from '../theme/Fonts';

const ChatRooms = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>

        </View>
        </ScrollView>
    );
};

export default ChatRooms;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },

});