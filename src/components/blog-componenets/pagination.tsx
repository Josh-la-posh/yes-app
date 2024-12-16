'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage = 1,
  totalPages = 30,
  onPageChange,
}: PaginationProps) {
  const generatePageNumbers = useCallback(() => {
    const pages: (number | string)[] = []
    
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Always show first page
    pages.push(1)

    if (currentPage > 3) {
      pages.push('...')
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push('...')
    }

    // Always show last page
    pages.push(totalPages)

    return pages
  }, [currentPage, totalPages])

  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="mr-4">
        Page {currentPage} of {totalPages}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      <div className="flex items-center gap-1">
        {generatePageNumbers().map((page, index) => (
          <Button
            key={index}
            variant={currentPage === page ? "default" : "ghost"}
            size="sm"
            className={`h-8 w-8 ${typeof page === 'string' ? 'cursor-default hover:bg-transparent' : ''}`}
            onClick={() => typeof page === 'number' ? onPageChange(page) : null}
            disabled={typeof page === 'string'}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}