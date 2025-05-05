export type Status = "Healthy" | "Critical" | "Warning";

export interface SubService {
  id: string;
  name: string;
  status: "online" | "degraded" | "offline";
  responseTime: number;
}

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  status: Status;
  services: string;
  responseTime: string;
  subservices: SubService[];
}

function createServiceCard(base: {
  id: string;
  title: string;
  description: string;
  status: Status;
  subservices: SubService[];
}): ServiceCardData {
  const onlineCount = base.subservices.filter(s => s.status === "online").length;
  const totalCount = base.subservices.length;

  const avgResponseTime =
    totalCount > 0
      ? Math.round(
          base.subservices.reduce((sum, s) => sum + s.responseTime, 0) / totalCount
        )
      : 0;

  return {
    ...base,
    services: `${onlineCount}/${totalCount} Online`,
    responseTime: `${avgResponseTime} ms`,
  };
}

// 🔧 Subservicios (simulan el futuro response del backend)
const paymentSubservices: SubService[] = [
  { id: "sub-1", name: "Auth Service", status: "online", responseTime: 170 },
  { id: "sub-2", name: "Payment Gateway", status: "online", responseTime: 190 },
  { id: "sub-3", name: "Fraud Detection", status: "degraded", responseTime: 310 },
  { id: "sub-4", name: "Transaction Processor", status: "online", responseTime: 160 },
  { id: "sub-5", name: "Notification Service", status: "offline", responseTime: 0 },
  { id: "sub-6", name: "Settlement Service", status: "online", responseTime: 200 },
  { id: "sub-7", name: "Refund Processor", status: "online", responseTime: 180 },
  { id: "sub-8", name: "Refund 1 Processor", status: "online", responseTime: 180 },
  { id: "sub-9", name: "Refund2 Processor", status: "online", responseTime: 180 },
];

const analyticsSubservices: SubService[] = [
  { id: "sub-1", name: "Data Ingestion", status: "offline", responseTime: 0 },
  { id: "sub-2", name: "ETL Pipeline", status: "offline", responseTime: 0 },
  { id: "sub-3", name: "Data Warehouse", status: "degraded", responseTime: 900 },
  { id: "sub-4", name: "Visualization Service", status: "online", responseTime: 400 },
  { id: "sub-5", name: "Reporting Engine", status: "online", responseTime: 350 },
];

const logisticsSubservices: SubService[] = [
  { id: "sub-1", name: "Route Planner", status: "online", responseTime: 250 },
  { id: "sub-2", name: "Shipment Tracker", status: "online", responseTime: 260 },
  { id: "sub-3", name: "Delivery Optimizer", status: "online", responseTime: 270 },
  { id: "sub-4", name: "Warehouse Manager", status: "offline", responseTime: 0 },
  { id: "sub-5", name: "Inventory Checker", status: "offline", responseTime: 0 },
  { id: "sub-6", name: "Fleet Manager", status: "degraded", responseTime: 500 },
  { id: "sub-7", name: "Order Processor", status: "online", responseTime: 220 },
  { id: "sub-8", name: "Supplier Portal", status: "online", responseTime: 240 },
  { id: "sub-9", name: "Delivery Scheduler", status: "online", responseTime: 230 },
];

const portalSubservices: SubService[] = [
  { id: "sub-1", name: "Login Service", status: "online", responseTime: 290 },
  { id: "sub-2", name: "Profile Manager", status: "online", responseTime: 300 },
  { id: "sub-3", name: "Content Delivery", status: "online", responseTime: 280 },
  { id: "sub-4", name: "Notification Center", status: "degraded", responseTime: 420 },
  { id: "sub-5", name: "Search Engine", status: "online", responseTime: 310 },
  { id: "sub-6", name: "Help Center", status: "online", responseTime: 270 },
  { id: "sub-7", name: "Feedback Collector", status: "degraded", responseTime: 400 },
  { id: "sub-8", name: "Analytics Dashboard", status: "offline", responseTime: 0 },
  { id: "sub-9", name: "User Activity Tracker", status: "online", responseTime: 320 },
];

