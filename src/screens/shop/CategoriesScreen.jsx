import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native'
import categories from '../../data/categories.json'
import FlatCard from '../../components/FlatCard'
import TextSansBogle from '../../components/customText/TextSansBogle'
import { useState,useEffect } from 'react'

const CategoriesScreen = ({navigation}) => {
   // const [newNumColumns, setNunColumns] = useState(1)

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>navigation.navigate("Productos",{category:item.title})}>
            <FlatCard style={styles.categoriesContainer}>
                <TextSansBogle>{item.title}</TextSansBogle>
                <Image source={{ uri: item.image }}
                    width={80}
                    height={50}
                    resizeMode='contain'
                />
            </FlatCard>
        </Pressable>
    )

   // const {width, height} = useWindowDimensions()
    
    //useEffect(()=>{
      //  if(width>height){
      //      setNunColumns(3)
      //  }
    //},[width, height])

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoriesContainer: {
        gap: 16,
        justifyContent: "space-between",
        margin: 8
    }
})