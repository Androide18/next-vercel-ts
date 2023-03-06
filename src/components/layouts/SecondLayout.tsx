import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const SecondLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        borderRadius: "5px",
        color: "white",
        padding: 10,
      }}
    >
      <h3>SecondLayout</h3>
      <div>{children}</div>
    </div>
  );
};
