// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "nav.svelte-1y140zv.svelte-1y140zv{background:#fff;width:calc(100% - 20px);padding:10px;display:flex;justify-content:space-between}nav.svelte-1y140zv .part.svelte-1y140zv{display:flex}nav.svelte-1y140zv a.svelte-1y140zv{width:75px;text-align:center;margin:10px;background:#fff;padding:10px;outline:2px solid #fff;border:2px solid #aaa;transition:all 0.3s ease}nav.svelte-1y140zv a.svelte-1y140zv:hover{background:#eee}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}