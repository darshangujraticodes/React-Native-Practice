import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Pressable,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";

type PostApiDataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type FormErrorType = {
  title?: string;
  body?: string;
};

const CrudNetworking = () => {
  const [apiPostData, setApiPostData] = useState<PostApiDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [apiError, setApiError] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrorType>({});
  const [posting, setPosting] = useState(false);

  const fetchApiData = async (limit = 20) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setApiPostData(data);
      setLoading(false);

      setApiError("");
    } catch (error) {
      console.error("API Get Request:", error);
      setLoading(false);
      setApiError("Failed To Fetch Api Data");
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

  const validateForm = (): boolean => {
    let formErrorList: FormErrorType = {};
    if (!postTitle) formErrorList.title = "Title is Required!";
    if (!postBody) formErrorList.body = "Body is Required!";

    setFormErrors(formErrorList);

    return Object.keys(formErrorList).length === 0;
  };

  const addPost = async () => {
    setPosting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: Date.now(),
            id: Date.now(),
            title: postTitle,
            body: postBody,
          }),
        }
      );

      const newPost = await response.json();
      setApiError("");
      setApiPostData([newPost, ...apiPostData]);
    } catch (error) {
      console.error("API POST Request | ", error);

      setApiError("Failed to Add New Post. ");
    }
  };

  const handlePostSubmit = () => {
    console.log(postTitle, postBody);

    console.log(formErrors);

    console.log({
      userId: Date.now(),
      id: Date.now(),
      title: postTitle,
      body: postBody,
    });

    if (validateForm()) {
      addPost();
      setPostTitle("");
      setPostBody("");
      setPosting(false);

      console.log("Post Submitted Successfully !");
    }
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
    <>
      {apiError ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18 }}>{apiError}</Text>
        </View>
      ) : (
        <>
          <View style={[CrudStyles.inputContainer]}>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              API Post Request
            </Text>
            <View style={{ marginBottom: 10 }}>
              <TextInput
                placeholder="Enter Your Post Title"
                style={[CrudStyles.inputText]}
                value={postTitle}
                onChangeText={setPostTitle}
              />

              {formErrors.title ? (
                <Text
                  style={{
                    marginTop: 5,
                    marginLeft: 10,
                    color: "red",
                    marginBottom: 5,
                  }}
                >
                  {formErrors.title}
                </Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 10 }}>
              <TextInput
                placeholder="Enter Your Post Body"
                style={[CrudStyles.inputText]}
                value={postBody}
                onChangeText={setPostBody}
              />
              {formErrors.body ? (
                <Text
                  style={{
                    marginTop: 5,
                    marginLeft: 10,
                    color: "red",
                    marginBottom: 5,
                  }}
                >
                  {formErrors.body}
                </Text>
              ) : null}
            </View>

            <Pressable onPress={handlePostSubmit} disabled={posting}>
              <Text
                style={[
                  CrudStyles.submitBtn,
                  posting ? { opacity: 0.7 } : { opacity: 1 },
                ]}
              >
                {posting ? "Adding..." : "Add Post"}
              </Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              data={apiPostData}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={<View style={{ height: 13 }}></View>}
              renderItem={({ item }) => {
                //   console.log(item);
                return (
                  <View key={item.id}>
                    <Text style={CrudStyles.postTitle}>{item.title} </Text>
                    <Text style={CrudStyles.postBody}>{item.body} </Text>
                  </View>
                );
              }}
              refreshing={refreshing}
              onRefresh={handleRefresh}
              ListEmptyComponent={
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
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
                  API Get Request
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
        </>
      )}
    </>
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

  inputContainer: {
    marginBottom: 17,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#262626",
    padding: 10,
    fontSize: 15,
    borderRadius: 8,
    // marginBottom: 10,
  },
  submitBtn: {
    textAlign: "center",
    backgroundColor: "#6E5EF4",
    color: "white",
    fontSize: 22,
    borderRadius: 8,
    paddingVertical: 8,
  },
});
