import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CQV-WO-p.mjs';
import { manifest } from './manifest_BAVqNZaa.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/historic/_service_/_id_.astro.mjs');
const _page2 = () => import('./pages/login.astro.mjs');
const _page3 = () => import('./pages/monitor/_service_/_id_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/historic/[service]/[id].astro", _page1],
    ["src/pages/login.astro", _page2],
    ["src/pages/monitor/[service]/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "956a7e59-cc51-4944-a348-f0ecbac09d5b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
