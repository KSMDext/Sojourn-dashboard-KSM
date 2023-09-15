# build stage
FROM node:alpine AS build-stage

WORKDIR /src/app

COPY package*.json ./

RUN npm install 

COPY . . 

RUN npm run build

# production stage
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /src/app/build /usr/share/nginx/html

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]