var memory = new ArrayBuffer(1024 * 1024);

var U8 = new Uint8Array(memory);
var I8 = new Int16Array(memory);

var U16 = new Uint16Array(memory);
var I16 = new Int16Array(memory);

var U32 = new Uint32Array(memory);
var I32 = new Int32Array(memory);

var F32 = new Float32Array(memory);
var F64 = new Float64Array(memory);

var address = 4;

function malloc(size) {
  return address += size;
}