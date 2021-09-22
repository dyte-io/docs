FROM node:latest

ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "serve"]
