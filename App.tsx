
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

import { Button } from "./components";
import { Instruction } from "./components/Instruction";
import { MedicalReport } from "./components/MedicalReport";
import { Progress } from "./components/Progress";
import { UploadContainer } from "./components/UploadContainer";
import useApp from "./hooks/useApp";
import { useState } from "react";

type VideoType = undefined | null | Record<string, string | number>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [video, setVideo] = useState<VideoType>(null);

  const { handleSave, handleUpload, progress, loading, selectVideo } = useApp();

  const addVideo = async () => {
    const res = await selectVideo();

    setVideo(res as any);
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
              <Button label="Upload" onPress={uploadVideo} />
            </View>

            <Progress count={progress} loading={loading} />

            <MedicalReport />
          </View>

          <Instruction />

          <View style={styles.saveContainer}>
            <Button label="Save" onPress={handleSave} />
          </View>
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  scrollView: {
    backgroundColor: colors.background,
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingTop: 23,
    paddingHorizontal: 27,
    // marginHorizontal: 20,
  },
  content: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'red',
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
  // title: {
  titleContainer: {
    // borderWidth: 1,
    // marginTop: 100,
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
    // alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 21,
    paddingBottom: 36,
    paddingHorizontal: 22,
    // borderWidth: 1,
    // borderColor: 'red',
  },

  // uploadContainer: {
  //   justifyContent: "center",
  //   // alignItems: 'center',
  //   padding: 14,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: colors["light-grey"],
  //   backgroundColor: "#F5F6FA",
  // },

  // header: {
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   // borderWidth: 1,
  //   // borderColor: 'red',
  // },

  // button: {
  //   height: 40,
  //   // padding: '6px 12px',
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 10,
  //   borderRadius: 3,
  //   backgroundColor: colors["light-grey"],
  // },
  // },

  // className="my-7 items-center justify-center"
  uploadContainer: {
    marginVertical: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  // className="my-8 w-full "
  saveContainer: {
    marginVertical: 32,
    width: "100%",
  },

  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: "600",
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: "400",
  // },
  // highlight: {
  //   fontWeight: "700",
  // },


});

export default App;
