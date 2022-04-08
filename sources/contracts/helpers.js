const path = require('path');

function slug(str) {
    return str.replace(/\W/g, '-');
}

module.exports = {
    dirname(str) {
        const dirname = path.dirname(str);
        if (dirname == '.') return '';
        return dirname;
    },
    lower(str) {
        return str.toLowerCase();
    },
    pathToSlug(str) {
        const parsed = path.parse(str);
        return slug(path.join(parsed.dir, parsed.name)).toLowerCase();
    },
    pathToId(str) {
        const parsed = path.parse(str);
        return path.join(parsed.dir, parsed.name).replace("/", ".");
    }
};
