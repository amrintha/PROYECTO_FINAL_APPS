import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
//import products from '../../data/products.json'
import FlatCard from '../../components/FlatCard'
import { useEffect, useState } from 'react'
import Search from '../../components/Search'
import { useSelector } from 'react-redux'

const ProductsScreen = ({ route, navigation }) => {
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  const products = useSelector(state=>state.shopReducer.products)


  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  useEffect(() => {
      
    if(keyword){
      setProductsFiltered(productsFilteredByCategory.filter(
        product=>product.title.toLowerCase().includes(keyword.toLowerCase())
      ))
    }else{
      setProductsFiltered(productsFilteredByCategory)
    }
  }, [keyword])  

  const renderProductItem = ({ item }) => (
    <Pressable onPress={()=>navigation.navigate("Producto",{product:item})}>
      <FlatCard>
        <Text>{item.title}</Text>
      </FlatCard>
    </Pressable>
  )
  return (
    <>
      <Search setKeyword={setKeyword} keyword={keyword}/>
      <FlatList
        data={productsFiltered}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})