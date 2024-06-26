import Colors from 'constants/colors';
import { ReactNode } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.dark100,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
