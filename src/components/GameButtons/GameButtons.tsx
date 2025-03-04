import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  onPressTas: () => void;
  onPressKagit: () => void;
  onPressMakas: () => void;
  disabled?: boolean;
}

const GameButtons: React.FC<ButtonProps> = ({
  onPressTas,
  onPressKagit,
  onPressMakas,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.buttonContainer, disabled && styles.disabledContainer]}
        onPress={onPressTas}>
        <Text style={styles.button_text}>Taş</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.buttonContainer, disabled && styles.disabledContainer]}
        onPress={onPressKagit}>
        <Text style={styles.button_text}>Kağıt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.buttonContainer, disabled && styles.disabledContainer]}
        onPress={onPressMakas}>
        <Text style={styles.button_text}>Makas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 8,
    borderWidth: 5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  disabledContainer: {
    opacity: 0.2,
  },
});
