FROM node:12 as BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN yarn install --registry https://registry.npm.taobao.org/
COPY . .
RUN yarn build

FROM node:12
WORKDIR /usr/src/app
COPY --from=BUILD_IMAGE /app ./
ENV NODE_ENV=production
RUN npm install serve -g
EXPOSE 5000
CMD [ "serve", "./dist" ]
