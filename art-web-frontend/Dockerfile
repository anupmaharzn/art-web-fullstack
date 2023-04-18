FROM node:16.15.0-alpine As build

WORKDIR /opt/app/frontend

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent

COPY . .

EXPOSE 3000

CMD [ "npm","start","--","--watch" ]

##normally for production

# RUN npm run build

# FROM nginx:1.23-alpine 
# COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build ./opt/app/frontend/build /usr/share/nginx/html