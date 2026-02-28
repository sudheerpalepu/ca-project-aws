# Use lightweight Nginx image
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Copy all project files to Nginx's default web root
COPY . .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]