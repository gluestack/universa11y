import { styled } from '../../styled';
import { View } from 'react-native';

export const AccessibleInputRightAddon = styled(
  View,
  {
    p: '0.5rem',
    borderLeftWidth: 0,
    borderWidth: '$1',
    borderColor: '$muted.300',
    borderRadius: '$sm',
    alignItems: 'center',
    justifyContent: 'center',
    _dark: {
      borderColor: '$muted.700',
      bg: '$muted.800',
    },
  },
  { descendantStyle: ['_text'] }
);
