# Imagen base de Node
FROM node:18

# Crear carpeta de trabajo
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Exponer puerto de Express
EXPOSE 7000

# Comando de inicio
CMD ["npm", "start"]