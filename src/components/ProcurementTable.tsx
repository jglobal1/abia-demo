"use client";

import { useState } from "react";

type TabId = "tender" | "awards" | "plans" | "mdas" | "vendors";

interface TenderRow {
  id: string;
  mda: string;
  title: string;
  startDate: string;
  closingDate: string;
  status: "Closed" | "Open";
}

interface AwardRow {
  id: string;
  mda: string;
  projectTitle: string;
  vendor: string;
  awardDate: string;
  value: string;
}

interface PlanRow {
  id: string;
  mda: string;
  description: string;
  category: string;
  estimatedValue: string;
  quarter: string;
}

interface MdaRow {
  name: string;
  code: string;
}

interface VendorRow {
  name: string;
  registrationNo: string;
  category: string;
  status: "Active" | "Suspended";
}

const tabs: { id: TabId; label: string }[] = [
  { id: "tender", label: "Tender" },
  { id: "awards", label: "Awards" },
  { id: "plans", label: "Procurement Plans" },
  { id: "mdas", label: "MDAs" },
  { id: "vendors", label: "Vendors" },
];

const tenderData: TenderRow[] = [
  {
    id: "ABS/TME/2025/001",
    mda: "MINISTRY OF EDUCATION",
    title: "Classroom Renovation Project — Umuahia North LGA",
    startDate: "2025-01-15 08:00:00",
    closingDate: "2025-02-28 16:00:00",
    status: "Closed",
  },
  {
    id: "ABS/THD/2025/014",
    mda: "MINISTRY OF HEALTH",
    title: "Supply of Medical Equipment for Primary Health Centres",
    startDate: "2025-02-01 08:00:00",
    closingDate: "2025-03-15 16:00:00",
    status: "Closed",
  },
  {
    id: "ABS/TWR/2025/008",
    mda: "MINISTRY OF WORKS",
    title: "Aba–Umuahia Road Rehabilitation Phase II",
    startDate: "2025-03-10 08:00:00",
    closingDate: "2025-04-20 16:00:00",
    status: "Closed",
  },
  {
    id: "ABS/TAU/2025/022",
    mda: "ABIA STATE UNIVERSITY",
    title: "Construction of Faculty of Engineering Block",
    startDate: "2025-04-01 08:00:00",
    closingDate: "2025-05-15 16:00:00",
    status: "Open",
  },
  {
    id: "ABS/TAG/2025/005",
    mda: "MINISTRY OF AGRICULTURE",
    title: "Procurement of Fertilizer and Seeds for 2025 Farming Season",
    startDate: "2025-04-15 08:00:00",
    closingDate: "2025-05-30 16:00:00",
    status: "Open",
  },
  {
    id: "ABS/TWS/2025/011",
    mda: "ABIA WATER BOARD",
    title: "Borehole Drilling and Water Reticulation — Ohafia LGA",
    startDate: "2025-05-01 08:00:00",
    closingDate: "2025-06-10 16:00:00",
    status: "Closed",
  },
];

const awardData: AwardRow[] = [
  {
    id: "AWD/ABS/2025/001",
    mda: "MINISTRY OF EDUCATION",
    projectTitle: "Renovation of Model Secondary School, Aba",
    vendor: "Chukwu & Sons Construction Ltd",
    awardDate: "2025-01-20",
    value: "₦185,000,000",
  },
  {
    id: "AWD/ABS/2025/002",
    mda: "MINISTRY OF HEALTH",
    projectTitle: "Supply of Laboratory Reagents",
    vendor: "MedEquip Nigeria Ltd",
    awardDate: "2025-02-14",
    value: "₦42,500,000",
  },
  {
    id: "AWD/ABS/2025/003",
    mda: "MINISTRY OF WORKS",
    projectTitle: "Bridge Repair — Isuikwuato",
    vendor: "Eastern Infrastructure Co.",
    awardDate: "2025-03-05",
    value: "₦320,000,000",
  },
  {
    id: "AWD/ABS/2025/004",
    mda: "MINISTRY OF AGRICULTURE",
    projectTitle: "Tractor Hire Services Programme",
    vendor: "AgroTech Solutions Ltd",
    awardDate: "2025-03-22",
    value: "₦78,000,000",
  },
  {
    id: "AWD/ABS/2025/005",
    mda: "ABIA STATE HOUSING CORP.",
    projectTitle: "Low-Cost Housing Estate — Osisioma",
    vendor: "BuildRight Nigeria Plc",
    awardDate: "2025-04-10",
    value: "₦450,000,000",
  },
  {
    id: "AWD/ABS/2025/006",
    mda: "MINISTRY OF ENVIRONMENT",
    projectTitle: "Waste Management Equipment Procurement",
    vendor: "CleanAbia Services Ltd",
    awardDate: "2025-04-28",
    value: "₦56,750,000",
  },
];

