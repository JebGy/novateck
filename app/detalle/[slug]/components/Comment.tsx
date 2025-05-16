"use client"
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Comment() {
  const [avatar, setAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [stars, setStars] = React.useState(0);

  const fetchUserData = React.useCallback(() => {
    // Fetch user data from the API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setAvatar(user.picture.thumbnail);
        setUserName(`${user.name.first} ${user.name.last}`);
        // Genera un número aleatorio de estrellas entre 1 y 5
        setStars(Math.floor(Math.random() * 5) + 1);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  React.useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <section className="border shadow rounded-lg p-2 w-fit">
      <div className="w-full flex flex-row items-center gap-4">
        <Image
          width={100}
          height={100}
          alt=""
          src={avatar}
          className="rounded-full w-8"
        />
        <div>
          <span>{userName}</span>
          <div className="text-yellow-500 flex flex-row gap-2">
            {Array.from({ length: 5 }, (_, i) =>
              i < stars ? (
              <Star key={i} className="text-yellow-500" fill="#eab308" />
              ) : (
              <Star key={i} className="text-zinc-400" fill="#fefefe" />
              )
            )}
          </div>
        </div>
      </div>
      <p className="">
        {"Lorem ipsum dolor sit amet.".repeat(
          Math.floor(Math.random() * 10) + 1
        )}
      </p>
    </section>
  );
}

export default Comment;
