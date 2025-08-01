"use client";

import Image from "next/image";
import { JSX, useState } from "react";

type Document = {
  title: string;
  client: string;
  owner: string;
  access: string;
  date: string;
  status: string;
  actions: string[];
};

const documents: Document[] = [
  {
    title: "Lorem Ipsum is Simply",
    client: "Rahul Shah",
    owner: "/header/profile.svg",
    access: "None",
    date: "30/04/2025",
    status: "Draft",
    actions: ["Open", "Rename"],
  },
  {
    title: "Lorem Ipsum is Simply",
    client: "Vineet Gandhi",
    owner: "/header/profile.svg",
    access: "None",
    date: "04/04/2025",
    status: "Draft",
    actions: [],
  },
  {
    title: "Lorem Ipsum is Simply",
    client: "Pujan Shah",
    owner: "/header/profile.svg",
    access: "None",
    date: "01/03/2025",
    status: "Draft",
    actions: [],
  },
  {
    title: "Lorem Ipsum is Simply",
    client: "Parag Vora",
    owner: "/header/profile.svg",
    access: "None",
    date: "01/03/2025",
    status: "Draft",
    actions: [],
  },
];

const DocumentTable = (): JSX.Element => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (
    <div className="relative px-4 sm:px-6 sm:ml-25 sm:mr-5 overflow-x-auto max-h-[397px] mt-8 rounded-xl shadow-[0_7px_6px_rgba(0,0,0,0.15)]">
      <table className="min-w-[600px] sm:w-full text-left bg-white text-xs sm:text-xs">
        <thead className="bg-white border-y border-[#E9EDF7]">
          <tr className="whitespace-nowrap">
            <th className="border-r border-[#E9EDF7] px-6 py-3">Document Title</th>
            <th className="border-r border-[#E9EDF7] px-6 py-3">Client Name</th>
            <th className="border-r border-[#E9EDF7] px-6 py-3">Status</th>
            <th className="border-r border-[#E9EDF7] px-6 py-3">Owner</th>
            <th className="border-r border-[#E9EDF7] px-6 py-3">Access</th>
            <th className="px-6 py-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc, i) => (
            <tr
              key={i}
              onClick={() => setSelectedRow(i)}
              className={`whitespace-nowrap cursor-pointer transition-colors ${
                selectedRow === i ? "bg-[#EEF0F5]" : "bg-white"
              } hover:bg-[#8794BA33] border-b border-[#E9EDF7]`}
            >
              {/* Document Title + Action buttons */}
              <td className="px-6 py-4 flex items-center gap-2">
                <Image src="/document/file.svg" width={14} height={16} alt="file" />
                <span className="truncate max-w-[160px]">{doc.title}</span>
                {selectedRow === i && doc.actions.length > 0 && (
                  <div className="flex gap-2 ml-4 bg-[#022BA1] text-white px-3 py-2 rounded-full overflow-auto text-xs">
                    {doc.actions.includes("Open") && (
                      <button className="flex items-center gap-1 whitespace-nowrap">
                        <Image src="/document/arrowOut.svg" width={12} height={12} alt="Open" />
                        Open
                      </button>
                    )}
                    {doc.actions.includes("Rename") && (
                      <button className="flex items-center gap-1 whitespace-nowrap">
                        <Image src="/document/edit.svg" width={12} height={12} alt="Rename" />
                        Rename
                      </button>
                    )}
                    <button className="flex items-center gap-1 whitespace-nowrap">
                      <Image src="/document/link.svg" width={10} height={10} alt="More" />
                      ...
                    </button>
                  </div>
                )}
              </td>

              {/* Client */}
              <td className="px-6 py-4 text-center">{doc.client}</td>

              {/* Status */}
              <td className="px-6 py-4">
                <span className="inline-block bg-[#E7EAF1] text-[#022BA1] text-center text-xs px-2 py-1 rounded hover:bg-[#022BA1] hover:text-white transition">
                  {doc.status}
                </span>
              </td>

              {/* Owner */}
              <td className="px-6 py-4">
                <Image src={doc.owner} width={25} height={25} alt="Owner" />
              </td>

              {/* Access */}
              <td className="px-6 py-4 flex items-center justify-center gap-2">
                <span>{doc.access}</span>
                <Image src="/document/add.svg" height={17} width={17} alt="Add" />
              </td>

              {/* Date */}
              <td className="px-6 py-4">{doc.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
