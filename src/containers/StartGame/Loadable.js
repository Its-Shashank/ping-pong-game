/**
 *
 * Asynchronously loads the component for StartGame
 *
 */

import loadable from "../../utils/loadable";
export default loadable(() => import("./index"));
