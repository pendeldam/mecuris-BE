# mecuris-BE

### Setup:

> * npm i
> * rename **.dot-env** to **.env**
> * run this command to build mongodb with docker:  
>  * _`docker-compose -f docker-compose.yml up -d`_
> * clone mecuris-three-FE repository (https://github.com/pendeldam/mecuris-three-FE)
> * place its content inside client folder in the project folder
> * run inside client folder npm run i
> * run inside project folder npm run dev

### App components:

Backend part of application includes Express server and MongoDB instance.
Since we need to save different model structures NoSQL solution was chosen.
It used classic MVC approach with React-application on the frontend side.
It allows to get list of models, view each of them, save and delete.

For now there's implemented only changing color functionality.

Database stores simple model's configuration:
    - geometry (width, height, radius)
    - scale and color

It allows to store only primitives like spheres or boxes.
More complex models need individual schemas and more detailed approach.
