export interface Recipe{

    id: number;
    title: string;
    ingredients?: string | null;
    tags?: string | null;
    imageUrl?: string | null;
    cookingTime: number;
    yeild?: number | null;
    steps?: string | null;
    rating?: number | null;
    
}