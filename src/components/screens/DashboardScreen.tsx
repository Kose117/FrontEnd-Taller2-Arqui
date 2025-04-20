import { useEffect, useMemo, useState } from 'react';
import { formatISO, startOfDay, subMonths } from 'date-fns';
import {
  ArrowUpRight,
  CalendarSync,
  CheckCircle,
  XCircle,
} from 'lucide-react';

import DashboardTemplate from '../templates/DashBoardTemplate';
import type { StatsCardProps } from '@/components/molecules/Stats-card';
import { useProductStatsStore } from '@/hooks/flux/useProductStatsStore';
import { useProductStatsActions } from '@/hooks/flux/useProductStatsActions';

export default function DashboardScreen() {
  // 1. Rango de fechas
  const [range, setRange] = useState({
    from: startOfDay(subMonths(new Date(), 1)),
    to: startOfDay(new Date()),
  });

  // 2. Suscripción al store y actions
  const { loading, data } = useProductStatsStore();
  const { loadStats } = useProductStatsActions();

  // 3. Cargar datos cada vez que cambie el rango
  useEffect(() => {
    loadStats(
      formatISO(range.from, { representation: 'date' }),
      formatISO(range.to, { representation: 'date' })
    );
  }, [range, loadStats]);

  // 4. Mapear datos del store → props de template
  const cardsData: StatsCardProps[] = useMemo(() => {
    if (!data) return [];

    const order = [
      data.cards.totalSales,
      data.cards.productsSold,
      data.cards.avgOrderValue,
      data.cards.deliveredOrders,
    ];
    const icons = [
      <CalendarSync className="h-4 w-4 text-muted-foreground" />,
      <CheckCircle className="h-4 w-4 text-green-500" />,
      <XCircle className="h-4 w-4 text-red-500" />,
      <ArrowUpRight className="h-4 w-4 text-blue-500" />,
    ] as const;

    return order.map((c, i) => {
      const diff = c.value - c.previousValue;
      const pct = c.previousValue
        ? Math.round((diff / c.previousValue) * 100 * 10) / 10
        : 0;
      return {
        title: c.title,
        value: i === 3
          ? `${c.value.toFixed(1)} %`
          : c.value.toLocaleString(),
        description: `${diff >= 0 ? '+' : ''}${pct}% vs mes anterior`,
        icon: icons[i],
      };
    });
  }, [data]);

  return (
    <DashboardTemplate
      cardsData={cardsData}
      barChartData={data?.barChartData ?? []}
      pieSeries={data?.pieSeries ?? []}
      lineSeries={data?.lineSeries ?? []}
      range={range}
      onRangeChange={setRange}
      loading={loading}
    />
  );
}
