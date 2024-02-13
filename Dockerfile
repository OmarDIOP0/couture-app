FROM node:16-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/couture/ /usr/share/nginx/html
EXPOSE 80


#WORKDIR /usr/share/nginx/html/
#RUN rm index.html
#COPY --from=build /app/dist/couture .

