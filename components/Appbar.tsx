import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { Save } from "../network/api";
import { setModifiability } from "../store/create_paste";
import { RootState } from "../store/store";

export function Appbar(props: { show: boolean }) {
  return (
    <header className="flex w-full h-16 bg-primarybg items-center justify-between px-8 font-bold">
      <p className="text-3xl text-yellow">
        {" "}
        {"<Pas"}
        <span className="text-pink">{"ty/>"}</span>
      </p>
      <CreateAppBar show={props.show} />
    </header>
  );
}

const CreateAppBar = ({ show }: { show: boolean }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { text, is_modifiable } = useSelector(
    (state: RootState) => state.paste
  );
  return show ? (
    <div className="flex">
      <input
        checked={is_modifiable}
        type="checkbox"
        onChange={() => {
          dispatch(setModifiability(!is_modifiable));
        }}
      ></input>
      <p className="text-yellow font-semibold px-2">Freeze Text?</p>
      <button
        onClick={async () => {
          const response = await Save(text, is_modifiable);
          if (typeof response === undefined) {
            alert("Unable to save the paste");
          } else {
            router.push(`/${response!.id}`);
          }
        }}
        className="text-red font-semibold pl-2"
      >
        Save
      </button>
    </div>
  ) : null;
};
