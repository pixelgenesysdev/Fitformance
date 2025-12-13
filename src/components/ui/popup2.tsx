import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface PopupBoxProps {
  type: string;
  title: string;
  message: string;
  buttonText: string;
  buttonFunction: () => void;
  double?: boolean;
  secondButtonText?: string;
  secondButtonFunction?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupBox({
  type,
  title,
  message,
  
  buttonText,
  buttonFunction,
  double = false,
  secondButtonText,
  secondButtonFunction,
  isOpen,
  onClose,
  
}: PopupBoxProps) {

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full h-full backdrop-blur-sm bg-black/30"
    >
      <div className="relative p-6 w-full max-w-md text-white bg-black border-[#37B5FF] border-3 rounded-3xl">
        
        {/* Close icon */}
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl cursor-pointer"
          style={{ position: "absolute", top: "20px", right: "20px" }}
          onClick={onClose}
        />

        <div className="text-center py-10 px-3">
          {/* Icon */}
          <div className="flex justify-center mb-4 bg-[#37B5FF] border-3 border-[#fff] w-25 h-25 flex items-center center rounded-full m-auto">
            <FontAwesomeIcon
              icon={type === "success" ? faCheck : faXmark}
              className="text-5xl cursor-pointer"
              />
          </div>

          {/* Title */}
          <h3 className="text-4xl">{title}</h3>

          {/* Message */}
          <p className="my-4 text-body text-xl">{message}</p>

          {/* Buttons */}
          <div className="flex items-center space-x-4 justify-center ">

            <button
              type="button"
              onClick={buttonFunction}
              style={{
                background: '#37B5FF',
                padding: '10px 54px',
                cursor: 'pointer',
                borderRadius: '80px',
                fontSize: '18px',
              }}
            >
              {buttonText}
            </button>

            {double && (
              <button
                type="button"
                onClick={secondButtonFunction}
                style={{
                  background: 'transparent',
                  border: '2px solid #37B5FF',
                  padding: '10px 40px',
                  cursor: 'pointer',
                  borderRadius: '80px',
                  fontSize: '18px',
                }}
              >
                {secondButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
