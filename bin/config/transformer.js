'use strict';var e=require('path'),r=require("fs"),t=require("metro/src/transformer"),a=require("./common").project_dir,n=t.transform,o=t.getCacheKey,s=new Map;var i,c=r.readFileSync(e.join(a,"bin","config","modules_sdk"));c&&((i=JSON.parse(c.toString()||"{}"))&&(i.modules||[]).forEach(function(e){s.set(e[1],e[0])}),c=null),module.exports={getCacheKey:o,transform:function(r){var t=e.relative(a,r.filename),o=s.get(t);return r.src=o||r.src,{ast:n(r).ast}}};