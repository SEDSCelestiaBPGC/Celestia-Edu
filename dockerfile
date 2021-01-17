FROM node:15-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .

# EXPOSE 3000

CMD npm run build
CMD npx svelte-kit start --port $PORT