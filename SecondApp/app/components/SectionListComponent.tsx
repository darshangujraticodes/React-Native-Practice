import { SectionList, StyleSheet, Text, View } from "react-native";

import PokemonList from "@/grouped-data.json";

const SectionListComponent = () => {
  return (
    <View style={{}}>
      <SectionList
        sections={PokemonList}
        renderItem={({ item }) => {
          // console.log(item);

          return (
            <View style={listStyle.listViewContainer} key={item}>
              <View style={{}}>
                <Text style={listStyle.listText}>{item}</Text>
              </View>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 22,
              marginTop: 10,
              borderTopWidth: 1,
              paddingVertical: 10,
            }}
          >
            Type : {section.type}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionListComponent;

const listStyle = StyleSheet.create({
  listViewContainer: {
    // borderWidth: 1,
    // padding: 13,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginRight: 10,
  },

  listText: {
    color: "#262626",
    fontSize: 18,
  },
});
