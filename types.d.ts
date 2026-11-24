declare module 'piexifjs' {
 const piexif: { load(data:string):any; dump(data:any):string; insert(exif:string,data:string):string; remove(data:string):string; ImageIFD:any; ExifIFD:any };
 export default piexif;
}
