function part1(data) {
    const guardLog = generateGuardLogs(data);

    const totalSleepTimes = getTotalSleepTimes(guardLog);
    const longestSleeper = getEntryWithLargestValue(totalSleepTimes);

    const sleepyGuardsLog = guardLog.get(longestSleeper[0]);
    const longestMinute = getEntryWithLargestValue(sleepyGuardsLog);

    return Number(longestSleeper[0]) * longestMinute[0];
}

function generateGuardLogs(data) {
    const observations = data.split("\n").map(parseInput);
    observations.sort(sortByTimestamp);
    const guardLog = initGuardLog(observations);
    populateMinutes(observations, guardLog);
    return guardLog;
}

function parseInput(observation) {
    const timestampRe = /(?<=\[).*?(?=\])/;
    const beginsRe = /begins/;
    const sleepRe = /sleep/;
    const idRe = /(?<=#)\d+/;
    const isBeginShift = beginsRe.test(observation);
    return {
        timestamp: new Date(timestampRe.exec(observation)[0]),
        isBeginShift: isBeginShift,
        isSleep: sleepRe.test(observation),
        guardId: isBeginShift ? idRe.exec(observation)[0] : null
    };
}

function sortByTimestamp(a, b) {
    if (a.timestamp < b.timestamp) return -1;
    if (a.timestamp > b.timestamp) return 1;
    return 0;
}

function initGuardLog(observations) {
    const guardIds = observations
        .filter(o => o.guardId)
        .map(o => [o.guardId, new Map()]);
    const guardLog = new Map(guardIds);
    return guardLog;
}

function populateMinutes(observations, guardLog) {
    let guard = null;
    let sleepTime = null;
    observations.forEach(observation => {
        if (observation.isBeginShift) {
            guard = guardLog.get(observation.guardId);
            return;
        }
        if (observation.isSleep) {
            sleepTime = observation.timestamp;
            return;
        }
        if (!observation.isSleep) {
            const sleepMin = (observation.timestamp - sleepTime) / 1000 / 60;
            const startMin = sleepTime.getMinutes();
            for (let i = startMin; i < startMin + sleepMin; i++) {
                let minute = i % 60;
                if (!guard.has(minute)) {
                    guard.set(minute, 1);
                } else {
                    let count = guard.get(minute);
                    guard.set(minute, ++count);
                }
            }
        }
    });
}

function getTotalSleepTimes(guardLog) {
    const totalSleepTimes = new Map();
    for (const [id, minutes] of guardLog) {
        const vals = Array.from(minutes.values());
        const min = vals.reduce((acc, curr) => acc + curr, 0);
        totalSleepTimes.set(id, min);
    }
    return totalSleepTimes;
}

function getEntryWithLargestValue(map) {
    const entries = Array.from(map.entries());
    return entries.reduce(
        (longest, curr) => (longest[1] > curr[1] ? longest : curr),
        [0, 0]
    );
}

function part2(data) {
    const guardLog = generateGuardLogs(data);
    const mostSleptMinuteLog = getMostSleptMinuteLog(guardLog);
    const mostSleptMinute = getMostSleptMinute(mostSleptMinuteLog);
    return Number(mostSleptMinute[0]) * mostSleptMinute[1][0];
}

function getMostSleptMinuteLog(guardLog) {
    let mostSleptMinuteLog = new Map();
    for (const [id, log] of guardLog) {
        mostSleptMinuteLog.set(id, getEntryWithLargestValue(log));
    }
    return mostSleptMinuteLog;
}

function getMostSleptMinute(mostSleptMinuteLog) {
    const mostSleptMinuteArr = Array.from(mostSleptMinuteLog.entries());
    const mostSleptMinute = mostSleptMinuteArr.reduce((acc, curr) =>
        acc[1][1] > curr[1][1] ? acc : curr
    );
    return mostSleptMinute;
}

module.exports = {
    part1: part1,
    part2: part2
};
