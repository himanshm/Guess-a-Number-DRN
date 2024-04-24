import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from 'components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#6C0345',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#0C0C0C',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#F7C566',
    borderBottomWidth: 2,
    color: '#F7C566',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
