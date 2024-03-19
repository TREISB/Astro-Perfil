"use client";
import { useState, useEffect, useRef } from "react";
import Glider from "react-glider";
import user from "../../public/user.png";
import axios from "axios";
import "glider-js/glider.css";
import foto1 from "../../public/foto1.jpg";
import foto2 from "../../public/foto2.jpg";
import type { GliderMethods } from "react-glider/dist/types";

type GlideEvent = { slide: number };

export const UserPhotos = () => {
  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(0);
  const gliderRef = useRef<GliderMethods>(null);

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

  const handleMoveTo = (step: number) => () => {
    gliderRef.current?.scrollItem(step);
    setStep(step);
  };

  const handleOnMove = (event: CustomEvent<GlideEvent>) => {
    setStep(event.detail.slide);
  };

  return (
    <div className="relative">
      <Glider
        draggable
        slidesToScroll={user?.photos?.length ?? 1}
        slidesToShow={1}
        ref={gliderRef}
        scrollLock
        scrollPropagate={false}
        scrollLockDelay={100}
        onSlideVisible={handleOnMove}
        dragVelocity={1.8}
      >
        {Array.from(
          { length: Math.min(3, user?.photos?.length || 0) },
          (_, index) => (
            <div key={index}>
              {user && user.photos && index < user.photos.length ? (
                <div
                  key={index}
                  className="aspect-profile flex flex-row items-center justify-center overflow-hidden rounded-lg w-full h-full"
                >
                  <img
                    src={user.photos[index]}
                    alt="user"
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
      <ul className="flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {user?.photos?.map((photo: any, index: number) => (
          <li
            key={photo.id}
            onClick={handleMoveTo(index)}
            className={`w-[12px] h-[12px] min-w-[12px] min-h-[12px] rounded-full ${
              index === step ? "bg-red" : "bg-red/50"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
