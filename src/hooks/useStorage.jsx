import { useState, useEffect } from "react";
import { st, db } from "../firebase/Config";
import firebase from "firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const stRef = st.ref(file.name);

  useEffect(() => {
    stRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await stRef.getDownloadURL();
        setUrl(url);
        db.collection("images").add({
          url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
