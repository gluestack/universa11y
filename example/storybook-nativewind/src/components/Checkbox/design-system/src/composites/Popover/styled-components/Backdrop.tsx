import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Pressable,
  {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.1,
    right: 0,
    bottom: 0,
    bg: '$black',
  },
  {}
);
