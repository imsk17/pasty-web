import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function Appbar() {
  const { text } = useSelector((state: RootState) => state.paste);
  return (
    <header className="flex w-full h-16 bg-primarybg items-center justify-between px-8 italic font-medium">
      <p className="text-3xl text-yellow"> {"<Pas"}<span className="text-pink">
        {"ty/>"}</span></p>
      <button
        onClick={() => {
          console.log(text);
        }}
        className="text-red font-semibold"
      >
        Save
      </button>
    </header>
  );
}
