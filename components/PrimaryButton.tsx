import { ReactNode } from 'react';
import { Text, View } from 'react-native';

type PrimaryButtonProps = {
  children: ReactNode;
};

function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
