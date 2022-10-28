function n(...e) {
  return window.enmity.modules.getByProps(...e);
}
function r(e) {
  window.enmity.plugins.registerPlugin(e);
}

function I(e) {
  return window.enmity.plugins.installPlugin(e);
}

const j = window.enmity.modules.common.Dialog;
window.enmity.modules.common.Token,
  window.enmity.modules.common.REST,
  window.enmity.modules.common.Settings,
  window.enmity.modules.common.Users,
  window.enmity.modules.common.Navigation,
  window.enmity.modules.common.NavigationNative,
  window.enmity.modules.common.NavigationStack,
  window.enmity.modules.common.Theme,
  window.enmity.modules.common.Linking,
  window.enmity.modules.common.StyleSheet,
  window.enmity.modules.common.ColorMap,
  window.enmity.modules.common.Components,
  window.enmity.modules.common.Locale,
  window.enmity.modules.common.Profiles,
  window.enmity.modules.common.Lodash,
  window.enmity.modules.common.Logger,
  window.enmity.modules.common.Flux,
  window.enmity.modules.common.SVG,
  window.enmity.modules.common.Scenes;

const p = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher,
  window.enmity.modules.common.Storage,
  window.enmity.modules.common.Toasts;

const D = o.FormRow;
o.FormSection,
  o.FormSelect,
  o.FormSubLabel,
  o.FormSwitch,
  o.FormTernaryCheckBox,
  o.FormText,
  o.FormTextColors,
  o.FormTextSizes;

var U;
(function (e) {
  (e[(e.ApplicationCommand = 2)] = 'ApplicationCommand'),
    (e[(e.MessageComponent = 3)] = 'MessageComponent');
})(U || (U = {}));

const t = n('isDeveloper');

function K() {
  a.reload();
}
var W = ({ pluginUrl: e }) =>
  p.createElement(D, {
    label: 'Update Plugin',
    trailing: D.Arrow,
    onPress: () => {
      console.log(e),
        I(`${e}?${Math.floor(Math.random() * 1001)}.js`),
        j.show({
          title: 'Plugin Update',
          body: 'Updating the plugin using this button will require you to reload Discord. Would you like to reload Discord now?',
          confirmText: 'Yep!',
          cancelText: 'Later',
          onConfirm: K,
        });
    },
  });

r({
  name: 'Experimental Mode',
  version: '1.0',
  description: "Enable Discord's experimental mode.",
  color: '#000000',
  authors: [{ name: 'kuto#0001', id: '588236633535676416' }],
  onStart() {
    Object.defineProperty(t, 'isDeveloper', {
      get: () => !0,
      set: () => {},
      configurable: !0,
    });
  },
  onStop() {
    Object.defineProperty(t, 'isDeveloper', {
      get: () => !1,
      set: () => {},
      configurable: !0,
    });
  },
  getSettingsPanel({ settings: e }) {
    return y.createElement(
      H,
      { settings: e },
      y.createElement(W, { pluginUrl: 'https://raw.githubusercontent.com/kutojs/experimental-overrides/main/ExperimentalOverrides.js' })
    );
  },
});
