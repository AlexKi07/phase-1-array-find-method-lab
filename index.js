// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2019", result: "W"},
    { year: "2021", result: "L"},
    { year: "2022", result: "L"},
    { year: "2023", result: "L"},
    { year: "2024", result: "L"},
]

function superbowlWin(record){
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}