import {StyleSheet} from 'react-native';
import {COLOR} from '../theme/Color';
import {HEIGHT, WIDTH} from '../theme/Dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSmall: {
    fontSize: HEIGHT * 0.02,
  },
  textMedium: {
    fontSize: HEIGHT * 0.03,
  },
  textLarge: {
    fontSize: HEIGHT * 0.9,
  },
  button: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.05,
    borderRadius: 10,
    backgroundColor: COLOR.blue,
  },
});
