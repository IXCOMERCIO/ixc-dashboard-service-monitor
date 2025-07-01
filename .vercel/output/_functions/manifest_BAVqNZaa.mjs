import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_B-rmeRGC.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D8Ld3cOr.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/","cacheDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/node_modules/.astro/","outDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/dist/","srcDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/","publicDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/public/","buildClientDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/dist/client/","buildServerDir":"file:///C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.B6YlBf1K.css"},{"type":"inline","content":"@keyframes fadeInUser{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.user-info-loaded[data-astro-cid-rq4qnsko]{animation:fadeInUser .5s ease-out}button[data-astro-cid-rq4qnsko]{transform-origin:center}button[data-astro-cid-rq4qnsko]:active{transform:scale(.98)}.user-container[data-astro-cid-rq4qnsko]{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}\n"}],"routeData":{"route":"/historic/[service]/[id]","isIndex":false,"type":"page","pattern":"^\\/historic\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"historic","dynamic":false,"spread":false}],[{"content":"service","dynamic":true,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["service","id"],"component":"src/pages/historic/[service]/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.B6YlBf1K.css"},{"type":"inline","content":"@keyframes fadeInUser{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.user-info-loaded[data-astro-cid-rq4qnsko]{animation:fadeInUser .5s ease-out}button[data-astro-cid-rq4qnsko]{transform-origin:center}button[data-astro-cid-rq4qnsko]:active{transform:scale(.98)}.user-container[data-astro-cid-rq4qnsko]{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}\n"},{"type":"external","src":"/_astro/_id_.xK0Fg3OR.css"}],"routeData":{"route":"/monitor/[service]/[id]","isIndex":false,"type":"page","pattern":"^\\/monitor\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"monitor","dynamic":false,"spread":false}],[{"content":"service","dynamic":true,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["service","id"],"component":"src/pages/monitor/[service]/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/historic/[service]/[id].astro",{"propagation":"none","containsHead":true}],["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/monitor/[service]/[id].astro",{"propagation":"none","containsHead":true}],["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/historic/[service]/[id]@_@astro":"pages/historic/_service_/_id_.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/monitor/[service]/[id]@_@astro":"pages/monitor/_service_/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DfCr2TWE.mjs","\u0000@astrojs-manifest":"manifest_BAVqNZaa.mjs","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/architecture/ArchitectureDiagram.jsx":"_astro/ArchitectureDiagram.BBs8vuD1.js","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/architecture/TestFlow.jsx":"_astro/TestFlow.B-inCCMT.js","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/statistics/PerformanceChart.jsx":"_astro/PerformanceChart.CUTRy93B.js","@astrojs/react/client.js":"_astro/client.e10ASOMJ.js","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/login.astro?astro&type=script&index=0&lang.ts":"_astro/login.astro_astro_type_script_index_0_lang.khpSL76f.js","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.gce6oMNQ.js","C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/layouts/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DzHSYeGj.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/login.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"loginForm\").addEventListener(\"submit\",async function(o){o.preventDefault();const n=document.getElementById(\"username\").value,i=document.getElementById(\"password\").value,e=document.getElementById(\"loginBtn\");e.disabled=!0,e.textContent=\"Iniciando sesión...\";try{if(await new Promise(t=>setTimeout(t,1500)),n&&i)localStorage.setItem(\"authToken\",\"linces_token_\"+Date.now()),localStorage.setItem(\"userInfo\",JSON.stringify({username:n,loginTime:new Date().toISOString(),team:\"LINCES\"})),window.location.href=\"/\";else throw new Error(\"Credenciales inválidas\")}catch(t){alert(\"Error al iniciar sesión: \"+t.message),e.disabled=!1,e.textContent=\"Iniciar Sesión\"}});"],["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const o=localStorage.getItem(\"authToken\"),t=localStorage.getItem(\"userInfo\");if(!o){window.location.href=\"/login\";return}if(t)try{const e=JSON.parse(t),n=document.getElementById(\"userGreeting\");n&&(n.textContent=`¡Hola, ${e.username}!`)}catch(e){console.error(\"Error parsing user info:\",e)}});"],["C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/layouts/Header.astro?astro&type=script&index=0&lang.ts","function c(t){const e=new Date(t),s=new Date-e,n=Math.floor(s/6e4),a=[\"Rugiendo desde el login 🦁\",\"Más conectado que un WiFi LINCES 📶\",\"Online como un verdadero felino 🐾\",\"Cazando bugs desde que llegaste 🐛\",\"Monitoreando como los grandes 👑\",\"Código limpio, como melena de LINCE ✨\",\"Tu uptime es del 99.9% como nosotros 📊\",\"Debugging mode: LINCE activado 🔍\",\"Tu conexión vale oro como nuestro equipo 🏆\",\"Healthcheck aprobado por LINCES 💚\",\"Session-time: Nivel LINCE alcanzado 🎯\",\"Tu login fue tan smooth como un LINCE 🌟\",\"Dashboard premium activado 👨‍💻\",\"Productividad nivel: EQUIPO LINCES 🚀\",\"API calls faster than a LINCE hunt 💨\",\"Server response: RUGIDO aprobado 📢\"],i=Math.floor(n/1);return a[i%a.length]}function r(){const t=localStorage.getItem(\"userInfo\");if(t)try{const e=JSON.parse(t),o=`¡Hola, ${e.username}! 🦁`,s=c(e.loginTime),n=document.getElementById(\"userDisplayName\"),a=document.getElementById(\"userLoginTime\");n&&a&&(n.textContent=o,a.textContent=s,n.classList.add(\"user-info-loaded\"))}catch(e){console.error(\"Error parsing user info:\",e);const o=document.getElementById(\"userDisplayName\");o&&(o.textContent=\"❌ Error al cargar usuario\")}else window.location.href=\"/login\"}function l(){if(confirm(\"¿Estás seguro que quieres cerrar sesión? 🦁\"))if(confirm(`Segurito seguritooo??? 🦁\n\n¿De verdad quieres abandonar a los LINCES? 😿`)){const t=localStorage.getItem(\"userInfo\"),e=document.getElementById(\"logoutButton\");e&&(e.textContent=\"Cerrando...\",e.disabled=!0),document.body.style.opacity=\"0.7\",setTimeout(()=>{if(t)try{const o=JSON.parse(t);alert(`¡Hasta pronto, ${o.username}! 🦁\nGracias por ser parte del team LINCES\n\n¡Nos vemos en la próxima cacería de bugs! 🐛`)}catch{alert(`¡Hasta pronto! 🦁\n¡Que los LINCES te acompañen!`)}localStorage.removeItem(\"authToken\"),localStorage.removeItem(\"userInfo\"),document.cookie=\"authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\",window.location.href=\"/login\"},1e3)}else alert(\"ejo ejooo acomodese y sientese para tomar un tecito\");else alert(\"¡Excelente decisión! 🦁\")}document.addEventListener(\"DOMContentLoaded\",function(){if(!localStorage.getItem(\"authToken\")){window.location.href=\"/login\";return}r(),setInterval(r,6e4),document.getElementById(\"refreshButton\")?.addEventListener(\"click\",()=>{const e=document.getElementById(\"refreshButton\");if(e){const o=e.querySelector(\"span\");o&&(o.textContent=\"Refrescando...\"),e.disabled=!0,setTimeout(()=>{window.location.reload()},500)}}),document.getElementById(\"logoutButton\")?.addEventListener(\"click\",l)});"]],"assets":["/_astro/_id_.xK0Fg3OR.css","/_astro/_id_.B6YlBf1K.css","/favicon.svg","/_astro/ArchitectureDiagram.BBs8vuD1.js","/_astro/client.e10ASOMJ.js","/_astro/index.C3DBt1ew.js","/_astro/index.DoCqSHrB.js","/_astro/index.Oe9Ndogc.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/PerformanceChart.CUTRy93B.js","/_astro/TestFlow.B-inCCMT.js","/_astro/_id_.BvW_gCGF.css","/login/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zjYW1YHWRSlMKfIhzRDOrP33glNJS9KYH6Xy9SM4+Pg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
