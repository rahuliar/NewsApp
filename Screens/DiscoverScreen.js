import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import { NewsContext } from '../API/Context'
import { categories, sources } from '../API/api'
import Search from '../Components/Search'



const DiscoverScreen = () => {
  const { } = useContext(NewsContext)
  const { setCategory, setSource} = useContext(NewsContext);
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  return (
    <View style={{
      padding: 10,
      alignItems: "center",
      backgroundColor: "black",
      flex:1
    }}>
      <Search style={{marginTop:10}}/>
      <Text style={{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: "#007FFF",
        paddingBottom: 8,
        marginHorizontal: 5,
        marginTop:10
      }}>Category</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={{
                height: 120,
                margin: 5,
                marginHorizontal: 25,
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Image source={{ uri: item.pic }} style={{
                height: "60%",
                width: "100%",
                resizeMode: "contain",
              }} />
              <Text
                style={{
                  fontSize: 14,
                  textTransform: "capitalize", color: "white"
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
      />
      <Text style={{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        borderBottomWidth: 2,
        borderBottomColor: "#007FFF",
        paddingBottom: 8,
        marginHorizontal: 5,
        marginTop:10
      }}>sources</Text>
      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
      }}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={{
              height: 150,
              backgroundColor: "#cc313d",
              width: "40%",
              borderRadius: 10,
              margin: 15,
            }}
          >
            <Image source={{ uri: s.pic }} style={{
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }} />
          </TouchableOpacity>
        ))}
      </View>
    </View >
  )
}

export default DiscoverScreen
