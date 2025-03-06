import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//* Добавляет к дробной части 0 если дробная часть состоит из одного числа
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}

//* Короткая версия
/* const formatNumberWithDecimal = (num: number): string => num.toFixed(2); */

//* Переводит строку в slug формат (для URL)
export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '') // Удаляем все символы, кроме букв, цифр, пробелов и дефисов
    .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
    .replace(/^-+|-+$/g, '') //  Убираем дефисы в начале и конце строки
    .replace(/-+/g, '-')  // Убираем повторяющиеся дефисы

