<h1 align="center"> api-trpc-node-typeorm </h1>

<p align="center"><img src="https://trpc.io/img/logo.svg" width="50" height="50"/> • <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="50" height="35"/> • <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="50" height="50"/> • <img src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4" width="50" height="50"/> </p>

<h2 align="center"> A simple API using <a href="https://trpc.io/">tRPC</a>, NodeJS, TS & TypeORM w/ local MySQL database </h2>

***

> <h3 align="left"> EndPoint tRPC playground </h3>
~~~ts
\playgroung
~~~

> <h3 align="left"> Functions </h3>

- <h4 align="left"> getUsers </h4>
    Retrieves a list of all users.  
    
    :mag_right: Request:
    ~~~ts
    await trpc.getUsers.query()
    ~~~
    
    :mag: Response: 
    ~~~ts
      [
        {
          id: <user_id>,
          name: <user_name>
        },
        {
          id: <user_id>,
          name: <user_name>
        }
      ]
    ~~~
    
- <h4 align="left"> getUser(id: number) </h4>
    Retrieves a user with the specified id. 
    
    :mag_right: Request:
    ~~~ts
    await trpc.getUser.query(<user_id>)
    ~~~
    
    :mag: Response: 
    ~~~ts
        {
          id: <user_id>,
          name: <user_name>
        }
    ~~~
    
- <h4 align="left"> deleteUser(id: number) </h4>
    Deletes the user with the specified id.
    
    :mag_right: Request:
    ~~~ts
    await trpc.deleteUser.query(<user_id>)
    ~~~
    
    :mag: Response: 
    ~~~ts
    {
      result: true
    }
    ~~~
    
- <h4 align="left"> updateUser(id: number, name: string) </h4>
    Updates the name of the user with the specified id.
    
    :mag_right: Request:
    ~~~ts
    await trpc.updateUser.query(<user_id>, <user_name>)
    ~~~
    
    :mag: Response: 
    ~~~ts
    {
      id: <user_id>,
      name: <new_user_name>
    }
    ~~~    
    
- <h4 align="left"> createUser(name: string) </h4>
    Creates a new user with the specified  name.
    
    :mag_right: Request:
    ~~~ts
    await trpc.createUser.query(<user_name>)
    ~~~
    
    :mag: Response: 
    ~~~ts
    {
      id: <user_id>,
      name: <user_name>
    }
    ~~~ 
