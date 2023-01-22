const Walker = require('@lavamoat/walker');

function walkAndSearch(start, end) {
   let result = false;
   const walker = new Walker(val => {
      return result = result || val === end;
   }, {maxRecursionLimit: 12});
   walker.walk(start);
   return result;
}

function walkAndSearchAndLog(start, end) {
   console.log('Does\n', start, '\nlead to\n', end, '\n?', walkAndSearch(start, end));
}

setTimeout(walkAndSearchAndLog, 100, [], Array);
