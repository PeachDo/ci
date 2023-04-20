FROM --platform=linux/amd64 node:16-alpine

# 앱 디렉터리 생성
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]