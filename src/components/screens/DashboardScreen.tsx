import DashboardTemplate from "../templates/DashBoardTemplate";
import { useState, useEffect, ReactElement } from "react";
import { BadgeDollarSign, Apple, Activity, Ticket } from "lucide-react";

// Define the card data interface
interface CardData {
  title: string;
  value: string | number;
  description: string;
  icon: ReactElement;
}

const dataProducts = [
    { name: "Jugo de mango natural", total: 32 },
    { name: "Mermelada de fresa", total: 17 },
    { name: "Compota de manzana", total: 25 },
    { name: "Trozos de piña enlatados", total: 41 },
    { name: "Smoothie de frutos rojos", total: 29 },
    { name: "Banano deshidratado", total: 13 },    
  ];

  const dataProcess = [
    { name: "Operando", value: 10 },
    { name: "Enviado", value: 20 },
    { name: "Entregado", value: 30 },
];

const dataLineProducts = [
    { name: 'Ene', "Jugo de mango natural": 21, "Mermelada de fresa": 17, "Compota de manzana": 31, "Trozos de piña enlatados": 43, "Smoothie de frutos rojos": 28, "Banano deshidratado": 15 },
    { name: 'Feb', "Jugo de mango natural": 19, "Mermelada de fresa": 8, "Compota de manzana": 24, "Trozos de piña enlatados": 49, "Smoothie de frutos rojos": 35, "Banano deshidratado": 10 },
    { name: 'Mar', "Jugo de mango natural": 42, "Mermelada de fresa": 30, "Compota de manzana": 9, "Trozos de piña enlatados": 16, "Smoothie de frutos rojos": 23, "Banano deshidratado": 5 },
    { name: 'Abr', "Jugo de mango natural": 36, "Mermelada de fresa": 18, "Compota de manzana": 33, "Trozos de piña enlatados": 28, "Smoothie de frutos rojos": 40, "Banano deshidratado": 2 },
    { name: 'May', "Jugo de mango natural": 28, "Mermelada de fresa": 12, "Compota de manzana": 21, "Trozos de piña enlatados": 44, "Smoothie de frutos rojos": 38, "Banano deshidratado": 9 },
    { name: 'Jun', "Jugo de mango natural": 13, "Mermelada de fresa": 22, "Compota de manzana": 18, "Trozos de piña enlatados": 17, "Smoothie de frutos rojos": 49, "Banano deshidratado": 7 },
    { name: 'Jul', "Jugo de mango natural": 30, "Mermelada de fresa": 25, "Compota de manzana": 27, "Trozos de piña enlatados": 40, "Smoothie de frutos rojos": 37, "Banano deshidratado": 11 },
  ];
  

export default function DashboardScreen() {
  // Use state with proper type definition
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  // Generate random values within specific ranges
  useEffect(() => {
    // Generate random total sales between $10,000 and $100,000
    const totalSales = (Math.random() * 90000 + 10000).toFixed(2);
    
    // Fixed number of products sold
    const productsSold = 1247;
    
    // Generate random average order value between $50 and $200
    const avgOrderValue = (Math.random() * 150 + 50).toFixed(2);
    
    // Generate random conversion rate between 2% and 8%
    const conversionRate = (Math.random() * 6 + 2).toFixed(1);
    
    // Calculate random percentage changes as numbers first
    const salesGrowthNum = (Math.random() * 40 - 10);
    const productGrowthNum = (Math.random() * 30 - 5);
    const avgOrderGrowthNum = (Math.random() * 25 - 5);
    const conversionGrowthNum = (Math.random() * 15 - 3);
    
    // Format them as strings after the comparison
    const salesGrowth = salesGrowthNum.toFixed(1);
    const productGrowth = productGrowthNum.toFixed(1);
    const avgOrderGrowth = avgOrderGrowthNum.toFixed(1);
    const conversionGrowth = conversionGrowthNum.toFixed(1);
    
    const dashboardData: CardData[] = [
      {
        title: "Ventas Totales",
        value: `$${totalSales}`,
        description: `${salesGrowthNum > 0 ? '+' : ''}${salesGrowth}% desde el mes pasado`,
        icon: <BadgeDollarSign className="h-8 w-8 text-muted-foreground" />,
      },
      {
        title: "Productos Vendidos",
        value: productsSold,
        description: `${productGrowthNum > 0 ? '+' : ''}${productGrowth}% desde el mes pasado`,
        icon:  <Apple className="h-8 w-8 text-muted-foreground" />,

      },
      {
        title: "Valor Promedio de Pedido",
        value: `$${avgOrderValue}`,
        description: `${avgOrderGrowthNum > 0 ? '+' : ''}${avgOrderGrowth}% desde el mes pasado`,
        icon: <Activity className="h-8 w-8 text-muted-foreground" />,
      },
      {
        title: "Tasa de Conversión",
        value: `${conversionRate}%`,
        description: `${conversionGrowthNum > 0 ? '+' : ''}${conversionGrowth}% desde el mes pasado`,
        icon: <Ticket className="h-8 w-8 text-muted-foreground" />,
      },
    ];
    
    setCardsData(dashboardData);
  }, []);

  return <DashboardTemplate cardsData={cardsData} barChartData={dataProducts} pieChartData={dataProcess} lineChartData={dataLineProducts} />;
}