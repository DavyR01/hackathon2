const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, user_id)
    VALUES(?,?,?)`,
      [vehicle.title, vehicle.content, vehicle.user_id]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET title = ?, content = ?,
      user_id = ? WHERE id = ? `,
      [vehicle.title, vehicle.content, vehicle.user_id, vehicle.id]
    );
  }
}

module.exports = VehicleManager;
