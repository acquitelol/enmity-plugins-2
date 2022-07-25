function S(o) {
  window.enmity.plugins.registerPlugin(o);
}
function c(...o) {
  return window.enmity.modules.getByProps(...o);
}
window.enmity.modules.common;
function h(o) {
  return window.enmity.patcher.create(o);
}
window.enmity.modules.common.Constants,
  window.enmity.modules.common.Clipboard,
  window.enmity.modules.common.Assets,
  window.enmity.modules.common.Messages,
  window.enmity.modules.common.Clyde,
  window.enmity.modules.common.Avatars,
  window.enmity.modules.common.Native;
const l = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage;
const n = window.enmity.modules.common.Toasts;
window.enmity.modules.common.Dialog,
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
var p = "HideBlockedMessages",
  F = "1.1.0",
  f = "For when you really need to shut someone the f*** up.",
  k = [{ name: "NotMarek", id: "206299359007080450" }],
  B = "#ff0069",
  v =
    "https://raw.githubusercontent.com/notmarek/enmity-plugins/master/dist/HideBlockedMessages.js",
  M = {
    name: p,
    version: F,
    description: f,
    authors: k,
    color: B,
    sourceUrl: v,
  };
function s(o) {
  return window.enmity.assets.getIDByName(o);
}
const { components: e } = window.enmity;
e.Alert,
  e.Button,
  e.FlatList,
  e.Image,
  e.ImageBackground,
  e.KeyboardAvoidingView,
  e.Modal,
  e.Pressable,
  e.RefreshControl;
const T = e.ScrollView;
e.SectionList,
  e.StatusBar,
  e.StyleSheet,
  e.Switch,
  e.Text,
  e.TextInput,
  e.TouchableHighlight,
  e.TouchableOpacity,
  e.TouchableWithoutFeedback,
  e.Touchable,
  e.View,
  e.VirtualizedList,
  e.Form,
  e.FormArrow,
  e.FormCTA,
  e.FormCTAButton,
  e.FormCardSection,
  e.FormCheckbox,
  e.FormDivider,
  e.FormHint,
  e.FormIcon,
  e.FormInput,
  e.FormLabel,
  e.FormRadio;
const u = e.FormRow;
e.FormSection,
  e.FormSelect,
  e.FormSubLabel,
  e.FormSwitch,
  e.FormTernaryCheckBox,
  e.FormText,
  e.FormTextColors,
  e.FormTextSizes;
var A = () =>
  l.createElement(
    T,
    null,
    l.createElement(u, {
      label: "Hello World",
      trailing: u.Arrow,
      onPress: () => console.log("hell"),
    })
  );
function b(o) {
  return window.enmity.settings.makeStore(o);
}
const w = h("HideBlockedMessages"),
  m = c("_currentDispatchActionType", "_subscriptions", "_waitQueue"),
  C = c("isBlocked", "isFriend"),
  H = {
    ...M,
    onStart() {
      const o = b(this.name);
      m.dispatch({ type: "LOAD_MESSAGES" }),
        o.set("test", "test"),
        m.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: 0,
          messages: [],
          isBefore: !1,
          isAfter: !1,
          hasMoreBefore: !1,
          hasMoreAfter: !1,
          limit: 25,
          jump: void 0,
          isStale: !1,
          truncate: void 0,
        });
      let t = 0,
        i = 3;
      const r = () => {
        try {
          t++,
            console.log(`HideBlockedMessages delayed start attempt ${t}/${i}.`),
            n.open({
              content: `HideBlockedMessages start attempt ${t}/${i}.`,
              source: s("ic_staff_guild_icon_blurple"),
            });
          const y = m._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(
            (a) => a.name === "MessageStore"
          );
          w.before(y, "actionHandler", (a, d) => {
            d[0].messages = d[0].messages.filter(
              (g) => !C.isBlocked(g.author.id)
            );
          }),
            console.log("HideBlockedMessages delayed start successful."),
            n.open({
              content: "HideBlockedMessages delayed start successful.",
              source: s("Check"),
            });
        } catch {
          t < i
            ? (console.warn(
                `HideBlockedMessages failed to start. Trying again in ${t}0s.`
              ),
              n.open({
                content: `HideBlockedMessages failed to start trying again in ${t}0s.`,
                source: s("ic_message_retry"),
              }),
              setTimeout(r, t * 1e4))
            : (console.error("HideBlockedMessages failed to start. Giving up."),
              n.open({
                content: "HideBlockedMessages failed to start. Giving up.",
                source: s("Small"),
              }));
        }
      };
      setTimeout(r, 300);
    },
    onStop() {
      w.unpatchAll();
    },
    patches: [],
    getSettingsPanel() {
      return React.createElement(A);
    },
  };
S(H);
