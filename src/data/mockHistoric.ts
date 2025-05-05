export type Status = "Healthy" | "Critical" | "Warning";

export interface SubServiceHistory {
  timestamp: string;
  status: "online" | "degraded" | "offline";
  responseTime: number;
}

export interface SubService {
  id: string;
  name: string;
  history: SubServiceHistory[];
}

export interface ServiceHistory {
  timestamp: string;
  status: Status;
  services: string;
  responseTime: string;
}

export interface ServiceCardHistoricData {
  id: string;
  title: string;
  description: string;
  history: ServiceHistory[];
  subservices: SubService[];
}

// Payment Services Historic Data
export const paymentCards: ServiceCardHistoricData[] = [
  {
    id: "payments-project",
    title: "Payment Services",
    description: "Core payment processing infrastructure and authentication services.",
    history: [
      { timestamp: "2024-04-01T10:00:00Z", status: "Healthy", services: "7/7 Online", responseTime: "351 ms" },
      { timestamp: "2024-04-01T11:00:00Z", status: "Critical", services: "6/7 Online", responseTime: "327 ms" },
      { timestamp: "2024-04-01T12:00:00Z", status: "Healthy", services: "5/7 Online", responseTime: "397 ms" },
    ],
    subservices: [
      {
        id: "sub-1",
        name: "Auth Service",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 189 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 197 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 191 },
        ],
      },
      {
        id: "sub-2",
        name: "Payment Gateway",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 151 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 134 },
          { timestamp: "2024-04-01T12:00:00Z", status: "degraded", responseTime: 391 },
        ],
      },
      {
        id: "sub-3",
        name: "Fraud Detection",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 146 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 366 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 146 },
        ],
      },
      {
        id: "sub-4",
        name: "Transaction Processor",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 183 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 379 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 187 },
        ],
      },
      {
        id: "sub-5",
        name: "Notification Service",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 374 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 360 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 178 },
        ],
      },
      {
        id: "sub-6",
        name: "Settlement Service",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 276 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 129 },
          { timestamp: "2024-04-01T12:00:00Z", status: "degraded", responseTime: 348 },
        ],
      },
      {
        id: "sub-7",
        name: "Refund Processor",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 114 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 166 },
          { timestamp: "2024-04-01T12:00:00Z", status: "offline", responseTime: 0 },
        ],
      },
    ],
  },
];

// Logistics Services Historic Data
export const logisticsCards: ServiceCardHistoricData[] = [
  {
    id: "logistics-project",
    title: "Logistics Platform",
    description: "Shipping coordination services and route optimization.",
    history: [
      { timestamp: "2024-04-01T10:00:00Z", status: "Healthy", services: "8/8 Online", responseTime: "251 ms" },
      { timestamp: "2024-04-01T11:00:00Z", status: "Warning", services: "8/8 Online", responseTime: "232 ms" },
      { timestamp: "2024-04-01T12:00:00Z", status: "Healthy", services: "7/8 Online", responseTime: "195 ms" },
    ],
    subservices: [
      {
        id: "sub-1",
        name: "Order Dispatcher",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 182 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 118 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 171 },
        ],
      },
      {
        id: "sub-2",
        name: "Carrier Manager",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "offline", responseTime: 0 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 293 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 196 },
        ],
      },
      {
        id: "sub-3",
        name: "Tracking Engine",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 132 },
          { timestamp: "2024-04-01T11:00:00Z", status: "offline", responseTime: 0 },
          { timestamp: "2024-04-01T12:00:00Z", status: "offline", responseTime: 0 },
        ],
      },
      {
        id: "sub-4",
        name: "Route Planner",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 345 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 179 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 171 },
        ],
      },
      {
        id: "sub-5",
        name: "Delivery Estimator",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 183 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 189 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 183 },
        ],
      },
      {
        id: "sub-6",
        name: "Returns Handler",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 125 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 122 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 127 },
        ],
      },
      {
        id: "sub-7",
        name: "Courier API",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 177 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 187 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 147 },
        ],
      },
      {
        id: "sub-8",
        name: "Warehouse Sync",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 148 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 117 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 177 },
        ],
      },
    ],
  },
];

// Portal Services Historic Data
export const portalCards: ServiceCardHistoricData[] = [
  {
    id: "portal-project",
    title: "Customer Portal",
    description: "Web apps and content delivery for users.",
    history: [
      { timestamp: "2024-04-01T10:00:00Z", status: "Warning", services: "8/9 Online", responseTime: "218 ms" },
      { timestamp: "2024-04-01T11:00:00Z", status: "Critical", services: "9/9 Online", responseTime: "192 ms" },
      { timestamp: "2024-04-01T12:00:00Z", status: "Warning", services: "7/9 Online", responseTime: "306 ms" },
    ],
    subservices: [
      {
        id: "sub-1",
        name: "User Dashboard",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 144 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 321 },
          { timestamp: "2024-04-01T12:00:00Z", status: "degraded", responseTime: 383 },
        ],
      },
      {
        id: "sub-2",
        name: "Login Module",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 265 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 342 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 148 },
        ],
      },
      {
        id: "sub-3",
        name: "Help Center",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 138 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 135 },
          { timestamp: "2024-04-01T12:00:00Z", status: "offline", responseTime: 0 },
        ],
      },
      {
        id: "sub-4",
        name: "Content Renderer",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 321 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 152 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 173 },
        ],
      },
      {
        id: "sub-5",
        name: "Settings Panel",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "offline", responseTime: 0 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 389 },
          { timestamp: "2024-04-01T12:00:00Z", status: "offline", responseTime: 0 },
        ],
      },
      {
        id: "sub-6",
        name: "Theme Manager",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 119 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 143 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 140 },
        ],
      },
      {
        id: "sub-7",
        name: "CDN Integration",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "degraded", responseTime: 265 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 192 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 104 },
        ],
      },
      {
        id: "sub-8",
        name: "Live Chat",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "online", responseTime: 141 },
          { timestamp: "2024-04-01T11:00:00Z", status: "degraded", responseTime: 391 },
          { timestamp: "2024-04-01T12:00:00Z", status: "online", responseTime: 126 },
        ],
      },
      {
        id: "sub-9",
        name: "Feedback Tool",
        history: [
          { timestamp: "2024-04-01T10:00:00Z", status: "offline", responseTime: 0 },
          { timestamp: "2024-04-01T11:00:00Z", status: "online", responseTime: 112 },
          { timestamp: "2024-04-01T12:00:00Z", status: "degraded", responseTime: 399 },
        ],
      },
    ],
  },
];

