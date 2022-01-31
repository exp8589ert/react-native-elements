import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../Button';
/** This is used to add a button to the Dialog.
 * Receives all [Button](button#props) props. */
export const DialogButton = ({ titleStyle, ...rest }) => {
    return (<Button style={{ marginLeft: 5 }} titleStyle={StyleSheet.flatten([styles.buttonTitle, titleStyle])} containerStyle={{
            width: 'auto',
        }} testID="Dialog__Button" {...rest}/>);
};
DialogButton.defaultProps = {
    title: 'ACTION',
    type: 'clear',
};
const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
});
DialogButton.displayName = 'Dialog.Button';