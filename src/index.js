import React from 'react';
import { View ,Text, StyleSheet} from 'react-native';

export default function App() {
    return (
    <View style= {styles.container}>
    <Text style={styles.title}>Hello World</Text>    
    <Text style={styles.subtitle}>Project with React Native</Text>
    </View>
    );
 
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7359d1',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        color:'#ffff',
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        color:'#ffff',
        fontSize:22,
        fontWeight: 'bold',
        marginTop: 10,
    }
})