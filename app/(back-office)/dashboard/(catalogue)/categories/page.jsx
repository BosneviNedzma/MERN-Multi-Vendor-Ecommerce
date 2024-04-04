import PageHeader from "@/components/backoffice/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      {/* Table */}
      <h2>Categories</h2>
    </div>
  );
}
