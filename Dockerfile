FROM public.ecr.aws/docker/library/node
WORKDIR /usr/local/app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "prod"]