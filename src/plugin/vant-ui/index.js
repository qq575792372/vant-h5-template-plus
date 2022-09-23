// 按需引入ui
import {
  Button,
  Field,
  Cell,
  Icon,
  Image,
  Popup,
  Toast,
  Calendar,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Uploader,
  Dialog,
  Loading,
  Badge,
  Circle,
  Empty,
  List,
  NoticeBar,
  Skeleton,
  Pagination,
  Sidebar,
  SidebarItem,
  Tabs,
  Tab,
  Tabbar,
  TabbarItem,
  TreeSelect,
  ActionSheet,
  Collapse,
  CollapseItem,
  IndexBar,
  IndexAnchor,
} from "vant";

// 声明组件
const components = {
  Button,
  Field,
  Cell,
  Icon,
  Image,
  Popup,
  Toast,
  Calendar,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Uploader,
  Dialog,
  Loading,
  Badge,
  Circle,
  Empty,
  List,
  NoticeBar,
  Skeleton,
  Pagination,
  Sidebar,
  SidebarItem,
  Tabs,
  Tab,
  Tabbar,
  TabbarItem,
  TreeSelect,
  ActionSheet,
  Collapse,
  CollapseItem,
  IndexBar,
  IndexAnchor,
};

/**
 * install方法
 * @param {*} Vue
 */
const install = function (Vue) {
  // 应用组件
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
};

// 导出
export default install;
