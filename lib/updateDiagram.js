
(function(exports) {
  function updateDiagram() {

    var stringy = ''
    var sparqlCode = ``
    var spoarray = []

    for(var i=0; i < getClasses().length; i++) {
      var row = getClasses()[i] + '->' + getCollaborators()[i] + ':' + getResponsibilities()[i]
      stringy += row +'\n'
      if (getClasses().filter(string => string === getClasses()[i]).length <= 1){
        sparqlCode += `
.
?${getClasses()[i].toLowerCase()} a :${getClasses()[i][0].toUpperCase()}${getClasses()[i].slice(1)};
`
      }
      sparqlCode += `?${getClasses()[i].toLowerCase()} :${getResponsibilities()[i]} ?${getCollaborators()[i].toLowerCase()};
`

    spo = {'s': getClasses()[i].toLowerCase(), 'properties': [{ 'p':getResponsibilities()[i], 'o':getCollaborators()[i].toLowerCase() }]}
    spoarray.push(spo)
    }

    for(var i = 0; i < spoarray.length; i++ ) {

    }


    console.log(spoarray)
    console.log(sparqlCode)
    return  stringy;

  }

  exports.updateDiagram = updateDiagram;
})(this)
