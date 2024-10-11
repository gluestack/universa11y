import React from 'react';
import { LayoutContext } from '../Layout/LayoutContext';
import { getGithubLink } from '../../utils/helperFunction';
import { HStack, Text } from '../../primitives';
import { createIcon } from '@gluestack-ui/icon';
import { styled } from '@gluestack-style/react';
import { Svg } from 'react-native-svg';

const Root = styled(
  Svg,
  {
    w: 16,
    h: 16,
    // @ts-ignore
    color: '$textLight600',
    _dark: {
      //@ts-ignore
      color: '$textDark400',
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);

const PencilIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M16.3048 4.30319C16.5262 4.07396 16.791 3.89113 17.0838 3.76534C17.3766 3.63956 17.6915 3.57336 18.0102 3.57059C18.3289 3.56782 18.6449 3.62854 18.9399 3.74922C19.2348 3.86989 19.5028 4.0481 19.7281 4.27344C19.9535 4.49878 20.1317 4.76675 20.2523 5.0617C20.373 5.35665 20.4337 5.67268 20.431 5.99135C20.4282 6.31002 20.362 6.62495 20.2362 6.91776C20.1104 7.21057 19.9276 7.4754 19.6984 7.69679L18.7468 8.64839L15.3532 5.25479L16.3048 4.30319ZM13.6564 6.95159L3.60156 17.0064V20.4H6.99516L17.0512 10.3452L13.6564 6.95159Z',
});

export default function EditPageOnGithubLink({ sidebarItems }: any) {
  const { router, Link } = React.useContext(LayoutContext);

  const link = getGithubLink(sidebarItems, router.pathname);
  if (link === null) return null;
  return (
    <Link target="_blank" href={link}>
      <HStack alignItems="center" space="sm">
        <PencilIcon />
        <Text
          fontSize={'$sm'}
          lineHeight={'$sm'}
          sx={{
            color: '$textLight600',
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          Edit this page on GitHub
        </Text>
      </HStack>
    </Link>
  );
}
