// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var _allTests = [
"closure/goog/array/array_test.html","closure/goog/asserts/asserts_test.html","closure/goog/async/animationdelay_test.html","closure/goog/async/conditionaldelay_test.html","closure/goog/async/delay_test.html","closure/goog/async/throttle_test.html","closure/goog/base_test.html","closure/goog/color/alpha_test.html","closure/goog/color/color_test.html","closure/goog/crypt/arc4_test.html","closure/goog/crypt/base64_test.html","closure/goog/crypt/basen_test.html","closure/goog/crypt/blobhasher_test.html","closure/goog/crypt/crypt_test.html","closure/goog/crypt/hash32_test.html","closure/goog/crypt/hmac_test.html","closure/goog/crypt/md5_test.html","closure/goog/crypt/sha1_test.html","closure/goog/cssom/cssom_test.html","closure/goog/cssom/iframe/style_test.html","closure/goog/datasource/datasource_test.html","closure/goog/datasource/expr_test.html","closure/goog/datasource/fastdatanode_test.html","closure/goog/datasource/jsxmlhttpdatasource_test.html","closure/goog/date/daterange_test.html","closure/goog/date/date_test.html","closure/goog/date/relative_test.html","closure/goog/date/utcdatetime_test.html","closure/goog/db/db_test.html","closure/goog/debug/console_test.html","closure/goog/debug/debug_test.html","closure/goog/debug/devcss/devcss_test.html","closure/goog/debug/enhanceerror_test.html","closure/goog/debug/entrypointregistry_test.html","closure/goog/debug/errorhandler_async_test.html","closure/goog/debug/errorhandler_test.html","closure/goog/debug/errorreporter_test.html","closure/goog/debug/error_test.html","closure/goog/debug/fpsdisplay_test.html","closure/goog/debug/logbuffer_test.html","closure/goog/debug/logger_test.html","closure/goog/debug/logrecordserializer_test.html","closure/goog/debug/reflect_test.html","closure/goog/debug/tracer_test.html","closure/goog/disposable/disposable_test.html","closure/goog/dom/a11y_test.html","closure/goog/dom/abstractrange_test.html","closure/goog/dom/annotate_test.html","closure/goog/dom/browserrange/browserrange_test.html","closure/goog/dom/classes_test.html","closure/goog/dom/controlrange_test.html","closure/goog/dom/dataset_test.html","closure/goog/dom/dom_quirks_test.html","closure/goog/dom/dom_test.html","closure/goog/dom/fontsizemonitor_test.html","closure/goog/dom/forms_test.html","closure/goog/dom/iframe_test.html","closure/goog/dom/iter_test.html","closure/goog/dom/multirange_test.html","closure/goog/dom/nodeiterator_test.html","closure/goog/dom/nodeoffset_test.html","closure/goog/dom/pattern/matcher_test.html","closure/goog/dom/pattern/pattern_test.html","closure/goog/dom/range_test.html","closure/goog/dom/savedcaretrange_test.html","closure/goog/dom/savedrange_test.html","closure/goog/dom/selection_test.html","closure/goog/dom/tagiterator_test.html","closure/goog/dom/tagname_test.html","closure/goog/dom/textrangeiterator_test.html","closure/goog/dom/textrange_test.html","closure/goog/dom/viewportsizemonitor_test.html","closure/goog/dom/xml_test.html","closure/goog/editor/clicktoeditwrapper_test.html","closure/goog/editor/contenteditablefield_test.html","closure/goog/editor/field_test.html","closure/goog/editor/focus_test.html","closure/goog/editor/icontent_test.html","closure/goog/editor/link_test.html","closure/goog/editor/node_test.html","closure/goog/editor/plugins/abstractbubbleplugin_test.html","closure/goog/editor/plugins/abstractdialogplugin_test.html","closure/goog/editor/plugins/abstracttabhandler_test.html","closure/goog/editor/plugins/basictextformatter_test.html","closure/goog/editor/plugins/blockquote_test.html","closure/goog/editor/plugins/emoticons_test.html","closure/goog/editor/plugins/enterhandler_test.html","closure/goog/editor/plugins/equationeditorplugin_test.html","closure/goog/editor/plugins/headerformatter_test.html","closure/goog/editor/plugins/linkbubble_test.html","closure/goog/editor/plugins/linkdialogplugin_test.html","closure/goog/editor/plugins/linkshortcutplugin_test.html","closure/goog/editor/plugins/listtabhandler_test.html","closure/goog/editor/plugins/loremipsum_test.html","closure/goog/editor/plugins/removeformatting_test.html","closure/goog/editor/plugins/spacestabhandler_test.html","closure/goog/editor/plugins/tableeditor_test.html","closure/goog/editor/plugins/tagonenterhandler_test.html","closure/goog/editor/plugins/undoredomanager_test.html","closure/goog/editor/plugins/undoredostate_test.html","closure/goog/editor/plugins/undoredo_test.html","closure/goog/editor/plugin_test.html","closure/goog/editor/range_test.html","closure/goog/editor/seamlessfield_quirks_test.html","closure/goog/editor/seamlessfield_test.html","closure/goog/editor/style_test.html","closure/goog/editor/table_test.html","closure/goog/events/actioneventwrapper_test.html","closure/goog/events/actionhandler_test.html","closure/goog/events/browserevent_test.html","closure/goog/events/eventhandler_test.html","closure/goog/events/events_test.html","closure/goog/events/eventtarget_test.html","closure/goog/events/event_test.html","closure/goog/events/filedrophandler_test.html","closure/goog/events/imehandler_test.html","closure/goog/events/keycodes_test.html","closure/goog/events/keyhandler_test.html","closure/goog/events/mousewheelhandler_test.html","closure/goog/events/onlinelistener_test.html","closure/goog/events/pastehandler_test.html","closure/goog/format/emailaddress_test.html","closure/goog/format/format_test.html","closure/goog/format/htmlprettyprinter_test.html","closure/goog/format/jsonprettyprinter_test.html","closure/goog/fs/fs_test.html","closure/goog/functions/functions_test.html","closure/goog/fx/abstractdragdrop_test.html","closure/goog/fx/anim/anim_test.html","closure/goog/fx/animationqueue_test.html","closure/goog/fx/animation_test.html","closure/goog/fx/css3/transition_test.html","closure/goog/fx/cssspriteanimation_test.html","closure/goog/fx/dragdropgroup_test.html","closure/goog/fx/dragger_test.html","closure/goog/fx/draglistgroup_test.html","closure/goog/fx/dragscrollsupport_test.html","closure/goog/fx/fx_test.html","closure/goog/gears/basestore_test.html","closure/goog/gears/database_test.html","closure/goog/gears/gears_test.html","closure/goog/gears/loggerclient_test.html","closure/goog/gears/loggerserver_test.html","closure/goog/gears/logstore_test.html","closure/goog/gears/managedresourcestore_test.html","closure/goog/gears/multipartformdata_test.html","closure/goog/gears/urlcapture_test.html","closure/goog/gears/workerchannel_test.html","closure/goog/gears/workerpool_test.html","closure/goog/graphics/affinetransform_test.html","closure/goog/graphics/ext/coordinates_test.html","closure/goog/graphics/ext/element_test.html","closure/goog/graphics/ext/path_test.html","closure/goog/graphics/paths_test.html","closure/goog/graphics/path_test.html","closure/goog/graphics/solidfill_test.html","closure/goog/graphics/svggraphics_test.html","closure/goog/history/html5history_test.html","closure/goog/i18n/bidiformatter_test.html","closure/goog/i18n/bidi_test.html","closure/goog/i18n/charlistdecompressor_test.html","closure/goog/i18n/currency_test.html","closure/goog/i18n/datetimeformat_test.html","closure/goog/i18n/datetimeparse_test.html","closure/goog/i18n/graphemebreak_test.html","closure/goog/i18n/messageformat_test.html","closure/goog/i18n/mime_test.html","closure/goog/i18n/numberformat_test.html","closure/goog/i18n/timezone_test.html","closure/goog/i18n/uchar_test.html","closure/goog/iter/iter_test.html","closure/goog/json/json_test.html","closure/goog/labs/async/chain_test.html","closure/goog/labs/async/combine_test.html","closure/goog/labs/async/deferredadaptor_test.html","closure/goog/labs/async/simpleresult_test.html","closure/goog/labs/async/transform_test.html","closure/goog/labs/async/wait_test.html","closure/goog/labs/net/image_test.html","closure/goog/labs/net/xhr_test.html","closure/goog/labs/object/object_test.html","closure/goog/labs/observe/observableset_test.html","closure/goog/labs/observe/observationset_test.html","closure/goog/labs/observe/observer_test.html","closure/goog/labs/observe/simpleobservable_test.html","closure/goog/labs/structs/map_test.html","closure/goog/labs/structs/multimap_test.html","closure/goog/locale/countrylanguagenames_test.html","closure/goog/locale/genericfontnames_test.html","closure/goog/locale/timezonedetection_test.html","closure/goog/locale/timezonelist_test.html","closure/goog/math/bezier_test.html","closure/goog/math/box_test.html","closure/goog/math/coordinate3_test.html","closure/goog/math/coordinate_test.html","closure/goog/math/exponentialbackoff_test.html","closure/goog/math/integer_test.html","closure/goog/math/line_test.html","closure/goog/math/long_test.html","closure/goog/math/math_test.html","closure/goog/math/matrix_test.html","closure/goog/math/rangeset_test.html","closure/goog/math/range_test.html","closure/goog/math/rect_test.html","closure/goog/math/size_test.html","closure/goog/math/vec2_test.html","closure/goog/math/vec3_test.html","closure/goog/memoize/memoize_test.html","closure/goog/messaging/abstractchannel_test.html","closure/goog/messaging/bufferedchannel_test.html","closure/goog/messaging/deferredchannel_test.html","closure/goog/messaging/loggerclient_test.html","closure/goog/messaging/loggerserver_test.html","closure/goog/messaging/messaging_test.html","closure/goog/messaging/multichannel_test.html","closure/goog/messaging/portcaller_test.html","closure/goog/messaging/portchannel_test.html","closure/goog/messaging/portnetwork_test.html","closure/goog/messaging/portoperator_test.html","closure/goog/messaging/respondingchannel_test.html","closure/goog/module/moduleinfo_test.html","closure/goog/module/moduleloadcallback_test.html","closure/goog/module/moduleloader_test.html","closure/goog/module/modulemanager_test.html","closure/goog/net/browserchannel_test.html","closure/goog/net/bulkloader_test.html","closure/goog/net/channelrequest_test.html","closure/goog/net/cookies_test.html","closure/goog/net/crossdomainrpc_test.html","closure/goog/net/filedownloader_test.html","closure/goog/net/iframeio_different_base_test.html","closure/goog/net/iframeio_test.html","closure/goog/net/iframeloadmonitor_test.html","closure/goog/net/iframe_xhr_test.html","closure/goog/net/imageloader_test.html","closure/goog/net/ipaddress_test.html","closure/goog/net/jsloader_test.html","closure/goog/net/jsonp_test.html","closure/goog/net/mockxhrlite_test.html","closure/goog/net/multiiframeloadmonitor_test.html","closure/goog/net/networktester_test.html","closure/goog/net/websocket_test.html","closure/goog/net/xhrio_test.html","closure/goog/net/xhrlite_test.html","closure/goog/net/xpc/crosspagechannel_test.html","closure/goog/net/xpc/iframepollingtransport_test.html","closure/goog/net/xpc/nativemessagingtransport_test.html","closure/goog/object/object_test.html","closure/goog/positioning/anchoredposition_test.html","closure/goog/positioning/anchoredviewportposition_test.html","closure/goog/positioning/clientposition_test.html","closure/goog/positioning/menuanchoredposition_test.html","closure/goog/positioning/positioning_test.html","closure/goog/positioning/viewportclientposition_test.html","closure/goog/proto2/descriptor_test.html","closure/goog/proto2/fielddescriptor_test.html","closure/goog/proto2/message_test.html","closure/goog/proto2/objectserializer_test.html","closure/goog/proto2/pbliteserializer_test.html","closure/goog/proto2/proto_test.html","closure/goog/proto2/textformatserializer_test.html","closure/goog/proto/serializer_test.html","closure/goog/pubsub/pubsub_test.html","closure/goog/soy/renderer_test.html","closure/goog/soy/soy_test.html","closure/goog/spell/spellcheck_test.html","closure/goog/stats/basicstat_test.html","closure/goog/storage/collectablestorage_test.html","closure/goog/storage/encryptedstorage_test.html","closure/goog/storage/expiringstorage_test.html","closure/goog/storage/mechanism/html5localstorage_test.html","closure/goog/storage/mechanism/html5sessionstorage_test.html","closure/goog/storage/mechanism/ieuserdata_test.html","closure/goog/storage/mechanism/mechanismfactory_test.html","closure/goog/storage/mechanism/prefixedmechanism_test.html","closure/goog/storage/richstorage_test.html","closure/goog/storage/storage_test.html","closure/goog/string/linkify_test.html","closure/goog/string/path_test.html","closure/goog/string/stringbuffer_test.html","closure/goog/string/stringformat_test.html","closure/goog/string/string_test.html","closure/goog/structs/avltree_test.html","closure/goog/structs/circularbuffer_test.html","closure/goog/structs/collection_test.html","closure/goog/structs/heap_test.html","closure/goog/structs/inversionmap_test.html","closure/goog/structs/linkedmap_test.html","closure/goog/structs/map_test.html","closure/goog/structs/pool_test.html","closure/goog/structs/prioritypool_test.html","closure/goog/structs/priorityqueue_test.html","closure/goog/structs/quadtree_test.html","closure/goog/structs/queue_test.html","closure/goog/structs/set_test.html","closure/goog/structs/stringset_test.html","closure/goog/structs/structs_test.html","closure/goog/structs/treenode_test.html","closure/goog/structs/trie_test.html","closure/goog/style/bidi_test.html","closure/goog/style/cursor_test.html","closure/goog/style/style_quirks_test.html","closure/goog/style/style_test.html","closure/goog/style/style_webkit_scrollbars_test.html","closure/goog/style/transition_test.html","closure/goog/testing/asserts_test.html","closure/goog/testing/async/mockcontrol_test.html","closure/goog/testing/asynctestcase_async_test.html","closure/goog/testing/asynctestcase_noasync_test.html","closure/goog/testing/asynctestcase_test.html","closure/goog/testing/benchmarks/jsbinarysizebutton_test.html","closure/goog/testing/benchmarks/jsbinarysizetoolbar_test.html","closure/goog/testing/continuationtestcase_test.html","closure/goog/testing/deferredtestcase_test.html","closure/goog/testing/dom_test.html","closure/goog/testing/editor/dom_test.html","closure/goog/testing/editor/testhelper_test.html","closure/goog/testing/events/eventobserver_test.html","closure/goog/testing/events/events_test.html","closure/goog/testing/events/matchers_test.html","closure/goog/testing/events/onlinehandler_test.html","closure/goog/testing/expectedfailures_test.html","closure/goog/testing/fs/blob_test.html","closure/goog/testing/fs/directoryentry_test.html","closure/goog/testing/fs/entry_test.html","closure/goog/testing/fs/fileentry_test.html","closure/goog/testing/fs/filereader_test.html","closure/goog/testing/fs/filewriter_test.html","closure/goog/testing/fs/fs_test.html","closure/goog/testing/fs/integration_test.html","closure/goog/testing/functionmock_test.html","closure/goog/testing/loosemock_test.html","closure/goog/testing/mockclassfactory_test.html","closure/goog/testing/mockclock_test.html","closure/goog/testing/mockcontrol_test.html","closure/goog/testing/mockmatchers_test.html","closure/goog/testing/mockrandom_test.html","closure/goog/testing/mockrange_test.html","closure/goog/testing/mockstorage_test.html","closure/goog/testing/mock_test.html","closure/goog/testing/mockuseragent_test.html","closure/goog/testing/net/xhrio_test.html","closure/goog/testing/performancetimer_test.html","closure/goog/testing/propertyreplacer_test.html","closure/goog/testing/pseudorandom_test.html","closure/goog/testing/recordfunction_test.html","closure/goog/testing/shardingtestcase_test.html","closure/goog/testing/singleton_test.html","closure/goog/testing/stacktrace_test.html","closure/goog/testing/strictmock_test.html","closure/goog/testing/style/layoutasserts_test.html","closure/goog/testing/style/style_test.html","closure/goog/testing/ui/rendererasserts_test.html","closure/goog/testing/ui/style_test.html","closure/goog/timer/timer_test.html","closure/goog/tweak/entries_test.html","closure/goog/tweak/registry_test.html","closure/goog/tweak/tweakui_test.html","closure/goog/ui/ac/ac_test.html","closure/goog/ui/ac/arraymatcher_test.html","closure/goog/ui/ac/autocomplete_test.html","closure/goog/ui/ac/inputhandler_test.html","closure/goog/ui/ac/remotearraymatcher_test.html","closure/goog/ui/ac/renderer_test.html","closure/goog/ui/activitymonitor_test.html","closure/goog/ui/advancedtooltip_test.html","closure/goog/ui/animatedzippy_test.html","closure/goog/ui/bidiinput_test.html","closure/goog/ui/buttonrenderer_test.html","closure/goog/ui/button_test.html","closure/goog/ui/checkbox_test.html","closure/goog/ui/colorbutton_test.html","closure/goog/ui/colormenubuttonrenderer_test.html","closure/goog/ui/colorpalette_test.html","closure/goog/ui/combobox_test.html","closure/goog/ui/component_test.html","closure/goog/ui/containerrenderer_test.html","closure/goog/ui/containerscroller_test.html","closure/goog/ui/container_test.html","closure/goog/ui/controlrenderer_test.html","closure/goog/ui/control_test.html","closure/goog/ui/cookieeditor_test.html","closure/goog/ui/customcolorpalette_test.html","closure/goog/ui/datepicker_test.html","closure/goog/ui/decorate_test.html","closure/goog/ui/dialog_test.html","closure/goog/ui/dimensionpicker_test.html","closure/goog/ui/drilldownrow_test.html","closure/goog/ui/editor/abstractdialog_test.html","closure/goog/ui/editor/bubble_test.html","closure/goog/ui/editor/linkdialog_test.html","closure/goog/ui/editor/toolbarfactory_test.html","closure/goog/ui/emoji/emojipicker_test.html","closure/goog/ui/emoji/popupemojipicker_test.html","closure/goog/ui/emoji/spriteinfo_test.html","closure/goog/ui/filteredmenu_test.html","closure/goog/ui/formpost_test.html","closure/goog/ui/hovercard_test.html","closure/goog/ui/hsvapalette_test.html","closure/goog/ui/hsvpalette_test.html","closure/goog/ui/idletimer_test.html","closure/goog/ui/iframemask_test.html","closure/goog/ui/inputdatepicker_test.html","closure/goog/ui/keyboardshortcuthandler_test.html","closure/goog/ui/labelinput_test.html","closure/goog/ui/media/flashobject_test.html","closure/goog/ui/media/flickr_test.html","closure/goog/ui/media/googlevideo_test.html","closure/goog/ui/media/mediamodel_test.html","closure/goog/ui/media/media_test.html","closure/goog/ui/media/mp3_test.html","closure/goog/ui/media/photo_test.html","closure/goog/ui/media/picasa_test.html","closure/goog/ui/media/vimeo_test.html","closure/goog/ui/media/youtube_test.html","closure/goog/ui/menubuttonrenderer_test.html","closure/goog/ui/menubutton_test.html","closure/goog/ui/menuitemrenderer_test.html","closure/goog/ui/menuitem_test.html","closure/goog/ui/menuseparatorrenderer_test.html","closure/goog/ui/menu_test.html","closure/goog/ui/modalpopup_test.html","closure/goog/ui/nativebuttonrenderer_test.html","closure/goog/ui/plaintextspellchecker_test.html","closure/goog/ui/popupbase_test.html","closure/goog/ui/popupcolorpicker_test.html","closure/goog/ui/popupmenu_test.html","closure/goog/ui/popup_test.html","closure/goog/ui/prompt_test.html","closure/goog/ui/rangemodel_test.html","closure/goog/ui/registry_test.html","closure/goog/ui/richtextspellchecker_test.html","closure/goog/ui/roundedpanel_test.html","closure/goog/ui/scrollfloater_test.html","closure/goog/ui/selectionmenubutton_test.html","closure/goog/ui/selectionmodel_test.html","closure/goog/ui/select_test.html","closure/goog/ui/serverchart_test.html","closure/goog/ui/sliderbase_test.html","closure/goog/ui/splitbehavior_test.html","closure/goog/ui/splitpane_test.html","closure/goog/ui/style/app/buttonrenderer_test.html","closure/goog/ui/style/app/menubuttonrenderer_test.html","closure/goog/ui/style/app/primaryactionbuttonrenderer_test.html","closure/goog/ui/submenu_test.html","closure/goog/ui/tabbarrenderer_test.html","closure/goog/ui/tabbar_test.html","closure/goog/ui/tablesorter_test.html","closure/goog/ui/tabpane_test.html","closure/goog/ui/tabrenderer_test.html","closure/goog/ui/tab_test.html","closure/goog/ui/textarea_test.html","closure/goog/ui/toolbarcolormenubuttonrenderer_test.html","closure/goog/ui/tree/basenode_test.html","closure/goog/ui/tree/treecontrol_test.html","closure/goog/ui/tree/typeahead_test.html","closure/goog/ui/twothumbslider_test.html","closure/goog/ui/zippy_test.html","closure/goog/uri/uri_test.html","closure/goog/uri/utils_test.html","closure/goog/useragent/adobereader_test.html","closure/goog/useragent/flash_test.html","closure/goog/useragent/jscript_test.html","closure/goog/useragent/platform_test.html","closure/goog/useragent/product_test.html","closure/goog/useragent/useragent_test.html","closure/goog/vec/float32array_test.html","closure/goog/vec/float64array_test.html","closure/goog/vec/mat3_test.html","closure/goog/vec/mat4_test.html","closure/goog/vec/matrix3_test.html","closure/goog/vec/matrix4_test.html","closure/goog/vec/quaternion_test.html","closure/goog/vec/ray_test.html","closure/goog/vec/vec2_test.html","closure/goog/vec/vec3_test.html","closure/goog/vec/vec4_test.html","closure/goog/window/window_test.html","third_party/closure/goog/dojo/dom/query_test.html","third_party/closure/goog/loremipsum/text/loremipsum_test.html","third_party/closure/goog/mochikit/async/deferredlist_test.html","third_party/closure/goog/mochikit/async/deferred_test.html"];