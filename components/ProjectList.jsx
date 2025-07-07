import AppStyles from "@/app/styles";
import { FlatList, Text } from "react-native";

const ProjectList = () => {
    return (
        <FlatList style={AppStyles.projectList}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
        </FlatList>
    );
}

export default ProjectList;