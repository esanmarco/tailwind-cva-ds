"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar,
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonStyles = (0, import_class_variance_authority.cva)("btn rounded-md capitalize", {
  variants: {
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      error: "btn-error",
      success: "btn-success",
      warning: "btn-warning",
      info: "btn-info",
      active: "btn-active"
    },
    outlined: {
      true: "btn-outline"
    },
    fullWidth: {
      true: "w-full"
    },
    size: {
      small: "btn-sm",
      medium: "",
      large: "btn-lg"
    }
  },
  defaultVariants: {
    color: "primary",
    fullWidth: false,
    size: "medium",
    outlined: false
  }
});
var Button = (_a) => {
  var _b = _a, {
    color,
    onClick,
    fullWidth,
    children,
    outlined,
    size
  } = _b, props = __objRest(_b, [
    "color",
    "onClick",
    "fullWidth",
    "children",
    "outlined",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", __spreadProps(__spreadValues({}, props), {
    onClick,
    className: buttonStyles({ color, fullWidth, size, outlined }),
    children
  }));
};

// src/Avatar.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var avatarStyles = (0, import_class_variance_authority2.cva)("bg-base-200 uppercase", {
  variants: {
    offline: {
      true: "offline"
    },
    online: {
      true: "online"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded",
      triangle: "mask-triangle",
      hexagon: "mask-hexagon"
    },
    size: {
      xsmall: "w-10 h-10",
      small: "w-14 h-14",
      medium: "w-20 h-20",
      large: "w-24 h-24"
    }
  },
  defaultVariants: {
    shape: "circle",
    size: "small",
    offline: false,
    online: false
  }
});
var Avatar = (_a) => {
  var _b = _a, {
    placeholder,
    offline,
    online,
    shape,
    size,
    img
  } = _b, props = __objRest(_b, [
    "placeholder",
    "offline",
    "online",
    "shape",
    "size",
    "img"
  ]);
  const isOnline = online ? "online" : void 0;
  const isOffline = offline ? "offline" : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    className: `avatar placeholder ${isOnline} ${isOffline}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", __spreadProps(__spreadValues({}, props), {
      className: avatarStyles({ shape, size }),
      children: [
        placeholder && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
          children: placeholder
        }),
        img && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
          src: img,
          alt: ""
        })
      ]
    }))
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button
});
