"use client"

import * as React from "react"

export function ProcedureImage({ name }: { name: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
      <div className="text-primary/40 text-lg font-medium text-center p-4">
        {name}
      </div>
    </div>
  )
} 