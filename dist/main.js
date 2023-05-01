<<<<<<< HEAD
(() => {
  "use strict";
<<<<<<< HEAD
  var e = require("react-dom/client"),
    r = u(require("react")),
    t = u(require("./loginPage"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  (0, e.render)(
    r.default.createElement(t.default, null),
    document.getElementById("root")
  );
=======
  var e = r(require("react-dom"));
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var t = r(require("react")).default.createElement("div", null, "hello"),
    u = document.getElementById("root");
  e.default.render(t, u);
>>>>>>> 98f14715 (successed server response, but browser cannot read ESM js file)
})();
=======
(()=>{"use strict";var e=r(require("react-dom"));function r(e){return e&&e.__esModule?e:{default:e}}var t=r(require("react")).default.createElement("div",null,"hello"),u=document.getElementById("root");e.default.render(t,u)})();
>>>>>>> cc6bd837 (npm)
