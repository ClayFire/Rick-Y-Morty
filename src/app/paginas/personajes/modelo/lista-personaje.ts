export type Info = {
  count: number,
  pages: number,
  next?: string,
  prev?: string,
}
export type personajeparcial={
  id:number,
  status:string,
  species:string,
  gender:string,
  image:string,
}
export interface ListaPersonaje {
  info: Info;
  results: Array<personajeparcial>,
}
