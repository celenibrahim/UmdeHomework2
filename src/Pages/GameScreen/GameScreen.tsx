import {Text, View} from 'react-native';
import React, {useState} from 'react';
import GameButtons from '../../components/GameButtons';
import styles from './GameScreen.style';

const choices = ['Taş', 'Kağıt', 'Makas'];

const getPcChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(choices.length);
  console.log(randomIndex);
  return choices[randomIndex];
};

const kazananBoard = (playerChoice: string, computerChoice: string) => {
  if (playerChoice === computerChoice) return 'Berabere';
  if (
    (playerChoice === 'Taş' && computerChoice === 'Makas') ||
    (playerChoice === 'Kağıt' && computerChoice === 'Taş') ||
    (playerChoice === 'Makas' && computerChoice === 'Kağıt')
  ) {
    return 'Oyuncu';
  }
  return 'Bilgisayar';
};

const GameScreen = () => {
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scorePC, setScorePC] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handlePlayerChoice = (choice: string) => {
    const pcChoice = getPcChoice();
    const winner = kazananBoard(choice, pcChoice);

    setPlayerChoice(choice);
    setComputerChoice(pcChoice);
    setResult(winner);

    if (winner === 'Oyuncu') {
      setScorePlayer(scorePlayer + 1);
    } else if (winner === 'Bilgisayar') {
      setScorePC(scorePC + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Oyuncu: {scorePlayer}</Text>
        <Text style={styles.scoreText}>Bilgisayar: {scorePC}</Text>
      </View>

      <View style={styles.playerScreen}>
        <Text style={styles.choiceText}>
          Oyuncunun Seçimi: {playerChoice || 'Bekleniyor...'}
        </Text>
        <GameButtons
          onPressTas={() => handlePlayerChoice('Taş')}
          onPressKagit={() => handlePlayerChoice('Kağıt')}
          onPressMakas={() => handlePlayerChoice('Makas')}
        />
      </View>

      <View style={styles.computerScreen}>
        <Text style={styles.choiceText}>
          Bilgisayarın Seçimi: {computerChoice || 'Bekleniyor...'}
        </Text>

        <GameButtons
          disabled
          onPressTas={() => {}}
          onPressKagit={() => {}}
          onPressMakas={() => {}}
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result
            ? result === 'Berabere'
              ? 'Berabere!'
              : `${result} Kazandı!`
            : ''}
        </Text>
      </View>
    </View>
  );
};

export default GameScreen;
