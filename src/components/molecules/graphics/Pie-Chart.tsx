import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export interface PieChartData {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: PieChartData[];
  colors?: string[]; // Permite usar colores personalizados
}

const DEFAULT_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12px"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartComponent: React.FC<PieChartComponentProps> = ({
  data,
  colors = DEFAULT_COLORS,
}) => {
  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;

  return (
    <div className="flex flex-col items-center w-full">
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="70%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {/* Tooltip añadido para mostrar detalles al pasar sobre el gráfico */}
          <Tooltip
            formatter={(value: number, name: string) => [`${name}: ${value}`]}
            labelFormatter={(name: string) => `${name}`}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Leyenda personalizada */}
      <div className="flex flex-wrap justify-center mt-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center mx-2">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: colors[index % colors.length] }}
            ></div>
            <span className="text-sm font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
