import { c as createComponent, m as maybeRenderHead, e as renderTemplate, a as createAstro, b as renderComponent } from './astro/server_B-rmeRGC.mjs';
import 'kleur/colors';
import 'clsx';

const $$ArrowLeft = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/assets/ArrowLeft.astro", void 0);

const $$Astro = createAstro();
const $$StepBack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepBack;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="animate-fade-in"> <button class="ml-6 inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md" onclick="history.back()"> ${renderComponent($$result, "ArrowLeft", $$ArrowLeft, {})} <span class="font-medium">${title}</span> </button> </div>`;
}, "C:/IXCOMERCIO/REPOSITORIOS/Healthcheck/ixc-dashboard-service-monitor/src/components/hooks/StepBack.astro", void 0);

export { $$StepBack as $ };
