import { AnimationResolver } from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import { createConfig, createComponents } from '@gluestack-style/react';
import * as componentsTheme from './theme';

export const gluestackUIConfig = createConfig({
  aliases: {
    bg: 'backgroundColor',
    bgColor: 'backgroundColor',
    h: 'height',
    w: 'width',
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pr: 'paddingRight',
    pl: 'paddingLeft',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    mr: 'marginRight',
    ml: 'marginLeft',
    rounded: 'borderRadius',
  } as const,
  tokens: {
    colors: {
      // Brand Colors
      primary0: '#B3B3B3',
      primary50: '#999999',
      primary100: '#808080',
      primary200: '#737373',
      primary300: '#666666',
      primary400: '#525252',
      primary500: '#333333',
      primary600: '#292929',
      primary700: '#1F1F1F',
      primary800: '#0D0D0D',
      primary900: '#0A0A0A',
      primary950: '#080808',

      secondary0: '#FEFFFF',
      secondary50: '#F1F2F2',
      secondary100: '#E7E8E8',
      secondary200: '#DBDBDB',
      secondary300: '#AFB0B0',
      secondary400: '#727373',
      secondary500: '#5E5F5F',
      secondary600: '#515252',
      secondary700: '#3F4040',
      secondary800: '#272626',
      secondary900: '#181717',
      secondary950: '#0B0C0C',

      tertiary0: '#FFFAF5',
      tertiary50: '#FFF2E5',
      tertiary100: '#FFE9D5',
      tertiary200: '#FED1AA',
      tertiary300: '#FDB474',
      tertiary400: '#FB9D4B',
      tertiary500: '#E78128',
      tertiary600: '#D7751F',
      tertiary700: '#B4621A',
      tertiary800: '#824917',
      tertiary900: '#6C3D13',
      tertiary950: '#543112',

      // Action Colors

      error00: '#FEE9E9',
      error50: '#FEE2E2',
      error100: '#FECACA',
      error200: '#FCA5A5',
      error300: '#F87171',
      error400: '#EF4444',
      error500: '#E63535',
      error600: '#DC2626',
      error700: '#B91C1C',
      error800: '#991B1B',
      error900: '#7F1D1D',
      error950: '#531313',

      success0: '#E4FFF4',
      success50: '#CAFFE8',
      success100: '#A2F1C0',
      success200: '#84D3A2',
      success300: '#66B584',
      success400: '#489766',
      success500: '#348352',
      success600: '#2A7948',
      success700: '#206F3E',
      success800: '#166534',
      success900: '#14532D',
      success950: '#1B3224',

      warning0: '#FFFDFB',
      warning50: '#FFF9F5',
      warning100: '#FFE7D5',
      warning200: '#FECDAA',
      warning300: '#FDAD74',
      warning400: '#FB954B',
      warning500: '#E77828',
      warning600: '#D76C1F',
      warning700: '#B45A1A',
      warning800: '#824417',
      warning900: '#6C3813',
      warning950: '#542D12',

      info0: '#ECF8FE',
      info50: '#C7EBFC',
      info100: '#A2DDFA',
      info200: '#7CCFF8',
      info300: '#57C2F6',
      info400: '#32B4F4',
      info500: '#0DA6F2',
      info600: '#0B8DCD',
      info700: '#0973A8',
      info800: '#075A83',
      info900: '#05405D',
      info950: '#032638',

      // Property Derived Colors

      text0: '#FEFEFF',
      text50: '#F5F5F5',
      text100: '#E5E5E5',
      text200: '#DBDBDC',
      text300: '#D4D4D4',
      text400: '#A3A3A3',
      text500: '#8C8C8C',
      text600: '#737373',
      text700: '#525252',
      text800: '#404040',
      text900: '#262627',
      text950: '#171717',

      border0: '#FDFEFE',
      border50: '#F3F3F3',
      border100: '#E6E6E6',
      border200: '#DDDCDB',
      border300: '#D3D3D3',
      border400: '#A5A3A3',
      border500: '#8C8D8D',
      border600: '#737474',
      border700: '#535252',
      border800: '#414141',
      border900: '#272624',
      border950: '#1A1717',

      background0: '#FBFBFB',
      background50: '#F6F6F6',
      background100: '#F2F1F1',
      background200: '#DCDBDB',
      background300: '#D5D4D4',
      background400: '#A2A3A3',
      background500: '#8E8E8E',
      background600: '#747474',
      background700: '#535252',
      background800: '#414040',
      background900: '#272625',
      background950: '#181718',

      // StandAlone Colors

      backgroundError: '#FEF1F1',

      backgroundWarning: '#FFF4EB',
      backgroundSuccess: '#EDFCF2',
      backgroundMuted: '#F6F6F7',
      backgroundInfo: '#EBF8FE',

      white: '#FFFFFF',
      black: '#000000',

      // Extended Colors
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',

      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',

      fuchsia50: '#fdf4ff',
      fuchsia100: '#fae8ff',
      fuchsia200: '#f5d0fe',
      fuchsia300: '#f0abfc',
      fuchsia400: '#e879f9',
      fuchsia500: '#d946ef',
      fuchsia600: '#c026d3',
      fuchsia700: '#a21caf',
      fuchsia800: '#86198f',
      fuchsia900: '#701a75',

      purple50: '#faf5ff',
      purple100: '#f3e8ff',
      purple200: '#e9d5ff',
      purple300: '#d8b4fe',
      purple400: '#c084fc',
      purple500: '#a855f7',
      purple600: '#9333ea',
      purple700: '#7e22ce',
      purple800: '#6b21a8',
      purple900: '#581c87',

      violet50: '#f5f3ff',
      violet100: '#ede9fe',
      violet200: '#ddd6fe',
      violet300: '#c4b5fd',
      violet400: '#a78bfa',
      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet700: '#6d28d9',
      violet800: '#5b21b6',
      violet900: '#4c1d95',

      indigo50: '#eef2ff',
      indigo100: '#e0e7ff',
      indigo200: '#c7d2fe',
      indigo300: '#a5b4fc',
      indigo400: '#818cf8',
      indigo500: '#6366f1',
      indigo600: '#4f46e5',
      indigo700: '#4338ca',
      indigo800: '#3730a3',
      indigo900: '#312e81',

      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',

      lightBlue50: '#f0f9ff',
      lightBlue100: '#e0f2fe',
      lightBlue200: '#bae6fd',
      lightBlue300: '#7dd3fc',
      lightBlue400: '#38bdf8',
      lightBlue500: '#0ea5e9',
      lightBlue600: '#0284c7',
      lightBlue700: '#0369a1',
      lightBlue800: '#075985',
      lightBlue900: '#0c4a6e',

      darkBlue50: '#dbf4ff',
      darkBlue100: '#addbff',
      darkBlue200: '#7cc2ff',
      darkBlue300: '#4aa9ff',
      darkBlue400: '#1a91ff',
      darkBlue500: '#0077e6',
      darkBlue600: '#005db4',
      darkBlue700: '#004282',
      darkBlue800: '#002851',
      darkBlue900: '#000e21',

      cyan50: '#ecfeff',
      cyan100: '#cffafe',
      cyan200: '#a5f3fc',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      cyan500: '#06b6d4',
      cyan600: '#0891b2',
      cyan700: '#0e7490',
      cyan800: '#155e75',
      cyan900: '#164e63',

      teal50: '#f0fdfa',
      teal100: '#ccfbf1',
      teal200: '#99f6e4',
      teal300: '#5eead4',
      teal400: '#2dd4bf',
      teal500: '#14b8a6',
      teal600: '#0d9488',
      teal700: '#0f766e',
      teal800: '#115e59',
      teal900: '#134e4a',

      emerald50: '#ecfdf5',
      emerald100: '#d1fae5',
      emerald200: '#a7f3d0',
      emerald300: '#6ee7b7',
      emerald400: '#34d399',
      emerald500: '#10b981',
      emerald600: '#059669',
      emerald700: '#047857',
      emerald800: '#065f46',
      emerald900: '#064e3b',

      green50: '#f0fdf4',
      green100: '#dcfce7',
      green200: '#bbf7d0',
      green300: '#86efac',
      green400: '#4ade80',
      green500: '#22c55e',
      green600: '#16a34a',
      green700: '#15803d',
      green800: '#166534',
      green900: '#14532d',

      lime50: '#f7fee7',
      lime100: '#ecfccb',
      lime200: '#d9f99d',
      lime300: '#bef264',
      lime400: '#a3e635',
      lime500: '#84cc16',
      lime600: '#65a30d',
      lime700: '#4d7c0f',
      lime800: '#3f6212',
      lime900: '#365314',

      yellow50: '#fefce8',
      yellow100: '#fef9c3',
      yellow200: '#fef08a',
      yellow300: '#fde047',
      yellow400: '#facc15',
      yellow500: '#eab308',
      yellow600: '#ca8a04',
      yellow700: '#a16207',
      yellow800: '#854d0e',
      yellow900: '#713f12',

      amber50: '#fffbeb',
      amber100: '#fef3c7',
      amber200: '#fde68a',
      amber300: '#fcd34d',
      amber400: '#fbbf24',
      amber500: '#f59e0b',
      amber600: '#d97706',
      amber700: '#b45309',
      amber800: '#92400e',
      amber900: '#78350f',

      orange50: '#fff7ed',
      orange100: '#ffedd5',
      orange200: '#fed7aa',
      orange300: '#fdba74',
      orange400: '#fb923c',
      orange500: '#f97316',
      orange600: '#ea580c',
      orange700: '#c2410c',
      orange800: '#9a3412',
      orange900: '#7c2d12',

      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',

      warmGray50: '#fafaf9',
      warmGray100: '#f5f5f4',
      warmGray200: '#e7e5e4',
      warmGray300: '#d6d3d1',
      warmGray400: '#a8a29e',
      warmGray500: '#78716c',
      warmGray600: '#57534e',
      warmGray700: '#44403c',
      warmGray800: '#292524',
      warmGray900: '#1c1917',

      trueGray50: '#fafafa',
      trueGray100: '#f5f5f5',
      trueGray200: '#e5e5e5',
      trueGray300: '#d4d4d4',
      trueGray400: '#a3a3a3',
      trueGray500: '#737373',
      trueGray600: '#525252',
      trueGray700: '#404040',
      trueGray800: '#262626',
      trueGray900: '#171717',

      coolGray50: '#f9fafb',
      coolGray100: '#f3f4f6',
      coolGray200: '#e5e7eb',
      coolGray300: '#d1d5db',
      coolGray400: '#9ca3af',
      coolGray500: '#6b7280',
      coolGray600: '#4b5563',
      coolGray700: '#374151',
      coolGray800: '#1f2937',
      coolGray900: '#111827',

      blueGray50: '#f8fafc',
      blueGray100: '#f1f5f9',
      blueGray200: '#e2e8f0',
      blueGray300: '#cbd5e1',
      blueGray400: '#94a3b8',
      blueGray500: '#64748b',
      blueGray600: '#475569',
      blueGray700: '#334155',
      blueGray800: '#1e293b',
      blueGray900: '#0f172a',

      background: '#FBFBFB',
    },
    space: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '4.5': 18,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '11': 44,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': 1,
      '2': 2,
      '4': 4,
      '8': 8,
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
    mediaQueries: {
      base: '@media screen and (min-width: 0)',
      xs: '@media screen and (min-width: 400px)',
      sm: '@media screen and (min-width: 480px)',
      md: '@media screen and (min-width: 768px)',
      lg: '@media screen and (min-width: 992px)',
      xl: '@media screen and (min-width: 1280px)',
    },
    letterSpacings: {
      'xs': -0.4,
      'sm': -0.2,
      'md': 0,
      'lg': 0.2,
      'xl': 0.4,
      '2xl': 1.6,
    },
    lineHeights: {
      '2xs': 16,
      'xs': 18,
      'sm': 20,
      'md': 22,
      'lg': 24,
      'xl': 28,
      '2xl': 32,
      '3xl': 40,
      '4xl': 48,
      '5xl': 56,
      '6xl': 72,
      '7xl': 90,
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extraBlack: '950',
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  } as const,
  themes: {
    dark: {
      colors: {
        primary0: '#828282',
        primary50: '#949494',
        primary100: '#9E9E9E',
        primary200: '#B3B3B3',
        primary300: '#C7C7C7',
        primary400: '#E6E6E6',
        primary500: '#F0F0F0',
        primary600: '#FAFAFA',
        primary700: '#FCFCFC',
        primary800: '#FDFDFD',
        primary900: '#FDFCFC',
        primary950: '#FDFCFC',

        secondary0: '#0B0C0C',
        secondary50: '#181717',
        secondary100: '#272626',
        secondary200: '#3F4040',
        secondary300: '#515252',
        secondary400: '#5E5F5F',
        secondary500: '#727373',
        secondary600: '#AFB0B0',
        secondary700: '#DBDBDB',
        secondary800: '#E7E8E8',
        secondary900: '#F1F2F2',
        secondary950: '#FEFFFF',

        tertiary0: '#543112',
        tertiary50: '#6C3D13',
        tertiary100: '#824917',
        tertiary200: '#B4621A',
        tertiary300: '#D7751F',
        tertiary400: '#E78128',
        tertiary500: '#FB9D4B',
        tertiary600: '#FDB474',
        tertiary700: '#FED1AA',
        tertiary800: '#FFE9D5',
        tertiary900: '#FFF2E5',
        tertiary950: '#FFFAF5',

        text0: '#171717',
        text50: '#262627',
        text100: '#404040',
        text200: '#525252',
        text300: '#737373',
        text400: '#8C8C8C',
        text500: '#A3A3A3',
        text600: '#D4D4D4',
        text700: '#DBDBDC',
        text800: '#E5E5E5',
        text900: '#F5F5F5',
        text950: '#FEFEFF',

        background0: '#121212',
        background50: '#272625',
        background100: '#414040',
        background200: '#535252',
        background300: '#747474',
        background400: '#8E8E8E',
        background500: '#A2A3A3',
        background600: '#D5D4D4',
        background700: '#DCDBDB',
        background800: '#F2F1F1',
        background900: '#F6F6F6',
        background950: '#FEFEFE',

        border0: '#1A1717',
        border50: '#272624',
        border100: '#414141',
        border200: '#535252',
        border300: '#737474',
        border400: '#8C8D8D',
        border500: '#A5A3A3',
        border600: '#D3D3D3',
        border700: '#DDDCDB',
        border800: '#E6E6E6',
        border900: '#F3F3F3',
        border950: '#FDFEFE',

        success0: '#1B3224',
        success50: '#14532D',
        success100: '#166534',
        success200: '#206F3E',
        success300: '#2A7948',
        success400: '#348352',
        success500: '#489766',
        success600: '#66B584',
        success700: '#84D3A2',
        success800: '#A2F1C0',
        success900: '#CAFFE8',
        success950: '#E4FFF4',

        error0: '#531313',
        error50: '#7F1D1D',
        error100: '#991B1B',
        error200: '#B91C1C',
        error300: '#DC2626',
        error400: '#E63535',
        error500: '#EF4444',
        error600: '#F87171',
        error700: '#E63534',
        error800: '#FECACA',
        error900: '#FEE2E2',
        error950: '#FEE9E9',

        warning0: '#542D12',
        warning50: '#6C3813',
        warning100: '#824417',
        warning200: '#B45A1A',
        warning300: '#D76C1F',
        warning400: '#E77828',
        warning500: '#FB954B',
        warning600: '#FDAD74',
        warning700: '#FECDAA',
        warning800: '#FFE7D5',
        warning900: '#FFF9F5',
        warning950: '#FFFDFB',

        info0: '#032638',
        info50: '#05405D',
        info100: '#075A83',
        info200: '#0973A8',
        info300: '#0B8DCD',
        info400: '#0DA6F2',
        info500: '#32B4F4',
        info600: '#57C2F6',
        info700: '#7CCFF8',
        info800: '#A2DDFA',
        info900: '#C7EBFC',
        info950: '#ECF8FE',

        backgroundError: '#422B2B',
        backgroundWarning: '#412F23',
        backgroundSuccess: '#1C2B21',
        backgroundMuted: '#252526',
        backgroundInfo: '#1A282E',
      },
    },
  },
  globalStyle: {
    variants: {
      hardShadow: {
        '1': {
          shadowColor: '$background900',
          shadowOffset: {
            width: -2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
        '2': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 10,
          shadowOpacity: 0.2,
          elevation: 10,
        },
        '3': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
        '4': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 10,
          shadowOpacity: 0.2,
          elevation: 10,
        },
        // this 5th version is only for toast shadow
        // temporary
        '5': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          elevation: 10,
        },
      },
      softShadow: {
        '1': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$background500',
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
        '2': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
          elevation: 3,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$background500',
            elevation: 10,
            shadowOpacity: 0.1,
          },
        },
        '3': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 30,
          shadowOpacity: 0.1,
          elevation: 4,
          _android: {
            shadowColor: '$background500',
            elevation: 15,
            shadowOpacity: 0.15,
          },
        },
        '4': {
          shadowColor: '$background900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 40,
          shadowOpacity: 0.2,
          elevation: 10,
          _android: {
            shadowColor: '$background500',
            elevation: 20,
            shadowOpacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)],
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from '@gluestack-ui/themed';

export interface IConfig {}
export interface IComponents {}

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
