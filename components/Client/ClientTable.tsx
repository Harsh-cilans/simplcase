"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useState, JSX } from "react";
import Page from "@/components/Page";

type Client = {
  name: string;
  no: string;
  Contact: number;
  "CaseNo.": string;
  ActiveCases: number;
  Action: string[];
};

const client: Client[] = [
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  },
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  },
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  },
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  },
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  },
  {
    name: "Rahul Shah",
    no: "0179 - 3284",
    Contact: 999999999,
    "CaseNo.": "CC/ 80564",
    ActiveCases: 15,
    Action: ["View", "Edit", "Doc."],
  }
];

const ClientTable = (): JSX.Element => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const { page, setPage, totalPages } = useAppContext();

  return (
    <div className="relative sm:ml-25 mr-2 mt-6 bg-cover bg-no-repeat bg-center rounded-xl shadow-[0_7px_6px_rgba(0,0,0,0.15)]">
      {/* Scroll Wrapper */}
      <div className="overflow-x-auto rounded-t-2xl">
        <table className="min-w-[600px] sm:w-full text-sm text-center bg-white border border-[#E9EDF7]">
          <thead className="bg-white border-b border-[#E9EDF7] text-[13px] font-normal">
            <tr>
              <th className="px-4 py-2 border-r border-[#E9EDF7]">Client</th>
              <th className="px-4 py-2 border-r border-[#E9EDF7]">Phone</th>
              <th className="px-4 py-2 border-r border-[#E9EDF7]">Case No.</th>
              <th className="px-4 py-2 border-r border-[#E9EDF7]">Cases</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {client.map((clt, i) => (
              <tr
                key={i}
                onClick={() => setSelectedRow(i)}
                className={`cursor-pointer hover:bg-[#8794BA33] border-b border-[#E9EDF7] ${
                  selectedRow === i ? "bg-[#EEF0F5]" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 flex items-center justify-center gap-2 whitespace-nowrap">
                  <Image
                    src="/header/profile.svg"
                    width={24}
                    height={24}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-left text-xs leading-tight">
                    <span>{clt.name}</span>
                    <span className="text-[10px] text-gray-500">{clt.no}</span>
                  </div>
                </td>

                <td className="px-4 py-2 text-xs">*** *** ***</td>
                <td className="px-4 py-2 text-xs">{clt["CaseNo."]}</td>
                <td className="px-4 py-2 text-xs">{clt.ActiveCases}</td>

                <td className="px-4 py-2">
                  <div className="flex flex-wrap justify-center gap-1">
                    {clt.Action.map((action, idx) => (
                      <button
                        key={idx}
                        className="bg-[#1A2A42] text-white text-[11px] px-3 py-1 rounded-full"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white py-2 px-2 border border-[#E9EDF7] border-t-0 rounded-b-2xl shadow-sm">
        <Page
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(page: number) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default ClientTable;
