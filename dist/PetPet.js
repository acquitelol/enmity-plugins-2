function Q(e){window.enmity.plugins.registerPlugin(e)}var Z="PetPet",O="1.0.5",ee="patch-1.0.3",te="Generate a petpet gif from a given image",ne=[{name:"spin",id:"308440976723148800"}],oe="#ff0069",ie="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/PetPet.js",k={name:Z,version:O,build:ee,description:te,authors:ne,color:oe,sourceUrl:ie},V;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(V||(V={}));var N;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(N||(N={}));var B;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(B||(B={}));var G;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(G||(G={}));var f;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(f||(f={}));var z;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(z||(z={}));const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function Y(...e){return window.enmity.modules.bulk(...e)}function q(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function $(e,t,i,a){window.enmity.clyde.sendReply(e,t,i,a)}const y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const j=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const x=window.enmity.modules.common.Storage,P=window.enmity.modules.common.Toasts,F=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const U=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const se=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const H=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const ae={id:"petpet-command",name:"petpet",displayName:"petpet",description:"Generate a petpet gif from a given image",displayDescription:"Generate a petpet gif from a given image",type:N.Chat,inputType:B.BuiltInText,options:[{name:"url",displayName:"url",description:"The URL of the image to petpet",displayDescription:"The URL of the image to petpet",type:f.String,required:!1},{name:"user",displayName:"user",description:"Grab a user's avatar to petpet",displayDescription:"Grab a user's avatar to petpet",type:f.User,required:!1},{name:"size",displayName:"size",description:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",displayDescription:"Change the size of the petpet gif. Max is 512. Defaults to 100, higher values equal larger files and potentially no Discord embeds",type:f.Integer,required:!1},{name:"delay",displayName:"delay",description:"The delay between each frame, defaults to 20",displayDescription:"The delay between each frame, defaults to 20",type:f.Integer,required:!1},{name:"whisper",displayName:"whisper",description:"Only you can see the result",displayDescription:"Only you can see the result",type:f.Boolean,required:!1}],execute:async function(e,t){var i,a,r,u,v;const w=e[e.findIndex(s=>s.name==="url")],h=e[e.findIndex(s=>s.name==="user")],d=e[e.findIndex(s=>s.name==="size")],m=e[e.findIndex(s=>s.name==="delay")],_=e[e.findIndex(s=>s.name==="whisper")],A="v2";if(!w&&!h)return $((i=t==null?void 0:t.channel.id)!=null?i:"0","No argument provided, nothing will happen. Here's a banana instead \u{1F34C}");try{const s=await U.get(`https://petpet-api.clit.repl.co/petpet?url=${w!=null&&w.value?w.value:q("getUser").getUser(h==null?void 0:h.value).getAvatarURL().split("?")[0].replace(/gif|webp/,"png")}&size=${d?d.value:100}&delay=${m?m.value:20}&version=${A}`).then(R=>R.body);if(s.status==!0){const R={type:"rich",image:{proxy_url:s==null?void 0:s.result,url:s==null?void 0:s.result,width:d?d.value:100,height:d?d.value:100},footer:{text:`Files are purged every 24 hours \u2022 Powered by ${s==null?void 0:s.github}`},color:"0xff0069"};if((a=_==null?void 0:_.value)==null||a){$((r=t==null?void 0:t.channel.id)!=null?r:"0",{embeds:[R]});return}else return{content:s==null?void 0:s.result}}else console.log("[ PetPet Fetch Response ]",s,s==null?void 0:s.status),console.log("[ PetPet Arguments ]",w,h,d,m,_),$((u=t==null?void 0:t.channel.id)!=null?u:"0","Something went wrong, please try again later. Fetch response and PetPet arguments sent to console.")}catch(s){console.log("[ PetPet Error ]",s),console.log("[ PetPet Arguments ]",w,h,d,m,_),$((v=t==null?void 0:t.channel.id)!=null?v:"0","An error occured while fetching and preparing the petpet image. Check debug logs for more info.")}}},re=[ae],{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const le=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const me=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const b=o.Text;o.TextInput,o.TouchableHighlight;const p=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const S=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const C=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,M=o.FormSection;o.FormSelect,o.FormSubLabel;const ce=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const W=e=>{let t=0;for(let i in e)t++;return t},ue=e=>{let t=e.split(`
`).map(i=>{if(i!="")return`"${i.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[W(t)]=`${t[W(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function de(){try{let e=await x.getItem("device_list");if(e)return JSON.parse(e);let t=(await U.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,i=ue(t);await x.setItem("device_list",i);let a=await x.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ge(e,t){let i=await de();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Software Version:** ${j.DCDDeviceManager.systemVersion}
> **Device:** ${i[j.DCDDeviceManager.device]}`}function c(e){return window.enmity.assets.getIDByName(e)}const g={Debug:c("debug"),Retry:c("ic_message_retry"),Failed:c("Small"),Cancel:c("ic_megaphone_nsfw_16px"),Delete:c("ic_message_delete"),Copy:c("toast_copy_link"),Open:c("ic_leave_stage"),Clipboard:c("pending-alert"),Debug_Command:{Sent:c("ic_application_command_24px"),Clock:c("clock")},Settings:{Toasts:{Context:c("toast_image_saved"),Settings:c("ic_selection_checked_24px")},Share:c("share"),Commands:c("ic_profile_badge_bot_commands"),Debug:c("ic_rulebook_16px")}},T=e=>{P.open({content:`Copied ${e} to clipboard.`,source:g.Clipboard})},{native:E}=window.enmity;function we(){E.reload()}E.version,E.build,E.device,E.version;const he=q("transitionToGuild");async function ye({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,i=await(await U.get(t)).text;let a=i.match(/\d\.\d\.\d+/g),r=i.match(/patch\-\d\.\d\.\d+/g);return!a||!r?J(e.name,e.version):(a=a[0],r=r[0],a!=e.version?X(t,a,r.split("-")[1],e,!1):r!=e.build?X(t,a,r.split("-")[1],e,!0):J(e.name,e.version))}const X=(e,t,i,a,r)=>{const u=r?i:t;F.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${a.name}. ${r?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${r?`build \`${i}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>fe(e,u,a,r)})},J=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),P.open({content:`${e} is on latest version (${t})`,source:g.Settings.Toasts.Settings})};async function fe(e,t,i,a){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?F.show({title:`Updated ${i.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{we()}}):F.show({title:"Error",body:`Something went wrong while updating ${i.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{he.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${a?`b${version}`:`v${version}`}`)},onCancel:()=>{F.close()}})})}const I=window.enmity.modules.common.Components.General.Animated,[L,be]=Y(D.byProps("transitionToGuild"),D.byProps("setString"));var ve=({manifest:e})=>{const t=H.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),i=n.useRef(new I.Value(1)).current,a=()=>{I.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{I.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},u=()=>{L.openURL("https://spin.rip/")},v={transform:[{scale:i}]};return n.createElement(n.Fragment,null,n.createElement(S,{style:t.container},n.createElement(p,{onPress:u,onPressIn:a,onPressOut:r},n.createElement(I.View,{style:[v]},n.createElement(le,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(S,{style:t.text_container},n.createElement(p,{onPress:()=>{L.openURL(e.sourceUrl)}},n.createElement(b,{style:[t.main_text,t.header]},e.name," ")),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(p,{onPress:()=>{L.openURL("https://spin.rip/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(p,{onPress:()=>{L.openURL("https://github.com/acquitelol/")}},n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(S,null,n.createElement(p,{style:{flexDirection:"row"},onPress:()=>{be.setString(`**${e.name}** v${e.version}`),T("plugin name and version")}},n.createElement(b,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(b,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[pe,K]=Y(D.byProps("transitionToGuild"),D.byProps("setString"));var Se=({manifest:e,settings:t,hasToasts:i,section:a,commands:r})=>{const u=H.createThemedStyleSheet({icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:y.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[v,w]=n.useState(),[h,d]=n.useState();return n.createElement(n.Fragment,null,n.createElement(me,{onTouchStart:m=>{w(m.nativeEvent.pageX),d(m.nativeEvent.pageY)},onTouchEnd:m=>{v-m.nativeEvent.pageX<-100&&h-m.nativeEvent.pageY<40&&h-m.nativeEvent.pageY>-40&&se.pop()}},n.createElement(ve,{manifest:e}),a,r&&n.createElement(M,{title:"Plugin Commands"},r.map(m=>n.createElement(l,{label:`/${m.name}`,subLabel:m.description,leading:n.createElement(l.Icon,{style:u.icon,source:g.Settings.Commands}),trailing:l.Arrow,onPress:function(){K.setString(`/${m.name}`),T(`the command ${m.name}`)}}))),n.createElement(M,{title:"Utility"},i&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:u.icon,source:g.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ce,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),P.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:g.Settings.Toasts.Settings})}})}),n.createElement(C,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:u.icon,source:g.Settings.Debug}),trailing:l.Arrow,onPress:async function(){K.setString(await ge(e.name,e.version)),T("plugin debug information")}}),n.createElement(C,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:u.icon,source:g.Delete}),trailing:l.Arrow,onPress:async function(){await x.removeItem("device_list"),P.open({content:"Cleared device list storage.",source:g.Settings.Toasts.Settings})}})),n.createElement(M,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:u.icon,source:g.Copy}),trailing:l.Arrow,onPress:()=>{ye({manifest:e})}}),n.createElement(C,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:u.icon,source:g.Open}),trailing:l.Arrow,onPress:()=>{pe.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{label:`Plugin Version: ${e.version}`})))};const Ee={...k,onStart(){this.commands=re},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return n.createElement(Se,{manifest:k,settings:e,hasToasts:!1,section:null,commands:[{name:"petpet",description:"Generate a petpet gif from a given image"}]})}};Q(Ee);