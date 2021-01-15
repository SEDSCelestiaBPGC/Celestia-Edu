// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".collapse.svelte-b0r41q.svelte-b0r41q{padding:10px;background:#fff}.collapse.svelte-b0r41q .head.svelte-b0r41q{display:flex;justify-content:space-between;cursor:pointer}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}