const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city, phone, isAdmin, avatar, date_creation, vehicle_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, city, phone, isAdmin, avatar, date_creation, vehicle_id from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (id, firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, vehicle_id) values (?, ?, ?, ?, ?, ?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.phone,
        user.hashedPassword,
        user.isAdmin,
        user.avatar,
        user.date_creation,
        user.vehicke_id,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, city = ?, phone = ?, hashedPassword = ?, isAdmin = ?, avatar = ?, date_creation = ?, vehicle_id = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.phone,
        user.hashedPassword,
        user.isAdmin,
        user.avatar,
        user.date_creation,
        user.vehicke_id,
      ]
    );
  }

  updateAvatar(id, avatar) {
    return this.connection.query(
      `update ${this.table} set avatar = ? where id = ?`,
      [avatar, id]
    );
  }
}

module.exports = UserManager;
