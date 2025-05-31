export interface EventItem {
  year: number;
  title: string;
  description: string;
}

export interface Category {
  label: string;
  events: EventItem[];
}
