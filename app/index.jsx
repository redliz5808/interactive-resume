import AppStyles from "@/app/styles";
import ProjectList from "@/components/ProjectList";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={AppStyles.body}
    >

      {/* BODY */}
      <Text>Hi-Dee Ho!</Text>
      <ProjectList />

      {/* FOOTER */}
    </View>
  );
}

export default Index;