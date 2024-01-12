#!/bin/bash
docker rm -f fr1end
docker build -t fr1end . && \
docker run --name=fr1end -p1337:80 -p4000:4000 fr1end
