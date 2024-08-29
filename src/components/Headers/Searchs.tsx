import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

type values = {
  textinput: (data: string) => void;
  isActive: (data: boolean) => void;
};
const Searchs = ({ isActive, textinput }: values) => {
  const [search, setSearch] = React.useState<string>();
  const [texting, setTexting] = React.useState<boolean>(false);
  const propsValues = (value: string, active: boolean) => {
    textinput(value);
    isActive(active);
  };
  useEffect(() => {}, [search]);
  return (
    <View className={`h-12 w-full flex-row items-center justify-between px-4 `}>
      {/* search bar */}
      <View
        className={`h-12  ${texting ? 'w-10/12' : 'w-full'} flex-row items-center gap-2 rounded-xl bg-gray-900 px-2`}>
        <Octicons name="search" size={24} color="gray" />
        <TextInput
          value={search}
          onChangeText={(text) => {
            setTexting(true);
            setSearch(text);
            propsValues(text, true);
          }}
          className="h-full flex-1 text-white  placeholder:text-gray-700"
          placeholder="search"
        />
        {search && (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
            }}>
            <MaterialIcons name="cancel" size={24} color="gray" />
          </TouchableOpacity>
        )}
      </View>
      {/* search cancel button */}
      {texting && (
        <TouchableOpacity
          onPress={() => {
            setTexting(false);
            setSearch('');
            propsValues('', false);
          }}>
          <Text className="text-lg text-white">Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Searchs;
