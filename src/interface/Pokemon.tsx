export interface ItemStat {
    stat: {
    name: string}
    base_stat: string
}


export interface PokemonType {
    id: number,
    name: string;
    sprites: {
      back_default: string;
      front_default: string;
    };
    stats: ItemStat[];
  }
