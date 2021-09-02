const timeConverter = (UnixTime) => {
    const data = new Date(UnixTime * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = data.getFullYear();
    const month = months[data.getMonth()];
    const date = data.getDate();
    const hour = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

export {timeConverter}
