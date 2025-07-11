import AppStyles from "@/app/styles";
import { FlatList, Text, View } from "react-native";

const ProjectList = () => {
    return (
        <View>
            <Text>List should show below</Text>
            <FlatList
                data={[
                    {
                        id: 1,
                        text: "Item 1"
                    },
                    {
                        id: 2,
                        text: "Item 2"
                    },
                ]}
                renderItem={({ item }) => <Text style={AppStyles.projectListItem} >{item.text}</Text>}
            />
        </View>
    );
}

export default ProjectList;