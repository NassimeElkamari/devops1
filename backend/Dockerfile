FROM node:20

WORKDIR /

# Copy dependencies' files first
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the files (including server.js) to /app
COPY . . 

EXPOSE 3000

CMD ["node", "index.js"]
