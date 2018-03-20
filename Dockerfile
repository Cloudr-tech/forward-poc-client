FROM node

WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g serve
RUN npm run build --production
CMD serve -s build
EXPOSE 5000
