import AppStyles from "@/app/styles";
import Nav from "@/components/Nav";
import ProjectList from "@/components/ProjectList";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={AppStyles.body}
    >
      {/* NAV */}
      <Nav />

      {/* BODY */}
      <Text>Hi-Dee Ho!</Text>
      <ProjectList />

      {/* FOOTER */}
    </View>
  );
}

export default Index;