import axios from "axios";
import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";

// type VideoType = undefined | null | Record<string, string | number>;

const UPLOAD_URL = "https://";

function useApp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
    
//   const [video, setVideo] = useState<VideoType>(null);


  const handleUpload = async (video) => {
    //   console.log("upload", video);
    //   return;
    setLoading(true);
    const formData = new FormData();
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: function (progressEvent: any) {
        const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentage);
      },
    };

    formData.append("uploaded_file", {
      name: "name.mp4",
      uri: video.uri,
      type: "video/mp4"
    });

    try {
      const res = await axios.post(UPLOAD_URL, formData, config);
      console.log("res ", res);
      setResult(res.data);
    } catch (error: any) {
      console.log("error ", error);
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    console.log("save");
  };

  const selectVideo = async () => {
    const res = await launchImageLibrary({
      mediaType: "mixed",
      selectionLimit: 1,
    });
    return res?.assets?.[0];

    // setVideo(_result as unknown as any);
    // console.log("res ", res?.assets?.[0]);
  };

  return {
    handleUpload,
    handleSave,
    selectVideo,
    loading,
    result,
    error,
    progress,
  };
}

export default useApp;