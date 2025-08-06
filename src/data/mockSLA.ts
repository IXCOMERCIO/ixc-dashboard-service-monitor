import type { SLA } from '../components/interfaces/DashboardInterfaces';

export const mockSLAs: SLA[] = [
  {
    name: "Azure",
    uptime: 99.9,
    target: 99.9
  },
  {
    name: "Yuno",
    uptime: 99.9,
    target: 99.9
  },
  {
    name: "Mienvio",
    uptime: 99.5,
    target: 99.5
  },
  {
    name: "IWS",
    uptime: 98.5,
    target: 99.0
  },
  {
    name: "Netsuite",
    uptime: 55.4,
    target: 99.5
  }
]; 