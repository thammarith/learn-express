# learn-express

## Setup

### Pre-requisites

- [PostgreSQL](https://www.postgresql.org/download)
- NPM
- Node
- git

### Running

Cd to `learn-express/` and run `npm install`.

Rename `.env.example` to `.env`.

After the installation, you should be able to run `node src/index.js`.

In the console, it should say something like **`Example app listening at http://localhost:3000`**.

If you see the message, try visiting [http://localhost:3000](http://localhost:3000) and you should see **Hello, world!**.

Now, run program **pgAdmin 4**. Wait for a comple of seconds, the browser should open the dasboard for controlling the database automatically.

Now, if you can run sucessfully, congratulations! Now you can proceed to the next steps

### Database

Create a new database with name `courselagoon_dev` (skip this if it already exists).

![image](https://user-images.githubusercontent.com/8011543/101188495-61d91180-3688-11eb-9260-126d31fb7779.png)

Then, create a table named `users`

![image](https://user-images.githubusercontent.com/8011543/101190602-29870280-368b-11eb-91a4-f11d67c587ed.png)

with the following script

```sql
CREATE TABLE public.users
(
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    username text NOT NULL,
    password text NOT NULL,
    data json,
    PRIMARY KEY (user_id)
);

ALTER TABLE public.users
    OWNER to postgres;
```

Then try running,

```sql
SELECT * FROM users
```

and see if there is any error.

If all of the steps above work, congratulations! you can now work on the next section.

## Development

Now, go to the file `.env` (previously `.env.example`). You should see something like this

```env
PGHOST=localhost
PGUSER=postgres
PGDATABASE=courselagoon_dev
PGPASSWORD=pg1234
PGPORT=5432
```

Change the `PGPASSWORD` data to the password you set earlier.

Now, try visiting [localhost:3000/users](http://localhost:3000/users) and see if there is any error. If not, you're amazing! Congrats!

If you have any errors, please let me know, I'll help you.

---

Go to the `index.js` file and then try changing the word `Hello, world` in

```javascipt
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
```

to some thing else. **Run `node src/index.js` again**. See if there are any changes to [localhost:3000](http://localhost:3000).

If your changes have been reflected, you're doing it right!

### Tasks

Now, try to create a simple API to GET (retrieve data), POST (add data), PUT (update data), and DELETE (remove data) using the boilerplate provided.

Please do let me know if you're stuck. I'll help you.

## Resources

- [Express.js](https://expressjs.com/en/starter/hello-world.html)
- [pg](https://node-postgres.com/features/queries), a Node.js PostgreSQL library
