import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Icon from 'react-native-ionicons';

interface Props {
  iconName: string;
  onPress: () => void;

  style?: StyleProp<ViewStyle>;
}

export const FAB = ({iconName, onPress, style}: Props) => {
  return (
    <View style={[styles.btn, style]}>
      <Pressable onPress={onPress}>
        <Icon name={iconName} size={30} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    zIndex: 100,
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0.27,
      width: 4.25,
    },
    elevation: 10,
  },
});
