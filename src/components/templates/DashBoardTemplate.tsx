import React from "react";
import { StatsGrid } from "@/components/organisms/Stats-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../atoms/ui/tabs";
import { BarChartComponent } from "../molecules/graphics/Bar-Chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../atoms/ui/card";
import { LineChartComponent } from "../molecules/graphics/Line-Chart";
import { PieChartComponent } from "../molecules/graphics/Pie-Chart";

export interface DashboardTemplateProps {
  cardsData: {
    title: string;
    value: string | number;
    description: string;
    icon?: React.ReactNode;
  }[];
  barChartData: {
    name: string;
    total: number;
  }[];
  pieChartData: {
    name: string;
    value: number;
  }[];
  lineChartData: {
    name: string;
    [key: string]: string | number;
  }[];
}

export default function DashboardTemplate({
  cardsData,
  barChartData,
  pieChartData,
  lineChartData,
}: DashboardTemplateProps) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="flex flex-wrap gap-2">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="analytics">Analítica</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <StatsGrid cards={cardsData} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-full lg:col-span-4">
              <CardHeader>
                <CardTitle>Productos vendidos en el tiempo</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChartComponent data={lineChartData}/>
              </CardContent>
            </Card>
            <Card className="col-span-full lg:col-span-3">
              <CardHeader>
                <CardTitle>Proceso de los productos</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={pieChartData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Total vendido por producto</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChartComponent data={barChartData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
