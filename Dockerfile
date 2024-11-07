FROM caddy:latest

LABEL org.opencontainers.image.source=https://github.com/nandolawson/LinkLoom
LABEL org.opencontainers.image.description="A simple, self-hosted service for web links – themable, easy to customize and resource-efficient"
LABEL org.opencontainers.image.licenses=GPL-3.0-only

# Set work directory
WORKDIR /srv

# Copy all needed files
COPY index.html style.css /srv/
COPY config /srv/config/
COPY scripts /srv/scripts/

# Generate Caddyfile
RUN printf ":80 {\n	root * /srv\n	file_server\n}\n" > /etc/caddy/Caddyfile