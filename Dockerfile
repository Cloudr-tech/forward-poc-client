FROM node

WORKDIR /app
COPY . /app
RUN npm install
RUN npm install serve -g
CMD serve -p 80
EXPOSE 80
