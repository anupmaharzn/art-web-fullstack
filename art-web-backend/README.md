### ART-APP

### TO INSTALL PACKAGE

`npm install`

### SET UP YOUR ENVIRONMENT VARIABLE BY CREATE .env file extension in root

### TO START SERVER

`npm run dev`

### first make sequelizerc file and configure it

### To initalize DATABASE FILES

`npx sequelize-cli  init`

### configure database.config.js file

### To CREATE A DATBASE

`npx sequelize-cli db:create`

### TO CREATE A MODEL:GENERATE MIGRATION FILE

`npx sequelize-cli model:generate --name tabelname --attributes columnnames:datatypes `

### TO MIGRATE MODEL:Run pending migrations

`npx sequelize-cli db:migrate`

### TO revert all migrations ran

`npx sequelize-cli db:migrate:undo:all`

### TO create seed

`npx sequelize-cli seed:generate --name filename`

### To run seed

`npx sequelize-cli db:seed:all `

### to undo seed

`npx sequelize-cli db:seed:undo:all `
