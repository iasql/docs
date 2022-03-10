---
sidebar_position: 1
slug: '/connect'
---

# Connecting to a database

The required information to connect to a PostgreSQL IaSQL database will provided at the end of `iasql new` when provisioning the database connected to your AWS account. IaSQL does not store your database credentials so they will only be displayed when they are created. If you lose the credentials, you can recreate the database by running `iasql rm` and then `iasql new` again using the same region and AWS credentials.

```bash
$ iasql new
Manage a cloud account with a hosted IaSQL DB...

✔ AWS CLI credentials found. Pick named profile · default
✔ Pick AWS region to manage with hosted db · us-east-1
✔ Name for hosted IaSQL db · startup
✔ Done
┌─────────────────┬───────────────────┬──────────┬──────────────────┐
│ Database Server │ Database Name     │ Username │ Password         │
├─────────────────┼───────────────────┼──────────┼──────────────────┤
│ db.iasql.com    │ _4b2bb09a59a411e4 │ d0va6ywg │ nfdDh#EP4CyzveFr │
└─────────────────┴───────────────────┴──────────┴──────────────────┘
✔ As a PG connection string · postgres://d0va6ywg:nfdDh#EP4CyzveFr@db.iasql.com/_4b2bb09a59a411e4
! This is the only time we will show you these credentials, be sure to save them.
```

## PostgreSQL Clients

PostgreSQL has a built-in command line client, `psql`, which you can use to connect to your database and run queries. To install `psql` in your command line follow the instructions for your corresponding OS [here](https://www.postgresql.org/download/).

One of the reasons we built IaSQL on an unmodified PG is because of the vast ecosystem we get to stand on. This [PostgreSQL Client wiki](https://wiki.postgresql.org/wiki/PostgreSQL_Clients) contains an extensive list of all the different clients you can use to connect to a PG database provisioned with IaSQL. The IaSQL team personally uses and recommends [Arctype](https://arctype.com) and [Beekeeper Studio](https://www.beekeeperstudio.io).