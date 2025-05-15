import React, { ReactNode } from "react";

function NavButton(props: { children?: ReactNode; className?: string }) {
  return <div className={props.className}>{props.children}</div>;
}

export default NavButton;
