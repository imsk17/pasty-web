import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Appbar } from "../components/Appbar";
import Footer from "../components/Footer";
import PasteResponse from "../interfaces/AddPasteResponse";
import { Get } from "../network/api";
import { PasteState } from "../store/create_paste";

export default function Paste() {
  const router = useRouter();
  const { id } = router.query;
  const [paste, setPaste] = useState<PasteState>({
    text: "",
  });

  useEffect(() => {
    if (id === undefined) return;
    Get(`${id}`).then((data) => {
      if (typeof data != undefined) {
        setPaste({ text: data!.content });
      }
    });
  }, [id]);
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <Appbar show={false} />
        <div className="w-full h-full overflow-auto bg-secondarybg font-semibold text-white px-6 py-4">
          <p>{paste.text == "" ? "" : paste.text}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
