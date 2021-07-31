import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Appbar } from "../components/Appbar";
import Footer from "../components/Footer";
import PasteResponse from "../interfaces/AddPasteResponse";
import { Get } from "../network/api";
import { PasteState } from "../store/create_paste";
import paste from "./api/[id]";

export const getServerSideProps: GetServerSideProps = (
  ctx: GetServerSidePropsContext
) => {
  const { id } = ctx.query;
  return Get(`${id}`).then((d) => {
    return {
      props: {
        paste: d,
      },
    };
  });
};

export default function Paste({ paste }: { paste: PasteResponse }) {
  return (
    <>
      <Head>
        <title>ID: {paste.id} | Pas.ty</title>
      </Head>
      <div className="flex flex-col w-screen h-screen">
        <Appbar show={false} />
        {!paste.isModifiable ? (
          <p className="text-center text-white font-bold bg-red">Freezed</p>
        ) : null}
        <div className="w-full h-full overflow-auto bg-secondarybg font-semibold text-white px-6 py-4">
          <p>{paste.content}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
