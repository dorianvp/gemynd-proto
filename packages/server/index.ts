import express from 'express'
import cors from 'cors'
import { file } from 'bun';

const app = express();

app.use(cors({

}))

app.options('/:page', function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader("Access-Control-Allow-Headers", "*");
	res.end();
});

app.get('/:page', async (req, res) => {
	try {

		const page = req.params.page;
		const doc = await file(`pages/${page}.html`).text()
		res.send(doc)
	} catch (error) {
		res.sendStatus(404)
	}
})

app.listen(3001, () => {
	console.log('listening on port http://localhost:3001');

})