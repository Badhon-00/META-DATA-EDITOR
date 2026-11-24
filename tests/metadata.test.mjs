import test from 'node:test';
import assert from 'node:assert/strict';
import { encode, decode } from '../app/encoding.ts';
import { readPngText, writePngText, readGifComments, writeGifComment, readWebpXmp, writeWebpXmp, makeXmp } from '../lib/media.ts';

test('variation selector carrier round-trips unicode text',()=>{const source='Hello 🌍 — বাংলা';const encoded=encode('🧩',source);assert.equal(decode(encoded),source);});
test('PNG tEXt metadata round-trips',()=>{const png=new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,0,73,69,78,68,0,0,0,0]);const result=writePngText(png,{Title:'Test',Description:'বাংলা'});const fields=readPngText(result);assert.equal(fields.Title,'Test');assert.equal(fields.Description,'বাংলা');});
test('GIF comment metadata round-trips without changing header',()=>{const gif=new Uint8Array([...new TextEncoder().encode('GIF89a'),1,0,1,0,0,0,0,0,0x3b]);const result=writeGifComment(gif,'META-DATA-EDITOR');assert.deepEqual(Array.from(result.slice(0,6)),Array.from(gif.slice(0,6)));assert.deepEqual(readGifComments(result),['META-DATA-EDITOR']);});
test('WebP XMP chunk round-trips',()=>{const base=new Uint8Array([...new TextEncoder().encode('RIFF'),22,0,0,0,...new TextEncoder().encode('WEBP'),...new TextEncoder().encode('VP8X'),10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);const xmp=makeXmp({Title:'Sample'});const result=writeWebpXmp(base,xmp);assert.equal(readWebpXmp(result),xmp);});
