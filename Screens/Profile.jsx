import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const Resume = () => {
  const { userState } = useSelector((state) => state);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.photo}
          source={{
            uri: `https://api.dicebear.com/5.x/adventurer-neutral/jpg?seed=${userState.user.name}`,
          }}
        />
        <Text style={styles.name}>{userState.user.name}</Text>
        <Text style={styles.title}>{userState.user.email}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tasks Report :</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>
                Software Engineer, ABC Company (2022-present)
              </Text>
              <Text style={styles.sectionItemDesc}>
                - Worked on the development of the company's flagship product, a
                cloud-based project management tool - Implemented new features
                and improvements to the tool using React and Redux -
                Collaborated with the design team to ensure a seamless user
                experience
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>
                Software Intern, XYZ Company (2020-2021)
              </Text>
              <Text style={styles.sectionItemDesc}>
                - Assisted the development team in the creation of a mobile app
                for event ticketing - Worked with React Native and Firebase to
                implement features such as ticket purchasing and QR code
                scanning - Participated in code reviews and team meetings to
                ensure code quality
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.sectionContent}>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Personal Blog (2021)</Text>
              <Text style={styles.sectionItemDesc}>
                - Created a personal blog using Gatsby and GraphQL - Implemented
                a custom design and added features such as dark mode and search
                - Deployed the site using AWS Amplify
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.sectionItemTitle}>Recipe App (2020)</Text>
              <Text style={styles.sectionItemDesc}>
                - Developed a recipe search app using React and the Spoonacular
                API - Implemented features such as saving favorite recipes and
                filtering by dietary restrictions - Published the app on the App
                Store and Google Play Store
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    color: "gray",
  },
  body: {},
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionContent: {
    marginTop: 8,
  },
  sectionItem: {
    marginVertical: 4,
  },
  sectionItemTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  sectionItemDesc: {
    fontSize: 14,
    color: "gray",
  },
});

export default Resume;
