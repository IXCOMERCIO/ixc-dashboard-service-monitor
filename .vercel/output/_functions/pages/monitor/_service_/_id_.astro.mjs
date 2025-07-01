/* empty css                                      */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderTemplate, r as renderHead } from '../../../chunks/astro/server_B-rmeRGC.mjs';
import 'kleur/colors';
import { $ as $$StepBack } from '../../../chunks/StepBack_C_lve0_Q.mjs';
import { a as $$Icon, B as BASE_DASHBOARD_URL, $ as $$Header } from '../../../chunks/Icon_DPZ60xrg.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Handle, Position, ReactFlowProvider, ReactFlow, Background, Controls } from '@xyflow/react';
/* empty css                                      */
import 'react';
export { renderers } from '../../../renderers.mjs';

function CustomNode({ data }) {
  console.log("Data:", JSON.stringify(data, null, 2));
  const statusMap = {
    healthy: { label: "Healthy", icon: "🟢", class: "border-green-500" },
    critical: { label: "Critical", icon: "🔴", class: "border-red-500" },
    warning: { label: "Warning", icon: "⚠️", class: "border-yellow-500" }
  };
  const current = statusMap[data.status] || {
    label: "",
    icon: ""};
  return /* @__PURE__ */ jsxs("div", { className: `rounded-lg border-2 shadow-sm px-3 py-3 w-80 text-center text-sm relative `, children: [
    /* @__PURE__ */ jsx(Handle, { type: "target", position: Position.Left }),
    /* @__PURE__ */ jsx(Handle, { type: "source", position: Position.Right }),
    /* @__PURE__ */ jsx("div", { className: "font-semibold", children: data.name }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-1", children: /* @__PURE__ */ jsxs("div", { children: [
      current.icon,
      " ",
      current.label
    ] }) })
  ] });
}

function transformToDiagram(serviceData) {
  const nodes = [];
  const edges = [];
  const subservices = serviceData.services || {};
  const serviceKeys = Object.keys(subservices);
  const xGap = 400;
  const yGap = 220;
  const totalHeight = (serviceKeys.length - 1) * yGap;
  const rootId = "root";
  nodes.push({
    id: rootId,
    type: "custom",
    data: {
      name: serviceData.title,
      status: "online"
    },
    position: { x: 0, y: totalHeight / 2 },
    sourcePosition: "right"
  });
  serviceKeys.forEach((key, index) => {
    const svc = subservices[key];
    const subserviceId = key;
    const subserviceY = index * yGap;
    console.log("Dentro del node:", JSON.stringify(svc));
    nodes.push({
      id: subserviceId,
      type: "custom",
      data: {
        name: svc.serviceName,
        status: svc.overallStatus?.status || "unknown",
        description: `Disponibilidad: ${svc.disponibility || "N/A"}, Tiempo de ejecución: ${svc.executionTime || "N/A"}`
      },
      position: { x: xGap, y: subserviceY },
      targetPosition: "left",
      sourcePosition: "right"
    });
    edges.push({
      id: `edge-${rootId}-${subserviceId}`,
      source: rootId,
      target: subserviceId,
      type: "smoothstep"
    });
    if (svc.connections) {
      const connEntries = Object.entries(svc.connections);
      const baseX = xGap + 400;
      const baseY = subserviceY - (connEntries.length - 1) * 85 / 2;
      connEntries.forEach(([connKey, connSvc], connIndex) => {
        const connId = `${subserviceId}-${connKey}`;
        const connY = baseY + connIndex * 85;
        nodes.push({
          id: connId,
          type: "custom",
          data: {
            name: connSvc.serviceName,
            status: connSvc.overallStatus?.status || "unknown"
          },
          position: { x: baseX, y: connY },
          targetPosition: "left"
        });
        edges.push({
          id: `edge-${subserviceId}-${connId}`,
          source: subserviceId,
          target: connId,
          type: "smoothstep"
        });
      });
    }
  });
  return { nodes, edges };
}

function ArchitectureDiagram({ service }) {
  const { nodes, edges } = transformToDiagram(service);
  return /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "60vh" }, children: /* @__PURE__ */ jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxs(
    ReactFlow,
    {
      nodes,
      edges,
      fitView: true,
      fitViewOptions: { padding: 0.2 },
      nodeTypes: { custom: CustomNode },
      children: [
        /* @__PURE__ */ jsx(Background, {}),
        /* @__PURE__ */ jsx(Controls, {})
      ]
    }
  ) }) });
}

