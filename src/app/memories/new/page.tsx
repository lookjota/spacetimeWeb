
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { NewMemoryFom } from "@/components/NerwMemoryForm";

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover: text-gray-200">
        <ChevronLeft className="h-4 w-4" />
        voltar a timeline
      </Link>

      <NewMemoryFom />
    </div>
  )
}