FROM node

ENV LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TZ=America/Sao_Paulo

WORKDIR /users-api

USER node

ENTRYPOINT ["/users-api/docker/entrypoint.sh"]

EXPOSE 5003

CMD ["npm", "run", "server"]
