"use client";

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const categoryData = [
  { name: "Goods", value: 40 },
  { name: "Works", value: 35 },
  { name: "Services", value: 25 },
];

const mdaData = [
  { name: "Education", value: 30 },
  { name: "Health", value: 25 },
  { name: "Infrastructure", value: 30 },
  { name: "Others", value: 15 },
];

const monthlyData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 85 },
  { month: "Mar", value: 210 },
  { month: "Apr", value: 175 },
  { month: "May", value: 290 },
  { month: "Jun", value: 155 },
  { month: "Jul", value: 230 },
  { month: "Aug", value: 195 },
  { month: "Sep", value: 260 },
  { month: "Oct", value: 145 },
  { month: "Nov", value: 180 },
  { month: "Dec", value: 75 },
];

const pieColors = ["#8B1A1A", "#1A2744", "#666666", "#C8962E"];

export default function StatisticsCharts() {
  return (
    <section className="bg-[var(--gray-light)] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-[var(--black)] sm:text-3xl">
          2025 Procurement Reports
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-[var(--white)] p-4 sm:p-6">
            <h3 className="mb-4 text-center text-sm font-semibold text-[var(--black)] sm:text-base">
              Contract by Procurement Category
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((_, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-lg border border-gray-200 bg-[var(--white)] p-4 sm:p-6">
            <h3 className="mb-4 text-center text-sm font-semibold text-[var(--black)] sm:text-base">
              Contract by MDA
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mdaData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {mdaData.map((_, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-[var(--white)] p-4 sm:p-6">
          <h3 className="mb-4 text-center text-sm font-semibold text-[var(--black)] sm:text-base">
            Monthly Contract Awards (2025)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis
                label={{
                  value: "NGN (Millions)",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 12 },
                }}
              />
              <Tooltip formatter={(value) => `₦${value}M`} />
              <Bar dataKey="value" fill="#8B1A1A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
