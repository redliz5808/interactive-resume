import AppStyles from "@/app/styles";
import { Image } from "expo-image";
import { Text, View } from "react-native";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const NavImage = () => {
    return (
          <View style={AppStyles.navImageContainer}>
            <Image style={AppStyles.navLogo} source={require("@/assets/images/icon_homepage.png")} placeholder={{blurhash}} />
            <Text style={AppStyles.navTitle}>Elizabeth Franklin</Text>
          </View>
    )
}

export default NavImage;