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
    disabled: {
      true: "btn-disabled cursor-not-allowed"
    },
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
    disabled,
    size
  } = _b, props = __objRest(_b, [
    "color",
    "onClick",
    "fullWidth",
    "children",
    "outlined",
    "disabled",
    "size"
  ]);
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({}, props), {
    disabled: disabled != null ? disabled : false,
    onClick: onClick != null ? onClick : void 0,
    className: buttonStyles({ color, fullWidth, size, outlined, disabled }),
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

// src/Select.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var selectStyles = cva3("select w-full select-bordered", {
  variants: {
    size: {
      small: "select-sm",
      medium: "",
      large: "select-lg"
    },
    outlined: {
      true: "select-bordered"
    },
    color: {
      primary: "select-primary",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error"
    }
  },
  defaultVariants: {
    size: "medium",
    outlined: false,
    color: "primary"
  }
});
var Select = (_a) => {
  var _b = _a, {
    options,
    color,
    size,
    outlined,
    disabled,
    label
  } = _b, props = __objRest(_b, [
    "options",
    "color",
    "size",
    "outlined",
    "disabled",
    "label"
  ]);
  const labelColor = "text-" + color;
  return /* @__PURE__ */ jsxs2("div", {
    className: `${label ? "form-control w-full" : ""}`,
    children: [
      /* @__PURE__ */ jsx3("select", __spreadProps(__spreadValues({
        disabled: disabled != null ? disabled : false
      }, props), {
        className: selectStyles({ color, size, outlined }),
        children: options.map((option) => /* @__PURE__ */ jsx3("option", {
          value: option.value,
          children: option.label
        }, option.value))
      })),
      label && /* @__PURE__ */ jsx3("div", {
        className: `label items-end`,
        children: /* @__PURE__ */ jsx3("label", {
          className: `text-xs ${labelColor}`,
          children: label
        })
      })
    ]
  });
};

// src/Modal.tsx
import { cva as cva4 } from "class-variance-authority";
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var modalStyles = cva4("select w-full select-bordered", {
  variants: {},
  defaultVariants: {}
});
var Modal = ({
  id,
  children,
  submit,
  submitColor,
  submitText,
  triggerText,
  triggerIcon
}) => {
  return /* @__PURE__ */ jsxs3(Fragment, {
    children: [
      /* @__PURE__ */ jsx4("label", {
        htmlFor: id,
        className: `m-0 hover:bg-transparent btn btn-active btn-ghost h-fit w-fit ${triggerIcon ? "rounded-full" : "".trim()}`,
        children: triggerIcon ? triggerIcon : triggerText ? triggerText : "Open"
      }),
      /* @__PURE__ */ jsx4("input", {
        type: "checkbox",
        id,
        className: "modal-toggle"
      }),
      /* @__PURE__ */ jsx4("label", {
        htmlFor: id,
        className: "cursor-pointer modal",
        children: /* @__PURE__ */ jsxs3("label", {
          className: "relative modal-box",
          htmlFor: "",
          children: [
            children,
            submit && /* @__PURE__ */ jsx4("div", {
              className: "modal-action",
              children: /* @__PURE__ */ jsx4(Button, {
                onClick: submit,
                color: submitColor != null ? submitColor : "primary",
                children: submitText != null ? submitText : "submit"
              })
            })
          ]
        })
      })
    ]
  });
};

// src/Badge.tsx
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var badgeStyles = cva5("", {
  variants: {
    color: {
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      ghost: "badge-ghost"
    },
    outlined: {
      true: "badge-outline"
    },
    size: {
      small: "badge-sm",
      medium: "",
      large: "badge-lg"
    }
  },
  defaultVariants: {
    color: "primary",
    outlined: false,
    size: "medium"
  }
});
var Badge = (_a) => {
  var _b = _a, { color, children, outlined, size } = _b, props = __objRest(_b, ["color", "children", "outlined", "size"]);
  return /* @__PURE__ */ jsx5("span", {
    className: `badge ${badgeStyles({ color, outlined, size })}`,
    children
  });
};
export {
  Avatar,
  Badge,
  Button,
  Modal,
  Select
};
