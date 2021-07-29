import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { Save } from "../network/api";
import { RootState } from "../store/store";

export function Appbar(props: { show: boolean }) {
  const router = useRouter();
  const { text } = useSelector((state: RootState) => state.paste);
  return (
    <header className="flex w-full h-16 bg-primarybg items-center justify-between px-8 font-bold">
      <p className="text-3xl text-yellow">
        {" "}
        {"<Pas"}
        <span className="text-pink">{"ty/>"}</span>
      </p>
      {props.show && (
        <button
          onClick={async () => {
            const response = await Save(text);
            if (typeof response === undefined) {
              alert("Unable to save the paste");
            } else {
              router.push(`/${response!.id}`);
            }
          }}
          className="text-red font-semibold"
        >
          Save
        </button>
      )}
    </header>
  );
}
