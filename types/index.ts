import { ProductInputSchema } from "@/lib/validator";
import { z } from "zod";



/* z.infer<typeof ProductInputSchema> — это способ выведения типа на основе уже существующей Zod-схемы.
z.infer<typeof ProductInputSchema> автоматически генерирует TypeScript тип на основе схемы ProductInputSchema.
Это позволяет TypeScript автоматически понимать структуру данных, которые будут соответствовать схеме валидации.
Например, если ProductInputSchema описывает объект с полями name: string, price: number, то IProductInput будет типом с такими же полями. */

export type IProductInput = z.infer<typeof ProductInputSchema>


export type Data = {
  products: IProductInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
