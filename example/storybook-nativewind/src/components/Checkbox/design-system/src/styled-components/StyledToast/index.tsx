import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$muted800',
    p: '$2',
    rounded: '$sm',
    shadowColor: 'black',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: 'row',
    props: {
      pointerEvents: 'box-none',
    },
    mb: '$2',

    defaultProps: {
      space: 'md',
    },

    _dark: {
      bg: '$muted200',
    },
  },
  {}
);
