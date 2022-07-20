import React from 'react'
import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'


const SingleNews = ({ item, index }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height-10+index;
    return (
        <View style={{
            height: windowHeight,
            width: windowWidth,
        }}>

            <Image source={{ uri: item.urlToImage }} style={{ height: "45%", resizeMode: "cover", width: windowWidth,marginTop:10 }} />
            <View style={{
                padding: 15,
                flex: 1,
            }}>
                <Text style={{
                    color: 'white', fontSize: 20,
                    fontWeight: "bold",
                    paddingBottom: 15,
                    // paddingTop: 10,
                }}>{item.title}</Text>

                <Text style={{
                     flex: 1,
                     color: 'white'
                }}>{item.description}</Text>
                <Text style={{ color: "white",marginBottom:5}}>
                    Short by
                    <Text style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.author ?? "unknown"}
                    </Text>
                </Text>
            </View>
                <ImageBackground
                    blurRadius={80}
                    style={{
                        height: 80,
                        width: windowWidth,
                        position: "absolute",
                        bottom: 10,
                        backgroundColor: "#d7be69",
                        justifyContent: "center",
                        paddingHorizontal: 20,
                        padding:0
                    }}
                    source={{ uri: item.urlToImage }}
                >
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: "white" }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
        </View>
    )
}

export default SingleNews
