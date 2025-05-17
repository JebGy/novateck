"use client";
import { useProduct } from "@/store/ProductStore";
import { Comment } from "@/types";
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";


function CommentComponent(props: Comment) {
  return (
    <section className="border shadow rounded-lg p-4 w-fit">
      <div className="w-full flex flex-row items-center gap-4">
        <Image
          width={100}
          height={100}
          alt=""
          src={props.userImage}
          className="rounded-full w-8"
        />
        <div>
          <span>{props.userName}</span>
          <div className="text-yellow-500 flex flex-row gap-2">
            {Array.from({ length: 5 }, (_, i) =>
              i < props.rating ? (
                <Star key={i} className="text-yellow-500" fill="#eab308" />
              ) : (
                <Star key={i} className="text-zinc-400" fill="#fefefe" />
              )
            )} 
          </div>
        </div>
      </div>
      <p className="mt-2 mr-8 w-96">
        {props.opinion}
      </p>
    </section>
  );
}

export default CommentComponent;
