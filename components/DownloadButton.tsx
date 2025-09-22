'use client';

import Button from './Button'
import { Download } from 'lucide-react'

export default function DownloadButton() {
  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <Button onClick={handleDownloadPDF} className="group">
      <Download className="mr-2 group-hover:translate-y-[-1px] transition-transform" size={20} />
      Download PDF
    </Button>
  )
}
