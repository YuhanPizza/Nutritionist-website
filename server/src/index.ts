import express, {Request, Response} from "express";
const app = express();

app.get('/',(req: Request, res: Response) => {
    res.send("Poopy");
});
app.listen(5000);