import React from "react";
import NavButton from "./NavButton";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/public/logo.png"

function Navbar() {
  return (
    <nav className="bg-blue-800 sticky top-0 w-full px-4 py-2 grid grid-cols-12 items-center gap-4 text-white place-items-center">
      <Image src={logo} alt="logo" width={800} height={800} className="lg:h-30 lg:w-24 h-32 w-32 col-span-12 lg:col-span-1"/>
      <input
        placeholder="Buscar un producto"
        className="w-full bg-stone-100 rounded-full text-stone-800 placeholder:text-stone-500 px-4 py-1 lg:col-span-8 col-span-full"
      ></input>
      <section className="col-span-full lg:col-span-3 flex flex-row gap-8 items-center justify-between">
        <NavButton className="">
          <h2>Hola,</h2>
          <SignedOut>
            <SignInButton>Iniciar sesión</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavButton>
        <NavButton>Mis compras</NavButton>
        <NavButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:size-8 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </NavButton>
      </section>
    </nav>
  );
}

export default Navbar;
