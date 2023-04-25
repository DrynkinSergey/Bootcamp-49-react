import { useContext } from 'react'
import { Auth } from '../hoc/AuthProvider'

export const useAuth = () => useContext(Auth)

// 1. Створюємо контекст
// 2. Додаємо методи для авторизації та виходу
// 3. Створюємо єдиний об'єкт для передачі в Аuth.Provider
// 4. Йдемо до індекс, та огортаємо <App/>
// 5. Створюємо хук useAuth для кращого використання контексту
// 6. Змінюємо логіку редіректу та авторизаціі у файлі PrivateRoute
