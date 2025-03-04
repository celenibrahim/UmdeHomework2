import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 2,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'gray',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  playerScreen: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  computerScreen: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  resultContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
