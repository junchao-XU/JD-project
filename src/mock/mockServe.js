import Mock from "mockjs";

import banner from "./banner.json";
import miaosha from "./miaosha.json";
import xianliang from "./xianliang.json";
import goods from "./goods.json";

Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/miaosha", { code: 200, data: miaosha });
Mock.mock("/mock/xianliang", { code: 200, data: xianliang });
Mock.mock("/mock/goods", { code: 200, data: goods });
