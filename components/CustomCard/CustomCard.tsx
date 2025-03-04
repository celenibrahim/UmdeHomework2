import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {ReactElement, ReactNode} from 'react';

interface CustomCard {
  image?: ReactElement;
  header: string;
  text: string;
  button?: ReactNode;
  button2?: ReactNode;
  bgColor: string;
  headerColor: string;
}
const {width, height} = Dimensions.get('window');
const CustomCard: React.FC<CustomCard> = ({
  header,
  image,
  text,
  button,
  button2,
  bgColor,
  headerColor,
}) => {
  return (
    <View style={[styles.card, {backgroundColor: bgColor}]}>
      {image && <View style={styles.imageContainer}>{image}</View>}
      <Text style={[styles.header, {color: headerColor}]}>{header}</Text>
      <Text style={styles.text}>{text}</Text>
      {button && <View style={styles.buttonContainer}>{button}</View>}
      {button2 && <View style={styles.buttonContainer}>{button2}</View>}
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: height * 0.37,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 48,
    width: 48,
    margin: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
