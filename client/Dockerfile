# Stage 1 - the build process
FROM node:8.16.2-alpine as build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM node:8.16.2-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build-deps /app/build ./
EXPOSE 80
CMD ["serve", "-p", "80", "-s", "."]
