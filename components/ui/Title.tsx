import Colors from 'constants/colors';
import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.text100,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.secondary100,
    padding: 12,
  },
});
