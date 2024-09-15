const fs = require('fs');
const path = require('path');
const sequelize = require('./config/db');

// Function to synchronize models with the database
const syncModels = async () => {
    try {
        // Get list of model files in the models folder
        const modelsDir = path.join(__dirname, './models');

        const modelFiles = fs.readdirSync(modelsDir).filter(file => file.endsWith('.js'));


        // Import each model and synchronize it with the database
        for (const file of modelFiles) {
            const modelPath = path.join(modelsDir, file);
            const model = require(modelPath);
            console.log(`${model}`);
            if (typeof model === 'function') {
                await model.sync({ alter: true }); // Synchronize the model with the database
                console.log(`Table created for model: ${file}`);
            } else {
                console.error(`Error: Model file "${file}" does not export a function.`);
            }
            //   await model.sync({ alter: true }); // Synchronize the model with the database
            //   console.log(`Table created for model: ${file}`);
        }

        console.log('All tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    } finally {
        // Close the Sequelize connection
        await sequelize.close();
    }
};

// Call the syncModels function to create tables
syncModels();
