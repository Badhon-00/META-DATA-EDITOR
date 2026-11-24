declare module 'piexifjs' {
 const piexif: { load(data:string):any; dump(data:any):string; insert(exif:string,data:string):string; remove(data:string):string; ImageIFD:any; ExifIFD:any };
 export default piexif;
}
declare module 'gifenc' {
 export function GIFEncoder(): { writeFrame(index: Uint8Array, width: number, height: number, options?: Record<string, unknown>): void; finish(): void; bytes(): Uint8Array };
 export function quantize(data: Uint8ClampedArray | Uint8Array, maxColors: number): number[];
 export function applyPalette(data: Uint8ClampedArray | Uint8Array, palette: number[]): Uint8Array;
}
