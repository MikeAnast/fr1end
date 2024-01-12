# fr1end
<p align=center>
<a target="_blank" href="LICENSE" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="React" title="React"><img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge"></a>
<a target="_blank" href="Node" title="Node"><img src="https://img.shields.io/badge/node-latest-green"></a>
</p>


This is a web vulnerability challenge, try to find the flag.
This challenge requires docker.

### Manual Docker image build and run
1. Install [Docker](https://www.docker.com)
2. Build the image `docker build -t fr1end .`
3. Start the container with a port of your choice by replacing 1337 `docker run --name=fr1end -p1337:80 -p4000:4000 fr1end`
4. The challenge can be found in http://localhost:1337/

### Automated run
Run the following bash script to build and run the challenge `./build_docker.sh`. The challenge can be found in http://localhost:1337/

## Delete challenge
Don't forget to delete both the container and the image of the challenge after you finish:
1. Delete container `docker rm fr1end -f`
2. Delete image `docker rmi fr1end`


Have fun !