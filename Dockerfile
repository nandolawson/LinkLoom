FROM caddy:latest

LABEL org.opencontainers.image.source=https://github.com/nandolawson/LinkLoom
LABEL org.opencontainers.image.description="A Linktree clone that is easy to configure. Supports theming and an animated background."
LABEL org.opencontainers.image.licenses=GPL-3.0-only

# Set work directory
WORKDIR /srv

# Copy all needed files
COPY index.html /srv/
COPY style.css /srv/
COPY config /srv/config/
COPY scripts /srv/scripts/

# Generate Caddyfile
RUN printf ":80\nroot * /srv\nfile_server" > /etc/caddy/Caddyfile
