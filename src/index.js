import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('project').then(res => {
      console.log(res.data);
      setProjects(res.data);
    });
  }, []);

  async function handleAddProject() {
    const res = await api.post('project', {
        title: `Novo projeto ${Date.now()}`,
        owner: 'Deividy Ferreira'
    });
    const project = res.data;

  setProjects([... projects, project]);
  }

  

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7359d1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.subtitle} key={project.id}>
              {project.title}
            </Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar Projetos</Text>
        </TouchableOpacity>
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
    flex: 1,
  },
  title: {
    color: '#ffff',
    fontSize: 38,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ffff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
