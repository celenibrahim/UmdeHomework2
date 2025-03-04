import {Image, StyleSheet, View, useColorScheme, Button} from 'react-native';
import React, {useState} from 'react';

import CustomCard from '../../components/CustomCard';
import CustomButton from '../../components/Button/CustomButton';
import MergedButton from '../../components/Button/MergedButton';
const imageList = [
  require('../../assets/adobe.png'),
  require('../../assets/appstore.png'),
  require('../../assets/mail.png'),
  require('../../assets/music.png'),
];

const App = ({navigation}: any) => {
  const theme = useColorScheme();
  const [headerColor, setHeaderColor] = useState('black');
  const [bgColor, setBgColor] = useState('#D69ADE');
  const [imageIndex, setImageIndex] = useState(0);
  const changeImage = () => {
    setImageIndex(prevIndex => (prevIndex + 1) % imageList.length);
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? '#000' : '#fff'},
      ]}>
      <CustomCard
        header="Başlık"
        text="Text"
        headerColor={headerColor}
        bgColor={bgColor}
        button={
          <MergedButton
            firstTitle="Change HD Color"
            secondTitle="Change BG Color"
            onPressF={() =>
              setHeaderColor(headerColor === 'black' ? 'white' : 'black')
            }
            onPressS={() =>
              setBgColor(bgColor === '#D69ADE' ? '#A35C7A' : '#D69ADE')
            }
          />
        }
        button2={<CustomButton title="Change Logo" onPress={changeImage} />}
        image={<Image source={imageList[imageIndex]} />}
      />
      <Button
        title="Go To The Game"
        onPress={() => navigation.navigate('GameScreen')}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
