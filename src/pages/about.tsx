import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { SecondLayout } from "@/components/layouts/SecondLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <SecondLayout>{page}</SecondLayout>
    </MainLayout>
  );
};
