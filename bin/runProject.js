'use strict';require('graceful-fs').gracefulify(require('fs')),require('react-native/local-cli/server/checkNodeVersion')(),require('react-native/setupBabel')();var r=require('path'),e=require("fs"),i=require("./config/common"),n=i.project_dir,t=(i.API_LEVEL,i.PRELUDE,i.PRELUDEID,i.STEP,i.IDX_PATH),o=i.IDX_MOD,a=i.MOD_SDK,c=(i.MOD,i.MOD_PLUG,i.makeDirs,require('metro/src/Server'),require('react-native/local-cli/util/Config').DEFAULT);c.getTransformOptions=function(){var i={},c=e.readFileSync(r.join(n,"bin","config","modules"));c&&((JSON.parse(c.toString()||"{}").modules||[]).filter(function(r){return r&&r[o]==a}).forEach(function(e){var o=r.join(n,e[t]);i[r.resolve(o)]=!0}),c=null);return{preloadedModules:i,transform:{inlineRequires:{blacklist:i}}}},c.getTransformModulePath=function(){return r.join(n,"bin","config","transformer.js")},process.argv=["","","start","--reset-cache"],require('react-native/local-cli/cliEntry').run();