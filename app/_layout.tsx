import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4f4f4f',
        },
        headerTintColor: '#c6c6c6',
        headerTitleAlign: 'center', 
      }}
    >
      <Stack.Screen name="index" options={{ title: 'CICLO TÉRMICO' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