const planData: PlanRow[] = [
  {
    id: "PLN/ABS/2025/001",
    mda: "MINISTRY OF EDUCATION",
    description: "Renovation of 50 public schools across the state",
    category: "Works",
    estimatedValue: "₦2,500,000,000",
    quarter: "Q1–Q2",
  },
  {
    id: "PLN/ABS/2025/002",
    mda: "MINISTRY OF HEALTH",
    description: "Upgrade of diagnostic equipment at general hospitals",
    category: "Goods",
    estimatedValue: "₦800,000,000",
    quarter: "Q1",
  },
  {
    id: "PLN/ABS/2025/003",
    mda: "MINISTRY OF WORKS",
    description: "Rural road construction and maintenance programme",
    category: "Works",
    estimatedValue: "₦5,000,000,000",
    quarter: "Q1–Q4",
  },
  {
    id: "PLN/ABS/2025/004",
    mda: "MINISTRY OF AGRICULTURE",
    description: "Agricultural extension and training services",
    category: "Services",
    estimatedValue: "₦350,000,000",
    quarter: "Q2–Q3",
  },
  {
    id: "PLN/ABS/2025/005",
    mda: "ABIA STATE UNIVERSITY",
    description: "ICT infrastructure upgrade for campus network",
    category: "Goods",
    estimatedValue: "₦620,000,000",
    quarter: "Q2",
  },
  {
    id: "PLN/ABS/2025/006",
    mda: "MINISTRY OF JUSTICE",
    description: "Legal advisory and consultancy services",
    category: "Services",
    estimatedValue: "₦120,000,000",
    quarter: "Q3–Q4",
  },
];

const mdaData: MdaRow[] = [
  { name: "Ministry of Education", code: "MOE-ABS" },
  { name: "Ministry of Health", code: "MOH-ABS" },
  { name: "Ministry of Works & Infrastructure", code: "MOW-ABS" },
  { name: "Ministry of Agriculture", code: "MOA-ABS" },
  { name: "Ministry of Finance", code: "MOF-ABS" },
  { name: "Abia State University", code: "ABSU" },
];

const vendorData: VendorRow[] = [
  {
    name: "Chukwu & Sons Construction Ltd",
    registrationNo: "RC-458921",
    category: "Works",
    status: "Active",
  },
  {
    name: "MedEquip Nigeria Ltd",
    registrationNo: "RC-782340",
    category: "Goods",
    status: "Active",
  },
  {
    name: "Eastern Infrastructure Co.",
    registrationNo: "RC-334567",
    category: "Works",
    status: "Active",
  },
  {
    name: "AgroTech Solutions Ltd",
    registrationNo: "RC-901234",
    category: "Services",
    status: "Active",
  },
  {
    name: "BuildRight Nigeria Plc",
    registrationNo: "RC-112890",
    category: "Works",
    status: "Suspended",
  },
  {
    name: "CleanAbia Services Ltd",
    registrationNo: "RC-667123",
    category: "Services",
    status: "Active",
  },
];

const badgeLabels: Record<TabId, string> = {
  tender: "TENDER ADVERTISEMENT",
  awards: "AWARD PUBLICATIONS",
  plans: "PROCUREMENT PLANS",
  mdas: "MINISTRIES & AGENCIES",
  vendors: "REGISTERED VENDORS",
};

const searchPlaceholders: Record<TabId, string> = {
  tender: "Search Tender...",
  awards: "Search Awards...",
  plans: "Search Plans...",
  mdas: "Search MDAs...",
  vendors: "Search Vendors...",
};

