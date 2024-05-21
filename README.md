# Installation
## Precondition
Ubuntu 22.04  
Nvidia driver  
Install NVIDIA Container Toolkit: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html

## Installing ComfyUI  
You can install following the document: https://github.com/comfyanonymous/ComfyUI.  
Below provide a method for deploying on Docker.
```
# Make directory
mkdir -p ComfyUI/models
cd ComfyUI

# Generate docker-compose yaml, content as below:
"""
# Docker Compose file for setting up Minio, createbuckets, app_cpu, and app_gpu services

version: '3.7'

services:
  comfyui:
    image: phoenixwyf/comfyui:v0.1.0
    volumes:
      - ./models:/app/models
    command: python3 main.py --listen
    deploy:
      resources:
        reservations:
          devices:
          - driver: nvidia
            count: all
            capabilities: [gpu]
    ports:
      - "8188:8188"
"""
# Boot the ComfyUI service
sudo docker compose up -d
# Check the status of ComfyUI
sudo docker compose ps
# Access from broswer
http://<ip>:8188

```
## Installing Jan
Just following the offical installation document: https://github.com/janhq/jan

## GenAI Demo Web Server deployment
```
# Install nginx
sudo apt install nginx -y
# Deploy web server
git clone https://github.com/wangyf123/genai_demo
cd genai_demo
sudo cp -r demo_web /usr/share/nginx/demo_web
# Modify ComfyUI and Jan's access url
vi /usr/share/nginx/demo_web/static/config.js
# Create virtual host
cp /usr/share/nginx/demo_web/default/ /etc/nginx/site-available/default
# Restart Nginx
sudo systemctl restart Nginx
# Access the web server from browser
http://<ip>
```
