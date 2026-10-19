

export interface Artwork {
    id: string;
    title: string;
    description: string;
    medium: string | null;
    year_created: number | null;
    price: string | null;
    image_url: string | null;
    is_published: boolean;
    created_at: Date;
    updated_at: Date;
}