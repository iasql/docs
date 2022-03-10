---
sidebar_position: 1
slug: '/cli'
---

# CLI API

```bash
iasql 0.2.5
Manage cloud infrastructure via a hosted PostgreSQL DB

USAGE:
    iasql <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    new          Connect a hosted db to a cloud account
    remove       Remove a hosted db to stop managing the connected cloud account [aliases: rm]
    dbs          List all hosted dbs
    apply        Create, delete or update the cloud resources in a hosted db
    plan         Display a preview of the resources in a db to be modified on the next `apply`
    sync         Synchronize a hosted db with the current state of the cloud account
    install      Install mods in a given hosted db
    uninstall    Uninstall mods from a given hosted db
    mods         List all modules or list the modules installed in a given hosted db
    export       Dump a hosted db to backup the infrastructure in the connect account
    login        Obtain and save credentials for hosted IaSQL engine
    logout       Remove locally-stored credentials for the hosted IaSQL engine
    help         Prints this message or the help of the given subcommand(s)
```
