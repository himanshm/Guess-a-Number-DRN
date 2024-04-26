import { ReactNode } from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

import Colors from 'constants/colors';

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
    borderColor: Colors.secondary100,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
