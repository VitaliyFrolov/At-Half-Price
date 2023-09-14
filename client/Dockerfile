FROM node:18-alpine
RUN mkdir /app && chown node:node /app
USER node
WORKDIR /app
COPY --chown=node:node package*.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE ${CLIENT_PORT}
CMD [ "npm", "start" ]