const format_slug = function(url) {
    return url.split('/')[2] + '~' + url.split('/')[3];
} 

export default format_slug;