import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'black',
        },
        headerShown: false,
      }}
    />
  );
};

export default _layout;
