FROM node:12-alpine as builder

WORKDIR /home/node/sff-front

COPY . .
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN apk add --no-cache --virtual .gyp python make g++ git
RUN npm install react-scripts -g --silent
RUN yarn
RUN yarn run build

FROM node:12-alpine
RUN yarn global add serve
WORKDIR /sff-front
COPY --from=builder /home/node/sff-front/build .
CMD ["serve", "-p", "80", "-s", "."]