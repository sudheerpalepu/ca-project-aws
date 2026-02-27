FROM ubuntu:24.04

# Install Nginx
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# Copy website files
COPY index.html /var/www/html/index.html
COPY index.css /var/www/html/index.css
COPY script.js /var/www/html/script.js

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]