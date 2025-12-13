import { faCheck, faInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <div className="flex justify-center mb-4 bg-[#fff] border-15 border-[#37B5FF] w-20 h-20 flex items-center center rounded-full m-auto">
            <FontAwesomeIcon
              icon={type === "success" ? faCheck : faInfo}
              className="text-3xl text-[#37B5FF] cursor-pointer"
              />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold">{title}</h3>

          {/* Message */}
          <p className="mt-2 mb-5 text-body text-xm">{message}</p>

          {/* Buttons */}
          <div className="flex items-center space-x-4 justify-center ">
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
                  fontSize: '16px',
                  minWidth: '150px',
                }}
              >
                {secondButtonText}
              </button>
            )}

            <button
              type="button"
              onClick={buttonFunction}
              style={{
                background: '#37B5FF',
                padding: '10px 54px',
                cursor: 'pointer',
                borderRadius: '80px',
                fontSize: '18px',
                minWidth: '150px',
              }}
            >
              {buttonText}
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
}
