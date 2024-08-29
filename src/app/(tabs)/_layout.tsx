import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
export default function TabLayout() {
  interface path {
    id: number;
    name: string;
    path: string;
    icon: JSX.Element;
  }
  type paths = path[];
  const MainPaths: paths = [
    {
      id: 1,
      name: 'Home',
      path: 'Home',
      icon: <Octicons name="home" size={24} color="white" />,
    },
    {
      id: 2,

      name: 'Search',
      path: 'Search',
      icon: <Octicons name="search" size={24} color="white" />,
    },
    {
      id: 3,

      name: 'Add',
      path: 'Add',
      icon: <Octicons name="diff-added" size={24} color="white" />,
    },
    {
      id: 4,

      name: 'Reels',
      path: 'Reels',
      icon: <Octicons name="video" size={24} color="white" />,
    },
    {
      id: 5,

      name: 'Profile',
      path: 'Profile',
      icon: <FontAwesome5 name="user-circle" size={24} color="white" />,
    },
  ];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      {MainPaths.map(({ id, name, path, icon }: path) => {
        return (
          <Tabs.Screen
            key={id}
            name={name}
            options={{
              tabBarIcon: () => <View>{icon}</View>,
              title: '',
            }}
          />
        );
      })}
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
