FROM node:18

RUN apt update && apt install -y supervisor && apt install -y nginx

COPY . /app
COPY ./lotr/build/ /var/www/html

RUN rm /etc/nginx/sites-available/default
COPY /nginx/default /etc/nginx/sites-available/

WORKDIR /app/server/
RUN npm i

COPY config/supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]