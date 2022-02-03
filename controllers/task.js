const fs = require('fs')

module.exports = {
    task1: (reading) => {
        console.log("task1")
        try {
            const actualReading = Number(reading.toString().replace("5", "4"));
            return { actualReading };
        } catch (error) {
            throw error;
        }
    },
    task2: () => {
        console.log("task2")
        try {
            const data = fs.readFileSync('uploads/random.txt', 'utf-8');
            let writer = fs.createWriteStream('uploads/result.txt')
            for (let i = 0; i <= 99; i++) {
                var strRegExPattern = '\\b' + i + '\\b';
                let result = data.match(new RegExp(strRegExPattern, 'g'));
                if (result) {
                    let count = result.length;
                    writer.write(`${i}\n`.repeat(count));
                }
            }
        } catch (error) {
            throw error;
        }
    },
    task3: () => {
        console.log("task3")
        try {
            const data = fs.readFileSync('uploads/log.txt', 'utf-8');
            let strings = data.match(/SprintsController#[\s\S]*? /g);
            let actions = [];
            for (var string = 0; string < strings.length; string++) {
                result = strings[string].toString().trim().replace("SprintsController#", "");
                let index = actions.findIndex(x => x.action == result);
                if (index > -1) {
                    actions[index].count++;
                } else {
                    actions.push({ action: result, count: 1 })
                }
            }
            actions.forEach(actionDetail => {
                console.log(`SprintsController => ${actionDetail.action} action ran ${actionDetail.count} times`);
            });
        } catch (error) {
            throw error;
        }
    }
}