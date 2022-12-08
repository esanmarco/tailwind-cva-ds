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
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Input: () => Input,
  Menu: () => Menu,
  Modal: () => Modal,
  Select: () => Select
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonStyles = (0, import_class_variance_authority.cva)("btn rounded-md capitalize", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", __spreadProps(__spreadValues({}, props), {
    disabled: disabled != null ? disabled : false,
    onClick: onClick != null ? onClick : void 0,
    className: buttonStyles({ color, fullWidth, size, outlined, disabled }),
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
      triangle: "mask mask-triangle",
      hexagon: "mask mask-hexagon"
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

// src/Select.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var selectStyles = (0, import_class_variance_authority3.cva)("select w-full select-bordered", {
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
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error"
    }
  },
  defaultVariants: {
    size: "medium",
    outlined: false
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: `${label ? "form-control w-full" : ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("select", __spreadProps(__spreadValues({
        disabled: disabled != null ? disabled : false
      }, props), {
        className: selectStyles({ color, size, outlined }),
        children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))
      })),
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: `label items-end`,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", {
          className: `text-xs ${labelColor}`,
          children: label
        })
      })
    ]
  });
};

// src/Modal.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var modalStyles = (0, import_class_variance_authority4.cva)("select w-full select-bordered", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", {
        htmlFor: id,
        className: `m-0 hover:bg-transparent btn btn-active btn-ghost h-fit w-fit ${triggerIcon ? "rounded-full" : "".trim()}`,
        children: triggerIcon ? triggerIcon : triggerText ? triggerText : "Open"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", {
        type: "checkbox",
        id,
        className: "modal-toggle"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", {
        htmlFor: id,
        className: "cursor-pointer modal",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", {
          className: "relative modal-box",
          htmlFor: "",
          children: [
            children,
            submit && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
              className: "modal-action",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
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

// src/Menu.tsx
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var menuStyles = (0, import_class_variance_authority5.cva)("dropdown", {
  variants: {
    align: {
      start: "dropdown-start",
      end: "dropdown-end"
    }
  },
  defaultVariants: {
    align: "end"
  }
});
var Menu = (_a) => {
  var _b = _a, { items, trigger } = _b, props = __objRest(_b, ["items", "trigger"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", __spreadProps(__spreadValues({
    className: menuStyles({})
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", {
        tabIndex: 0,
        children: trigger
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", {
        tabIndex: 0,
        className: "w-full p-0 m-1 shadow dropdown-content menu rounded-box bg-base-100 w-52",
        children: items.map((i, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", {
          className: "px-4 w-52 py-2 m-0 cursor-pointer hover:bg-base-200/[0.5]",
          onClick: i.onClick,
          children: i.label
        }, `item-${index}`))
      })
    ]
  }));
};

// src/Badge.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var badgeStyles = (0, import_class_variance_authority6.cva)("", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", __spreadProps(__spreadValues({}, props), {
    className: `badge ${badgeStyles({ color, outlined, size })}`,
    children
  }));
};

// src/Alert.tsx
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime7 = require("react/jsx-runtime");
var alertStyles = (0, import_class_variance_authority7.cva)("", {
  variants: {
    color: {
      info: "alert-info",
      error: "alert-error",
      warning: "alert-warning",
      success: "alert-success"
    }
  },
  defaultVariants: {
    color: "info"
  }
});
function Alert(_a) {
  var _b = _a, { color, children } = _b, props = __objRest(_b, ["color", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", __spreadProps(__spreadValues({}, props), {
    className: `alert ${alertStyles({ color })} justify-start`,
    children
  }));
}

// src/Input.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var inputStyles = (0, import_class_variance_authority8.cva)("input input-bordered w-full", {
  variants: {
    size: {
      small: "input-sm",
      medium: "",
      large: "input-lg"
    },
    color: {
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error"
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
var Input = (_a) => {
  var _b = _a, {
    type,
    placeholder,
    value,
    defaultValue,
    helperText,
    color,
    size
  } = _b, props = __objRest(_b, [
    "type",
    "placeholder",
    "value",
    "defaultValue",
    "helperText",
    "color",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", __spreadProps(__spreadValues({}, props), {
        type,
        placeholder,
        className: inputStyles({ color, size }),
        value,
        defaultValue
      })),
      helperText && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", {
        className: "label",
        style: { color: "currentcolor" },
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
          className: "label-text-alt",
          children: helperText
        })
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Avatar,
  Badge,
  Button,
  Input,
  Menu,
  Modal,
  Select
});
