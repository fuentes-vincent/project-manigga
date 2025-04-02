'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay
} from "@/components/ui/dialog"

interface VideoCallModalProps {
  isOpen: boolean
  onClose: () => void
  roomUrl: string | null
  title?: string
}

export function VideoCallModal({ isOpen, onClose, roomUrl, title = "Huddle" }: VideoCallModalProps) {

  if (!isOpen || !roomUrl) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
       <DialogOverlay className="bg-black/70 backdrop-blur-sm" />
      <DialogContent className="max-w-4xl h-[80vh] p-0 border-none bg-gray-900 flex flex-col">
        <DialogHeader className="p-4 border-b border-gray-700">
          <DialogTitle className="text-white">{title}</DialogTitle>
           {/* Optionally add description or controls here */}
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${roomUrl}?iframe=true`}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            className="w-full h-full border-0"
            title={`Daily.co Huddle - ${title}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
} 