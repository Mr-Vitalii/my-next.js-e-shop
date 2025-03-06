import { loadEnvConfig } from '@next/env' // Импорт функции загрузки переменных окружения
import { cwd } from 'process' // Импорт функции cwd() для получения текущей рабочей директории
import data from '@/lib/data'
import { connectToDatabase } from '.'
import Product from './models/product.model'


/* loadEnvConfig
В Next.js переменные окружения из.env.local, .env.development, .env.production автоматически загружаются
 в next dev, next build и next start, но если код выполняется вне Next.js(например, в скрипте), переменные окружения не загружаются автоматически.
loadEnvConfig(cwd()) гарантирует, что переменные из .env файлов будут загружены даже при выполнении кода вне стандартного окружения Next.js. */

loadEnvConfig(cwd()) // Загружаем переменные окружения из .env в текущей директории



/* Этот код выполняет наполнение базы данных (seeding) в MongoDB с использованием Mongoose Этот код используется для первоначального наполнения базы данными. 
 */const main = async () => {
  try {
    const { products } = data // Получаем products из data.
    await connectToDatabase(process.env.MONGODB_URI) // Подключаемся к базе данных
    await Product.deleteMany() // Удаляем все товары из базы, чтобы очистить её перед добавлением новых данных.
    const createdProducts = await Product.insertMany(products) // Добавляем новые товары в базу (products из data).
    console.log({
      createdProducts,
      message: 'Seeded database successfully',
    })
    process.exit(0) // Завершаем процесс после успешного выполнения.

  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()