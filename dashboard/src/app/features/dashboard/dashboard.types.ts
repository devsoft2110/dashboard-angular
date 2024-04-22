export interface ChartType {
  value: number;
  label: string;
}

export const ChartTypes: ChartType[] = [
  {
    value: 1,
    label: 'Bar Chart',
  },
  {
    value: 2,
    label: 'Line Chart',
  },
  {
    value: 3,
    label: 'Pie Chart',
  },
  {
    value: 4,
    label: 'Doughnut Chart',
  },
];
