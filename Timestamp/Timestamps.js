function Timeline() {
    let now = new Date();
    return (now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()+ ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()   );
}
const timeline = Timeline();
module.exports = timeline;