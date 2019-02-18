import { ChatServer } from './server';

let app = new ChatServer().getApp();

app.get('/',(req,res)=> {
    res.send('server is running');
});

export { app };