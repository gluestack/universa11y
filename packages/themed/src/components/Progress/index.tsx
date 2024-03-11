'use client';
import { createProgress } from '@gluestack-ui/progress';
import { Root, FilledTrack } from './styled-components';

export const Progress = createProgress({
  Root,
  FilledTrack,
});
export const ProgressFilledTrack = Progress.FilledTrack;
