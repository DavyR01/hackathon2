const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (brand, model, mileage, technicalData, localisation, isAvailable, inRepair)
    VALUES(?, ?, ?, ?, ?, ?, ?)`,
      [
        vehicle.brand,
        vehicle.model,
        vehicle.mileage,
        vehicle.technicalData,
        vehicle.localisation,
        vehicle.isAvailable,
        vehicle.inRepair,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET brand = ?, model = ?,
      mileage = ?, technicalData = ?, localisation = ?, isAvailable = ?, inRepair = ? WHERE id = ? `,
      [
        vehicle.brand,
        vehicle.model,
        vehicle.mileage,
        vehicle.technicalData,
        vehicle.localisation,
        vehicle.isAvailable,
        vehicle.inRepair,
      ]
    );
  }
}

module.exports = VehicleManager;
