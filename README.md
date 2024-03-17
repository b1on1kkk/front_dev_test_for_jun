# Documentation

+ [Thoughts && Additions](#Thoughts)
+ [Stack](#Stack)
+ [How to build](#Result)


## Thoughts

Firstly, I hope that I understood all tasks correctly and completed them according to the specified requirements :)

Secondly, is it ok if I used Prisma in this project? Hope this is not a big deal, if it is - I ready to redo the task

Thirdly, in requirements you've sayed that state manager should be Redux. I implemented it, but have one quesiton: is it truly necessary? If data fetching occurs within a single component - in this component you use it, you don't bother about sharing it with other components. I think that it is overhead to use Redux in this small test task. Nevertheless, it is the best way to see how candidate can deal with it :)

## Stack

Frontend: ReactTS (Vite), Redux, react-router-dom, tailwind 

Backend: Nest JS (TypeScript), PrismaORM (just easier to write queries), MySQL, 


## Result

When I finish my projects, I thought as end user: would it be convenient for me to build/run the application myself to see how it works? Of course not, therefore I've prepared two ways how can you see the result of my work.

First variant - just visit [web-page](https://frontdevtestforjun.netlify.app/) and see result.

Second variant - clone this repo, enter command below and build project localy on you machine. 

<font color="red">WARNING: THIS SOLUTION WORKS ONLY AND ONLY WHEN YOU HAVE INSTALLED DOCKER ENGINE ON YOUR MACHINE, IF YOU DON'T WANT SPEND TOO MUCH TIME TO INSTALL/SET IT UP - JUST CLICK THE LINK ABOVE.</font>

```cmd
  docker-compose up -d
```