const nodes = [
  {
    id: "parent",
    position: { x: 300, y: 50 },
    data: { label: "Parent Node" },
    sourcePosition: "bottom"
  },
  {
    id: "child-1",
    position: { x: 100, y: 250 },
    data: { label: "Child 1" },
    targetPosition: "top"
  },
  {
    id: "child-2",
    position: { x: 300, y: 350 },
    data: { label: "Child 2" },
    targetPosition: "top"
  },
  {
    id: "child-3",
    position: { x: 400, y: 450 },
    data: { label: "Child 3" },
    targetPosition: "top"
  },
  {
    id: "child-4",
    position: { x: 500, y: 650 },
    data: { label: "Child 4" },
    targetPosition: "top"
  }
];
const edges = [
  { id: "e1", source: "parent", target: "child-1", type: "smoothstep" },
  { id: "e2", source: "child-1", target: "child-2", type: "smoothstep" },
  { id: "e3", source: "child-1", target: "child-3", type: "smoothstep" },
  { id: "e4", source: "child-3", target: "child-4", type: "smoothstep" }
];
function TestFlow() {
  return /* @__PURE__ */ jsx("div", { style: { width: "100%", height: 600 }, children: /* @__PURE__ */ jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxs(ReactFlow, { nodes, edges, fitView: true, children: [
    /* @__PURE__ */ jsx(Background, {}),
    /* @__PURE__ */ jsx(Controls, {})
  ] }) }) });
}

