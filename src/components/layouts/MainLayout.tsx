import { FC } from "react";
import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Androide 18 - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
