const client = require("../../db/client");

//-------------get all vehicle info from db-------------------------------------//
const getAllVehicles = async (req, res) => {
  
  const base = JSON.parse(req.headers.base);
  console.log(base.name)
  try {
    const all = await client.query(`SELECT * FROM ${base.name} ORDER BY date`);
    res.status(200).send(all.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

//-------------add new vehicle to db--------------------------------------------//

const addVehicle = async (req, res) => {
  const base = JSON.parse(req.headers.base);
  const vehicle = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    drivers_license: req.body.drivers_license,
    plate: req.body.plate,
    make: req.body.make,
    model: req.body.model,
    state: req.body.state,
    date: req.body.date,
  };

  try {
    let result = await client.query(
      `INSERT INTO ${base.name} (first_name, last_name, drivers_license, plate, make, model, state, date) values('${vehicle.first_name}', '${vehicle.last_name}', '${vehicle.drivers_license}', '${vehicle.plate}', '${vehicle.make}', '${vehicle.model}', '${vehicle.state}', '${vehicle.date}')`
    );

    res.status(200).send(result);
    console.log(`${vehicle} has been posted to DB`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  addVehicle,
  getAllVehicles,
};
