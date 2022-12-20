import Mock from "mockjs";

import banner from "./banner.json";
import miaosha from "./miaosha.json";

Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/miaosha", { code: 200, data: miaosha });
