import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/Colors';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.defaultGreyColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3.5,
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    height: 48,
    paddingLeft: 20,
    paddingTop: 13,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 30,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: Colors.defaultOrangeColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    height: 48,
  },
  buttonPlaceHolder: {
    color: Colors.defaultTitleColor,
    fontSize: 15,
  },
});
