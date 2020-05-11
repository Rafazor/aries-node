'use strict'

module.exports.formattedDate = formattedDate;

function formattedDate() {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
