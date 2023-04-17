import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://salonnz-admin.vercel.app" }}
      style={{ flex: 1 }}
    />
  );
}
