import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from "react-native";
import { colors } from "./colors";
import { Button, MedicalReport, Progress, UploadContainer } from "./components";
import { useContext, useState } from "react";
import useApp from "./hooks/useApp";
import { AppContext } from "./Provider/AppProvider";

type VideoType = undefined | null | Record<string, string | number>;

function Home(): JSX.Element {
    
  const isDarkMode = useColorScheme() === "dark";
  const [video, setVideo] = useState<VideoType>(null);

  const { handleUpload, hasVideo, progress, result, loading, selectVideo } = useApp();

  const addVideo = async () => {
    const res = await selectVideo();

    setVideo(res as VideoType);
  };

  const uploadVideo = () => handleUpload(video);

  return (
  // <View className="bg-[#FFF] border border-red-500 flex-1 ">
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
                    Upload your medical condition video
        </Text>
      </View>
      <View style={styles.shadow} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Upload video</Text>

          <View style={styles.sectionContainer}>
            <UploadContainer addVideo={addVideo} video={video} />

            <View style={styles.uploadContainer}>
              <Button label="Run detector" onPress={uploadVideo} />
            </View>

            <Progress count={progress} loading={loading} hasVideo={hasVideo} />

            <MedicalReport hasVideo={hasVideo} result={result as string} />
          </View>

          {/* <Instruction />
  
            <View style={styles.saveContainer}>
              <Button label="Save" onPress={handleSave} />
            </View> */}
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.background,
    paddingTop: 23,
    paddingHorizontal: 27,
  },
  content: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    height: 1,
  },
  titleContainer: {
    backgroundColor: colors.white,

    paddingTop: 31,
    paddingBottom: 31,
    alignItem: "center",
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 5.62,
    // elevation: 8,
  },
  titleText: {
    textAlign: "center",
    color: colors.primary,
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
  },
  // },
  // section: {
  sectionTitle: {
    color: colors["universal-black-100"],
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
  },

  sectionContainer: {
    marginTop: 22,
    borderRadius: 8,
    width: "100%",
    backgroundColor: colors.white,
    paddingTop: 21,
    paddingBottom: 36,
    paddingHorizontal: 22
  },

  uploadContainer: {
    marginVertical: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  // saveContainer: {
  //   marginVertical: 32,
  //   width: "100%",
  // },
});

export default Home;
