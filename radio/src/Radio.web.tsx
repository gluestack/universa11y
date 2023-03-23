/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, memo } from 'react';
import { RadioProvider } from './RadioProvider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { useRadioGroup } from './RadioGroupContext';
import {
  combineContextAndProps,
  mergeRefs,
  stableHash,
} from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';

const RadioComponent = memo(
  forwardRef(
    (
      {
        StyledRadio,
        inputProps,
        inputRef,
        combinedProps,
        isChecked: isCheckedProp,
        isDisabled: isDisabledProp,
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isInvalid: isInvalidProp,
        isReadOnly: isReadOnlyProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        children,
        ...props
      }: any,
      ref?: any
    ) => {
      const { isInvalid, isReadOnly, isIndeterminate, ...restProps } =
        combinedProps;
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const { focusProps, isFocusVisible } = useFocusRing();
      const [isFocused, setFocused] = React.useState(isFocusedProp);
      const [isPressed, setPressed] = React.useState(isPressedProp);
      const handleFocus = () => {
        setFocused(true);
      };
      const handleBlur = () => {
        isFocusedProp ? setFocused(true) : setFocused(false);
      };
      const handlePressIn = () => {
        setPressed(true);
      };

      const handlePressOut = () => {
        isPressedProp ? setPressed(true) : setPressed(false);
      };

      return (
        <StyledRadio
          {...props}
          {...restProps}
          accessibilityRole="label"
          ref={_ref}
          onMouseDown={handlePressIn}
          onMouseUp={handlePressOut}
        >
          <RadioProvider
            isChecked={isChecked || isCheckedProp}
            isDisabled={isDisabled || isDisabledProp}
            isFocusVisible={isFocusVisible || isFocused || isFocusVisibleProp}
            isHovered={isHovered || isHoveredProp}
            isInvalid={isInvalid || isInvalidProp}
            isReadOnly={isReadOnly || isReadOnlyProp}
            isIndeterminate={isIndeterminate || isIndeterminateProp}
            isFocused={isFocused || isFocusedProp}
            isPressed={isPressed || isPressedProp}
          >
            <VisuallyHidden>
              <input
                {...inputProps}
                {...focusProps}
                ref={ref}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </VisuallyHidden>
            {children}
          </RadioProvider>
        </StyledRadio>
      );
    }
  )
);

const Radio = (StyledRadio: any) =>
  forwardRef(
    (
      {
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isInvalid: isInvalidProp,
        children,
        ...props
      }: any,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();
      const contextState = useRadioGroup('RadioGroupContext');

      const combinedProps = {
        ...formControlContext,
        ...contextState,
        ...props,
      };

      const inputRef = React.useRef(null);
      const { inputProps } = useRadio(
        {
          ...combinedProps,
          'aria-label': props.accessibilityLabel,
          children,
        },
        contextState.state ?? {},
        inputRef
      );

      const contextCombinedProps = React.useMemo(() => {
        return { ...combinedProps };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [stableHash(combinedProps)]);

      if (!contextState) {
        console.error('Error: Radio must be wrapped inside a Radio.Group');
      }

      const isInvalid =
        contextCombinedProps?.state?.validationState === 'invalid'
          ? true
          : false;
      return (
        <RadioComponent
          StyledRadio={StyledRadio}
          inputProps={inputProps}
          combinedProps={contextCombinedProps}
          children={children}
          ref={ref}
          isFocusVisible={isFocusVisibleProp}
          isHovered={isHoveredProp}
          isIndeterminate={isIndeterminateProp}
          isFocused={isFocusedProp}
          isPressed={isPressedProp}
          isInvalid={isInvalid || isInvalidProp}
        />
      );
    }
  );
export { Radio };
