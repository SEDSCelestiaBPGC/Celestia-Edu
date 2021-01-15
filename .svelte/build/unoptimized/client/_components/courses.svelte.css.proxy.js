// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "section.svelte-1he07yy.svelte-1he07yy{padding:10px;display:flex;flex-wrap:wrap;justify-content:space-around}.course.svelte-1he07yy.svelte-1he07yy{display:flex;margin:10px;width:550px;height:200px;background:#fff;border:1px solid #aaa;cursor:pointer;transition:transform 0.2s ease}.course.svelte-1he07yy div.svelte-1he07yy,.course.svelte-1he07yy p.svelte-1he07yy{padding:5px}.course.svelte-1he07yy img.svelte-1he07yy{width:200px;height:200px;object-fit:cover}.course.svelte-1he07yy.svelte-1he07yy:hover{transform:scale(1.03)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}