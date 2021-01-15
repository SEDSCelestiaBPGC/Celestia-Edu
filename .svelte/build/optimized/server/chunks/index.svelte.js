"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),A=require("./nav.svelte.js");let s=[{short:"QISKit",time:"Winter 2021",page:"qis",long:"Quantum Information & Security (Kit)",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-qis3-1610508686415.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."},{short:"TOR",time:"Winter 2021",page:"tor",long:"Introduction to Theory of Relativity",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-tor3-1610508935146.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."}];const t={code:"section.svelte-1he07yy.svelte-1he07yy{padding:10px;display:flex;flex-wrap:wrap;justify-content:space-around}.course.svelte-1he07yy.svelte-1he07yy{display:flex;margin:10px;width:550px;height:200px;background:#fff;border:1px solid #aaa;cursor:pointer;transition:transform 0.2s ease}.course.svelte-1he07yy div.svelte-1he07yy,.course.svelte-1he07yy p.svelte-1he07yy{padding:5px}.course.svelte-1he07yy img.svelte-1he07yy{width:200px;height:200px;object-fit:cover}.course.svelte-1he07yy.svelte-1he07yy:hover{transform:scale(1.03)}",map:'{"version":3,"file":"courses.svelte","sources":["courses.svelte"],"sourcesContent":["<script>\\n    import crs from \\"./courses.json\\";\\n<\/script>\\n\\n<style type=\\"text/scss\\">section {\\n  padding: 10px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n\\n.course {\\n  display: flex;\\n  margin: 10px;\\n  width: 550px;\\n  height: 200px;\\n  background: #fff;\\n  border: 1px solid #aaa;\\n  cursor: pointer;\\n  transition: transform 0.2s ease;\\n}\\n.course div,\\n.course p {\\n  padding: 5px;\\n}\\n.course img {\\n  width: 200px;\\n  height: 200px;\\n  object-fit: cover;\\n}\\n.course:hover {\\n  transform: scale(1.03);\\n}</style>\\n\\n<section>\\n    {#each crs as cr}\\n        <a href=\\"/courses/{cr.page}\\">\\n            <div class=\\"course\\">\\n                <img src={cr.image} alt=\\"\\" />\\n                <div>\\n                    <div style=\\"font-weight:600\\">{cr.long}</div>\\n                    <div>{cr.short} ({cr.time})</div>\\n                    <p>{cr.about}</p>\\n                </div>\\n            </div>\\n        </a>\\n    {/each}\\n</section>\\n"],"names":[],"mappings":"AAIwB,OAAO,8BAAC,CAAC,AAC/B,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,YAAY,AAC/B,CAAC,AAED,OAAO,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,AACjC,CAAC,AACD,sBAAO,CAAC,kBAAG,CACX,sBAAO,CAAC,CAAC,eAAC,CAAC,AACT,OAAO,CAAE,GAAG,AACd,CAAC,AACD,sBAAO,CAAC,GAAG,eAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,qCAAO,MAAM,AAAC,CAAC,AACb,SAAS,CAAE,MAAM,IAAI,CAAC,AACxB,CAAC"}'},n=e.create_ssr_component(((A,n,r,i)=>(A.css.add(t),`<section class="svelte-1he07yy">${e.each(s,(A=>`<a href="${"/courses/"+e.escape(A.page)}"><div class="course svelte-1he07yy"><img${e.add_attribute("src",A.image,0)} alt="" class="svelte-1he07yy">\n                <div class="svelte-1he07yy"><div style="font-weight:600" class="svelte-1he07yy">${e.escape(A.long)}</div>\n                    <div class="svelte-1he07yy">${e.escape(A.short)} (${e.escape(A.time)})</div>\n                    <p class="svelte-1he07yy">${e.escape(A.about)}</p>\n                </div></div>\n        </a>`))}</section>`))),r=e.create_ssr_component(((s,t,r,i)=>`${e.validate_component(A.Nav,"Nav").$$render(s,{},{},{})}\n${e.validate_component(n,"Courses").$$render(s,{},{},{})}`));exports.default=r;
//# sourceMappingURL=index.svelte.js.map