import Colors from 'constants/colors';
import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type InstructionTextProps = {
  children: ReactNode;
};

function InstructionText({ children }: InstructionTextProps) {
  return <Text style={styles.instructionText}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
