export interface ProjectStatistics {
  team: string;
  project: string;
  totalRecords: number;
  statistics: {
    availabilityPercentage: number;
    averageResponseTime: number;
    totalServices: number;
    uptimeServices: number;
  };
}

export const projectStatistics: ProjectStatistics[] = [
  {
    team: "consumer",
    project: "portal",
    totalRecords: 23,
    statistics: {
      availabilityPercentage: 93.48,
      averageResponseTime: 516.43,
      totalServices: 138,
      uptimeServices: 129,
    },
  },
  {
    team: "payments",
    project: "orchestrator",
    totalRecords: 2,
    statistics: {
      availabilityPercentage: 91.02,
      averageResponseTime: 601.77,
      totalServices: 142,
      uptimeServices: 129,
    },
  },
  {
    team: "logistics",
    project: "logistics-platform",
    totalRecords: 15,
    statistics: {
      availabilityPercentage: 97.12,
      averageResponseTime: 412.21,
      totalServices: 88,
      uptimeServices: 85,
    },
  },
];

export interface ProjectError {
  team: string;
  project: string;
  data: {
    serviceName: string;
    status: number;
    executionTime: string;
    errorMessage: string;
    date: string;
  }[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export const projectErrors: ProjectError[] = [
  {
    team: "payments",
    project: "orchestrator",
    data: [
      {
        serviceName: "acl-payment",
        status: 404,
        executionTime: "UNKNOWN",
        errorMessage: "AxiosError: Request failed with status code 404...",
        date: "2025-06-17T16:25:02.178Z",
      },
      {
        serviceName: "acl-payment",
        status: 404,
        executionTime: "UNKNOWN",
        errorMessage: "AxiosError: Request failed with status code 404...",
        date: "2025-06-17T16:25:02.178Z",
      },
    ],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalRecords: 2,
      limit: 20,
      hasNextPage: false,
      hasPrevPage: false,
    },
  },
  {
    team: "consumer",
    project: "portal",
    data: [
      {
        serviceName: "user-dashboard",
        status: 500,
        executionTime: "UNKNOWN",
        errorMessage: "TypeError: Cannot read property 'user' of undefined...",
        date: "2025-06-17T15:10:12.178Z",
      },
    ],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalRecords: 1,
      limit: 20,
      hasNextPage: false,
      hasPrevPage: false,
    },
  },
  {
    team: "logistics",
    project: "logistics-platform",
    data: [
      {
        serviceName: "carrier-manager",
        status: 503,
        executionTime: "UNKNOWN",
        errorMessage: "ServiceUnavailableError: Carrier API not responding...",
        date: "2025-06-17T14:05:22.178Z",
      },
    ],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalRecords: 1,
      limit: 20,
      hasNextPage: false,
      hasPrevPage: false,
    },
  },
];