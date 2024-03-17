# Documentation

+ [Thoughts && Additions](#Thoughts)
+ [Stack](#Stack)
+ [API](#API)
+ [Visualisation](#Visualisation)
+ [How to build](#Result)


## Thoughts

Firstly, I hope that I understood all tasks correctly and completed them according to the specified requirements :)

Secondly, is it ok if I used Prisma in this project? Hope this is not a big deal, if it is - I ready to redo the task

> [!NOTE]
> 
> Thirdly, in requirements you've sayed that state manager should be Redux. I implemented it, but have one quesiton: is it truly necessary? If data fetching occurs within a single component - in this component you use it, you don't bother about sharing it with other components. I think that it is overhead to use Redux in this small test task. Nevertheless, it is the best way to see how candidate can deal with it :)


## Stack

Frontend: ReactTS (Vite), Redux, react-router-dom, tailwind 

Backend: Nest JS (TypeScript), PrismaORM (just easier to write queries), MySQL, 


## API

### GET
Get list of ALL entities
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/get-entity/all_entities
```

Get list of matched points and the list of matched labels
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/get-entity/entity_filtered?x1=[value]&x2=[value]&y1=[value]&y2=[value]
```

Get single entity by id
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/get-entity/entity/:[your_id]
```

### POST
Create brand new entity
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/create-entity
```
> [!CAUTION]
> ```javascript
>  body: {
>    name: string,
>    x_coordinate: number,
>    y_coordinate: number,
>    label: string (each label divide by comma)
>  };
> ```

### PUT
Edit exist entity by id
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/edit-entity/change_all/:[your_id]
```
> [!CAUTION]
> ```javascript
>  body: {
>    name: string,
>    x_coordinate: number,
>    y_coordinate: number,
>    label: string (each label divide by comma)
>  };
> ```

### DELETE
Delete exist entity by id
```cmd
  https://front-dev-test-b1on1kkk-api.up.railway.app/remove-entity/:[your_id]
```


## Visualisation

### Main page with all entities:

![image](https://github.com/b1on1kkk/front_dev_test_for_jun/assets/114521829/1eec17cc-f7d8-4ec2-9dd8-45dc1bc4303d)

### Form to add new entity:

![image](https://github.com/b1on1kkk/front_dev_test_for_jun/assets/114521829/490cf165-f7cc-4e6b-a2f5-d909ec2eec73)

### Page to show one entity:

![image](https://github.com/b1on1kkk/front_dev_test_for_jun/assets/114521829/cad91eb0-493a-4507-bca6-ce1d61a4b4fa)

### Visualisation of all dataset using Canvas:

![image](https://github.com/b1on1kkk/front_dev_test_for_jun/assets/114521829/71b51c50-fec7-4728-901c-19fb36652079)

### Visualisation of matched points:

![image](https://github.com/b1on1kkk/front_dev_test_for_jun/assets/114521829/ef9a8f60-1db4-40ac-88e6-41e23c4f76f9)


## Result

When I finish my projects, I thought as end user: would it be convenient for me to build/run the application myself to see how it works? Of course not, therefore I've prepared two ways how can you see the result of my work.

First variant - just visit [web-page](https://frontdevtestforjun.netlify.app/) and see result.

Second variant - clone this repo, enter command below and build project localy on you machine. 

> [!IMPORTANT]
>
> This solution works only and only when you have installed Docker engine on you machine, If you don't want to spent too much time to install/set it up - just click the link above.

```cmd
  docker-compose up -d
```
