const walk = require('@lavamoat/walker');

function walkAndSearch(start, end) {
   let result = false;
   walk(start, (val) => {
       return result = result || val === end;
   });
   return result;
}

function walkAndSearchAndLog(start, end) {
   console.log('Does\n', start, '\nlead to\n', end, '\n?', walkAndSearch(start, end));
}

setTimeout(walkAndSearchAndLog, 100, [], Array);
