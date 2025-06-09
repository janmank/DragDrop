import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

interface IScreenWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const ScreenWrapper = ({
  children,
  backgroundColor = '#fff',
}: IScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
