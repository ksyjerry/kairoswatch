"use client"

import type React from "react"

import { useState, useRef } from "react"

export default function FileUploader() {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file drop logic here
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className={`border ${
        isDragging ? "border-[#2d9bb2] bg-[#f1f4f3]" : "border-dashed border-[#dde0df]"
      } rounded-md p-4 md:p-8 text-center`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" className="hidden" ref={fileInputRef} />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f1f4f3] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5b5c5b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-6 md:h-6"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        <div className="text-[#1f1f1f] font-medium text-sm md:text-base">Drag and Drop files here</div>
        <div className="text-[#5b5c5b] text-sm">or</div>
        <button
          onClick={handleBrowseClick}
          className="px-3 py-1.5 md:px-4 md:py-2 bg-[#f1f4f3] border border-[#dde0df] text-[#1f1f1f] rounded-md hover:bg-[#ebeeed] text-sm"
        >
          Browse Files
        </button>
      </div>
    </div>
  )
}
