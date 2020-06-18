var _randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

var _getCPF = function(){
    var n1 = Math.round(Math.random()*9);
    var n2 = Math.round(Math.random()*9);
    var n3 = Math.round(Math.random()*9);
    var n4 = Math.round(Math.random()*9);
    var n5 = Math.round(Math.random()*9);
    var n6 = Math.round(Math.random()*9);
    var n7 = Math.round(Math.random()*9);
    var n8 = Math.round(Math.random()*9);
    var n9 = Math.round(Math.random()*9);

    var aux = n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
    aux = _mod(aux, 11);
    var nv1 = aux < 2 ? 0 : 11 - aux;

    aux = n1 * 11 + n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + nv1 * 2;
    aux = _mod(aux, 11);
    var nv2 = aux < 2 ? 0 : 11 - aux;

    return ""+n1+n2+n3+n4+n5+n6+n7+n8+n9+nv1+nv2;
};

var _getRandomNumber = function (max) {
    return Math.floor(Math.random() * max) + 1;
};

var _firstNameList = ["Arnold", "Bruce", "Silvester", "Denzel", "Chuck", "Clint", "Robert", "Samuel", "Steven"];
var _lastNameList = ["Schwarzenegger", "Willys", "Stallone", "Washington", "Norris", "Eastwood", "De Niro", "L. Jackson", "Seagal"];

var _getRandomName = function () {
    return _firstNameList[_getRandomNumber(_firstNameList.length-1)] + " " + _lastNameList[_getRandomNumber(_lastNameList.length-1)];
};

var _firstCompanyNameList = ["Terminator", "Hard", "Machine", "Space", "White Dragon", "Robotics", "Trek", "Star", "Mickey"];
var _lastCompanyNameList = ["Company", "Enterprise", "Inc.", "Associate", "Industries"];

var _getRandomCompanyName = function () {
    return _firstCompanyNameList[_getRandomNumber(_firstCompanyNameList.length-1)] + " " + _lastCompanyNameList[_getRandomNumber(_lastCompanyNameList.length-1)];
};


module.exports = {
    randomDate: _randomDate,
    getCPF: _getCPF,
    getRandomName: _getRandomName,
    getRandomCompanyName: _getRandomCompanyName,
    getRandomNumber: _getRandomNumber
};