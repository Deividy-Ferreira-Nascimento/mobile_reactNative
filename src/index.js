import React, { useEffect, useState } from 'react';
import { View ,Text, StyleSheet, StatusBar} from 'react-native';
import api from './services/api'


export default function App() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        api.get('project').then(res => {
            console.log(res.data)
            setProjects(res.data)
        })
    }, [])
   
    return (
        <>
    
    <View style= {styles.container} >
    <StatusBar barStyle="light-content" backgroundColor='#7359d1'/>
    <Text style={styles.title}>Hello World</Text>    
    <Text style={styles.subtitle}>Project with React Native</Text>
    </View>
    
     </>

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