const replaceTemplates = (Tempcard,Prodarr) => {
    let op = Tempcard.replace(/{%PRODUCTNAME%}/g,Prodarr.productName);
    op = op.replace(/{%IMAGE%}/g,Prodarr.image);
    op = op.replace(/{%PRICE%}/g,Prodarr.price);
    op = op.replace(/{%LOCATION%}/g,Prodarr.from);
    op = op.replace(/{%NUTRIENTS%}/g,Prodarr.nutrients);
    op = op.replace(/{%QUANTITY%}/g,Prodarr.quantity);
    op = op.replace(/{%DESCRIPTION%}/g,Prodarr.description);
    op = op.replace(/{%ID%}/g,Prodarr.id);
    if(!Prodarr.organic) op = op.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return op;
}

module.exports = replaceTemplates;