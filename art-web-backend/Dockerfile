FROM node:16.15.0-alpine

WORKDIR /opt/app/backend

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent

COPY . .

EXPOSE 5000

# RUN chmod +x ./startup.sh

CMD ["/bin/sh","startup.sh" ]
