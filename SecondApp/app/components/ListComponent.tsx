import {
  FlatList,
  FlatListComponent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import pokemonList from "@/data.json";

type PokemonListType = {
  id: string;
  name: string;
  type: string;
};

const ListComponent = () => {
  return (
    <View style={listStyle.safeAreaContainer}>
      {/* this */}
      {/* <ScrollView style={listStyle.scrollViewContainer}>
        {pokemonList?.map((pokemon) => {
          console.log("list data id = ", pokemon.id);

          return (
            <View style={listStyle.listViewContainer} key={pokemon.id}>
              <Text style={listStyle.listText}>Name : {pokemon.name}</Text>
              <Text style={listStyle.listText}>Type : {pokemon.type}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      <View>
        <FlatList<PokemonListType>
          data={pokemonList}
          // not here in render item other then item will lead to error
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View style={listStyle.listViewContainer} key={item.id}>
                <Text style={listStyle.listText}>Name : {item.name}</Text>
                <Text style={listStyle.listText}>Type : {item.type}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 13 }} />}
          ListEmptyComponent={
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>No Items Found</Text>
            </View>
          }
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              Pokemon List Header
            </Text>
          }
          ListFooterComponent={
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Pokemon List End Footer
            </Text>
          }
          // arange data in horzontal order
          // horizontal={true}
        />
      </View>
    </View>
  );
};

export default ListComponent;

const listStyle = StyleSheet.create({
  safeAreaContainer: {
    padding: 8,
    // flex: 1,
    backgroundColor: "white",
  },

  scrollViewContainer: {
    // flex: 1,
  },

  listViewContainer: {
    borderWidth: 1,
    padding: 13,
    borderRadius: 8,
    // marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },

  listText: {
    color: "#262626",
    fontSize: 20,
  },
});
