import React from 'react';
import {HStack, Button, Text, Box} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';

interface IHeaderProps {
  title: string;
}

const Header = ({title}: IHeaderProps) => {
  const navigation = useNavigation();

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      px="$4"
      bg="$white"
      borderBottomWidth={1}
      borderColor="#F1F5F9">
      <Button variant="link" p={0} onPress={() => navigation.goBack()}>
        <Text size="lg" bold color="$primary">
          Go Back
        </Text>
      </Button>
      <Box flex={1} px="$2" alignItems="flex-end">
        <Text
          size="lg"
          bold
          color="$primary"
          numberOfLines={1}
          ellipsizeMode="tail">
          {title}
        </Text>
      </Box>
    </HStack>
  );
};

export default Header;
