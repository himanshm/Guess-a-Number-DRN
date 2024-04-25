import Colors from 'constants/colors';
import { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type InstructionTextProps = {
  children: ReactNode;
  style?: TextStyle | false;
};

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
