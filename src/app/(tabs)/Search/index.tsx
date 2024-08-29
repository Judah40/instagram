import Searchs from '@components/Headers/Searchs';
import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';

const Index = () => {
  const [input, setInput] = useState<string>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const searchValue = (value: string) => {
    setInput(value);
  };
  const searchActive = (value: boolean) => {
    setIsActive(value);
    console.log(value);
  };
  return (
    <SafeAreaView className="flex-1 gap-1 ">
      {/* header */}
      <Searchs textinput={searchValue} isActive={searchActive} />
      {isActive && <View className="h-[0.5px] w-full bg-gray-200"></View>}
    </SafeAreaView>
  );
};

export default Index;