const $$Astro$2 = createAstro();
const $$ServiceStatus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceStatus;
  const { services, isDetail } = Astro2.props;
  console.log(
    "-------------------------Services----------------------:",
    services
  );
  const serviceList = Object.values(services.services);
  const onlineCount = serviceList.filter(
    (s) => s.overallStatus?.status === "healthy"
  ).length;
  const offlineCount = serviceList.filter(
    (s) => s.overallStatus?.status === "critical"
  ).length;
  const degradedCount = serviceList.filter(
    (s) => s.overallStatus?.status === "warning"
  ).length;
  console.log("Service List:", JSON.stringify(serviceList, null, 2));
  const avgResponseTime = services.serviceState.averageResponseTime ?? 0;
  return renderTemplate`${maybeRenderHead()}<div class="w-full mx-auto px-4 sm:px-6 mt-4 space-y-4" data-astro-cid-mke4odq4> <div class="grid grid-cols-1 xl:grid-cols-2 gap-6" data-astro-cid-mke4odq4> <!-- Columna izquierda --> <div class="flex flex-col gap-4 animate-fade-in" data-astro-cid-mke4odq4> <!-- Paneles de estado compactos --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" data-astro-cid-mke4odq4> <!-- Estado de servicios --> <div class="glass-effect rounded-xl shadow-lg p-4 border-l-4 border-blue-400" data-astro-cid-mke4odq4> <div class="flex items-center mb-3" data-astro-cid-mke4odq4> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3" data-astro-cid-mke4odq4> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mke4odq4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-mke4odq4></path> </svg> </div> <div data-astro-cid-mke4odq4> <h3 class="text-sm font-bold text-gray-800" data-astro-cid-mke4odq4>Estado de Servicios</h3> <p class="text-xs text-gray-500" data-astro-cid-mke4odq4>Resumen general</p> </div> </div> <div class="grid grid-cols-3 gap-2" data-astro-cid-mke4odq4> <div class="text-center p-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100" data-astro-cid-mke4odq4> <div class="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center" data-astro-cid-mke4odq4> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:check", "class": "w-4 h-4 text-white", "data-astro-cid-mke4odq4": true })} </div> <div class="text-xl font-bold text-green-700" data-astro-cid-mke4odq4>${onlineCount}</div> <div class="text-xs font-medium text-green-600 uppercase tracking-wider" data-astro-cid-mke4odq4>Online</div> </div> <div class="text-center p-2 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-100" data-astro-cid-mke4odq4> <div class="w-6 h-6 bg-yellow-500 rounded-full mx-auto mb-1 flex items-center justify-center" data-astro-cid-mke4odq4> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:exclamation", "class": "w-4 h-4 text-white", "data-astro-cid-mke4odq4": true })} </div> <div class="text-xl font-bold text-yellow-700" data-astro-cid-mke4odq4>${degradedCount}</div> <div class="text-xs font-medium text-yellow-600 uppercase tracking-wider" data-astro-cid-mke4odq4>Warning</div> </div> <div class="text-center p-2 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border border-red-100" data-astro-cid-mke4odq4> <div class="w-6 h-6 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center" data-astro-cid-mke4odq4> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:close", "class": "w-4 h-4 text-white", "data-astro-cid-mke4odq4": true })} </div> <div class="text-xl font-bold text-red-700" data-astro-cid-mke4odq4>${offlineCount}</div> <div class="text-xs font-medium text-red-600 uppercase tracking-wider" data-astro-cid-mke4odq4>Offline</div> </div> </div> </div> <!-- Tiempo de respuesta --> <div class="glass-effect rounded-xl shadow-lg p-4 border-l-4 border-purple-400" data-astro-cid-mke4odq4> <div class="flex items-center mb-3" data-astro-cid-mke4odq4> <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3" data-astro-cid-mke4odq4> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mke4odq4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-mke4odq4></path> </svg> </div> <div data-astro-cid-mke4odq4> <h3 class="text-sm font-bold text-gray-800" data-astro-cid-mke4odq4>Tiempo de Respuesta</h3> <p class="text-xs text-gray-500" data-astro-cid-mke4odq4>Promedio actual</p> </div> </div> <div class="text-center" data-astro-cid-mke4odq4> <div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1" data-astro-cid-mke4odq4> ${avgResponseTime} </div> <div class="text-sm font-medium text-gray-600" data-astro-cid-mke4odq4>milisegundos</div> <div class="mt-2 flex items-center justify-center" data-astro-cid-mke4odq4> <span class="status-dot w-2 h-2 bg-purple-500 rounded-full mr-2" data-astro-cid-mke4odq4></span> <span class="text-xs text-gray-500" data-astro-cid-mke4odq4>Tiempo óptimo</span> </div> </div> </div> </div> <!-- Lista de servicios compacta --> <div class="glass-effect rounded-xl shadow-lg p-4" data-astro-cid-mke4odq4> <div class="flex items-center mb-4" data-astro-cid-mke4odq4> <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-3" data-astro-cid-mke4odq4> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mke4odq4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-astro-cid-mke4odq4></path> </svg> </div> <div data-astro-cid-mke4odq4> <h3 class="text-sm font-bold text-gray-800" data-astro-cid-mke4odq4>Servicios Activos</h3> <p class="text-xs text-gray-500" data-astro-cid-mke4odq4>${serviceList.length} servicios monitoreados</p> </div> </div> <div class="rounded-lg border border-gray-100" data-astro-cid-mke4odq4> <table class="w-full text-sm" data-astro-cid-mke4odq4> <thead data-astro-cid-mke4odq4> <tr class="bg-gradient-to-r from-gray-50 to-gray-100" data-astro-cid-mke4odq4> <th class="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" data-astro-cid-mke4odq4>Estado</th> <th class="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" data-astro-cid-mke4odq4>Servicio</th> <th class="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" data-astro-cid-mke4odq4>Ejecución</th> <th class="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" data-astro-cid-mke4odq4>Disponibilidad</th> <th class="px-3 py-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" data-astro-cid-mke4odq4>Info</th> </tr> </thead> <tbody class="bg-white/50 divide-y divide-gray-100" data-astro-cid-mke4odq4> ${serviceList.map((s, index) => renderTemplate`<tr class="hover-row" data-astro-cid-mke4odq4> <td class="px-3 py-2" data-astro-cid-mke4odq4> <span${addAttribute(`status-dot w-3 h-3 rounded-full inline-block ${s.overallStatus?.status === "healthy" ? "bg-green-500" : s.overallStatus?.status === "warning" ? "bg-yellow-500" : "bg-red-500"}`, "class")}${addAttribute(s.overallStatus?.status, "title")} data-astro-cid-mke4odq4></span> </td> <td class="px-3 py-2" data-astro-cid-mke4odq4> <div class="font-medium text-gray-800 text-sm" data-astro-cid-mke4odq4>${s.serviceName}</div> <div class="text-xs text-gray-500" data-astro-cid-mke4odq4>Servicio #${index + 1}</div> </td> <td class="px-3 py-2" data-astro-cid-mke4odq4> <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700" data-astro-cid-mke4odq4> ${s.executionTime && s.executionTime !== "UNKNOWN" ? s.executionTime : "--"} </span> </td> <td class="px-3 py-2" data-astro-cid-mke4odq4> <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700" data-astro-cid-mke4odq4> ${s.disponibility && s.disponibility !== "UNKNOWN" ? s.disponibility : "--"} </span> </td> <td class="px-3 py-2" data-astro-cid-mke4odq4> ${s.status !== 200 && renderTemplate`<div class="relative group inline-block" data-astro-cid-mke4odq4> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:help", "class": "w-4 h-4 text-red-500 cursor-pointer", "data-astro-cid-mke4odq4": true })} <div class="absolute z-[99999999] hidden group-hover:block top-full mt-2 right-0 px-3 py-2 text-sm text-white bg-red-500 rounded shadow whitespace-normal max-w-md break-words transform translate-z-0" data-astro-cid-mke4odq4> <div class="mb-1" data-astro-cid-mke4odq4><span class="font-bold" data-astro-cid-mke4odq4>Código del error:</span> ${s.status || "N/A"}</div> <div data-astro-cid-mke4odq4>${s.response || "N/A"}</div> </div> </div>`} </td> </tr>`)} </tbody> </table> </div> </div> </div> <!-- Diagrama de Arquitectura compacto --> <div class="glass-effect rounded-xl shadow-lg p-4 animate-fade-in min-h-[400px]" style="animation-delay: 0.2s" data-astro-cid-mke4odq4> <div class="flex items-center mb-4" data-astro-cid-mke4odq4> <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3" data-astro-cid-mke4odq4> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mke4odq4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-mke4odq4></path> </svg> </div> <div data-astro-cid-mke4odq4> <h3 class="text-sm font-bold text-gray-800" data-astro-cid-mke4odq4> ${isDetail ? "Diagrama de Arquitectura" : "Flujo de Pruebas"} </h3> <p class="text-xs text-gray-500" data-astro-cid-mke4odq4> ${isDetail ? "Vista detallada del sistema" : "Esquema de testing"} </p> </div> </div> <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 min-h-[350px] flex items-center justify-center border border-gray-100" data-astro-cid-mke4odq4> ${isDetail ? renderTemplate`${renderComponent($$result, "ArchitectureDiagram", ArchitectureDiagram, { "client:visible": true, "service": services, "client:component-hydration": "visible", "client:component-path": "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/architecture/ArchitectureDiagram.jsx", "client:component-export": "default", "data-astro-cid-mke4odq4": true })}` : renderTemplate`${renderComponent($$result, "TestFlow", TestFlow, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/architecture/TestFlow.jsx", "client:component-export": "default", "data-astro-cid-mke4odq4": true })}`} </div> </div> </div> </div>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/services/ServiceStatus.astro", void 0);

