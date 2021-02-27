import request from 'supertest'
import { app } from '../app'
import createConnection from '../database';

describe("Users", () =>{
    beforeAll( async () =>{
        const connetion = await createConnection();
        await connetion.runMigrations();
    })
    
    const response = request(app).post("/users").send({
        email: "user@examplo.com",
        name: "User Example"
    })




})