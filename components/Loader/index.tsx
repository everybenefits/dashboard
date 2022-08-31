/**
 * @Title Loader
 * @Description This component is used to add Loading to the page.
 * @Author Diesan Romero
 * @Date 08-31-2022
 * @Note This component doest not have any translation yet and it´s imcomplete.
 */

import { NextComponentType } from "next";

const Loader: NextComponentType = () => {
  return (
    <div className="loader">
      LOADING
    </div>
  )
}

export default Loader;