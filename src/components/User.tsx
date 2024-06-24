import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export function User(){
    return(
        <View className="items-center">
            <Avatar className="w-32 h-32 border-4 border-white">
                <AvatarImage source={{uri: "https://avatars.githubusercontent.com/u/47005441?v=4"}} />
                <AvatarFallback>Sua Foto</AvatarFallback>
            </Avatar>

            <Text className="text-white font-bold text-2xl mt-4"> Túlio Cruz </Text>

            <Text className="text-gray-400 text-lg"> @fonsecacruztulio </Text>
        </View>
    )
}