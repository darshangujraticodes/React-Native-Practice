import { View, Text, FlatList } from "react-native";
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

    const fetchApiData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=30"
        );
        const data = await response.json();
        setApiPostData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  console.log(apiPostData.length);

  return (
    <View>
      <FlatList
        data={apiPostData}
        ItemSeparatorComponent={<View style={{ height: 13 }} />}
        renderItem={({ item }) => {
          //   console.log(item);

          return (
            <View>
              <Text>Title : {item.title} </Text>
              <Text>Body : {item.body} </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CrudNetworking;
