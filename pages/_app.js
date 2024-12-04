import GlobalStyle from "../styles";
import GalleryPage from "./gallery";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
