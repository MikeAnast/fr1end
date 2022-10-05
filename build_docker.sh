#!/bin/bash
docker rm -f fr1end
docker build -t fr1end . && \
docker run --name=fr1end fr1end
