import React, { useContext } from 'react'
import { Dimensions, FlatList, Text, View, } from 'react-native'
// import Carousel from 'react-native-snap-carousel';
import { NewsContext } from '../API/Context'
import SingleNews from '../Components/SingleNews'

const NewsScreen = () => {
  const { news: { articles }, } = useContext(NewsContext);
  return (
    <View style={{ flex: 1,
      backgroundColor: "black",
      }}>
      {
        articles && (
          <FlatList 
          firstItem={articles.slice(0, 10).length - 1}
          data={articles.slice(0, 10)}
          pagingEnabled
          renderItem={({item,index})=>(
            <SingleNews item={item} index={index}/>
          )}
          onSnapToItem={(index) => setActiveIndex(index)} 
        />
        )
      }
    </View>
  )
}

export default NewsScreen
