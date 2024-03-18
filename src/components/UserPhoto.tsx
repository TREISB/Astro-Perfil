"use client";
import { useState, useEffect, useRef } from "react";
import Glider from "react-glider";
import GliderMethods from "react-glider";
import user from "../../public/user.png";
import axios from "axios";
import "glider-js/glider.css";

type GlideEvent = { slide: number };

export const UserPhotos = () => {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://perfil-back.onrender.com/users"
      );
      const userData = response.data;
      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="relative" style={{ width: "80vw" }}>
      <Glider
        draggable
        hasDots
        slidesToShow={1}
        scrollLock
      >
        {Array.from(
          { length: Math.min(3, user?.photos?.length || 0) },
          (_, index) => (
            <div
              key={index}
            >
              {user && user.photos && index < user.photos.length ? (
                <div
                  key={index}
                  className="aspect-profile flex flex-row items-center justify-center overflow-hidden rounded-lg"
                >
                  <img
                    src={user.photos[index]}
                    alt="user"
                    style={{ minHeight: "712px", width: "712px" }}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          )
        )}
      </Glider>
    </div>
  );
};