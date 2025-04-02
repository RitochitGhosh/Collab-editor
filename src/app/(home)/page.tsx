"use client";

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { FullScreenLoader } from "@/components/fullscreen-loader";
import { DocumentsTable } from "./documents-table";
import { useSearchParams } from "@/hooks/use-search-params";

const Home = () => {
  const [search] = useSearchParams();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 },
  );

  if (results === undefined) {
    return <FullScreenLoader label="Getting your Documents ..." />;
  }

  // console.log("Documents: ", documents);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flxed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="">
        <TemplatesGallery />
        <DocumentsTable 
          documents={results}
          loadMore={loadMore}
          status={status}
        />
        
      </div>
    </div>
  );
};

export default Home;
