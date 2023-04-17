import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 17,
    fontWeight: '500',
  },
});
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultOrangeColor,
    ...baseStyle.container,
  },
  taskText: {
    color: Colors.defaultTitleColor,
    ...baseStyle.taskText,
  },
  completedContainer: {
    ...baseStyle.container,
    backgroundColor: Colors.disabledTaskColor,
  },
  completedTaskText: {
    ...baseStyle.taskText,
    color: Colors.defaultDarkColor,
    textDecorationLine: 'line-through',
  },
});
