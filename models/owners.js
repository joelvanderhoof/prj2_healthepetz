module.exports = function(sequelize, DataTypes) {
  var owners = sequelize.define("owners", {

    owner_fname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [1,50]}
  },
   owner_lname: {
    type: DataTypes.STRING,
    allowNull: false,
     validate: {len: [1,100]}
  },
   owner_dob: {
    type: DataTypes.DATEONLY,
  },
   owner_sex: {
    type: DataTypes.STRING,
     validate: {len: [1]}
  },
   address: {
    type: DataTypes.STRING,
     validate: {len: [1,100]}
  },
   city: {
    type: DataTypes.STRING,
     validate: {len: [1,100]}
  },
   state: {
    type: DataTypes.STRING,
     validate: {len: [2]}
  },
   zip: {
    type: DataTypes.STRING,
     validate: {len: [1,10]}
  },
   phone: {
    type: DataTypes.STRING,
     validate: {len: [1,15]}
  },
   email: {
    type: DataTypes.STRING,
     validate: {isEmail: true}
  },
   fax: {
    type: DataTypes.STRING,
     validate: {len: [1,15]}
  }
});

owners.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    owners.belongsTo(models.Users, {
      foreignKey: {
        allowNull: true
      }
    });
  }

// Syncs with DB
 return owners;
};