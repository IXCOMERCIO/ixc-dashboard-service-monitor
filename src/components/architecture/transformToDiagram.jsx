function transformToDiagram(serviceData) {
  const nodes = [];
  const edges = [];

  const subservices = serviceData.services || {};
  const serviceKeys = Object.keys(subservices);

  const xGap = 200;
  const yGap = 150;

  // Calcular altura total para centrar el nodo raíz
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

    // Añadir conexiones si existen
    if (svc.connections) {
      const connEntries = Object.entries(svc.connections);
      const baseX = xGap + 200;
      const baseY = subserviceY - ((connEntries.length - 1) * 75) / 2;

      connEntries.forEach(([connKey, connSvc], connIndex) => {
        const connId = `${subserviceId}-${connKey}`;
        const connY = baseY + connIndex * 75;

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

export default transformToDiagram;
