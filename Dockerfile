FROM node:4

ENV HTTP_SERVER_VERSION 0.9.0
ENV PUBLIC_FOLDER /commonroutesLandingPage

RUN mkdir -p $PUBLIC_FOLDER
RUN npm install -g http-server@0.9.0
RUN npm install -g bower

RUN git clone https://github.com/arnaucode/commonroutesLandingPage.git

RUN cd commonroutesLandingPage && \
    git clone https://github.com/arnaucode/commonroutesWebApp.git
RUN cd commonroutesLandingPage/commonroutesWebApp && \
    npm install && \
    bower install --allow-root

RUN cd commonroutesLandingPage && \
    mv commonroutesWebApp app

CMD http-server $PUBLIC_FOLDER

EXPOSE 8085

#docker build -t landingpage .
#docker run -ti -d -p 80:8080 landingpage
