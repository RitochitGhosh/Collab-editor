import { format } from "date-fns";
import { Building2Icon, CircleUserIcon } from "lucide-react";
import { SiGoogledocs } from "react-icons/si";

import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { DocumentMenu } from "./document-menu";
import { useRouter } from "next/navigation";

interface DocumentRowProps {
    document: Doc<"documents">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
    const router = useRouter();

    return (
        <TableRow 
            onClick={() => router.push(`/documents/${document._id}`)}
            className="cursor-pointer"
        >
            <TableCell className="w-[50px] flex justify-center items-center">
                <SiGoogledocs className="w-6 h-6 fill-blue-500" />
            </TableCell>

            <TableCell className="font-medium md:w-[40%] truncate">
                {document.title}
            </TableCell>

            <TableCell className="text-muted-foreground hidden md:flex items-center gap-2 md:w-[50%]">
                {document.organizationId ? (
                    <Building2Icon className="size-4" />
                ) : (
                    <CircleUserIcon className="size-4" />
                )}
                {document.organizationId ? "Organization" : "Personal"}
            </TableCell>

            <TableCell className="text-muted-foreground hidden md:table-cell md:w-[20%]">
                {format(new Date(document._creationTime), "MMM dd, yyyy")}
            </TableCell>

            <TableCell className="flex justify-end ml-auto">
                <DocumentMenu
                    documentId={document._id}
                    title={document.title}
                    onNewTab={() => window.open(`/documents/${document._id}`, "_blank")}
                />
            </TableCell>
        </TableRow>
    );
};