// 🧱 Tarjetas finales
export const paymentCards: ServiceCardData[] = [
  createServiceCard({
    id: "payments-project",
    title: "Payment Services",
    description: "Core payment processing infrastructure and authentication services.",
    status: "Healthy",
    subservices: paymentSubservices,
  }),
  createServiceCard({
    id: "analytics-platform",
    title: "Analytics Platform",
    description: "Data processing and BI services.",
    status: "Critical",
    subservices: analyticsSubservices,
  }),
  createServiceCard({
    id: "fraud-detection",
    title: "Fraud Detection",
    description: "Real-time fraud prevention and monitoring services.",
    status: "Warning",
    subservices: [
      { id: "sub-1", name: "Rule Engine", status: "online", responseTime: 180 },
      { id: "sub-2", name: "Anomaly Detector", status: "online", responseTime: 200 },
      { id: "sub-3", name: "Alert System", status: "degraded", responseTime: 400 },
      { id: "sub-4", name: "Logging Service", status: "offline", responseTime: 0 },
      { id: "sub-5", name: "Audit Trail", status: "online", responseTime: 220 },
    ],
  }),
  createServiceCard({
    id: "billing-system",
    title: "Billing System",
    description: "Automated billing and invoicing platform.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "Invoice Generator", status: "online", responseTime: 150 },
      { id: "sub-2", name: "Payment Reconciliation", status: "online", responseTime: 140 },
      { id: "sub-3", name: "Tax Calculator", status: "online", responseTime: 160 },
      { id: "sub-4", name: "Customer Ledger", status: "online", responseTime: 170 },
    ],
  }),
  createServiceCard({
    id: "refund-system",
    title: "Refund System",
    description: "Handles customer refunds and adjustments.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "Refund Processor", status: "online", responseTime: 180 },
      { id: "sub-2", name: "Adjustment Manager", status: "online", responseTime: 190 },
      { id: "sub-3", name: "Dispute Resolver", status: "degraded", responseTime: 300 },
    ],
  }),
];

export const logisticsCards: ServiceCardData[] = [
  createServiceCard({
    id: "logistics-platform",
    title: "Logistics Platform",
    description: "Shipping coordination services across regions.",
    status: "Warning",
    subservices: logisticsSubservices,
  }),
  createServiceCard({
    id: "warehouse-automation",
    title: "Warehouse Automation",
    description: "Automated systems for warehouse operations.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "Robot Picker", status: "online", responseTime: 200 },
      { id: "sub-2", name: "Conveyor System", status: "online", responseTime: 210 },
      { id: "sub-3", name: "Inventory Scanner", status: "online", responseTime: 190 },
      { id: "sub-4", name: "Packing Station", status: "degraded", responseTime: 300 },
    ],
  }),
  createServiceCard({
    id: "delivery-scheduling",
    title: "Delivery Scheduling",
    description: "Optimized delivery route planning.",
    status: "Warning",
    subservices: [
      { id: "sub-1", name: "Route Optimizer", status: "online", responseTime: 250 },
      { id: "sub-2", name: "Delivery Tracker", status: "online", responseTime: 260 },
      { id: "sub-3", name: "Fleet Manager", status: "degraded", responseTime: 500 },
    ],
  }),
  createServiceCard({
    id: "supplier-management",
    title: "Supplier Management",
    description: "Tools for managing supplier relationships.",
    status: "Critical",
    subservices: [
      { id: "sub-1", name: "Supplier Portal", status: "online", responseTime: 240 },
      { id: "sub-2", name: "Order Processor", status: "online", responseTime: 220 },
    ],
  }),
  createServiceCard({
    id: "inventory-management",
    title: "Inventory Management",
    description: "Real-time inventory tracking and updates.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "Stock Checker", status: "online", responseTime: 200 },
      { id: "sub-2", name: "Reorder Manager", status: "online", responseTime: 210 },
    ],
  }),
  createServiceCard({
    id: "fleet-tracking",
    title: "Fleet Tracking",
    description: "GPS tracking for delivery vehicles.",
    status: "Critical",
    subservices: [
      { id: "sub-1", name: "Vehicle Tracker", status: "online", responseTime: 300 },
      { id: "sub-2", name: "Route Planner", status: "degraded", responseTime: 400 },
    ],
  }),
];

export const portalCards: ServiceCardData[] = [
  createServiceCard({
    id: "customer-portal",
    title: "Customer Portal",
    description: "Web applications and content delivery for end users.",
    status: "Warning",
    subservices: portalSubservices,
  }),
  createServiceCard({
    id: "admin-dashboard",
    title: "Admin Dashboard",
    description: "Internal tools for managing operations.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "User Manager", status: "online", responseTime: 150 },
      { id: "sub-2", name: "Role Manager", status: "online", responseTime: 140 },
    ],
  }),
  createServiceCard({
    id: "support-center",
    title: "Support Center",
    description: "Customer support and ticketing system.",
    status: "Critical",
    subservices: [
      { id: "sub-1", name: "Ticket Manager", status: "online", responseTime: 300 },
      { id: "sub-2", name: "Knowledge Base", status: "degraded", responseTime: 400 },
    ],
  }),
  createServiceCard({
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Data visualization and reporting tools.",
    status: "Healthy",
    subservices: [
      { id: "sub-1", name: "Report Generator", status: "online", responseTime: 200 },
      { id: "sub-2", name: "Data Exporter", status: "online", responseTime: 210 },
    ],
  }),
];
