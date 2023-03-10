import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
  cursor: "pointer",
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : {}}>
      {text}
    </Link>
  );
};
