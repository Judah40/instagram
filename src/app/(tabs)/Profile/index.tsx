import React from 'react';
import { Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';

import Profile from '~/src/components/Headers/Profile';

const Index = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="flex-1">
      {/* header */}
      <Profile />
      {/* refresh */}
      {refreshing && <ActivityIndicator color="gray" size="large" />}
      {/* content */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text className="text-white">hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
