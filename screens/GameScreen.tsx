import NumberContainer from 'components/game/NumberContainer';
import Title from 'components/ui/Title';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum: number = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

type GameScreenProps = {
  userNumber: number;
};

function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
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
});
