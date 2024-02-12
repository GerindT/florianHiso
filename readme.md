# Florian Hiso portfolio site

Build for the best professor that exist and will exist

## Info

The frontend was build with `Daisy UI` and `Typescript` on top of `React`.
It is deployed on netlify.

## Install

Dependencies Nodejs 18.x.

To run frontend:

- `npm i`
- `npm run dev`

## Deployment

Frontend using netlify cli (needs to be installed globally)

- `npm run build`

- `ntl deploy --prod`

## Backup

Backups are maintained every 90 days using the postgres CLI:

- Create the local dump file -> `pg_dump --no-owner -U postgres -d api > apiSql.sql`

- Connect to remote database to dump the local sql file

- `\c TempDatabase ` -> `Drop prodDatabase` -> `Create prodDatabase` -> `\c prodDatabase` -> `\i ./apiSql.sql`

## Enjoy 🥳

> for every ε>0, there exists a δ>0, such that if 0<|x−a|<δ, then |f(x)−L|<ε .
> QED

![cofi](https://pg.edu.pl/files/cnm/2021-12/limit%20at%20a%20point.gif)
