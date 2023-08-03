import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import plus from "../assets/images/plus.png";
import { colors } from "../colors";
import useApp from "../hooks/useApp";

function UploadContainer({ addVideo, video }: any) {
  const { selectVideo } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Video File</Text>
        <Pressable onPress={addVideo}>
          <View style={styles.btnContainer}>
            <Image source={plus} style={styles.plus} />
            <Text style={styles.btnTitle}>
              Add From File
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.separatorContainer}>
        <Text style={styles.separatorText}>or</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Paste the link to your file here
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="File link"
          value={video?.uri}
        />
      </View>
    </View>
  );
}

export { UploadContainer };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: 'center',
    padding: 14,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors["light-grey"],
    backgroundColor: colors["upload-container"],
  },

  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: 'red',
  },
  // className="text-[#7E848E] text-xs font-[Roboto] "
  title: {
    color: colors["dark-grey"],
    fontSize: 12,
    fontFamily: "Roboto",
  },

  //  className="flex-row items-center justify-center py-[6px] px-3 h-10 bg-[#E9E9F0] rounded-[3px]"
  btnContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: colors["light-grey"],
    borderRadius: 3,
  },
  // className="w-[9px] h-[9px] border mr-[10px]"
  plus: {
    width: 9,
    height: 9,
    marginRight: 10
  },

  // className="font-[DMSans] font-medium text-[10px] text-[#071939]"
  btnTitle: {
    color: colors["primary-100"],
    fontWeight: "500",
    fontSize: 10,
    fontFamily: "DMSans",
  },

  //   className="mt-2 mb-3 items-center"
  separatorContainer: {
    marginTop: 4,
    marginBottom: 12,
    alignItems: "center",
  },

  // className="font-[Roboto] text-xs text-[#7E848E]"
  separatorText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: colors["dark-grey"],
  },

  // className="border border-[#FBFAFF] bg-white h-12 rounded-lg py-2 pl-3 pr-2"
  inputContainer: {
    borderWidth: 1,
    borderColor: colors["input-container"],
    backgroundColor: colors.white,
    minHeight: 49,
    justifyContent: "center",
    // gap: 5,
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 8,
    // borderWidth: 1,
    // borderColor: "red",
  },

  //  className="font-[Inter] text-[11px] text-[#A3A3A3] font-normal"
  label: {
    fontFamily: "Inter",
    fontSize: 11,
    lineHeight: 13.2,
    color: colors.label,
    marginBottom: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },

  // className="font-[Raleway] text-black text-sm font-extrabold"
  input: {
    fontFamily: "Raleway",
    color: colors.black,
    fontWeight: "600",
    padding: 0,
    justifyContent: "center",
    flex: 1,

    fontSize: 14,
    // lineHeight: 21,
    // borderWidth: 1,
    // borderColor: "red",
  }
});
