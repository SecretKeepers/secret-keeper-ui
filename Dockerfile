FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-slim

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
