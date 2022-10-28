function n(...e) {
  return window.enmity.modules.getByProps(...e);
}
function r(e) {
  window.enmity.plugins.registerPlugin(e);
}
const t = n('isDeveloper');

function K() {
  a.reload();
}
var W = ({ pluginUrl: e }) =>
  y.createElement(D, {
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
  name: 'Experimental Overrides',
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
});
