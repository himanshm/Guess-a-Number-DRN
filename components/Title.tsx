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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E9C874',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#E9C874',
    padding: 12,
  },
});
