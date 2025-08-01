"use client";

import { useState } from "react";
import Category from "@/components/Category";
import DocumentTable from "@/components/DocumentTable";
import FilterBar from "@/components/Filterbar";
import Page from "@/components/Page";

export default function Home() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="h-[835px]">
      {/* Page-specific content */}
      <FilterBar />
      <Category />
      <DocumentTable />
      <Page
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page: number) => setPage(page)}
      />
    </div>
  );
}
