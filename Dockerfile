# base node image with an alias#
FROM node:16.15.0-alpine3.14 as build
WORKDIR /app

# globally install angular cli #
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

# webserver - nginx image #
FROM nginx as runtime

# copy contents from 'build' container  #
# to the given path in the nginx container#
COPY --from=build /app/dist/ns-fan-ui /usr/share/nginx/html
