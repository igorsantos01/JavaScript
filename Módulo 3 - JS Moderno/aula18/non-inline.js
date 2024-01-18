function group() {
  console.log("Exportando nomeada non-inline");
}
function groupTwo() {
  console.log("Exportando segunda non-inline");
}

function exportDefault() {
  console.log("Exportando default non-inline");
}

export { group, groupTwo };
export default exportDefault;
