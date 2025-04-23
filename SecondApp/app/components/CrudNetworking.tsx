import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

type PostApiDataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const CrudNetworking = () => {
  const [apiPostData, setApiPostData] = useState<PostApiDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchApiData = async (limit = 20) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setApiPostData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=30")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setApiPostData(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching posts:", error);
    //     setLoading(false);
    //   });

    fetchApiData(5);
  }, []);

  // console.log(apiPostData.length);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchApiData(20);
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={CrudStyles.parentViewContainer}>
        <ActivityIndicator size="large" color="#262626" />
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={apiPostData}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View style={{ height: 13 }}></View>}
        renderItem={({ item }) => {
          //   console.log(item);
          return (
            <View>
              <Text style={CrudStyles.postTitle}>{item.title} </Text>
              <Text style={{}}>{item.body} </Text>
            </View>
          );
        }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>No Post Data Found</Text>
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
            API Get Request of Post Info
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
            API Post Data Ends
          </Text>
        }
      />
    </View>
  );
};

export default CrudNetworking;

const CrudStyles = StyleSheet.create({
  postTitle: {
    fontSize: 19,
    marginBottom: 5,
  },
  postBody: {
    fontSize: 15,
    textAlign: "justify",
  },

  parentViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
