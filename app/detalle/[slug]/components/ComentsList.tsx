"use client";
import React from "react";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Star } from "lucide-react";
import { useProduct } from "@/store/ProductStore";
import CommentComponent from "./CommentComponent";
import { addComments } from "@/services/productService";

function ComentsList() {
  const usuario = useUser();
  const { currentProduct } = useProduct();
  const [stars, setStars] = React.useState(0);
  const [comment, setComment] = React.useState("");

  async function saveComment(formData: FormData) {
    // Prevent empty comments
    if (!comment.trim() || stars === 0) return;
    await addComments(currentProduct.id, {
      opinion: comment,
      rating: stars,
      userImage: usuario.user?.imageUrl!,
      userName: usuario.user?.fullName!,
    });
    setComment("");
    setStars(0);
  }

  return (
    <div className="col-span-8 pt-8 border-t-2 gap-4 flex flex-col">
      <h1 className="font-bold text-xl">Comentarios</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveComment(new FormData(e.currentTarget));
        }}
        className="flex flex-col gap-4"
      >
        <div className="w-full flex flex-row gap-4">
          <Image
            src={usuario.user?.imageUrl || ""}
            width={100}
            height={100}
            alt={usuario.user?.username || ""}
            className="h-8 w-8 rounded-full"
          />

          <div className="flex flex-col gap-2 w-full">
            <div className="text-yellow-500 flex flex-row gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={i < stars ? "text-yellow-500" : "text-zinc-400"}
                  fill={i < stars ? "#eab308" : "#fefefe"}
                  onClick={() => setStars(i + 1)}
                />
              ))}
            </div>
            <textarea
              className="p-2 border border-gray-300 rounded w-full"
              rows={4}
              placeholder="Agrega tu comentario..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="self-end bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          Enviar
        </button>
      </form>

      {currentProduct.comments &&
        currentProduct.comments.map((v, index) => (
          <CommentComponent key={index} {...v} />
        ))}
    </div>
  );
}

export default ComentsList;
