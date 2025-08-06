export interface ServiceState {
  online: number;
  offline: number;
  averageResponseTime: number;
}

export interface Service {
  title: string;
  description: string;
  overallStatus: { status: string };
  serviceState: ServiceState;
}

export interface SubServiceConnection {
  name: string;
  status: string;
  executionTime: string;
  message: string;
}

export interface SubService {
  name: string;
  status: string;
  executionTime: string;
  disponibility: string;
  message: string;
  connections?: SubServiceConnection[];
}

export interface SLA {
  name: string;
  uptime: number;
  target: number;
}

export interface DashboardData {
  payments: Record<string, Service>;
  logistic: Record<string, Service>;
  consumer: Record<string, Service>;
}