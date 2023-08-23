import { Image, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import img from "../assets/images/img.png";
import { colors } from "../colors";

type MedicalReportType = {
  hasVideo: boolean
  result: {
    playback_url: string,
    action_label: string
  }
}

function MedicalReport({ hasVideo, result }: MedicalReportType) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        View Medical Report
      </Text>

      <View style={styles.imageContainer}>
        {hasVideo ? (
          <Video
            source={{ uri: result?.playback_url }}
            controls
            resizeMode="contain"
            style={styles.backgroundVideo}
          />
        ) : (
          <View style={styles.noReport}><Image source={img} style={styles.noImage} /></View>
        )}
      </View>
      <Text style={styles.action}>{result?.action_label}</Text>
    </View>
  );
}

export { MedicalReport };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    color: colors["primary-100"],
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  action: {
    color: colors["black"],
    fontWeight: "900",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  noReport: {
    borderWidth: 0.5,
    borderColor: colors.black,
    opacity: 0.2,
    paddingVertical: 37,
    paddingHorizontal: 20,
  },
  noImage: {
    width: 103,
    height: 100
  },
  backgroundVideo: {
    width: "100%",
    height: 180,
  },
});
