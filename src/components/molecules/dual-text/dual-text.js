import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../services/colors';
import { mvs } from '../../../services/metrices';
import Regular from '../../../presentation/typography/regular-text';
import { useTheme } from '@react-navigation/native';

const DualText = ({content, highlightText,onPress,style,highlightTextStyle, ...props}) => {
  const {colors}=useTheme();
  return (
    <>
      <Regular style={{...styles.CARD_LABEL,...style,color:colors.text}} label={content}>
        <Regular onPress={onPress} style={{...styles.TAKE_TO_LABEL,...highlightTextStyle}} label={highlightText} />
        {props.children}
      </Regular>
    </>
  );
};

export default DualText;

const styles = StyleSheet.create({
  CARD_LABEL: {
    color: colors.label,
    fontSize: mvs(12),
  },

  TAKE_TO_LABEL: {color: colors.primary, fontSize: mvs(14)},
});