function StatusBadge({ status }: { status: "Closed" | "Open" }) {
  const isClosed = status === "Closed";
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold text-white ${
        isClosed ? "bg-red-600" : "bg-green-600"
      }`}
    >
      {status}
    </span>
  );
}

function VendorStatusBadge({ status }: { status: "Active" | "Suspended" }) {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold text-white ${
        isActive ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function ProcurementTable() {
  const [activeTab, setActiveTab] = useState<TabId>("tender");
  const [search, setSearch] = useState("");

  const dataCounts: Record<TabId, number> = {
    tender: tenderData.length,
    awards: awardData.length,
    plans: planData.length,
    mdas: mdaData.length,
    vendors: vendorData.length,
  };

  const filteredTenders = tenderData.filter(
    (row) =>
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.mda.toLowerCase().includes(search.toLowerCase()) ||
      row.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredAwards = awardData.filter(
    (row) =>
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.mda.toLowerCase().includes(search.toLowerCase()) ||
      row.projectTitle.toLowerCase().includes(search.toLowerCase()) ||
      row.vendor.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredPlans = planData.filter(
    (row) =>
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.mda.toLowerCase().includes(search.toLowerCase()) ||
      row.description.toLowerCase().includes(search.toLowerCase()) ||
      row.category.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredMdas = mdaData.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.code.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredVendors = vendorData.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.registrationNo.toLowerCase().includes(search.toLowerCase()) ||
      row.category.toLowerCase().includes(search.toLowerCase()),
  );

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    setSearch("");
  };

  return (
    <section id="procurement" className="bg-[var(--white)] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-3 text-sm font-semibold sm:px-6 sm:text-base ${
                activeTab === tab.id
                  ? "border border-gray-200 border-b-0 bg-[var(--white)] text-[var(--black)] shadow-sm"
                  : "bg-[var(--wine)] text-[var(--white)] hover:bg-[var(--wine-dark)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="border border-gray-200 bg-[var(--white)] p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-block w-fit rounded-full bg-gray-200 px-4 py-1.5 text-xs font-bold tracking-wide text-[var(--black)] sm:text-sm">
              {badgeLabels[activeTab]} ({dataCounts[activeTab]})
            </span>
            <input
              type="text"
              placeholder={searchPlaceholders[activeTab]}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm sm:max-w-xs"
            />
          </div>

          <div className="overflow-x-auto">
            {activeTab === "tender" && (
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--wine)] text-left text-[var(--white)]">
                    <th className="px-4 py-3 font-semibold">Tender ID</th>
                    <th className="px-4 py-3 font-semibold">MDA</th>
                    <th className="px-4 py-3 font-semibold">Tender Title</th>
                    <th className="px-4 py-3 font-semibold">Start Date</th>
                    <th className="px-4 py-3 font-semibold">Closing Date</th>
                    <th className="px-4 py-3 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTenders.map((row, i) => (
                    <tr
                      key={row.id}
                      className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--gray-light)]"}
                    >
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:underline">
                          {row.id}
                        </a>
                      </td>
                      <td className="px-4 py-3">{row.mda}</td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:underline">
                          {row.title}
                        </a>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.startDate}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.closingDate}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "awards" && (
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--wine)] text-left text-[var(--white)]">
                    <th className="px-4 py-3 font-semibold">Award ID</th>
                    <th className="px-4 py-3 font-semibold">MDA</th>
                    <th className="px-4 py-3 font-semibold">Project Title</th>
                    <th className="px-4 py-3 font-semibold">Vendor</th>
                    <th className="px-4 py-3 font-semibold">Award Date</th>
                    <th className="px-4 py-3 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAwards.map((row, i) => (
                    <tr
                      key={row.id}
                      className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--gray-light)]"}
                    >
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:underline">
                          {row.id}
                        </a>
                      </td>
                      <td className="px-4 py-3">{row.mda}</td>
                      <td className="px-4 py-3">{row.projectTitle}</td>
                      <td className="px-4 py-3">{row.vendor}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.awardDate}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "plans" && (
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--wine)] text-left text-[var(--white)]">
                    <th className="px-4 py-3 font-semibold">Plan ID</th>
                    <th className="px-4 py-3 font-semibold">MDA</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Estimated Value</th>
                    <th className="px-4 py-3 font-semibold">Quarter</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlans.map((row, i) => (
                    <tr
                      key={row.id}
                      className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--gray-light)]"}
                    >
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:underline">
                          {row.id}
                        </a>
                      </td>
                      <td className="px-4 py-3">{row.mda}</td>
                      <td className="px-4 py-3">{row.description}</td>
                      <td className="px-4 py-3">{row.category}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.estimatedValue}</td>
                      <td className="px-4 py-3">{row.quarter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "mdas" && (
              <table className="w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--wine)] text-left text-[var(--white)]">
                    <th className="px-4 py-3 font-semibold">Ministry / Agency</th>
                    <th className="px-4 py-3 font-semibold">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMdas.map((row, i) => (
                    <tr
                      key={row.code}
                      className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--gray-light)]"}
                    >
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3 font-mono">{row.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "vendors" && (
              <table className="w-full min-w-[700px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--wine)] text-left text-[var(--white)]">
                    <th className="px-4 py-3 font-semibold">Vendor Name</th>
                    <th className="px-4 py-3 font-semibold">Registration No</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVendors.map((row, i) => (
                    <tr
                      key={row.registrationNo}
                      className={i % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--gray-light)]"}
                    >
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3 font-mono">{row.registrationNo}</td>
                      <td className="px-4 py-3">{row.category}</td>
                      <td className="px-4 py-3">
                        <VendorStatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {activeTab === "tender" && (
            <div className="mt-6 text-center">
              <button
                type="button"
                className="rounded border-2 border-[var(--wine)] px-6 py-2.5 text-sm font-semibold text-[var(--wine)] hover:bg-[var(--wine)] hover:text-[var(--white)]"
              >
                VIEW MORE TENDER ADVERTS
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
