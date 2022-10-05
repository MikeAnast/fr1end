FROM node:18

RUN apt update && apt install -y supervisor && apt install -y nginx

COPY . /app
COPY ./lotr/build/ /var/www/html
# RUN rm /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/

WORKDIR /app/server/
RUN npm i

COPY config/supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]