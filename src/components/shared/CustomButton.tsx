import React from 'react';
import {Button, Text} from '@gluestack-ui/themed';

interface IButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'small';
}

const CustomButton = ({title, onPress, variant}: IButtonProps) => {
  return (
    <Button
      h={variant === 'small' ? '$10' : '$12'}
      onPress={onPress}
      bg="#3B82F6"
      rounded="$xl">
      <Text color="$white" fontWeight="$semibold">
        {title}
      </Text>
    </Button>
  );
};

export default CustomButton;
