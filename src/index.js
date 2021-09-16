import React, { useEffect, useState } from 'react';
import { SafeAreaView , FlatList ,Text, StyleSheet, StatusBar} from 'react-native';
import api from './services/api'


export default function App() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        api.get('project').then(res => {
            
            setProjects(res.data);
        })
    }, [])
   
    return (
        <>
    <StatusBar barStyle="light-content"backgroundColor='#7359d1'/>
    <SafeAreaView style={styles.container}>
     <FlatList
     data= {projects} 
     keyExtractor={project => project.id}
     renderItem={({ item: project }) => (<Text style={styles.subtitle} key={project.id}>{project.title}</Text>)}/>
     </SafeAreaView>

    
    {/*<View style= {styles.container} >
    
    <Text style={styles.title}>Hello World</Text>    
    <Text style={styles.subtitle}>Project with React Native</Text>
    {projects.map(project => () )}
    </View>  */}
    
     </>

    );
 
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7359d1',
        flex:1,
        
        
    },
    title: {
        color:'#ffff',
        fontSize: 38,
        fontWeight: 'bold'
    },
    subtitle: {
        color:'#ffff',
        fontSize:20,
        fontWeight: 'bold',
        marginTop: 10,
    }
})