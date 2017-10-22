# commonroutesLandingPage

# Instructions
1 - download the repository (just need the Dockerfile)

2 - build the docker image
```
docker build -t webCommonRoutes .
```
3 - launch a container with the image
```
docker run -ti -d -p 80:8080 webCommonRoutes
```

The landingpage && webapp will be able in the ip/domain.




- server code: https://github.com/arnaucode/commonroutesServer
- frontend app code: https://github.com/arnaucode/commonroutesApp
- frontend webapp code: https://github.com/arnaucode/commonroutesWebApp
- images server: https://github.com/arnaucode/goImgServer
- admin web: https://github.com/arnaucode/commonroutesAdminWeb
- landing page: https://github.com/arnaucode/commonroutesLandingPage

send files over ssh
scp dataset.tar.gz root@SERVERIP:/root/galdric
