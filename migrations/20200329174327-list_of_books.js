const XLSX = require('xlsx');

const workbook = XLSX.readFile('books.xlsx');
const sheetNameList = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

module.exports = {
    async up(db) {
        await db.createCollection('booksmodel',
            {
                capped: false,
            });

        await xlData.forEach((value) => {
            db.collection('booksmodel').insertOne({
                code3: value.code3,
                title: value.title,
                description: value.description,
                createdAt: new Date().toLocaleDateString('it-IT'),
            }, {
                $set: {
                    blacklisted: false,
                },
            });
        });
    },

    async down(db) {
        await db.collection('booksmodel').drop();
    },
};
