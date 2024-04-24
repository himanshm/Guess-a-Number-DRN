import NumberContainer from 'components/game/NumberContainer';
import Card from 'components/ui/Card';
import InstructionText from 'components/ui/InstructionText';
import PrimaryButton from 'components/ui/PrimaryButton';
import Title from 'components/ui/Title';
import { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

function generateRandomBetween(
  min: number,
  max: number,
  exclude?: number
): number {
  const rndNum: number = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary: number = 1;
let maxBoundary: number = 100;

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, [minBoundary, maxBoundary, userNumber]);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: 'lower' | 'higher') {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressWithArgs={() => nextGuessHandler('lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressWithArgs={() => nextGuessHandler('higher')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
