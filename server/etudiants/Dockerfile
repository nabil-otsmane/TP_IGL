FROM node:8.16.2-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --quiet
COPY . ./
CMD ["npm", "start"]
