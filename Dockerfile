# Використання офіційного NodeJS образу
FROM node:18-alpine

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json і package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання всіх файлів проекту
COPY . .

# Експонування порту 3000
EXPOSE 3000

# Запуск сервера
CMD ["node", "server.js"]
