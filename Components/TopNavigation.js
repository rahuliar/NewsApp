import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
//import { Feather } from "@expo/vector-icons";
import { NewsContext } from "../API/Context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
      const { fetchNews } = useContext(NewsContext);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "black",
                backgroundColor: "black",
                borderBottomWidth: 0.5,
                padding: 10,
            }}
        >
            {index === 0 ? (
                <Text
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: 80,
                    }}
                    >
                    <Text
                        style={{ fontSize: 12., color: "white",fontWeight:'bold' }}
                    >
                        {'\u00A9'}rahul rai
                    </Text>
                </Text>
            ) : (
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: 80,
                    }}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
                    <Text
                        style={{ fontSize: 16, color: "lightgrey" }}
                    >
                        Discover
                    </Text>
                </TouchableOpacity>
            )}

            <Text style={{
                paddingBottom: 6,
                borderBottomWidth: 5,
                borderRadius: 5,
                fontSize: 16,
                borderBottomColor: "#007FFF",
                fontWeight: "bold", color: "white"
            }}>
                {index ? "All News" : "Discover"}
            </Text>
            {index ? (
                <TouchableOpacity
                style={{
                    width: 80,
                    alignItems: "flex-end"
                }}
                  onPress={() => fetchNews("general")}
                >
                    <Text style={{ fontSize: 16, }}>
                        <AntDesign name="reload1" size={30} color="#007FFF" />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                style={{flexDirection: "row",
                alignItems: "center",
                width: 80,
                justifyContent: "space-between",}}
                onPress={() => setIndex(index === 0 ? 1 : 0)}
                >
                    <Text
                        style={{ fontSize: 16, color: "lightgrey" }}
                        >
                        All News
                    </Text>
                    <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default TopNavigation;

