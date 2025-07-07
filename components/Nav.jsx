import { Stack } from 'expo-router';

const Nav = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Fuck' }} />
    </Stack>
  );
}

export default Nav;