"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { ReactNode } from "react";

function NavButton(props: {
  children?: ReactNode;
  className?: string;
  navigateTo?: string;
}) {
  const u = useUser();
  return (
    <Link href={props.navigateTo ? props.navigateTo + (u.user?.id ?? "") : ""} className={props.className}>
      {props.children}
    </Link>
  );
}

export default NavButton;
