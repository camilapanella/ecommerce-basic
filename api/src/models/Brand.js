const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "brand",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo_url: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
