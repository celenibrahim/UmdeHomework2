import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width * 0.32,
    height: height * 0.07,
    backgroundColor: '#B9B28A',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#504B38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#504B38',
    fontSize: 15,
  },
});
