const VS_START = 0xfe00;
const VSS_START = 0xe0100;
function byteToVS(byte: number): string { return String.fromCodePoint(byte < 16 ? VS_START + byte : VSS_START + byte - 16); }
function vsToByte(cp: number): number | null { if (cp >= VS_START && cp <= 0xfe0f) return cp - VS_START; if (cp >= VSS_START && cp <= 0xe01ef) return cp - VSS_START + 16; return null; }
export function encode(base: string, message: string): string { return base + Array.from(new TextEncoder().encode(message), byteToVS).join(""); }
export function decode(input: string): string { const bytes: number[]=[]; for (const char of Array.from(input)) { const n=vsToByte(char.codePointAt(0)!); if(n!==null) bytes.push(n); else if(bytes.length) break; } if(!bytes.length) return ""; return new TextDecoder("utf-8",{fatal:true}).decode(new Uint8Array(bytes)); }
export function containsCarrier(input:string):boolean { return Array.from(input).some(c=>vsToByte(c.codePointAt(0)!)!==null); }
