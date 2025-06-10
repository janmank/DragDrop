import React from 'react';
import {Button, Text} from '@gluestack-ui/themed';

interface IButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'small' | 'filterOn' | 'filterOff';
}

const CustomButton = ({title, onPress, variant}: IButtonProps) => {
  if (variant === 'filterOn' || variant === 'filterOff') {
    return (
      <Button
        h="$10"
        onPress={onPress}
        bg={variant === 'filterOn' ? '$primary' : '$white'}
        rounded="$xl">
        <Text
          color={variant === 'filterOn' ? '$white' : '$primary'}
          fontWeight="$semibold">
          {title}
        </Text>
      </Button>
    );
  }
  return (
    <Button
      h={variant === 'small' ? '$10' : '$12'}
      onPress={onPress}
      bg="$primary"
      rounded="$xl">
      <Text color="$white" fontWeight="$semibold">
        {title}
      </Text>
    </Button>
  );
};

export default CustomButton;
