import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GridImageView from './components/GridImageViewer';

const App = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>Grid View Images</Text>
      <Text style={styles.explore_text}>Click on an image to view in full screen mode</Text>
      
      <GridImageView data={[ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqe5muqrlSXq3ZbIf5sRlU-VXoN3MNCUUhQ&usqp=CAU', 'https://image3.mouthshut.com/images/imagesp/925791837s.jpg' , 'https://9to5mac.com/wp-content/uploads/sites/6/2016/11/15-touch-bar-macbook-pro-tips-and-tricks1.jpg?quality=82&strip=all' , 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' ]} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600'
  },
});

export default App;
