A grid display for multiple images which you can view on clicking in fullscreen mode and swipe through.

<table>
        <tr>
<td><img src = "https://user-images.githubusercontent.com/35291991/150406398-9c6e615b-5d8f-41c6-9590-d697ca8c5984.png" height = "417" width="275"></td>
<td><img src = "https://user-images.githubusercontent.com/35291991/150406407-b345a625-5424-4743-a22d-46f837270489.png" height = "417" width="275"></td>
<td><img src = "https://user-images.githubusercontent.com/35291991/150408671-e3defe5d-5e4d-4445-bd39-c7e8142d2e8b.gif" height = "417" width="275"></td>
       </tr>
</table>

## Key Points

- Grid Image Viewer
- Full Screen Mode Image Viewer
- Max Lightweight Component
- No Dependency, No Configuration
- Click on image to view full screen
- Smooth Animation
- Swipe image to navigate to next image
- Available for iOS and Android
- Also works with Expo

## Installation

```
npm i react-native-grid-image-viewer --save
```

### or

```
yarn add react-native-grid-image-viewer
```

## Usage

#### Class component

```jsx
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.headline_text}>Grid View Images</Text>
        <Text style={styles.explore_text}>
          Click on an image to view in full screen mode
        </Text>

        {/* Basic Usage */}
        <GridImageView data={['url1', 'url2', 'url3', 'url4']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});
```

#### Functional component

```jsx
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

const App = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>Grid View Images</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>

      {/* Basic Usage */}
      <GridImageView data={['url1', 'url2', 'url3', 'url4']} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default App;
```

## Props

| Prop              | Type                                 | Description                                                                                                                                           |
| ----------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| data              | array                                | List of images to be displayed in the grid should be in the form of: [url1, url2, ...]                                                                |
| headers           | json                                 | (Optional) Pass headers, for instance to restrict access. Eg. {'Authorization': 'Bearer ' + 'TOKEN'}                                                  |
| renderGridImage   | function(item, defaultStyle) => Node | (Optional) Custom function to render each image in grid view. Default style must be applied on the returned node and the image itself (if different). |
| renderModalImage  | function(item, defaultStyle) => Node | (Optional) Custom function to render each image in modal view. Default style must be applied on the <Image /> node.                                   |
| transparent       | int                                  | (Optional) Transparency on the background when single image is viewed in full screen mode, Range=[0, 1]                                               |
| heightOfGridImage | int                                  | (Optional) Height of each item in grid image view                                                                                                     |

## License

This project is licensed under the MIT License - see [LICENSE.md](https://github.com/ansh-099/react-native-grid-image-viewer/blob/master/LICENSE.md) for details

## Author

Made by [Anshul Singh](https://github.com/ansh-099)
