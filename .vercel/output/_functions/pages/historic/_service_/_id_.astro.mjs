/* empty css                                      */
import { c as createComponent, a as createAstro, r as renderHead, b as renderComponent, d as addAttribute, e as renderTemplate } from '../../../chunks/astro/server_B-rmeRGC.mjs';
import 'kleur/colors';
import { $ as $$StepBack } from '../../../chunks/StepBack_C_lve0_Q.mjs';
import { B as BASE_DASHBOARD_URL, $ as $$Header, a as $$Icon } from '../../../chunks/Icon_DPZ60xrg.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { service, id } = Astro2.params;
  if (!service || !id) {
    throw new Error("Los par\xE1metros 'service' o 'id' no est\xE1n definidos.");
  }
  const apiUrlStatistics = `${BASE_DASHBOARD_URL}/history/statistics?team=${service}&project=${id}&days=30`;
  const apiUrlErrors = `${BASE_DASHBOARD_URL}/history/errors?team=${service}&project=${id}&limit=10&page=1&days=30`;
  const apiUrlServices = `${BASE_DASHBOARD_URL}/status/${service}/${id}`;
  const apiUrlGraph = `${BASE_DASHBOARD_URL}/history/graph?team=${service}&project=${id}&days=30`;
  let statisticsData = null;
  let errorData = null;
  let servicesData = null;
  let graphData = null;
  try {
    const statisticsRes = await fetch(apiUrlStatistics);
    const errorsRes = await fetch(apiUrlErrors);
    const servicesRes = await fetch(apiUrlServices);
    const graphRes = await fetch(apiUrlGraph);
    if (!statisticsRes.ok) {
      throw new Error(`Failed to fetch data from ${apiUrlStatistics}`);
    }
    if (!errorsRes.ok) {
      throw new Error(`Failed to fetch data from ${apiUrlErrors}`);
    }
    if (!servicesRes.ok) {
      throw new Error(`Failed to fetch data from ${apiUrlServices}`);
    }
    if (!graphRes.ok) {
      throw new Error(`Failed to fetch data from ${apiUrlGraph}`);
    }
    statisticsData = await statisticsRes.json();
    errorData = await errorsRes.json();
    servicesData = await servicesRes.json();
    graphData = await graphRes.json();
    console.log(graphData);
  } catch (error) {
    console.error("Error fetching service details:", error);
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  const statusColor = {
    healthy: "bg-green-500",
    warning: "bg-yellow-500",
    critical: "bg-red-500"
  };
  function getErrorStatus(status) {
    if (status === 503) return "critical";
    if (status === 404) return "warning";
    return "warning";
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard - ${servicesData[service][id].title}</title>${renderHead()}</head> <body class="bg-indigo-50 min-h-screen"> ${renderComponent($$result, "Header", $$Header, { "title": servicesData[service][id].title, "subtitle": "Detalle de Servicio", "isLoading": false })} <div class=" mx-auto px-4 py-2"> ${renderComponent($$result, "StepBack", $$StepBack, { "title": "Dashboard" })} <!-- metricas principales --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-8 px-5"> <!-- disponibilidad --> <div class="bg-white rounded-xl p-6 shadow-lg transition-shadow duration-200"> <div class="flex items-center justify-between"> <div class="flex items-center"> <div class="bg-gradient-to-r from-green-600 to-green-400 rounded-lg p-2 mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:check", "class": "w-6 h-6 text-white" })} </div> <div> <h3 class="text-sm font-medium text-gray-600">Disponibilidad (30d)</h3> <p class="text-2xl font-bold text-gray-900">${statisticsData.statistics.availabilityPercentage}%</p> <p class="text-xs text-gray-500">Porcentaje de tiempo en línea</p> </div> </div> </div> </div> <!-- tiempo respuesta --> <div class="bg-white rounded-xl p-6 shadow-lg transition-shadow duration-200"> <div class="flex items-center justify-between"> <div class="flex items-center"> <div class="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-2 mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:av-timer", "class": "w-6 h-6 text-white" })} </div> <div> <h3 class="text-sm font-medium text-gray-600">Tiempo de Respuesta (30d)</h3> <p class="text-2xl font-bold text-gray-900">${statisticsData.statistics.averageResponseTime}ms</p> <p class="text-xs text-gray-500">Promedio actual</p> </div> </div> </div> </div> <!-- total servicios --> <div class="bg-white rounded-xl p-6 shadow-lg transition-shadow duration-200"> <div class="flex items-center justify-between"> <div class="flex items-center"> <div class="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-2 mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:captive-portal", "class": "w-6 h-6 text-white" })} </div> <div> <h3 class="text-sm font-medium text-gray-600">Total Servicios (30d)</h3> <p class="text-2xl font-bold text-gray-900">${statisticsData.statistics.totalServices}</p> <p class="text-xs text-gray-500">Servicios monitoreados</p> </div> </div> </div> </div> <!-- total errores --> <div class="bg-white rounded-xl p-6 shadow-lg transition-shadow duration-200"> <div class="flex items-center justify-between"> <div class="flex items-center"> <div class="bg-gradient-to-r from-red-600 to-red-400 rounded-lg p-2 mr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:bug-report", "class": "w-6 h-6 text-white" })} </div> <div> <h3 class="text-sm font-medium text-gray-600">Total Errores (30d)</h3> <p class="text-2xl font-bold text-gray-900 mt-1">${statisticsData.statistics.downtimeServices}</p> <p class="text-xs text-gray-500 mt-1">Servicios con error</p> </div> </div> </div> </div> </div> <!-- grafiquito --> <div class="mb-4 px-4"> <div class="bg-white overflow-hidden rounded-xl shadow-lg mb-8"> <div class="px-6 pt-4"> <div class="flex items-center"> <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-2 mr-3"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <div> <h3 class="text-sm font-bold text-gray-800">Rendimiento del Sistema</h3> <p class="text-xs text-gray-500">Análisis de performance en tiempo real</p> </div> </div> </div> <div class="p-6"> ${renderComponent($$result, "PerformanceChart", null, { "client:only": "react", "graphData": graphData, "client:component-hydration": "only", "client:component-path": "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/statistics/PerformanceChart.jsx", "client:component-export": "default" })} </div> </div> <!-- seccion de errores y servicios --> <div class="grid grid-cols-1 xl:grid-cols-2 gap-8"> <!-- panel de servicios --> <div class="bg-white rounded-xl shadow-xl overflow-hidden"> <div class="bg-white overflow-hidden"> <div class="px-6 pt-4"> <div class="flex items-center"> <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:data-table", "class": "w-5 h-5 text-white" })} </div> <div> <h3 class="text-sm font-bold text-gray-800">Resumen del Servicios</h3> <p class="text-xs text-gray-500">${Object.values(servicesData[service][id].services).length} servicios monitoreados</p> </div> </div> </div> </div> <div class="px-6 py-4"> <div> ${Object.values(servicesData[service][id].services)?.map((svc) => renderTemplate`<div class="flex items-center justify-between rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 p-1"> <div class="flex items-center gap-4"> <div class="flex-shrink-0"> <div${addAttribute(`w-3 h-3 rounded-full ${statusColor[svc.overallStatus?.status] ?? statusColor.warning}`, "class")}></div> </div> <div> <span class="text-sm font-semibold text-gray-900">${svc.serviceName}</span> <div class="flex items-center gap-2"> <span class="text-xs text-gray-500">Estado:</span> <span${addAttribute(`text-xs font-medium px-2 py-1 rounded-full ${svc.overallStatus?.status === "healthy" ? "bg-green-100 text-green-700" : svc.overallStatus?.status === "warning" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`, "class")}> ${svc.overallStatus?.status === "healthy" ? "Healthy" : svc.overallStatus?.status === "warning" ? "Warning" : "Offline"} </span> </div> </div> </div> <div class="text-right"> <div class="text-sm font-semibold text-blue-600"> ${svc.executionTime ?? 0} </div> <div class="text-xs text-gray-500">tiempo resp.</div> </div> </div>`)} </div> </div> </div> <!-- panel de errores recientes --> <div class="bg-white rounded-xl shadow-xl overflow-hidden"> <div class="px-6 pt-4"> <div class="flex items-center"> <div class="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-2 mr-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:error", "class": "w-5 h-5 text-white" })} </div> <div> <h3 class="text-sm font-bold text-gray-800">Registro de Errores Recientes</h3> <p class="text-xs text-gray-500">Últimos 10 eventos registrados</p> </div> </div> </div> <div class="overflow-hidden mt-4"> <div class="overflow-x-auto p-2"> <table class="min-w-full"> <thead class="bg-gray-100"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha y Hora</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th> </tr> </thead> <tbody class="bg-white"> ${errorData.data?.map((err, index) => {
    const errorStatus = getErrorStatus(err.status);
    return renderTemplate`<tr${addAttribute(`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`, "class")}> <td class="px-6 py-4 whitespace-nowrap"> <div class="flex items-center"> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${errorStatus === "critical" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`, "class")}> ${errorStatus === "critical" ? "Cr\xEDtico" : "Warning"} </span> </div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm text-gray-900 font-medium"> ${formatDate(err.date)} </div> </td> <td class="px-6 py-4"> <div class="text-sm text-gray-900 font-medium truncate max-w-32"> ${err.serviceName} </div> </td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${err.status === 503 ? "bg-red-100 text-red-800" : err.status === 404 ? "bg-yellow-100 text-yellow-800" : "bg-yellow-100 text-yellow-800"}`, "class")}> ${err.status === "ECONNRESET" ? "ECONNRESET" : err.status} </span> </td> </tr>`;
  })} </tbody> </table> </div> <!-- registros para paginacion futura wink wink --> <div class="px-6 py-3 bg-gray-50 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="text-sm text-gray-700">
Mostrando <span class="font-medium">1</span> a <span class="font-medium">${errorData.pagination.limit * errorData.pagination.currentPage}</span> de${" "} <span class="font-medium">${errorData.pagination.totalRecords ?? 0}</span> registros
</div> <div class="text-xs text-gray-500">
Actualizado hace pocos minutos
</div> </div> </div> </div> </div> </div> </div> </div></body></html>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/historic/[service]/[id].astro", void 0);

const $$file = "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/historic/[service]/[id].astro";
const $$url = "/historic/[service]/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
