import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Profile = () => {
  return (
    <View className="h-12 w-full flex-row items-center justify-between px-4">
      {/* logo */}
      <View className="h-full flex-row items-center gap-4 ">
        <View>
          <Text className="text-3xl text-white">Judahdore</Text>
        </View>
        <TouchableOpacity className="">
          <FontAwesome6 name="angle-down" size={16} color="white" />
        </TouchableOpacity>
      </View>
      {/* other content */}
      <View className="flex-row items-center gap-6">
        <TouchableOpacity>
          <FontAwesome6 name="threads" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="diff-added" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
