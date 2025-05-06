"use client"

import type React from "react"

import { useState, useRef } from "react"

export default function PdfUploader() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
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

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    // PDF 파일만 허용
    if (file.type !== "application/pdf") {
      alert("PDF 파일만 업로드 가능합니다.")
      return
    }

    setUploadedFile(file)

    // 파일 미리보기 URL 생성
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="mb-6">
      {!uploadedFile ? (
        <div
          className={`border ${
            isDragging ? "border-[#2d9bb2] bg-[#f1f4f3]" : "border-dashed border-[#dde0df]"
          } rounded-md p-4 md:p-8 text-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="application/pdf"
          />
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
            <div className="text-[#1f1f1f] font-medium text-sm md:text-base">PDF 파일을 여기에 드래그하세요</div>
            <div className="text-[#5b5c5b] text-sm">또는</div>
            <button
              onClick={handleBrowseClick}
              className="px-3 py-1.5 md:px-4 md:py-2 bg-[#f1f4f3] border border-[#dde0df] text-[#1f1f1f] rounded-md hover:bg-[#ebeeed] text-sm"
            >
              파일 선택
            </button>
            <div className="text-xs text-[#5b5c5b] mt-2">지원 파일 형식: PDF</div>
          </div>
        </div>
      ) : (
        <div className="border border-[#dde0df] rounded-md overflow-hidden">
          <div className="bg-[#f7f9f8] p-3 flex justify-between items-center border-b border-[#dde0df]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5b5c5b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span className="font-medium">{uploadedFile.name}</span>
            </div>
            <button onClick={handleRemoveFile} className="text-[#5b5c5b] hover:text-[#f94b50]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="h-[600px] w-full">
            {previewUrl && <iframe src={previewUrl} className="w-full h-full" title="PDF Preview" />}
          </div>
        </div>
      )}
    </div>
  )
}
