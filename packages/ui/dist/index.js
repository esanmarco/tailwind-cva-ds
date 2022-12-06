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
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonStyles = (0, import_class_variance_authority.cva)(
  "flex flex-row items-center justify-center rounded-md no-underline",
  {
    variants: {
      color: {
        primary: "hover:bg-primary/[0.75]",
        secondary: "hover:bg-secondary/[0.75]",
        error: "hover:bg-error/[0.75]"
      },
      outlined: {
        true: "border-2"
      },
      fullWidth: {
        true: "w-full"
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-3 py-2 text-base",
        large: "px-4 py-3 text-lg"
      }
    },
    compoundVariants: [
      {
        outlined: true,
        className: "bg-transparent"
      },
      {
        outlined: true,
        color: "primary",
        className: "border-primary text-primary hover:bg-primary/[0.25]"
      },
      {
        outlined: true,
        color: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary/[0.25]"
      },
      {
        outlined: true,
        color: "error",
        className: "border-error text-error hover:bg-error/[0.25]"
      },
      {
        outlined: false,
        color: "primary",
        className: "bg-primary text-white"
      },
      {
        outlined: false,
        color: "secondary",
        className: "bg-secondary text-white"
      },
      {
        outlined: false,
        color: "error",
        className: "bg-error text-white"
      }
    ],
    defaultVariants: {
      color: "primary",
      fullWidth: false,
      size: "medium",
      outlined: false
    }
  }
);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
