const express = require('express');
const fs = require('fs');
const app1 = express();
app1.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`));

app1.get('/api', (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        result: tours.length,
        data: {
            tours
        }
    });
});

app1.get('/api/:id', (req, res) => {
    const id = req.params.id*1;
    console.log(req.params);
    const tour = tours.find(el => el.id === id);
    if(!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});

app1.post('/api/post/', (req, res) => {
    const newId = tours[tours.length -1].id+1;
    const newTour = Object.assign({id: newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${dirname}/dev-data/data.json`,JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success', 
            data: {
                tours: newTour
            }
        });
    });
});

app1.patch('/api/patch/', (req, res) => {
    if (req.params.id*1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour:'<Updated tour here...>'
        }
    });
});

app1.delete('/api/delete/', (req, res) => {
    if(req.params.id*1 > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid'
        });
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

const port = 3000;
app1.listen(port, () => {
    console.log(`App running on ` + port + ` ...`);
});
