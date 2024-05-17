FROM nginx:alpine AS frontend-release

COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