const $$Astro$1 = createAstro();
const $$ServiceDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceDetail;
  const { serviceDetail } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <!-- Subservicios --> ${renderComponent($$result, "ServiceStatus", $$ServiceStatus, { "services": serviceDetail, "isDetail": true })} </div>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/services/ServiceDetail.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { service, id } = Astro2.params;
  if (!service || !id) {
    throw new Error("Los par\xE1metros 'service' o 'id' no est\xE1n definidos.");
  }
  const apiUrl = `${BASE_DASHBOARD_URL}/status/${service}/${id}`;
  let serviceDetail = null;
  let subservices = [];
  let isLoading = true;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${apiUrl}`);
    }
    const data = await res.json();
    if (!data[service]) {
      throw new Error(
        `No se encontr\xF3 el servicio '${service}' en la respuesta de la API.`
      );
    }
    serviceDetail = data[service]?.[id];
    if (!serviceDetail) {
      throw new Error(`No se encontr\xF3 el servicio '${id}' en '${service}'.`);
    }
    subservices = Object.values(serviceDetail.services || {}).map((svc) => ({
      name: svc.serviceName,
      status: svc.overallStatus.status,
      executionTime: svc.executionTime,
      disponibility: svc.disponibility,
      message: svc.overallStatus.message,
      connections: svc.connections ? Object.values(svc.connections).map((conn) => ({
        name: conn.serviceName,
        status: conn.overallStatus.status,
        executionTime: conn.executionTime,
        message: conn.overallStatus.message
      })) : []
    }));
    isLoading = false;
  } catch (error) {
    console.error("Error fetching service details:", error);
    isLoading = false;
  }
  return renderTemplate`<html lang="es" data-astro-cid-so6fhqti> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>
      ${isLoading ? "Cargando..." : serviceDetail?.title || "Error"} - Detalle de
      Servicio
    </title>${renderHead()}</head> <body class="bg-indigo-50 min-h-screen" data-astro-cid-so6fhqti> <!-- aqui va el headerrrrrr wolololo --> ${renderComponent($$result, "Header", $$Header, { "title": serviceDetail.title, "subtitle": "Detalle de Servicio", "isLoading": isLoading, "data-astro-cid-so6fhqti": true })} <div class="mx-auto px-4 sm:px-6 lg:px-8 py-2" data-astro-cid-so6fhqti> ${renderComponent($$result, "StepBack", $$StepBack, { "title": "Dashboard", "data-astro-cid-so6fhqti": true })} <!-- el contenido principal --> ${isLoading ? renderTemplate`<div class="space-y-6" data-astro-cid-so6fhqti> <div class="glass-effect rounded-2xl shadow-xl p-6 animate-fade-in" data-astro-cid-so6fhqti> <div class="flex items-center mb-6" data-astro-cid-so6fhqti> <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl mr-4 animate-pulse" data-astro-cid-so6fhqti></div> <div class="flex-1" data-astro-cid-so6fhqti> <div class="h-6 skeleton rounded-lg w-1/3 mb-2" data-astro-cid-so6fhqti></div> <div class="h-4 skeleton rounded w-1/2" data-astro-cid-so6fhqti></div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" data-astro-cid-so6fhqti> <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100" data-astro-cid-so6fhqti> <div class="h-12 skeleton rounded-lg mb-3" data-astro-cid-so6fhqti></div> <div class="h-4 skeleton rounded w-2/3" data-astro-cid-so6fhqti></div> </div> <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100" data-astro-cid-so6fhqti> <div class="h-12 skeleton rounded-lg mb-3" data-astro-cid-so6fhqti></div> <div class="h-4 skeleton rounded w-2/3" data-astro-cid-so6fhqti></div> </div> <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100" data-astro-cid-so6fhqti> <div class="h-12 skeleton rounded-lg mb-3" data-astro-cid-so6fhqti></div> <div class="h-4 skeleton rounded w-2/3" data-astro-cid-so6fhqti></div> </div> </div> <div class="h-64 skeleton rounded-xl" data-astro-cid-so6fhqti></div> </div> <div class="glass-effect rounded-2xl shadow-xl p-6 animate-fade-in" style="animation-delay: 0.2s" data-astro-cid-so6fhqti> <div class="h-6 skeleton rounded w-1/4 mb-4" data-astro-cid-so6fhqti></div> <div class="space-y-3" data-astro-cid-so6fhqti> <div class="h-12 skeleton rounded-lg" data-astro-cid-so6fhqti></div> <div class="h-12 skeleton rounded-lg" data-astro-cid-so6fhqti></div> <div class="h-12 skeleton rounded-lg" data-astro-cid-so6fhqti></div> </div> </div> </div>` : serviceDetail ? renderTemplate`<div class="animate-fade-in" data-astro-cid-so6fhqti> ${renderComponent($$result, "ServiceDetail", $$ServiceDetail, { "serviceDetail": serviceDetail, "subservices": subservices, "data-astro-cid-so6fhqti": true })} </div>` : renderTemplate`<div class="glass-effect rounded-2xl shadow-xl p-8 text-center animate-fade-in" data-astro-cid-so6fhqti> <div class="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center" data-astro-cid-so6fhqti> <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-so6fhqti> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-so6fhqti></path> </svg> </div> <h2 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-so6fhqti>
¡Ups! Algo salió mal
</h2> <p class="text-gray-600 mb-6 max-w-md mx-auto" data-astro-cid-so6fhqti>
No pudimos cargar la información del servicio. Por favor, verifica
              tu conexión e inténtalo nuevamente.
</p> <div class="flex flex-col sm:flex-row gap-3 justify-center" data-astro-cid-so6fhqti> <button onclick="location.reload()" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2" data-astro-cid-so6fhqti> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-so6fhqti> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-astro-cid-so6fhqti></path> </svg> <span data-astro-cid-so6fhqti>Reintentar</span> </button> <button onclick="history.back()" class="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2" data-astro-cid-so6fhqti> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-so6fhqti> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-so6fhqti></path> </svg> <span data-astro-cid-so6fhqti>Volver</span> </button> </div> </div>`} </div> </body></html>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/monitor/[service]/[id].astro", void 0);

const $$file = "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/monitor/[service]/[id].astro";
const $$url = "/monitor/[service]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
