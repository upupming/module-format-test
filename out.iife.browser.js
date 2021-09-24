(() => {
  // a.js
  var a = () => console.log("a");

  // index.js
  console.log("index.js");
  function main() {
    a();
    console.log("main");
  }
})();
