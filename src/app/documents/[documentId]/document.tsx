"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";

import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { Toolbar } from "./toolbar";
import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>
}
export const Document = ({ preloadedDocument }: DocumentProps) => {

    const document = usePreloadedQuery(preloadedDocument)
  

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD] flex flex-col gap-y-2">
        <Navbar data={document} />
        <div className="">
          <Toolbar />
          <Editor initialContent={document.initialContent}/>
        </div>
      </div>
    </Room>
  );
};

