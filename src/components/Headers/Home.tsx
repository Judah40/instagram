import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

const Home = () => {
  return (
    <View className="h-12 w-full flex-row items-center justify-between px-4">
      {/* logo */}
      <View className="h-full flex-row items-center gap-4 ">
        <View>
          <Text className="text-3xl text-white">Instagram</Text>
        </View>
        <TouchableOpacity className="">
          <FontAwesome6 name="angle-down" size={16} color="white" />
        </TouchableOpacity>
      </View>
      {/* other content */}
      <View className="flex-row gap-4">
        <TouchableOpacity>
          <Octicons name="heart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="facebook-messenger" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
