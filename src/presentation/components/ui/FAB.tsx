// import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// interface Props {
//   iconName: string;
//   onPress: () => void;

//   style?: StyleProp<ViewStyle>;
// }

// export const FAB = ({iconName, onPress, style}: Props) => {
//   return (
//     <View style={[styles.btn, style]}>
//       <Pressable
//         onPress={onPress}
//         style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Ionicons name={iconName} size={30} color="white" />
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   btn: {
//     zIndex: 100,
//     position: 'absolute',
//     height: 50,
//     width: 50,
//     borderRadius: 30,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowOpacity: 0.3,
//     shadowOffset: {
//       height: 0.27,
//       width: 4.25,
//     },
//     elevation: 10,
//   },
// });

import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const FAB = ({iconName, onPress, style}: Props) => {
  return (
    <View style={[styles.btn, style]}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Ionicons name={iconName} size={30} color="white" />
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
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 3,
    elevation: 10,
  },
  pressable: {
    flex: 1, // Ocupa todo el área del botón
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
