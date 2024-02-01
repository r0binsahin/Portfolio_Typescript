// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"goQ56":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0e49c2a5ca39cc5e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4j3ZX":[function(require,module,exports) {
var _aboutModal = require("./functions/aboutModal");
var _contactIcons = require("./functions/contactIcons");
var _maintag = require("./functions/maintag");
var _contactModal = require("./functions/contactModal");
var _navbar = require("./functions/navbar");
var _projectCards = require("./functions/projectCards");
var _hideMobileNav = require("./functions/hideMobileNav");
var _displayLinkBox = require("./functions/displayLinkBox");
var _displayMySkills = require("./functions/displayMySkills");
var _desktopContactModal = require("./functions/desktopContactModal");
var _displayOtherProjects = require("./functions/displayOtherProjects");
(0, _navbar.displayMobileNav)();
(0, _hideMobileNav.hideMobileNav)();
(0, _maintag.mainTag)();
(0, _desktopContactModal.desktopContactModalToggle)();
(0, _projectCards.projectCards)();
(0, _displayMySkills.displayMySkills)();
(0, _displayOtherProjects.displayOtherProjects)();
(0, _contactIcons.contactIconsFooter)();
(0, _contactModal.modalToggle)();
(0, _aboutModal.aboutModalToggle)();
(0, _displayLinkBox.displayLinkBox)();

},{"./functions/aboutModal":"9AXIr","./functions/contactIcons":"emdxW","./functions/maintag":"7Vjnt","./functions/contactModal":"dyBTU","./functions/navbar":"1Ssib","./functions/projectCards":"kWasW","./functions/hideMobileNav":"dfFbb","./functions/displayLinkBox":"iSp4B","./functions/displayMySkills":"121O0","./functions/desktopContactModal":"1U903","./functions/displayOtherProjects":"kGBrV"}],"9AXIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutModalToggle", ()=>aboutModalToggle);
const aboutModalToggle = ()=>{
    const mobileAbout = document.querySelector(".mobileabout");
    const desktopAbout = document.querySelector(".about");
    const modalContainer = document.querySelector(".aboutModal");
    const closeBtn = document.querySelector(".aboutModal__content--close");
    mobileAbout.addEventListener("click", ()=>{
        modalContainer.classList.add("show");
    });
    modalContainer.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
    closeBtn.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
    desktopAbout.addEventListener("click", ()=>{
        modalContainer.classList.toggle("show");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"emdxW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contactIconsFooter", ()=>contactIconsFooter);
function contactIconsFooter() {
    const linkBox = document.createElement("div");
    const telBox = document.createElement("div");
    const personName = document.createElement("p");
    const telNo = document.createElement("p");
    const mailLink = document.createElement("a");
    const linkedInLink = document.createElement("a");
    const gitHubLink = document.createElement("a");
    telBox.classList.add("pageFoot__telBox");
    personName.classList.add("pageFoot__telBox--name");
    telNo.classList.add("pageFoot__telBox--tel");
    linkBox.classList.add("pageFoot__linkBox");
    mailLink.classList.add("pageFoot__linkBox--mailLink");
    linkedInLink.classList.add("pageFoot__linkBox--linkedinLink");
    gitHubLink.classList.add("pageFoot__linkBox--githubLink");
    personName.innerHTML = "Robin Sahin";
    telNo.innerHTML = "Tel : 072-298 35 93";
    mailLink.href = "mailto:robin.sahin88@gmail.com";
    mailLink.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
    linkedInLink.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
    linkedInLink.href = "https://www.linkedin.com/in/robin-sahin-15404a24b/";
    linkedInLink.target = "_blank";
    gitHubLink.innerHTML = `<i class="fa-brands fa-square-github"></i>`;
    gitHubLink.href = "https://github.com/r0binsahin";
    gitHubLink.target = "_blank";
    const pageFoot = document.querySelector(".pageFoot");
    pageFoot.append(telBox, linkBox);
    telBox.append(personName, telNo);
    linkBox.append(mailLink, linkedInLink, gitHubLink);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vjnt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainTag", ()=>mainTag);
function mainTag() {
    const mainText = document.querySelector(".mainText");
    const mainH1 = document.createElement("h1");
    const mainH3 = document.createElement("h3");
    const introText = document.createElement("p");
    mainH1.innerHTML = "Hi, I'm Robin!";
    mainH3.innerHTML = "Stockholm-based junior front-end developer";
    introText.innerHTML = ` I am a dedicated and curious junior front-end developer based in Stockholm and currently looking for new job opportunities. I have a strong passion for coding and problem-solving, and I am always eager to learn more and develop my skills. I am committed to delivering quality work, and I am not afraid of taking on challenging tasks to strive for excellence. I am a team player, and I understand the importance of collaboration and communication in the development process.`;
    mainH1.classList.add("nameHeading");
    mainH3.classList.add("shortIntro");
    introText.classList.add("introText");
    mainText.appendChild(mainH1);
    mainText.appendChild(mainH3);
    mainText.appendChild(introText);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyBTU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalToggle", ()=>modalToggle);
const modalToggle = ()=>{
    const contactBtn = document.querySelector(".mobilecontact");
    const modalContainer = document.querySelector(".modal_container");
    const closeBtn = document.querySelector(".closeBtn");
    contactBtn.addEventListener("click", ()=>{
        modalContainer.classList.add("show");
    });
    modalContainer.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
    closeBtn.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ssib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayMobileNav", ()=>displayMobileNav);
const displayMobileNav = ()=>{
    const hamButton = document.querySelector(".hamButton");
    const mobileNav = document.querySelector(".mobileNav");
    const modalContainer = document.querySelector(".modal_container");
    const AboutModalContainer = document.querySelector(".aboutModal");
    hamButton.addEventListener("click", ()=>{
        hamButton.classList.toggle("is-active");
        mobileNav.classList.toggle("is-active");
        modalContainer.classList.remove("show");
        AboutModalContainer.classList.remove("show");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWasW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectCards", ()=>projectCards);
var _projects = require("../services/projects");
const projectCards = ()=>{
    const heading = document.createElement("h1");
    const cardWrapper = document.createElement("div");
    const projectContainer = document.querySelector(".projectContainer");
    heading.innerHTML = "Projects";
    heading.classList.add("heading");
    heading.setAttribute("id", "projects");
    cardWrapper.classList.add("cardWrapper");
    projectContainer.append(heading, cardWrapper);
    const projectList = (0, _projects.projects);
    for(let i = 0; i < projectList.length; i++){
        const cardContainer = document.createElement("div");
        const card = document.createElement("div");
        const front = document.createElement("div");
        const back = document.createElement("div");
        const pImg = document.createElement("img");
        const pName = document.createElement("h5");
        const pDesc = document.createElement("p");
        const pLink = document.createElement("a");
        const pGHLink = document.createElement("a");
        const pLang = document.createElement("p");
        cardContainer.classList.add("cardContainer");
        cardContainer.className += " col-sm-12";
        cardContainer.className += " col-md-6";
        cardContainer.className += " col-lg-4";
        card.classList.add("cardContainer__card");
        front.classList.add("cardContainer__card--front");
        back.classList.add("cardContainer__card--back");
        pImg.classList.add("pImg");
        pName.classList.add("pName");
        pDesc.classList.add("pDesc");
        pLink.classList.add("pLink");
        pGHLink.classList.add("pGHLink");
        pLang.classList.add("pLang");
        pLink.innerHTML = "Try it";
        pGHLink.innerHTML = "GitHub";
        pImg.src = projectList[i].projectImg;
        pName.innerHTML = projectList[i].projectName;
        pDesc.innerHTML = projectList[i].projectDesc;
        pLink.href = projectList[i].projectLink;
        pLink.target = "_blank";
        pGHLink.href = projectList[i].projectGHLink;
        pGHLink.target = "_blank";
        pLang.innerHTML = projectList[i].projectLanguages;
        cardWrapper.appendChild(cardContainer);
        cardContainer.appendChild(card);
        card.append(front, back);
        front.appendChild(pImg);
        back.append(pName, pDesc, pLink, pGHLink, pLang);
    }
};

},{"../services/projects":"57DU7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57DU7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projects", ()=>projects);
var _project = require("../models/Project");
let projects = [
    new (0, _project.Project)("https://i.postimg.cc/DZfq3Kq6/peyvok-tr.png", "Peyvok", "This project is a React Native mobile application developed as final project for my Frontend Development education at Medieinstitutet in Stockholm 2022-2024.", "https://peyvok.netlify.app/", "https://github.com/r0binsahin/Peyvok.git", `<p>React Native</p><p>Typescript</p><p>MongoDB Realm</p>`),
    new (0, _project.Project)("https://i.postimg.cc/L5ZkK2rG/zoo-1.png", "Peyvok", "This project is a React Native mobile application developed as final project for my Frontend Development education at Medieinstitutet in Stockholm 2022-2024.", "https://minzoo.netlify.app/", "https://github.com/r0binsahin/Peyvok.git", `<p>React</p><p>Typescript</p><p>SCSS</p>`),
    new (0, _project.Project)("https://i.postimg.cc/FzGnSXGR/travelwishlist-cover.png", "Travel Whishlist", "A travel wishlist created with GraphQL. Add a city to your wishlist. Remove it to the visited cities. You can see the total amount of cities you have visited", "https://movieland.tech/?", "https://github.com/r0binsahin/Travel_wishlist_GraphQL.git", `<p>GraphQL</p><p>Apollo</p><p>Javascript</p><p>HTML</p><p>CSS</p><p>Flexbox</p>`),
    new (0, _project.Project)("https://i.postimg.cc/ZRtgtcCT/bookshop-cover.png", "Selmas Books", "A bookshop where you can buy some of Selma Lagerl\xf6f's books. This was a teamwork project made by me and my classmates Lisa and Micke. We followed Scrum and Jira were followed.", "https://selmasbookshop.netlify.app/", "https://github.com/r0binsahin/Bookshop.git", `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`),
    new (0, _project.Project)("https://i.postimg.cc/bJx5ztt1/movieland-cover.png", "MovieLand", "Welcome to one of the biggest movie databases based on OMDB-API. You can search among over 4200 movies from all around the world. Type something in the searching area to find a movie", "https://movieinformationapp.netlify.app/", "https://github.com/r0binsahin/Moviedatabase.git", `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`),
    new (0, _project.Project)("https://i.postimg.cc/7hqWbZ3d/todo-cover.png", "Todo-list", "This is an application where you can create a todo-list. Type next errand to do and check it when completed. Clear checked errand or the whole list when you are done. My first school project with Javascript.", "https://robinstodolist.netlify.app/", "https://github.com/r0binsahin/TODO-List", `<p>Javascript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`)
];

},{"../models/Project":"izMEB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izMEB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Project", ()=>Project);
class Project {
    constructor(projectImg, projectName, projectDesc, projectLink, projectGHLink, projectLanguages){
        this.projectImg = projectImg;
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.projectLink = projectLink;
        this.projectGHLink = projectGHLink;
        this.projectLanguages = projectLanguages;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfFbb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideMobileNav", ()=>hideMobileNav);
const hideMobileNav = ()=>{
    const projectsLink = document.querySelector(".mobileprojects");
    const mobileNav = document.querySelector(".mobileNav");
    const hamButton = document.querySelector(".hamButton");
    projectsLink.addEventListener("click", ()=>{
        mobileNav.classList.remove("is-active");
        hamButton.classList.remove("is-active");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSp4B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayLinkBox", ()=>displayLinkBox);
const displayLinkBox = ()=>{
    const contactLink = document.querySelector(".contact");
    const linkBox = document.querySelector(".pageHead__linkBox");
    const arrow = document.querySelector(".pageHead__arrow");
    contactLink.addEventListener("click", ()=>{
        linkBox.classList.toggle("show");
        arrow.classList.toggle("moving");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"121O0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayMySkills", ()=>displayMySkills);
var _skills = require("../services/skills");
const displayMySkills = ()=>{
    const skillsWrapper = document.querySelector(".skills");
    const skillsHead = document.createElement("div");
    const skillHeadTitle = document.createElement("h1");
    const skillsContainer = document.createElement("div");
    skillsHead.classList.add("skills__head");
    skillHeadTitle.classList.add("skills__head--title");
    skillsContainer.classList.add("skills__container");
    skillHeadTitle.innerHTML = "Skills";
    skillsWrapper.append(skillsHead, skillsContainer);
    skillsHead.appendChild(skillHeadTitle);
    let skillsList = (0, _skills.mySkills);
    for(let i = 0; i < skillsList.length; i++){
        const langBox = document.createElement("div");
        const langImg = document.createElement("img");
        const langName = document.createElement("p");
        langBox.classList.add("skills__container--lang");
        langImg.classList.add("langImg");
        langName.classList.add("langName");
        langImg.src = skillsList[i].skillsImg;
        langName.innerHTML = skillsList[i].skillsName;
        skillsContainer.appendChild(langBox);
        langBox.append(langImg, langName);
    }
};

},{"../services/skills":"hj89W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hj89W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mySkills", ()=>mySkills);
var _skills = require("../models/Skills");
let mySkills = [
    new (0, _skills.Skills)("https://img.icons8.com/material-rounded/512/typescript.png", "Typescript"),
    new (0, _skills.Skills)("https://img.icons8.com/ios-filled/512/javascript.png", "Javascript"),
    new (0, _skills.Skills)("https://img.icons8.com/ios/512/react-native.png", "React"),
    new (0, _skills.Skills)("https://img.icons8.com/windows/512/vuetify.png", "Vuejs"),
    new (0, _skills.Skills)("https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-bold-tal-revivo.png", "HTML"),
    new (0, _skills.Skills)("https://img.icons8.com/material-outlined/512/sass.png", "Sass"),
    new (0, _skills.Skills)("https://img.icons8.com/ios-glyphs/512/css3.png", "CSS"),
    new (0, _skills.Skills)("https://img.icons8.com/external-those-icons-fill-those-icons/512/external-Bootstrap-social-media-those-icons-fill-those-icons.png", "Bootstrap"),
    new (0, _skills.Skills)("https://img.icons8.com/ios-glyphs/512/open-parcel.png", "Parceljs"),
    new (0, _skills.Skills)("https://cdn3.iconfinder.com/data/icons/database-35/66/5-1024.png", "Test Automation"),
    new (0, _skills.Skills)("https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-1024.png", "Jest"),
    new (0, _skills.Skills)("https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png", "Cypress"),
    new (0, _skills.Skills)("https://img.icons8.com/ios-filled/512/git.png", "Git"),
    new (0, _skills.Skills)("https://img.icons8.com/ios-glyphs/512/github.png", "GitHub"),
    new (0, _skills.Skills)("https://img.icons8.com/windows/512/nodejs.png", "Node.js"),
    new (0, _skills.Skills)("https://img.icons8.com/external-tal-revivo-regular-tal-revivo/512/external-graphql-an-open-source-data-query-and-manipulation-language-for-api-logo-regular-tal-revivo.png", "GraphQL"),
    new (0, _skills.Skills)("https://img.icons8.com/sf-black-filled/512/api-settings.png", "Rest API"),
    new (0, _skills.Skills)("https://icons.veryicon.com/png/o/miscellaneous/gwidc_1/mongodb.png", "MongoDB"),
    new (0, _skills.Skills)("https://img.icons8.com/sf-black-filled/512/sql.png", "SQL")
];

},{"../models/Skills":"9LTaI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LTaI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Skills", ()=>Skills);
class Skills {
    constructor(skillsImg, skillsName){
        this.skillsImg = skillsImg;
        this.skillsName = skillsName;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1U903":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "desktopContactModalToggle", ()=>desktopContactModalToggle);
const desktopContactModalToggle = ()=>{
    const desktopContact = document.querySelector(".contact");
    const modalContainer = document.querySelector(".desktopContactModal");
    const closeBtn = document.querySelector(".desktopContactModal__content--close");
    modalContainer.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
    closeBtn.addEventListener("click", ()=>{
        modalContainer.classList.remove("show");
    });
    desktopContact.addEventListener("click", ()=>{
        modalContainer.classList.toggle("show");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGBrV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayOtherProjects", ()=>displayOtherProjects);
var _otherProjects = require("../services/otherProjects");
const displayOtherProjects = ()=>{
    const otherProjectsContainer = document.querySelector(".otherProjects");
    const heading = document.createElement("h3");
    heading.innerHTML = "Other Projects";
    heading.classList.add("otherProjects__heading");
    otherProjectsContainer.appendChild(heading);
    let myOtherProjects = (0, _otherProjects.otherProjects);
    for(let i = 0; i < myOtherProjects.length; i++){
        const projectBox = document.createElement("div");
        const name = document.createElement("p");
        const link = document.createElement("a");
        projectBox.classList.add("otherProjects__projectBox");
        name.classList.add("otherProjects__projectBox--name");
        link.classList.add("otherProjects__projectBox--link");
        name.innerHTML = `<i class="bi bi-arrow-right"></i>` + " " + myOtherProjects[i].otherProjectName;
        link.href = myOtherProjects[i].otherProjectGHLink;
        link.innerHTML = `<i class="bi bi-github"></i>`;
        otherProjectsContainer.appendChild(projectBox);
        projectBox.append(name, link);
    }
};

},{"../services/otherProjects":"d5YMp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5YMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "otherProjects", ()=>otherProjects);
var _otherProject = require("../models/OtherProject");
let otherProjects = [
    new (0, _otherProject.OtherProject)("Todo list Angular", "https://github.com/r0binsahin/todolist_Angular.git"),
    new (0, _otherProject.OtherProject)("Todo list React Native", "https://github.com/r0binsahin/Todo_React_Native.git"),
    new (0, _otherProject.OtherProject)("Tic tac toe with Vue", "https://github.com/r0binsahin/Tic_tac_toe_VUE.git"),
    new (0, _otherProject.OtherProject)("Shopping cart with RestAPI", "https://github.com/r0binsahin/Shopping_Cart_RestApi.git"),
    new (0, _otherProject.OtherProject)("Shopping cart with GraphQL", "https://github.com/r0binsahin/GraphQL-shopping-Cart.git"),
    new (0, _otherProject.OtherProject)("Portfolio code", "https://github.com/r0binsahin/New_portfolio.git"),
    new (0, _otherProject.OtherProject)("e2e testing school assignment", "https://github.com/r0binsahin/e2e_tester_inluppgift.git"),
    new (0, _otherProject.OtherProject)("Integration testing school assignment", "https://github.com/r0binsahin/integrationstester.git"),
    new (0, _otherProject.OtherProject)("Unit testing school assignment", "https://github.com/r0binsahin/enhetstester.git")
];

},{"../models/OtherProject":"64iqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64iqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OtherProject", ()=>OtherProject);
class OtherProject {
    constructor(otherProjectName, otherProjectGHLink){
        this.otherProjectName = otherProjectName;
        this.otherProjectGHLink = otherProjectGHLink;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["goQ56","4j3ZX"], "4j3ZX", "parcelRequire94c2")

//# sourceMappingURL=index.ca39cc5e.js.map
