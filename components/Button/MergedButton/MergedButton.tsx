import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
interface MBProps {
  firstTitle: string;
  secondTitle: string;
  onPressF: () => void;
  onPressS: () => void;
}
const MergedButton: React.FC<MBProps> = ({
  firstTitle,
  secondTitle,
  onPressF,
  onPressS,
}) => {
  return (
    <View style={styles.button_container}>
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            {borderTopStartRadius: 20, borderStartEndRadius: 20},
          ]}
          onPress={onPressF}>
          <Text style={styles.button_text}>{firstTitle}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            {borderTopEndRadius: 20, borderBottomEndRadius: 20},
          ]}
          onPress={onPressS}>
          <Text style={styles.button_text}>{secondTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MergedButton;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  button_container: {
    flexDirection: 'row',
  },
  button: {
    width: width * 0.32,
    height: width * 0.15,
    backgroundColor: '#B9B28A',
    borderWidth: 2,
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
