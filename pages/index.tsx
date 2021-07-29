import { useDispatch } from "react-redux";
import { setText } from "../store/create_paste";
import { Appbar } from "../components/Appbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Pas.ty | Pastebin and URL Shortner Service</title>
      </Head>
      <div className="font-mono flex flex-col w-screen h-screen">
        <Appbar show={true} />
        <textarea
          onChange={(e) => {
            dispatch(setText(e.target.value));
          }}
          spellCheck="false"
          placeholder="dump text/code/url here..."
          className="h-full bg-secondarybg font-semibold text-white w-screen px-6 py-4 outline-none resize-none overflow-auto"
        ></textarea>
        <Footer />
      </div>
    </>
  );
}
