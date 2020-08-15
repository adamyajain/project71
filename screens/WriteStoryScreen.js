import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component {
    render(){
        return(
            <View>
                <Header
                backgroundColor={'#00edb1'}
                centerComponent={{
                    text: 'Story Hub',
                    style: { color:'#4a3135',
                fontsize:20 },
                }} />               
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputBox}
                placeholder="Author"
                 />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.inputBox}
                placeholder="Title"
                 />
            </View>
            <View style={styles.inputView}>
                 <TextInput
                style={styles.inputStoryBox}
                multiline={true}
                placeholder="Start Writing"
                 />
            </View>
            <View>     
                 <TouchableOpacity style={styles.submitButton}>
                     <Text style={styles.buttonText}>Submit</Text>
                 </TouchableOpacity>
            </View>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
      buttonText: {
        fontSize: 20,
      },
      inputView: {
        flexDirection: 'row',
        margin: 20
      },
      inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20
      },
      inputStoryBox: {
        width: 300,
        height: 500,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20
      },
      submitButton: {
        backgroundColor: '#66BB6A',
        width: 100,
        borderWidth: 1.5,
        borderLeftWidth: 1.5,
        alignSelf: 'center',
        textAlign: 'center',
      }    
})