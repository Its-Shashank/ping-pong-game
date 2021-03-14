/**
 *
 * Asynchronously loads the component for BeforeStart
 *
 */

import loadable from "../../utils/loadable";
export default loadable(() => import("./index"));
