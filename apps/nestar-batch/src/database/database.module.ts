import { Module } from '@nestjs/common';
import {InjectConnection, MongooseModule} from "@nestjs/mongoose"
import { Connection } from 'mongoose'

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: process.env.NODE_ENV === "production" 
                ? process.env.MONGO_PROD : process.env.MONGO_DEV,
            }),
        })
    ],
    exports: [MongooseModule],
})
export class DatabaseModule {
    constructor(@InjectConnection() private readonly connection : Connection) {
        if(connection.readyState === 1) {
            console.log(`Mongo is Connected into  
                ${process.env.NODE_ENV === 'production' ? 'production' :  'develoment'} db `)
        } else {
            console.log('DB is Not Connected!');
        }
    }
}
