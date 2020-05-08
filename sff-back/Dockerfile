FROM node:12-alpine

# set workdir
WORKDIR /home/node/sff-back

# copy package files
COPY package.json package.json
COPY package-lock.json package-lock.json

# install node packages
RUN npm install

EXPOSE 3001
COPY . .

CMD npm run start