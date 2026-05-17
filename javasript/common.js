// shortcut function
let $ = (id) => document.getElementById(id);

// get and set value
let val = (id, text = null) =>
{
    if (text === null)
        return $(id).value;
    else
        $(id).value = text;
}

// get and set html
let html = (id, text = null) =>
{
    if (text === null)
        return $(id).innerHTML;
    else
        $(id).innerHTML = text;
}