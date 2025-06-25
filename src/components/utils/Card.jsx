
export default function Card({title, value, description, color}) {
  return (
    <div class="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-start">
      <div class="text-sm text-gray-500 mb-1">{title}</div>
      <div class={`text-3xl font-bold text-${color}-600 mb-1`}>{value}</div>
      <div class="text-xs text-gray-500">{description}</div>
    </div>
  );
}

