FROM node

WORKDIR /Resu-Pro

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
