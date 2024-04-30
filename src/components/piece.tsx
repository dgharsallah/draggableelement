"use client";
import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function Piece({ isOpen = true, onClose = false }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
      onClose(false);
    }
  };

  return (
    <Draggable cancel="[class*='dialog-content']">
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto ${
          open ? "block" : "hidden"
        }`}
        onClick={handleClose}
      >
        <div
          className={`bg-white shadow-md rounded-lg p-6 relative ${
            open ? "block" : "hidden"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-2">Modal title</h2>
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
          <div className="mt-4">
            <p>random content</p>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClose}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
