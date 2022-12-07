var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/Button.tsx
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var buttonStyles = cva("btn rounded-md capitalize", {
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
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({}, props), {
    onClick,
    className: buttonStyles({ color, fullWidth, size, outlined }),
    children
  }));
};

// src/Avatar.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var avatarStyles = cva2("bg-base-200 uppercase", {
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
  return /* @__PURE__ */ jsx2("div", {
    className: `avatar placeholder ${isOnline} ${isOffline}`,
    children: /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({}, props), {
      className: avatarStyles({ shape, size }),
      children: [
        placeholder && /* @__PURE__ */ jsx2("span", {
          children: placeholder
        }),
        img && /* @__PURE__ */ jsx2("img", {
          src: img,
          alt: ""
        })
      ]
    }))
  });
};
export {
  Avatar,
  Button
};
