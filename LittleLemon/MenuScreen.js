import * as React from 'react';
import {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    TextInputEventData,   
    KeyboardAvoidingView, 
    Platform,
    Alert,
    Pressable,
} from 'react-native';

import SectionListMenu from './components/SectionListMenu'

export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <SectionListMenu />
        </View>
    );
}

const styles = StyleSheet.create( {
    container : {
        flex : 1
    },
})